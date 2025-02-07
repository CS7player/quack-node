exports.join = async(req)=>{
 try{
  let username = req['body']['username'];
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let ip = ipAddress.split('::ffff:')[1];
  IP_USERNAME[ip] = username;
  console.log(IP_CLIENTID,IP_USERNAME)
  return {status:true,msg:"connected!!!",user_id:ip};
 } catch(error){
  return { status: false, msg: `Error: ${error.message}` };
 }
}