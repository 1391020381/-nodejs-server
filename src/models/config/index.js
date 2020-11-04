
const { db } = require('../../config')
module.exports = { [process.env_NODE_ENV|| 'development']:db}