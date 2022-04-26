const dbConfig = require("../config/db-config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig);
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     };
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users-model.js")(sequelize, Sequelize);
db.ingredients = require("./ingredients-model.js")(sequelize, Sequelize);
db.cart = require("./cart-model.js")(sequelize, Sequelize);
db.oreders = require("./orders-model.js")(sequelize, Sequelize);

module.exports = db;