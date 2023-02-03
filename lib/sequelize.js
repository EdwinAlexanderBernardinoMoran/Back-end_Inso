const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../database/models');

const user = encodeURI(config.dbUser);
const password = encodeURI(config.dbPassword);
const url = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.database}`;

const sequelize = new Sequelize( url, {
    dialect: 'postgres',
    logging: false
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;