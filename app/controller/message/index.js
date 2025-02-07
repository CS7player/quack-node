const messageMdl = require("../../model/message");
exports.all_users = async(req,res,next)=>{
 try{
  const result = await messageMdl.all_users(req);
  res.status(200).json(result);
 } catch(err){
  res.status(400).json(err); 
 }
}