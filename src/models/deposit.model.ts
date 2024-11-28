import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';
import Profile from './profile.model';

class Deposit extends Model {}

Deposit.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        clientId: { type: DataTypes.INTEGER, allowNull: false },
        operationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        depositValue: { type: DataTypes.DOUBLE, allowNull: false },
    },
    { sequelize, modelName: 'Deposit', tableName: 'deposits' }
);

Deposit.belongsTo(Profile, { foreignKey: 'clientId' });

export default Deposit;
