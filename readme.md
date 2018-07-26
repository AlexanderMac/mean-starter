# mean-starter
`MEAN` project template.

[![Build Status](https://travis-ci.org/AlexanderMac/mean-starter.svg?branch=master)](https://travis-ci.org/AlexanderMac/mean-starter)
[![Code Coverage](https://codecov.io/gh/AlexanderMac/mean-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexanderMac/mean-starter)

### Features
- Advanced project structure with separation for routes, controllers, data-services.
- RESTful User CRUD API.
- Parameters validation.
- Promises everywhere.
- Configuration per environment.
- Gulp tasks.
- Functional and unit tests.
- Clean code:)

### Used packages
 - Backend - `express`
 - Frontend - `angular v1.6`
 - CSS preprocessor - `stylus`
 - CSS framework - `boostrap`
 - View engine - `pug`
 - Database - `mongodb`
 - Promises - `bluebird`
 - Task runner - `gulp`
 - JS linter - `eslint`
 - Testing - `mocha`, `should`, `supertest`, `sinon`
 - Code coverage - `istanbul`
 - Logger - `winston, morgan`

### How to use
```sh
# Clone this repo:
$ git clone https://github.com/AlexanderMac/mean-starter.git

# Init your repo:
$ cd mean-starter && rm -rf .git && git init

# Install dependencies:
$ npm i

# Configure database:
# Open `./config/environment/development.json` and change `db` key to your own database connection string.

# Start app:
$ npm start
```

### Commands

```sh
# Install dependencies
$ npm i

# Build frontend:
$ npm run build # build development version
$ npm run build:production # build production version

# Run tests (one of the commands):
$ gulp test # run all tests
$ gulp test --grep 'test-name'
$ gulp test --filter 'path to test file/folder'

# Run code coverage tool:
$ gulp coverage

# Run jshint tool (one of the commands):
$ gulp lint # check all sources
$ gulp lint --filter 'path to source file/folder'
$ gulp lint-server # check server sources
$ gulp lint-test # check test sources

# Start app and watch for changes:
$ npm start
```

### Service structure
- [config] - app configuration options
- [client]
  - [app]
    - [controllers]
    - [directives]
    - [resources]
    - [util]
  - [css]
  - [images]
  - [views]
- [server]
  - [controllers] - controllers
  - [db] - database manager and models
  - [data-services] - local data services
  - [routes] - API end points
  - [services] - remote service wrappers
  - [util]
    - [validation-util] - validation utils
    - [logger] - app logger
- [tasks] - gulp tasks
- [test] - unit and functional tests

### Author
Alexander Mac

### License
[MIT License](LICENSE)
