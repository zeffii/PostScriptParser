'''
19 Nov, Dealga McArdle

PostScript to javascript/paperjs converter.
I'm deciding to write this in Python because javascript is a pain for parsing.

The Adobe PostScript References, PLRM.pdf is available for free from their site.
Their TOC implies that it's OK to write programs that parse their .ps filetype.
It should be obvious to anyone with a brain that Adobe and PostScript are registered
trademarks.

This script is released under the MIT license. With no waranty of any kind.
'''



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
    
    filedata = open(filename)
    for line in filedata:

        # checking
        if not recordOn and line.startswith("%%EndPageSetup\n"):
            print("found " + line[:-1] )
            continue

        # this is not pretty, but it forces black! :)
        if line.endswith("0 g\n"):
            recordOn = True
            continue

        # assimilating
        if recordOn:        
            joinString += line [:-1] 

        # end token
        if line.startswith("Q Q"):
            print("found Q Q, ending parser")
            break

    filedata.close()

    return joinString
    

def parse_postscript(fullString):

    commandList = fullString.split("f")
    print(commandList.length)






fullString = get_postscript("drawing_byHandbk.ps")
parse_postscript(fullstring)
