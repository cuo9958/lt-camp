const configs = require("./configs");
const Sequelize = require('sequelize');

const dbconfig = configs.dbconfig;
let mysqlconnection;
if (dbconfig) {
    mysqlconnection = new Sequelize(dbconfig.database, dbconfig.usr, dbconfig.pwd, dbconfig.cfg);
}
module.exports = mysqlconnection;