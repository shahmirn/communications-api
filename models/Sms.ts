import { DataTypes } from 'sequelize';
import sequelize from './db';

const Sms = sequelize.define("sms", {
    datetime: DataTypes.DATE,
    to: DataTypes.TEXT,
    from: DataTypes.TEXT,
    message: DataTypes.TEXT,
  });
  
(async () => {
    await sequelize.sync();
})();

export default Sms;
