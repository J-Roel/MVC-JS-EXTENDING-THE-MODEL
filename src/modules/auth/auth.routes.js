'use strict';

const router = require('express').Router();


const authController = require('./auth.controller');



//place to define all my routes
router.post('/login', authController.login);
router.get('/logout', authController.logout);





module.exports = router;
