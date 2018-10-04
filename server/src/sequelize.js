import Sequelize from 'sequelize';
import UserModel from './models/UserModel';
import BooksModel from './models/BooksModel';
import CategoriesModel from './models/CategoriesModel';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('[MYSQL]', 'Connect to mysql success.');
}).catch(err => {
  console.log('[MYSQL]', 'Connect to mysql failed.');
});

export const User = UserModel(sequelize, Sequelize);
export const Books = BooksModel(sequelize, Sequelize);
export const Categories = CategoriesModel(sequelize, Sequelize);
