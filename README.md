## Higher view of MVC - Server Side

### !This is psudo and workable code!


* 1) Don't use nodemon use NPM START
* 	Note that in the package.json, we setup nodemon to run in the scripts -> start:
*		This will require nodemon to be [npm installed --save-dev nodemon]
*		That allows it to be locally ran in your node_module dependencies
*		So you never run into a problem where another machine is doesn't have
*		nodemon installed globally; and, they are using the same version as you


*2) Always use strict at the top of each file for ES2015 compatibility



## CONVENTION OVER CONFIGURATION