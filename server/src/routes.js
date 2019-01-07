'use strict';

const path   = require('path');
const config = require('../config/environment');
const logger = require('./_common/util/logger');

module.exports = (app) => {
  require('./users/routes')(app);

  app.get('*', (req, res) => {
    let indexPage = path.join(config.get('publicPath'), 'index.html');
    res.sendFile(indexPage);
  });

  // eslint-disable-next-line max-params
  app.use((err, req, res, next) => {
    if (err.statusCode < 500) {
      let errData = { reason: err.message, info: err.info };
      return res.status(err.statusCode).send(errData);
    }

    // istanbul ignore next
    switch (process.env.NODE_ENV) {
      case 'test':
      case 'development':
        logger.error('Unexpected server error', err, err.stack);
        break;
      case 'production':
        logger.error('Unexpected server error', err);
        break;
    }
    err = new Error('Unexpected server error');
    err.statusCode = err.statusCode || 500;
    next(err);
  });
};
