/**
 * Esse código faz o setup da conexão com o banco de dados,
 * configura o Sequelize, importa um modleo (tabela)
 * e exporta tudo junto para usar nas outras partes do app
 */

// depedencias
const Sequelize = require('sequelize');
// modulos proprios
const dbConfig = require("../config/db.config.js");

/**
 * Configura o sequelize
 */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        aquire: dbConfig.pool.aquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;