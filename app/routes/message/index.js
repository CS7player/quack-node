const routes = require("express").Router();
const messageCtrl = require("../../controller/message");
routes.get('/all_users',(req,res,next)=>{
 messageCtrl.all_users(req,res);
})
module.exports = routes