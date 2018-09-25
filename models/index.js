/**
 * 添加数据库的模型对象
 */
const Sequelize = require('sequelize');
const db = require("../db");

const test = db.define("t_test", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = test;