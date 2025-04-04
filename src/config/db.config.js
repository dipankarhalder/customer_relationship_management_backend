const mongoose = require('mongoose');
const { env_config } = require('../envs');
const { msges } = require('../constant');

const database_connect = async () => {
  try {
    const connect = await mongoose.connect(env_config.MONGOURI);
    console.log(`${msges.data_base_msg.db_success} ${env_config.MPORT}`);
    return connect;
  } catch (err) {
    console.log(`${msges.data_base_msg.db_failed} ${err.message}`);
    process.exit(1);
  }
};

module.exports = {
  database_connect,
};
