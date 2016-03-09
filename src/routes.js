'use strict';

const router = require('express').Router();



//DEFINE OUR ROUTES (AKA - MODULES)
const userRoutes = require('.modules/user/user.routes');
const authRoutes = require('.modules/auth/auth.routes');



//THEN LET OUR APP USE THEM
router.use('/user', userRoutes);
router.use('/auth', authRoutes);



module.exports = router;
