exports.getIp = (ip_address)=>{
 return ip_address.split('::ffff:')[1];;
}

exports.user_list = ()=>{
 let user_list = Object.entries(IP_USERNAME).map(([user_id, user_name]) => ({
  user_id: String(user_id),
  user_name: user_name
 }));
 return user_list;
}