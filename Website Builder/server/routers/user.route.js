const express = require('express');
const userController=require('../controllers/user.controller')
const middleware=require('../middlewares/isAuth')


const userRouter = express.Router();

userRouter.get("/me",middleware.isAuth,userController.getCurrentUser)

module.exports = userRouter;