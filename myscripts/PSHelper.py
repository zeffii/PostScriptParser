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

# parse dashArray line.
def parse_dash_params(instruction):
    # p = re.compile('[
    val1 = "0.4"
    val2 = "3.2"

    return "[" + val1 + ", " + val2 + "]"


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

    
'''Javascript Helper Functions'''

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


'''Markup Writing Functions'''

def write_html_header(writefile, fileName):
    writefile.write("<!DOCTYPE html>\n")
    writefile.write("<html>\n")
    writefile.write("<head>\n")
    writefile.write("	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n")
    writefile.write("	<title>" + fileName + "</title>\n")
    writefile.write("	<link rel=\"stylesheet\" href=\"css/style2.css\">\n")
    writefile.write("	<script type=\"text/javascript\" src=\"lib/paper.js\"></script>\n")
    writefile.write("	<script type=\"text/paperscript\" canvas=\"canvas\">\n")



def write_html_footer(writefile, rectWidth, rectHeight):
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


def strip_strings_in_list(someList):
    cleanList = []
    for item in someList:
        tempItem = item.replace("  ", " ")
        cleanList.append(tempItem.strip())
    return cleanList
        

'''Work Functions'''

def get_postscript(filename):
    '''
    minimal error checking, until the script progresses

    input:  A valid file, at a valid path
    output: the full unedited joined string of ps commands. includes newline.
    '''
    
    # first look to see if we can read this file, return None if we experience unexpected data
    # i skip pagesetup.
    foundStartToken = False
    usableFileString = ""
    
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
            usableFileString += line


    filedata.close()
	
    if foundStartToken == False:
        return None
    
    return usableFileString.rstrip(), rectWidth, rectHeight



    
