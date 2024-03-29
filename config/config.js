require("dotenv").config();

const CONFIG = {
  app: process.env.APP || "local",
  port: process.env.PORT || "3001",

  db_dialect: process.env.DB_DIALECT || "mongodb",
  db_host: process.env.DB_HOST || "localhost",
  db_port: process.env.DB_PORT || "27017",
  db_name: process.env.DB_NAME || "api_versioning",
};

module.exports = CONFIG;
