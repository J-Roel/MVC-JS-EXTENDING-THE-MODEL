'use strict';

const router = require('express').Router();


const authController = require('.modules/auth/auth.controller');



//place to define all my routes
router.post('/login', authController.login);
router.get('/logout', authController.logout);





module.exports = router;
