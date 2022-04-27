module.exports = {
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "pizzastore",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };