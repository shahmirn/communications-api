import path from 'path';
import { Dialect } from 'sequelize';
const config = {
  dialect: 'sqlite' as Dialect,
  storage: path.resolve(__dirname, '../conversations.db'),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default config;
