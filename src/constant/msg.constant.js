/* server msg */
const server = {
  serv_succ: 'Server successfully started on port:',
};

/* database msg */
const data_base_msg = {
  db_success: 'Database successfully connected on port:',
  db_failed: 'Database failed to connect.',
};

/* common application msg */
const app_msg = {
  something_wrong: 'Something went wrong, please try again later.',
  internal_server_error: 'Internal Server Error.',
  api_not_found: 'The API url not found.',
};

module.exports = {
  server,
  data_base_msg,
  app_msg,
};
