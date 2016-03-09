'user strict';


//REQUIRE OUR USER.MODEL SO WE HAVE FUNCTIONS AVAILABLE IN OUR FUNCTIONS BELOW
const userModel = require('../module/user/user.model');



//---------------------------------------------------------------
//
//---------------------------------------------------------------




//----------------------------------
// LOGIN
//----------------------------------
function login(req,res,next){
	//create a cookie/JWT
}




//----------------------------------
// LOGOUT
//----------------------------------
function logout(req,res,next){
	//delete a cookie/JWT
}




//----------------------------------
// IS USER AUTHENTICATED
//----------------------------------
function isAuthenticated(req,res,next){
	//Check/validate cookie/jwt
}




//----------------------------------
// IS USER AUTHORIZED -
// -	This checks for roles and such
//----------------------------------
function isAuthorized(req,res,next){
	let userId = req.session.jwtStuff.id;

	userModel.getById(userId)
	.then( (result) => { 
		if(result.role === admin){
			next();
		}else if(resutl.role === author){
			//do something else
			//next();
		}
		} else {
			unauthorizedRequest(req,res,next);
		}
	})
	.catch( (err) {
		next(err);
	})
}


function unauthorizedRequest(req,res,next){
	//User is unauthorized
}



module.exports = {
	login,
	logout,
	isAuthenticated,
	isAuthorized
}