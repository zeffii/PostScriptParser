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
24 Nov, bug in primitives, using a fillcoulour in primitives will fail.
24 Nov, make time to read PLRM.pdf... rewrote a lot of functions, some refactoring.

Current status, the following situations and outcomes:
works if:  only lines, with widths and or dashes.
works if:  typography converted from object->path (no stroke color, only fill colour! )
doesn't work if: a shape has a stroke colour and a fill colour. [TODO!]
shapes that are unfilled: will appear flipped vertically ( it's weird! )
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
    is the end goal and they share a lot of similar variable names and strategies.
    '''

    # global dashModeOn
    # global dashParameters
    # global strokeWidth
    global currentColour

    # subdivide into function lines.
    primitive = regex_plotListString(primitive)

    # transverse the primitive
    for instruction in primitive:
        print(instruction)

        if instruction.endswith(" m"):
            lineArray = instruction.split()
            coordinates = pointify_coordinates(lineArray[0:2])
            lineToWrite = indent + "path.moveTo(" + coordinates + ");\n"
            writefile.write(lineToWrite)
            print(lineToWrite)
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


        print(instruction + "### uncaught" )
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
    zealous. It seems like, if a primitive doesn't havea a fillColour, that unmodified
    point coordinates are ok.
    '''


    global dashModeOn
    global dashParameters
    global strokeWidth
    global currentColour

    # subdivide into function lines.
    primitive = regex_plotListString(primitive)

    
    writefile.write("\nfunction " + functionName + "(){\n")
    writefile.write(indent + "var point = new Point(0, " + rectHeight + ");\n")

    # each time this function is called, it means a new path primitive is
    # being requested. each primitive only has one path
    writefile.write(indent + "var path = new Path();\n")
    
    
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
        functionName = "draw_primary_" + str(secondaryCounter)
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
    
    outputFileName = "outputs/rewrite_001.html"
    postScriptFileName = "ps/typogratifying_extra4.ps"
    fullString, rectWidth, rectHeight = get_postscript(postScriptFileName)

    if fullString != None:
        commandList = parse_postscript(fullString)
        create_file(commandList, outputFileName) 
        print("wrote " + outputFileName + " using " + postScriptFileName)


init()


