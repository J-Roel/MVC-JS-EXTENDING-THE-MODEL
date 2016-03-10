'use strict';





//---------------------------------------------------------------
// REQUIRE FUNCTIONALITY
//	-	Require these so we can use them in this file
//---------------------------------------------------------------
const userModel = require('./user.model');
const userValidation = require('./user.validation');






//---------------------------------------------------------------
//	THIS FILE WILL CONTAIN ALL OF THE CRUD FUNCTIONS
//	-	This is your main controller for your users


//---------------------------------------------------------------




//------------------------------------
//GET ALL USERS FUNCTION 
//------------------------------------
function getAll(req,res,next){
	
	userModel.getAll()
	.then( (result) => {
		res.send(result);
	})
	.catch( (err) => {
		next(err);
	});

};





//------------------------------------
//GET USER BY ID FUNCTION 
//------------------------------------
function getById(req,res,next){

	//Get user Id
	let userId = req.params.id;

	userModel.getAll(userId)
	.then( (result) => {
		res.send(result);
	})
	.catch( (err) => {
		next(err);
	});
};





//------------------------------------
//CREATE FUNCTION 
//------------------------------------
function create(req,res,next){

	//Assign information from form to an object
	let user = {
		// username = req.body.username,
		// password = req.body.password,
		// email = req.body.email
	}

	//Send our user object for validation
	let errs = userValidation.validate(user);

	
	//Validate the input in the model

	if(errs.length === 0){

		//Send our password from our object to be the hashPassword function
		// and reassign the user.password value/key pair to our hashed password
		user.password = hashPassword(user.password);

		userModel.create(newUserData)
		.then( (result) => {
			res.send(result);
		})
		.catch( (err) => {
			next(err);
		});
	}else{

	}

};






//------------------------------------
//UPDATE FUNCTION 
//------------------------------------
function update(req,res,next){

};






//------------------------------------
//REMOVE FUNCTION 
//------------------------------------
function remove(req,res,next){

	let userId = res.params.id;



};




function hashPassword(password){
	//pretend this does the password hashing
	return password;
}



//Export everything we need for our routes
module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
}
