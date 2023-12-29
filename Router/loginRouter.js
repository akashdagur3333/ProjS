const express =require('express')
const route=express.Router()
const loginController=require('../Controller/LoginController')

route.post('/login',loginController.login)


module.exports=route
