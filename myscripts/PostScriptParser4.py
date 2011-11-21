'''
20 Nov, Dealga McArdle. 2011
This script is released under the MIT license. With no waranty/support of any kind.

PostScript to javascript/paperjs converter written in Python. It should be
obvious to anyone with a brain that Adobe and PostScript are registered trademarks.
The Adobe PostScript References, PLRM.pdf, is available for free from their site.
Their TOC implies that it's OK to write programs that parse their .ps filetype.

I plan to support commands as i encounter them.

20 Nov, Basic Parsing and javascript writer for commands (m/l/c/h)
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
    

def parse_postscript(fullString):

    print("="*79)

    # because the last possible parsable character is also an f
    # split creates one extra empty list member, [:-1] drops it.
    commandList = fullString.split(" f")[:-1]
    for item in commandList:
        print(item)
        print("----")

    
    

fullString = get_postscript("drawing_byHandbk.ps")
parse_postscript(fullString)
