const routes = require("express").Router();
const username = require('./username');
const message = require('./message');
routes.use('/username',username);
routes.use('/message',message);
routes.get('/', (req, res) => {
 res.status(200).json({ "message": "connected", "status": true })
});
module.exports = routes