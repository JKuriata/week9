const { Sequelize } = require("sequelize");
// object destructuring

const sequelize = new Sequelize(process.env.MYSQL_URI);
// sequelize (object) makes new instance which will be stored in Sequelize (class)

sequelize.authenticate();

console.log("db connection is working");

module.exports = sequelize;
