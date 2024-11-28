import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';
import Profile from './profile.model';

class Contract extends Model {}

Contract.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        terms: { type: DataTypes.STRING },
        clientId: { type: DataTypes.INTEGER, allowNull: false },
        contractorId: { type: DataTypes.INTEGER, allowNull: false },
        operationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: { type: DataTypes.STRING },
    },
    { sequelize, modelName: 'Contract', tableName: 'contracts' }
);

Contract.belongsTo(Profile, { as: 'Client', foreignKey: 'clientId' });
Contract.belongsTo(Profile, { as: 'Contractor', foreignKey: 'contractorId' });

export default Contract;
