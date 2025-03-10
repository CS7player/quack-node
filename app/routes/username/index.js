const routes = require("express").Router();
const usernameCtrl = require("../../controller/username");
routes.post("/",(req,res,next)=>{
 usernameCtrl.join(req,res,next)
})
module.exports = routes
//testing