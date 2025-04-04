const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  MPORT: process.env.MPORT,
  PLATFORM: process.env.PLATFORM,
  NODEENV: process.env.NODEENV,
  EXPTIME: process.env.EXPTIME,
  JWTSECRET: process.env.JWTSECRET,
  MONGOURI: process.env.MONGOURI,
  CLIENTURL: process.env.CLIENTURL,
};
