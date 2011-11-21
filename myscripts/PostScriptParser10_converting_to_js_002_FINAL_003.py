'''
20 Nov, Dealga McArdle. 2011
This script is released under the MIT license. With no warranty/support of any kind.

PostScript to javascript/paperjs converter written in Python. It should be
obvious to anyone with a brain that Adobe and PostScript are registered trademarks.
The Adobe PostScript References, PLRM.pdf, is available for free from their site.
Their TOC implies that it's OK to write programs that parse their .ps filetype.

I plan to support commands as i encounter them.

20 Nov, Basic Parsing and javascript writer for commands (m/l/c/h)
'''

import re


def get_postscript(filename):
    '''
    minimal error checking, until the script progresses

    input:  A valid file, at a valid path
    output: A multidimensional List of commands and coordinates.
    
    my understanding is this,
    - PostScript has the values first, then the function names.
    - the usuable data starts after the line '0 g' and ends at Q Q 
    - thereafter the delimiter is f  (f is fill)  or h (to close path)
    - i will be ignoring colour. don't expect this parser to deal
    with anything other than black typography, kind of like a Ford.
    
    '''

    recordOn = False
    joinString = ""

    # it's not worth optimizing this for speed on non body text like headings
    # but if this was parsing body text, i would consider splitting the data
    # finding (begin and end token) and data extraction (returning joinString)
    filedata = open(filename)
    for line in filedata:

        # checking, slightly redundant if statement, but useful for debug
        if not recordOn and line.startswith("%%EndPageSetup\n"):
            print("found " + line[:-1] + " start parsing")
            continue

        # this is not pretty, but it forces black! :)
        if line.endswith("0 g\n"):
            recordOn = True
            continue

        # end token
        if line == "Q Q\n":
            print("found Q Q, ending parser")
            break

        # assimilate
        if recordOn:
            if line.endswith("h\n"):
                line = line[:-1] + " \n"
            
            joinString += line[:-1]

    filedata.close()
    return joinString.rstrip()




def regex_this_string(subString):
    '''
    Takes an unsplit string, and splits by m/l/c/h commands respectively

    intput:     String, in the form of a split ps file, (split by f character)
    output:     Array of coordinates and command they are associated with.
    '''
        
    # my pattern is a little dirty, 
    p = re.compile('(([0-9.]+\s)+[mlc])|[h]')
    m = p.findall(subString)

    # adding the [0] strips the extra data,
    # but the pattern should be repaired instead.
    cleanStringList = []
    for i in m:
        if i == ('',''):
            cleanStringList.append("h")
        else:
            cleanStringList.append(i[0])

    return cleanStringList


    

def parse_postscript(fullString):
    '''
    Takes the full concatenated version of the ps file and chops it up.

    intput: takes full string from get_postscript function
    output: generates a list of discrete commands for every object found.
    '''
    
    commandList = []

    # because the last possible parsable character is also an f
    # split creates one extra empty list member, [:-1] drops it.
    commandListString = fullString.split(" f")[:-1]
    for item in commandListString:
        commandList.append(regex_this_string(item))
        # print(item)
    return commandList    



def write_postscript_functions(newPath, functionName, writefile):
    '''
    Create separated functions for each path/compoind path, probably a backwards way..

    input: parsed List of path commands for each glyph ( one glyph may contain 1 or more paths)
    output: adds functions to the currently open file.
    '''

    writefile.write("function "+functionName+"(){\n")

    numPaths = 0
    lineCounter = 0
    pathNames = []

    indent = "    "

    # helper function, could do with a few more of these! 
    def pointify_coordinates(coordinates):
        return "point + ["+coordinates+"]"


    writefile.write(indent + "var point = new Point(0, 0);\n")

    for line in newPath:
        lineArray = line.split()
        # print(lineCounter, len(newPath))    # for debug

        pathname = "path" + str(numPaths)    
        if lineCounter == 0:
            lineToPrint = indent + "var " + pathname + " = new Path();\n"
            pathNames.append(pathname)
            writefile.write(lineToPrint)

        
        # todo , deal with additional paths.
        foundChar = lineArray[-1]
        if foundChar == 'm':
            command = ".moveTo("
        elif foundChar == 'l':
            command = ".lineTo("
        elif foundChar == 'c':
            command = ".cubicCurveTo("
            
        
        if foundChar == 'm' or foundChar == 'l':
            coordinates = lineArray[0] + ', ' + lineArray[1]

            # modifiy this for point + [ ] or new Point formats.
            coordinates = pointify_coordinates(coordinates)

            if lineCounter == len(newPath)-1:
                pathname = indent + "path" + str(numPaths-1)
                lineToPrint = pathname + command + coordinates + ");\n"
                writefile.write(lineToPrint)
                break
            else:
                lineToPrint = indent + pathname + command + coordinates + ");\n" 
                writefile.write(lineToPrint)
                lineCounter += 1
                continue        

        if foundChar == 'c':
            handle1 = lineArray[0] + ", " + lineArray[1]
            handle2 = lineArray[2] + ", " + lineArray[3]
            destination = lineArray[4] + ", " + lineArray[5]
            handle1 = pointify_coordinates(handle1)
            handle2 = pointify_coordinates(handle2)
            destination = pointify_coordinates(destination)
            coordinates = handle1 + ", " + handle2 + ", " + destination  
            lineToPrint = indent + pathname + command + coordinates + ");\n"
            
            lineCounter += 1
            writefile.write(lineToPrint)
            continue

        if foundChar == 'h':        
            lineToPrint = indent + pathname + ".closePath();\n"
            numPaths += 1
            lineCounter += 1    
            writefile.write(lineToPrint)

            if lineCounter is not len(newPath)-1:
                writefile.write("\n")
                pathname = "path" + str(numPaths)  
                lineToPrint = indent + "var " + pathname + " = new Path();\n"
                pathNames.append(pathname)
                writefile.write(lineToPrint)

               

    # deal with compoundpath 
    if len(pathNames) > 1:
        paths = ", ".join(pathNames)
        lineToPrint = indent + "var compoundPath = new CompoundPath(["+paths+"]);\n" 
        writefile.write(lineToPrint)
        writefile.write(indent + "compoundPath.fillColor = 'black';\n")
        writefile.write(indent + "compoundPath.strokeColor = 'black';\n")
    else:
        writefile.write(indent + "path0.fillColor = 'black';\n")

    writefile.write("}\n")

    writefile.write(functionName+"();\n")
    writefile.write("\n\n")



def create_html(commandList, javaScriptFileName):
    '''
    Takes a List of paths found in the .ps and makes js compatible syntax

    input:  Multidimensional list of strings similar to .ps commands
    output: Similar to input but formatted to be paperpJS readable.

    m = moveTo, l = lineTo, c = cubicCurveTo, h = close    '''

    title = javaScriptFileName

    writefile = open(javaScriptFileName, 'w')

    writefile.write("<!DOCTYPE html>\n")
    writefile.write("<html>\n")
    writefile.write("<head>\n")
    writefile.write("	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n")
    writefile.write("	<title>"+ title+ "</title>\n")
    writefile.write("	<link rel=\"stylesheet\" href=\"../css/style2.css\">\n")
    writefile.write("	<script type=\"text/javascript\" src=\"../../lib/paper.js\"></script>\n")
    writefile.write("	<script type=\"text/paperscript\" canvas=\"canvas\">\n")
                    
    
    glyphCounter = 0
    for newPath in commandList:
        functionName = "draw_glyph_" + str(glyphCounter)
        write_postscript_functions(newPath, functionName, writefile)
        glyphCounter += 1

    writefile.write("	</script>\n")
    writefile.write("</head>\n")
    writefile.write("<body>\n")
    writefile.write("	<canvas id=\"canvas\" width=\"1200\" height=\"900\"></canvas>\n")
    writefile.write("\n")
    writefile.write("</body>\n")
    writefile.write("</html>\n")
    

    writefile.close()


    

javaScriptFileName = "drawing_test.html"
fullString = get_postscript("drawing_byHand.ps")
commandList = parse_postscript(fullString)
create_html(commandList, javaScriptFileName)






