PostScript Parser to JavaScript, written in Python.
=======

Rationale 
Using this PostScript parser to output vector graphics to a .js or .html from a .ps file allows one to knock out
quick graphical ideas, and take care of writing the path codes automatically.

currently supported 
I've only tested the .ps output files from Inkscape. Before i output them, i convert anything with a fillColour
from Object to Path. Anything without a fillColour doesn't need special treatment (i think..)

where? 
The latest version of the parser will be located in myscripts, the ps files are test files. 
The html files are the raw output of the python program, assuming you have your lib path set up
correctly this should output some pretty cool vector art.

Thats all for now.