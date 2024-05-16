
 

const dbConfig = require("../config/dbconfig.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
// db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require("./projectModel")(sequelize, Sequelize);



db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Database conection is successfull");
  })
  .catch((err) => {
    console.error("An error occurred while :", err);
  });

module.exports = { Sequelize, db };
