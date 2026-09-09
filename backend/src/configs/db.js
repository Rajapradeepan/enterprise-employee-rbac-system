import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const default_db = "enterprise_employee_rbac";

const dbConnection = knex({
  client: "mysql2",

  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || default_db,
    port: process.env.DB_PORT || 3306,
  },

  pool: {
    min: 2,
    max: 10,
  },
});

export default dbConnection;