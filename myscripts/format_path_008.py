newPath = ['78.469 15.207 m', '78.469 7.086 l', '78.469 5.243 78.68 3.899 79.102 3.055 c', '79.676 1.864 80.77 1.153 82.383 0.922 c', '82.844 0.461 l', '82.613 0.059 l', '70.633 0.059 l', '70.402 0.461 l', '70.691 0.922 l', '72.188 1.153 73.227 1.883 73.801 3.11 c', '74.184 3.957 74.375 5.282 74.375 7.086 c', '74.375 31.739 l', '74.375 34.196 73.703 35.539 72.363 35.77 c', '71.383 35.946 l', '71.152 36.52 l', '71.324 36.75 l', '77.719 38.996 l', '78.238 38.996 l', '78.238 32.95 l', '81.039 37.133 84.574 39.227 88.836 39.227 c', '92.254 39.227 95.094 37.93 97.359 35.336 c', '99.625 32.746 100.758 29.723 100.758 26.266 c', '100.758 22.348 99.402 18.981 96.695 16.157 c', '93.988 13.336 90.68 11.922 86.762 11.922 c', '83.422 11.922 80.656 13.016 78.469 15.207 c', 'h', '78.469 21.715 m', '78.813 19.336 79.793 17.375 81.406 15.84 c', '83.016 14.305 84.996 13.536 87.336 13.536 c', '90.258 13.536 92.504 14.746 94.078 17.164 c', '95.422 19.2 96.094 21.754 96.094 24.825 c', '96.094 28.129 95.383 30.891 93.961 33.121 c', '92.313 35.731 89.93 37.036 86.82 37.036 c', '84.516 37.036 82.613 36.211 81.117 34.559 c', '79.809 33.141 78.926 31.219 78.469 28.801 c', 'h', '78.469 21.715 m']
formattedPath = []

numPaths = 0
lineCounter = 0
pathNames = []

def pointify_coordinates(coordinates):
    pointified = "point + ["+coordinates+"]"
    return pointified


print("var point = new Point(0, 0);")

for line in newPath:
    lineArray = line.split()
    # print(lineCounter, len(newPath))    # for debug

    pathname = "path" + str(numPaths)    
    if lineCounter == 0:
        lineToPrint = "var " + pathname + " = new Path();"
        pathNames.append(pathname)
        print(lineToPrint)

    
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
            pathname = "path"+ str(numPaths-1)
            lineToPrint = pathname + command + coordinates + ");"
            print(lineToPrint)
            break
        else:
            lineToPrint = pathname + command + coordinates + ");" 
            print(lineToPrint)
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
        lineToPrint = pathname + command + coordinates + ");"
        
        lineCounter += 1
        print(lineToPrint)
        continue

    if foundChar == 'h':        
        lineToPrint = pathname + ".closePath();"
        numPaths += 1
        lineCounter += 1    
        print(lineToPrint)

        if lineCounter is not len(newPath)-1:
            print("\n")
            pathname = "path" + str(numPaths)  
            lineToPrint = "var " + pathname + " = new Path();"
            pathNames.append(pathname)
            print(lineToPrint)

           

# deal with compoundpath 
if len(pathNames) > 1:
    paths = ", ".join(pathNames)
    lineToPrint = "var compoundPath = new CompoundPath(["+paths+"]);" 
    print(lineToPrint)
    print("compoundPath.fillColor = 'black';")
    print("compoundPath.strokeColor = 'black';")
else:
    print("path0.fillColor = 'black';")
    

