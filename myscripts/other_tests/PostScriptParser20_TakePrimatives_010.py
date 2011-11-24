'''
20 Nov, Dealga McArdle. 2011
PostScript to JavaScript/paperJS converter written in Python.

This script is released under the MIT license. With no warranty/support of any kind.
JavaScript, Adobe and PostScript are registered trademarks and property of their
respective owners. The Adobe PostScript References, PLRM.pdf, is available for free
from their site. Their TOC implies that it's OK to write programs that parse their
.ps filetype. I plan to support commands as i encounter them.

20 Nov, Basic Parsing and javascript writer for commands (m/l/c/h)
22 Nov, Added empty Path removal function, while debugging. added g and rg (colour!)
23 Nov, Pruning. Ignores a moveTo statement if it doesn't assist drawing.
23 Nov, Mostly no empty paths are created, i'll retain the function as a fallback. 

- [todo] Attempt to parse more than mlch cases..  line/width/dash

'''

import re
from PSHelper import pointify_coordinates
from PSHelper import convert_to_curve_parameters

from PSHelper import parse_colour_line
from PSHelper import parse_dash_params
from PSHelper import set_command_value
from PSHelper import fix_plotListString
from PSHelper import strip_strings_in_list

from PSHelper import write_sorting_functions
from PSHelper import write_empty_path_removal_function
from PSHelper import write_html_header
from PSHelper import write_html_footer


'''Global Variables'''

# bounds
rectHeight = 0
rectWidth = 0

# shared between primitives and shapes
currentColour = ""

# primitives only
strokeWidth = 1
dashModeOn = False
dashParameters = ""

# markup
indent = "    "



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



def regex_plotListString(plotListString):
    '''this function takes the second half of the instructions extracted from the ps

    The function exists only because supporting more commands was a bit of an afterthought,
    it requires some fixing by fix_plotListString due to zealous string chopping at the start.
    It feels a little wonky, and it is, but this gives me some idea of what to do next.
    Ultimately the initial parse pass should take care of both Paths and Shapes.

    intput:     unformated primitive plot instructions like lines/dashes/circles
    output:     after applying regular expressions the instructions are stored in a list and
                can be used similarly to c;eanStringList
    '''
    
    primitive_commands = re.compile(r"""

        [0-9.]+\s[w]                        # value w = line width, and accepts int and floats
    |   [-0-9.]+\s[JjmM]                    # value J = set line cap
                                            # value j = set line join
                                            # value M = set miter limit
    |   [-0-9.]+\s[-0-9.]+\s[ml]            # value value m = move to
                                            # value value l = line to
    |   [[][-0-9. ]*[]][-0-9. ]+[d]\s\b     # [optional value] value d = set dash
    |   [q][-0-9. ]+\s[c][m]                # q value value value value cm = no idea
    |   [-0-9. ]+\s[c]                      # value*6 c = curve to
    |   [S]                                 # S = set stroke
    |   [Q]                                 # Q = seems to be a delimter.
    |   [h]                                 # h = closePath();
                        
    """, re.VERBOSE)

    m = primitive_commands.findall(plotListString)
    mclean = []
    for i in m:
        mclean.append( i.lstrip())

    return mclean



def parse_postscript(fullString):
    '''
    Takes the usable part of the ps file (without newlines) and chops it up.

    intput: takes full string from get_postscript function
    output: generates a list of discrete commands for every object found.

    if additional primitives are foudn, it outputs those too.
    '''
    
    commandList = []

    # because the last possible parsable character is an f, warning bad naming convention! 
    commandListString = fullString.split(" f")[:-1]
    for item in commandListString:
        commandList.append(regex_this_string(item))

    # plotList takes the last chunk, this seems to be the primitive path drawing (ie not shapes)
    # should send extra regex here.
    plotListString = fullString.split(" f")[-1]
    plotListString = fix_plotListString(plotListString)

    plotList = plotListString.split("Q")[:-1]
    finalPlotList = []
    for item in plotList:
        finalPlotList.append(regex_plotListString(item))
    
    return commandList, finalPlotList    



def write_postscript_functions(newPath, functionName, writefile):
    '''
    Create separated functions for each path/compound path, probably a backwards way..

    input: parsed List of path commands for each glyph ( one glyph may contain 1 or more paths)
    output: adds functions to the currently open file.

    This function should be extended to deal with line objects that have width and stroke properties.
    '''

    writefile.write("function " + functionName + "(){\n")

    numPaths = 0
    lineCounter = 0
    pathNames = []

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

            if lineCounter >= len(newPath)-2:
                break
            else:
                lineToPrint = indent + pathname + command + coordinates + ");\n" 
                lineCounter += 1
                writefile.write(lineToPrint)
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

            if not lineCounter >= len(newPath)-2:
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



def write_primitive_postScript(primitive, functionName, writefile):


    global dashModeOn
    global dashParameters
    global strokeWidth

    writefile.write("\nfunction " + functionName + "(){\n")
    writefile.write(indent + "var point = new Point(0, " + rectHeight + ");\n")

    # each time this function is called, it means a new path primitive is
    # being requested. each primitive only has one path
    writefile.write(indent + "var path = new Path();\n")

    
    for instruction in primitive:

        if instruction.startswith("[] 0.0 d"):
            dashModeOn = False
            continue

        if instruction.endswith("d"):
            dashModeOn = True
            dashParameters = parse_dash_params(instruction)
            lineToWrite = indent + "path.dashArray = " + dashParameters + ";\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith(" m"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2])
            lineToWrite = indent + "path.moveTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith(" cm"):
            # print(indent + instruction + " (store some data, no idea)")
            continue

        if instruction.endswith("l"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2])
            lineToWrite = indent + "path.lineTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            continue
        
        if instruction.endswith("c"):
            lineArray = instruction.split()
            coordinates = convert_to_curve_parameters(lineArray)
            lineToWrite = indent + "path.cubicCurveTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            continue

        
        # stroke information
        if instruction.endswith("w"):
            strokeWidth = instruction.split()[0]
            lineToWrite = indent + "path.strokeWidth = " + strokeWidth + ";\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith("S"):
            lineToWrite = indent + "path.strokeColor = " + currentColour + ";\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith("J"):
            # print(indent + instruction + " (a line cap)")
            continue

        if instruction.endswith("j"):
            # print(indent + instruction + " (a line join)")
            continue

        if instruction.endswith("M"):
            lineArray = instruction.split()
            # print(indent + instruction + " (set miter limit)")
            lineToWrite = indent + "path.miterLimit = " + lineArray[0] + ";\n"
            writefile.write(lineToWrite)
            continue

        
        # stroke closing
        if instruction.endswith("h"):
            lineToWrite = indent + "path.closePath();\n"
            writefile.write(lineToWrite)
            continue


        print("if you see this, time to support extra commands")
        print(instruction)

        
    
    writefile.write("}\n")
    writefile.write(functionName + "();\n")
    
    return



def create_file(commandList, plotList, fileName):
    '''
    Takes a List of paths found in the .ps and makes js compatible syntax

    input:  Multidimensional list of strings similar to .ps commands
    output: Similar to input but formatted to be paperpJS readable.
    '''
    # user info
    print(str(len(plotList)) + " primitives to plot")

    
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

    primitiveCounter = 0
    if len(plotList) is not 0:
        for primitive in plotList:
            primitive = strip_strings_in_list(primitive)
            functionName = "draw_primitive_" + str(primitiveCounter)
            write_primitive_postScript(primitive, functionName, writefile)
            primitiveCounter += 1

    if fileName.endswith(".html"):
        write_html_footer(writefile, rectWidth, rectHeight)

    # done.
    writefile.close()



def init():
    '''
    outputFileName can be a .js or a .html , in the case of html appropriate markup is added
    '''
    
    outputFileName = "outputs/drawing_GBI_primtest4.html"
    postScriptFileName = "ps/typogratifying_extra4.ps"
    fullString = get_postscript(postScriptFileName)

    if fullString != None:
        commandList, plotList = parse_postscript(fullString)
        create_file(commandList, plotList, outputFileName)
        print("wrote " + outputFileName + " using " + postScriptFileName)


init()


