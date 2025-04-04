const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { StatusCodes } = require('http-status-codes');

/* import all the files */
const { msges } = require('./constant');
const { db_config } = require('./config');
const { env_config } = require('./envs');

/* initial express app */
const app = express();

/* CORS configuration */
const corsOptions = {
  origin: env_config.CLIENTURL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};

/* all important middleware */
app.use(morgan(env_config.PLATFORM));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* application main endpoint */
app.use('/', (req, res) =>
  res.json({
    status: StatusCodes.OK,
  }),
);

/* handled undefined routes */
app.use((req, res, next) => {
  const error = new Error(msges.app_msg.api_not_found);
  error.status = StatusCodes.NOT_FOUND;
  next(error);
});

/* app global errors using middleware */
app.use((error, req, res) => {
  res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    error: {
      message: error.message,
    },
  });
});

/* connect database and started server */
db_config
  .database_connect()
  .then(() => {
    app.listen(env_config.PORT, () => {
      console.log(`${msges.server.serve_success} ${env_config.PORT}`);
    });
  })
  .catch((err) => {
    console.error(msges.data_base_msg.db_failed, err);
    process.exit(1);
  });
