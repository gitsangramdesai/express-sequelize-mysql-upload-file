const sequelize = require("sequelize");

const Sequelize = new sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_SERVER,
    dialect: "mysql",
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
    timezone: '+05:30', // for writing to database
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);



Sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;