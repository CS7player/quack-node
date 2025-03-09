const util = require('../../utils/utils');
exports.all_users = async (req) => {
 try {
  let user_list = util.user_list();
  return { status: true, data: user_list };
 } catch (error) {
  return { status: false, msg: `Error: ${error.message}` };
 }
}