import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config';

const sequelize = new Sequelize(dbConfig);

export default sequelize;
