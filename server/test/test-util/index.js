'use strict';

const _        = require('lodash');
const mongoose = require('mongoose');
const nassert  = require('n-assert');
const sinon    = require('sinon');
require('../../src/util/errors');
require('../../src/util/promisify');
const mongoDb  = require('../../src/db');

nassert.initSinon(sinon);

before(async function() {
  this.timeout(0);
  await mongoDb.connect();
  await _clearDbs();
});

afterEach(function() {
  this.timeout(0);
  return _clearDbs();
});

after(async function() {
  this.timeout(0);
  await _clearDbs();
  await mongoDb.disconnect();
});

function _clearDbs() {
  let mongoDel = _(mongoose.models)
    .keys()
    .map(model => mongoose.model(model).deleteMany())
    .value();

  return Promise.all(mongoDel);
}
