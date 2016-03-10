'use strict';

const router = require('express').Router();


//
const userController = require('./user.controller');
const authController = require('../auth/auth.controller');




//---------------------------------------------------------------------------------------
//ALL MY ROUTES FOR MY USER
//	-	Line up your concerns... so once your functions are setup for auth
//		you can use the functions with in this routing to check our user's
//		authentication and authorization
//		These are lined up... if you go look at the isAuthenticated and
//		isAuthorized... you'll see that it will bypass the rest of our functions
//		and go straight to our error handling code.
//		So if it gets an error, then it won't run the functions that are inline below
//---------------------------------------------------------------------------------------
router.get('/user', authController.isAuthenticated, userController.getAll);
router.get('/user/:id', authController.isAuthenticated, userController.getById);
router.post('/user/', userController.create);
router.put('/user/:id', authController.isAuthenticated, authController.isAuthorized,  userController.update);
router.delete('/user', authController.isAuthenticated, authController.isAuthorized,  userController.remove);





module.exports = router;
