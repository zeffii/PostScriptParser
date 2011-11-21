newPath = ['20.965 19.582 m', '20.965 17.395 21.348 15.852 22.117 14.95 c', '22.887 14.047 24.363 13.481 26.555 13.25 c', '26.785 12.848 l', '26.379 12.442 l', '10.715 12.442 l', '10.309 12.848 l', '10.539 13.25 l', '12.73 13.481 14.207 14.047 14.977 14.95 c', '15.742 15.852 16.129 17.395 16.129 19.582 c', '16.129 45.965 l', '2.188 45.043 0.922 41.129 c', '41.071 l', '1.383 49.25 l', '2.016 49.25 l', '2.094 48.942 2.398 48.789 2.938 48.789 c', '34.098 48.789 l', '34.637 48.789 34.945 48.942 35.02 49.25 c', '35.652 49.25 l', '37.039 41.071 l', '36.23 41.012 l', '22.809 46.657 20.965 45.965 c', 'h', '20.965 19.582 m']

formattedPath = []



for line in newPath:
    lineArray = line.split()

    # todo , deal with additional paths.
    foundChar = lineArray[-1]
    if foundChar == 'm':
        command = "path.moveTo("
    elif foundChar == 'l':
        command = "path.lineTo("
    elif foundChar == 'c':
        command = "path.cubicCurveTo("
        
    
    if foundChar == 'm' or foundChar == 'l':
        coordinates = lineArray[0] + ', ' + lineArray[1]
        lineToPrint = command + coordinates + ");" 
        print(lineToPrint)
        continue        

    if foundChar == 'c':
        coordinates = ", ".join(lineArray[:-1])
        lineToPrint = command + coordinates + ");" 
        print(lineToPrint)
        continue

    if foundChar == 'h':
        print("path.closePath();")
        continue        

    
