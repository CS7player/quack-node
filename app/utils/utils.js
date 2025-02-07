exports.getIp = (ip_address)=>{
 return ip_address.split('::ffff:')[1];;
}