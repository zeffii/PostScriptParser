'''
20 Nov, Dealga McArdle. 2011
PostScript to JavaScript/paperJS converter written in Python.

This script is released under the MIT license. With no warranty/support of any kind.
JavaScript, Adobe and PostScript are registered trademarks and property of their
respective owners. The Adobe PostScript References, PLRM.pdf, is available for free
from Adobe.com. Their TOC implies that it's OK to write programs that parse their
.ps filetype. I plan to support commands as i encounter them.

20 Nov, Basic Parsing and javascript writer for commands (m/l/c/h)
22 Nov, Added empty Path removal function, while debugging. added g and rg (colour!)
23 Nov, Pruning. Ignores a moveTo statement if it doesn't assist drawing.
23 Nov, Mostly no empty paths are created, i'll retain the function as a fallback.
24 Nov, bug in primitives, using a fillcolour in primitives will fail. [fixed]
24 Nov, make time to read PLRM.pdf... rewrote a lot of functions, some refactoring.


'''

import re
from PSHelper import pointify_coordinates
from PSHelper import convert_to_curve_parameters

from PSHelper import parse_colour_line
from PSHelper import parse_dash_params
from PSHelper import set_command_value
from PSHelper import strip_strings_in_list

from PSHelper import write_sorting_functions
from PSHelper import write_empty_path_removal_function
from PSHelper import write_html_header
from PSHelper import write_html_footer

from PSHelper import get_postscript


'''Global Variables'''

# bounds
rectHeight = "" 
rectWidth = ""

# shared between primitives and shapes
currentColour = ""

# primitives only
strokeWidth = 1
dashModeOn = False
dashParameters = ""

# markup
indent = "    "

# mode, set to true will set each path to path.selected = true;
DEBUG = False




def regex_plotListString(plotListString):
    '''this function takes the second half of the instructions extracted from the ps

    The function is clean enough to be extended with additional commands, i opted for
    the re.Verbose option because this way things can atleast be read by fellow mortals.

    intput:     unformated plot instructions like lines/dashes/circles
    output:     after applying regular expressions the instructions are stored in a list and
                can be used similarly to c;eanStringList
    '''
    
    primitive_commands = re.compile(r"""
        [0-9.]+\s[w]                        # value w = line width, and accepts int and floats
    |   [-0-9.]+\s[JjM]                     # value J = set line cap
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
    |   [0-9. ]+[r]*[g]                     # value r, for GrayColor. rg = rgb
    |   [f]                                 # set fill to current colour.
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
    output: generates 2 lists primary and secondary commands (filled and non filled objects)

    it seems we can split by f, and if any member of the newly created array contains Q's
    that means we are already deep intside primitive territory. this may be a poor assumption.
    '''

    fullString = fullString.replace('\n', ' ')
    collectedCommands = fullString.split("f")

    primaryCommands = []
    secondaryCommands = []
    for command in collectedCommands:
        if command.find('Q') is -1:
            primaryCommands.append(command + "f")
        else:
            tempString = command + "f"
            tempList = tempString.split("Q")
            for i in tempList:
                if len(i) > 2:
                    secondaryCommands.append(i)

    print("primaryCommands " + str(len(primaryCommands)))
    print("secondaryCommands " + str(len(secondaryCommands)))

    # cleanup before returning:
    primaryCommands = strip_strings_in_list(primaryCommands)
    secondaryCommands = strip_strings_in_list(secondaryCommands)
    return primaryCommands, secondaryCommands    


'''Writing functions, look similar but definitely are not'''


def write_primary_postScript(primitive, functionName, writefile):
    '''
    takes a primitive, a description string. converts it to js readable data

    input:      primitive ( a joined list with raw commands )
    input:      the name of the current function. (each graphical element)
    input:      writefile, is the file we are writing to.
    output:     straight to file.

    This function is distinct from the write_secondary_postScript function because
    it has to deal with multiple paths per shape, combining both functions into one
    would be ideal as they share a lot of similarities.

    Potentially i might be skipping a .closePath occasionally, [TODO]  fix.
    '''

    # global dashModeOn
    # global dashParameters
    # global strokeWidth
    global currentColour

    # subdivide into function lines.
    primitive = regex_plotListString(primitive)

    writefile.write("\nfunction " + functionName + "(){\n")
    writefile.write(indent + "var point = new Point(0, " + rectHeight + ");\n")

    # each time this function is called, it means a new path primitive is
    # being requested. each primitive only has one path
    writefile.write(indent + "var path0 = new Path();\n")
    if DEBUG:
        writefile.write(indent + "path0.selected = true;\n")

    FLIPPED = True

    # transverse the primitive
    pathCounter = 0
    commandCounter = -1
    for instruction in primitive:

        pathName = "path"+str(pathCounter)
        commandCounter += 1
        currentLine = commandCounter
        totalLines = len(primitive)-1
                
        if instruction.endswith(" m"):
            # this avoids writing a hardware assuming moveTo.
            if currentLine is not totalLines - 1:
                lineArray = instruction.split()
                coordinates = pointify_coordinates(lineArray[0:2], FLIPPED)
                lineToWrite = indent + pathName + ".moveTo(" + coordinates + ");\n"
                writefile.write(lineToWrite)
                # print(lineToWrite)
            continue
    

        if instruction.endswith("l"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2], FLIPPED)
            lineToWrite = indent + pathName + ".lineTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            # print(lineToWrite)
            continue
        
        if instruction.endswith("c"):
            lineArray = instruction.split()
            coordinates = convert_to_curve_parameters(lineArray, FLIPPED)
            lineToWrite = indent + pathName + ".cubicCurveTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            # print(lineToWrite)
            continue


        if instruction.endswith(" g") or instruction.endswith(" rg"):
            currentColour = parse_colour_line(instruction)
            # print("currentColor: "+currentColour)
            continue

        # because fill is the last command of each 'filled' shape, we check how many
        # paths the shape has, if more than one we add the compound function, and
        # set the compound.fillColor instead.
        if instruction.endswith("f"):
            if pathCounter == 0:
                print("found fill colour for shape: " + currentColour)
                lineToWrite = indent + pathName + ".fillColor = " + currentColour + ";\n"
                writefile.write(lineToWrite)
                # print(lineToWrite)
                continue
            
            if pathCounter >= 1:
                print(pathCounter+1)

                pathList = ["path"+str(i) for i in range(pathCounter+1)]
                pathListString = ", ".join(pathList)
                
                lineToWrite = indent + "var unsortedList = [" + pathListString + "];\n"
                writefile.write(lineToWrite)

                lineToWrite = indent + "unsortedList = remove_empty_paths(unsortedList);\n"
                writefile.write(lineToWrite)

                lineToWrite = indent + "var sortedList = unsortedList.sort(sortOnBoundsSize);\n"
                writefile.write(lineToWrite)
                
                lineToWrite = indent + "var compoundPath = new CompoundPath(sortedList);\n"
                writefile.write(lineToWrite)

                lineToWrite = indent + "compoundPath.fillColor = " + currentColour + ";\n"
                writefile.write(lineToWrite)
                continue

            
        # stroke closing
        if instruction.endswith("h"):
            if currentLine is totalLines-2:
                continue
            else:
                lineToWrite = indent + pathName + ".closePath();\n"
                writefile.write(lineToWrite)

                pathCounter += 1
                pathName = "path"+str(pathCounter)
                writefile.write(indent + "var " + pathName + " = new Path();\n") 
                if DEBUG:
                    writefile.write(indent + pathName + ".selected = true;\n")
                continue

        
        print(instruction + "### uncaught" )

    writefile.write("\n}\n")
    writefile.write(functionName + "();\n")

    return




def write_secondary_postScript(primitive, functionName, writefile):
    '''
    takes a primitive, a description string. converts it to js readable data

    input:      primitive ( a joined list with raw commands )
    input:      the name of the current function. (each graphical element)
    input:      writefile, is the file we are writing to.
    output:     straight to file.

    i'm not sure what is up with the coordinate system, it's not something i've
    been able to find any useful information on. Applying assumptions seems a little
    zesty. If a primitive doesn't havea a fillColour, then unmodified point coordinates
    are ok. Which isn't a big deal, but makes the code uglliest!
    '''


    global dashModeOn
    global dashParameters
    global strokeWidth
    global currentColour

    # subdivide into function lines.
    primitive = regex_plotListString(primitive)

    
    writefile.write("\nfunction " + functionName + "(){\n")

    # in caps because it's a stupid solution, and this reminds me to fix it.
    FLIPPED = False
    for instruction in primitive:
        if instruction == "f":
            print(primitive)
            FLIPPED = True
            break
        else:
            continue

    if FLIPPED:
        writefile.write(indent + "var point = new Point(0, " + rectHeight + ");\n")
    else:
        writefile.write(indent + "var point = new Point(0.0, 0.0);\n")

    # each time this function is called, it means a new path primitive is
    # being requested. each primitive only has one path
    writefile.write(indent + "var path = new Path();\n")


    print("====")
    
    for instruction in primitive:

        instruction = instruction.rstrip()

        if instruction.startswith("[] 0.0 d"):
            dashModeOn = False
            continue

        if instruction.endswith(" d"):
            dashModeOn = True
            dashParameters = parse_dash_params(instruction)
            lineToWrite = indent + "path.dashArray = " + dashParameters + ";\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith(" m"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2], FLIPPED)
            lineToWrite = indent + "path.moveTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            continue

        if instruction.endswith(" cm"):
            # this might be where the vertical offset comes from.
            # print(indent + instruction + " (store some data, no idea)")
            continue


        if instruction.endswith("l"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2], FLIPPED)
            lineToWrite = indent + "path.lineTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            continue

        
        if instruction.endswith("c"):
            lineArray = instruction.split()
            coordinates = convert_to_curve_parameters(lineArray, FLIPPED)
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
            print(indent + instruction + " (a line cap)")
            continue

        if instruction.endswith("j"):
            print(indent + instruction + " (a line join)")
            continue

        if instruction.endswith("M"):
            lineArray = instruction.split()
            lineToWrite = indent + "path.miterLimit = " + lineArray[0] + ";\n"
            print(lineToWrite)
            continue

        # fixing
        if instruction.endswith(" g") or instruction.endswith(" rg"):
            currentColour = parse_colour_line(instruction)
            continue


        if instruction.endswith("f"):
            print("found fill colour for primitive: " + currentColour)
            lineToWrite = indent + "path.fillColor = " + currentColour + ";\n"
            writefile.write(lineToWrite)
            continue
        
        # stroke closing
        if instruction.endswith("h"):
            lineToWrite = indent + "path.closePath();\n"
            writefile.write(lineToWrite)
            continue


        print("if you see this, time to support extra commands")
        print(instruction + "####")
    
    writefile.write("}\n")
    writefile.write(functionName + "();\n")
    
    return



def create_file(commandList, fileName):
    '''
    Takes a List of paths found in the .ps and makes js compatible syntax

    input:  Multidimensional list of strings similar to .ps commands
    output: Similar to input but formatted to be paperpJS readable.
    '''
    primaryCommands, secondaryCommands = commandList
        
    writefile = open(fileName, 'w')

    if fileName.endswith(".html"):
        write_html_header(writefile, fileName)

    # add the auto sorting functions for the compound path array, and empty path remover.
    write_sorting_functions(writefile)
    write_empty_path_removal_function(writefile)

    primaryCounter = 0    
    for obj in primaryCommands:
        functionName = "draw_primary_" + str(primaryCounter)
        write_primary_postScript(obj, functionName, writefile)
        primaryCounter += 1
        
    secondaryCounter = 0
    for obj in secondaryCommands:
        functionName = "draw_secondary_" + str(secondaryCounter)
        write_secondary_postScript(obj, functionName, writefile)
        secondaryCounter += 1
            
    if fileName.endswith(".html"):
        write_html_footer(writefile, rectWidth, rectHeight)

    # done.
    writefile.close()



def init():
    '''
    outputFileName can be a .js or a .html , in the case of html appropriate markup is added
    '''

    global rectWidth
    global rectHeight
    
    outputFileName = "outputs/redux_tesla.html"
    postScriptFileName = "ps/drawing_tesla.ps"
    fullString, rectWidth, rectHeight = get_postscript(postScriptFileName)

    if fullString != None:
        commandList = parse_postscript(fullString)
        create_file(commandList, outputFileName) 
        print("wrote " + outputFileName + " using " + postScriptFileName)

    if outputFileName.endswith("html"):
        import webbrowser
        pathToYourFile = "C:/Users/dealga/Desktop/PostScriptParser/myscripts/"
        webbrowser.open_new(pathToYourFile + outputFileName)

    
init()


