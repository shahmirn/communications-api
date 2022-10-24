import { DataTypes } from 'sequelize';
import sequelize from './db';

const VoiceCalls = sequelize.define("voice_calls", {
    datetime: DataTypes.DATE,
    to: DataTypes.TEXT,
    from: DataTypes.TEXT,
  });
  
(async () => {
    await sequelize.sync();
})();

export default VoiceCalls;
