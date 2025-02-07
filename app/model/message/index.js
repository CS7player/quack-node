exports.all_users = async (req) => {
 try {
  let user_list = Object.entries(IP_USERNAME).map(([user_id, user_name]) => ({
   user_id: String(user_id),
   user_name: user_name
  }));
  return { status: true, data: user_list };
 } catch (error) {
  return { status: false, msg: `Error: ${error.message}` };
 }
}