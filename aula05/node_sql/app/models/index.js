/**
 * Esse código faz o setup da conexão com o banco de dados,
 * configura o Sequelize, importa um modleo (tabela)
 * e exporta tudo junto para usar nas outras partes do app
 */

import dbConfig from "../config/db.config.js";
import Sequelize from 'sequelize';
import tutorialModel from "./tutorial.model.js";

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

const db = {
    Sequelize,
    sequelize,
    tutorial: tutorialModel(sequelize, Sequelize)
};

export default db;