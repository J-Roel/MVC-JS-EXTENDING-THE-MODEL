'use strict';


//Dependecies
const express = require('express');
const bodyParser = require('body-parser');

//local dependencies
const routes = require('./routes');


const app = express();




app.use(bodyParser.json());






app.listen(3000, function(){
	console.log('Listening on 3000');
});