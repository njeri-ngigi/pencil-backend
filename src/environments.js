
const dotenv = require('dotenv');

dotenv.config();

const { 
  PORT = 3000,
  CONNECTION_STRING = 'mongodb://localhost/test', 
} = process.env;

module.exports = {
  PORT,
  CONNECTION_STRING
}
