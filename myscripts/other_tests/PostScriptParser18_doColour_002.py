'''
20 Nov, Dealga McArdle. 2011
This script is released under the MIT license. With no warranty/support of any kind.

PostScript to javascript/paperjs converter written in Python. It should be
obvious to anyone with a brain that Adobe and PostScript are registered trademarks.
The Adobe PostScript References, PLRM.pdf, is available for free from their site.
Their TOC implies that it's OK to write programs that parse their .ps filetype. I plan
to support commands as i encounter them.

20 Nov, Basic Parsing and javascript writer for commands (m/l/c/h)
22 Nov, Added empty Path removal function, while debugging. added g and rg (colour!)
23 Nov, pruning. but no real progress.

- [todo] don't create empty paths, negating the need to remove them from compoundPathList.
- [todo] Attempt to parse more than mlch cases..  line/width/dash

'''

import re

rectHeight = 0
rectWidth = 0
currentColour = ""


'''Helper Functions'''

# deals with flipping the Y direction. 
def pointify_coordinates(coordinates):
    myX = float(coordinates[0])
    myY = float(coordinates[1]) * -1.0
    return "point + ["+str(myX)+ ', ' + str(myY) + "]"


# parses the colour line.
def parse_colour_line(line):
    colorData = line.split()
    if line.endswith(" g"):
        grayColor = 1.0 - float(colorData[0])
        return "new GrayColor(" + str(grayColor) + ")"    
    if line.endswith(" rg"):
        rgb = ", ".join(colorData[:3])
        return "new RgbColor("+ rgb +")"


# sets the string value for command if (m|l|c)
def set_command_value(foundChar):
    if foundChar == 'm':
        command = ".moveTo("
    elif foundChar == 'l':
        command = ".lineTo("
    elif foundChar == 'c':
        command = ".cubicCurveTo("
    return command


# keeps the main parsing function clean.
def convert_to_curve_parameters(lineArray):
    handle1 = pointify_coordinates(lineArray[:2])
    handle2 = pointify_coordinates(lineArray[2:4])
    destination = pointify_coordinates(lineArray[4:6])
    return ", ".join([handle1, handle2, destination])
    


'''Work Functions'''

def get_postscript(filename):
    '''
    minimal error checking, until the script progresses

    input:  A valid file, at a valid path
    output: A multidimensional List of commands and coordinates.
    
    my understanding is this;
    - PostScript has the values first, then the function names.
    - the usuable data starts after the line '0 g' and ends at Q Q 
    - thereafter the delimiter is f  (f is fill)  or h (to close path)
    - i will be ignoring colour. don't expect this parser to deal
    with anything other than black typography, kind of like a model T Ford.
    '''

    
    # first look to see if we can read this file, return None if we experience unexpected data
    # i skip pagesetup.
    foundStartToken = False
    usableFileString = ""
    global rectHeight
    global rectWidth
    
    filedata = open(filename)
    for line in filedata:
        if line.endswith("rectclip q\n"):
            line = line[:-1]
            rectHeight = line.split()[-3]
            rectWidth = line.split()[-4]
            dimensions = rectWidth + " * " + rectHeight 
            print("Found rectclip it suggests rect dimensions are: " + dimensions)
            foundStartToken = True
            continue
        
        if line.endswith("Q Q\n"):
            print("Found a valid end")
            break

        if foundStartToken == True:
            usableFileString += line[:-1]


    filedata.close()
	
    if foundStartToken == False:
        return None
    
    # at this point usableFileString contains all parsable lines, minus newline.
    # let's return usableFileString without trailing whitespace    
    return usableFileString.rstrip()



def regex_this_string(subString):
    '''
    Takes an unsplit string, and splits by m/l/c/h commands respectively

    intput:     String, in the form of a split ps file, (split by f character)
    output:     Array of coordinates and command they are associated with.
    '''
        
    # my pattern is a little dirty , doesn't find 'rg'for colour.
    p = re.compile('(([-0-9.]+\s)+[r]*[gmlc])|[h]')
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
    Takes the usable part of the ps file (without newlines) and chops it up.

    intput: takes full string from get_postscript function
    output: generates a list of discrete commands for every object found.
    '''
    
    commandList = []

    # because the last possible parsable character is also an f
    # split creates one extra empty list member, [:-1] drops it.
    commandListString = fullString.split(" f")[:-1]
    for item in commandListString:
        commandList.append(regex_this_string(item))
    return commandList    



def write_postscript_functions(newPath, functionName, writefile):
    '''
    Create separated functions for each path/compound path, probably a backwards way..

    input: parsed List of path commands for each glyph ( one glyph may contain 1 or more paths)
    output: adds functions to the currently open file.
    '''

    writefile.write("function " + functionName + "(){\n")

    numPaths = 0
    lineCounter = 0
    pathNames = []
    indent = "    "

    # start writing this path (newPath) to the open file.
    writefile.write(indent + "var point = new Point(0, " + rectHeight + ");\n")

    for line in newPath:

        # find a colour for this path.
        if line.endswith(" g") or line.endswith(" rg"):
            print("found colour information: " + line)
            global currentColour
            currentColour = parse_colour_line(line)
            continue

        # deals with the first new path creation.
        pathname = "path" + str(numPaths)
        if lineCounter == 0:
            lineToPrint = indent + "var " + pathname + " = new Path();\n"
            pathNames.append(pathname)
            writefile.write(lineToPrint)

        # catches the moveTo and lineTo strings.     
        lineArray = line.split()
        foundChar = lineArray[-1]
        if foundChar in ['m', 'l']:
            coordinates = pointify_coordinates(lineArray[0:2])
            command = set_command_value(foundChar)
            
            if lineCounter == len(newPath)-1:
                pathname = "path" + str(numPaths-1)
                lineToPrint = indent + pathname + command + coordinates + ");\n"
                writefile.write(lineToPrint)
                break
            else:
                lineToPrint = indent + pathname + command + coordinates + ");\n" 
                writefile.write(lineToPrint)
                lineCounter += 1
                continue        

        # catches the cubicCurveTo string.
        if foundChar == 'c':
            command = set_command_value(foundChar)
            coordinates = convert_to_curve_parameters(lineArray)
            lineToPrint = indent + pathname + command + coordinates + ");\n" 
            lineCounter += 1
            writefile.write(lineToPrint)
            continue

        # catches the closePath command.
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
        
        # use the autosorting function,
        writefile.write("\n" + indent + "var unsortedPathList = [" + paths + "];\n")
        writefile.write(indent + "unsortedPathList = remove_empty_paths(unsortedPathList);\n")
        writefile.write(indent + "var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);\n")
        writefile.write(indent + "var compoundPath = new CompoundPath(sortedPathList);\n")
        writefile.write(indent + "compoundPath.fillColor = " + currentColour + ";\n")
        writefile.write(indent + "compoundPath.strokeColor = " + currentColour + ";\n")
    else:
        writefile.write(indent + "path0.fillColor = " + currentColour + ";\n")

    writefile.write("}\n")
    writefile.write(functionName+"();\n")
    writefile.write("\n\n")



def write_sorting_functions(writefile):
    '''
    unconfigurable, takes no parameters but writes path sorting function
    '''
    
    writefile.write("\n\
function sortOnBoundsSize(p1, p2){\n\
\n\
    var x = (p1.bounds.width * p1.bounds.height);\n\
    var y = (p2.bounds.width * p2.bounds.height);\n\
\n\
    if (x < y)\n\
            return 1;\n\
    else if (x==y)\n\
            return 0;\n\
    else\n\
            return -1;\n\
\n\
}\n\n\n")



# TODO, this shouldn't happen. this is a fix to poor ps parsing on my part.
# but because i can't yet find a pattern in the reason it happens, i must deal with it like this.
def write_empty_path_removal_function(writefile):
    '''
    takes the unsortedPathList which may contain an empty Path, this reflects my ignorance of javascript
    '''

    writefile.write("\n\
function remove_empty_paths(unsortedPathList){\n\
\n\
    var validUnsortedPathList = [];\n\
    for (var i = 0; i < unsortedPathList.length; i += 1){\n\
        if (unsortedPathList[i].segments != 0){\n\
            validUnsortedPathList.push(unsortedPathList[i]);\n\
        }\n\
        else{\n\
            console.log(\"removed path\");\n\
        }\n\
    }\n\
    return validUnsortedPathList;\n\
\n\
}\n\n\n")



def write_html_header(writefile, fileName):
    writefile.write("<!DOCTYPE html>\n")
    writefile.write("<html>\n")
    writefile.write("<head>\n")
    writefile.write("	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n")
    writefile.write("	<title>" + fileName + "</title>\n")
    writefile.write("	<link rel=\"stylesheet\" href=\"css/style2.css\">\n")
    writefile.write("	<script type=\"text/javascript\" src=\"lib/paper.js\"></script>\n")
    writefile.write("	<script type=\"text/paperscript\" canvas=\"canvas\">\n")



def write_html_footer(writefile):
    # this could potentially read the information found in rectclip
    # and set the canvas to those values
    writefile.write("	</script>\n")
    writefile.write("</head>\n")
    writefile.write("<body>\n")
    canvasDimensions = "width=\"" + rectWidth + "\" height=\"" + rectHeight + "\">"
    writefile.write("	<canvas id=\"canvas\" " + canvasDimensions + "</canvas>\n")
    writefile.write("\n")
    writefile.write("</body>\n")
    writefile.write("</html>\n")



def create_file(commandList, fileName):
    '''
    Takes a List of paths found in the .ps and makes js compatible syntax

    input:  Multidimensional list of strings similar to .ps commands
    output: Similar to input but formatted to be paperpJS readable.
    '''
    
    writefile = open(fileName, 'w')

    if fileName.endswith(".html"):
        write_html_header(writefile, fileName)

    # add the auto sorting functions for the compound path array, and empty path remover.
    write_sorting_functions(writefile)
    write_empty_path_removal_function(writefile)

    # add postscript functions written in javascript
    glyphCounter = 0
    for newPath in commandList:
        functionName = "draw_glyph_" + str(glyphCounter)
        write_postscript_functions(newPath, functionName, writefile)
        glyphCounter += 1

    if fileName.endswith(".html"):
        write_html_footer(writefile)

    # done.
    writefile.close()



def init():
    '''
    outputFileName can be a .js or a .html , in the case of html appropriate markup is added
    '''
    
    outputFileName = "outputs/drawing_igram4.html"
    postScriptFileName = "ps/infoGram2.ps"
    fullString = get_postscript(postScriptFileName)

    if fullString != None:
        commandList = parse_postscript(fullString)
        create_file(commandList, outputFileName)
        print("wrote " + outputFileName + " using " + postScriptFileName)


init()


