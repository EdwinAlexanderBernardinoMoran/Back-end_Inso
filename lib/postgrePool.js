const { Pool } = require('pg');
const { mapFinderOptions } = require('sequelize/types/utils');
const config = require('../config/config');

const user = encodeURI(config.dbUser);
const password = encodeURI(config.dbPassword);
const url = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.database}`;

const pool = new Pool({ connectionString: url });

module.exports = pool