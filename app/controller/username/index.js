const usernameMdl = require("../../model/username");
exports.join = async(req,res,next)=>{
 try{
  const result = await usernameMdl.join(req);
  res.status(200).json(result);
 } catch(err){
  res.status(400).json(err); 
 }
}