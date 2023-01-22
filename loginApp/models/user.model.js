import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Database name
  process.env.DATABASE_USERNAME, // Database Username
  process.env.DATABASE_PASSWORD, // Database Password
  {
    host: process.env.HOST, // Database Host
    dialect: process.env.DIALECT, // Database Type
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has ben established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database: ", err);
  });

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    // sync() creates table if it doesn't exist
    console.log("User table created successfully");
  })
  .catch((err) => {
    console.log("Unable to create table: ", err);
  });

export default User;
