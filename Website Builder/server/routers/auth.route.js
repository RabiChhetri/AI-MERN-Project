const express = require('express');
const authController=require('../controllers/auth.controller')


const router = express.Router();

router.post('/google',authController.googleAuth)
router.get('/logout',authController.logOut)

module.exports = router;