import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';
import Contract from './contract.model';

class Job extends Model {}

Job.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        contractId: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.STRING },
        operationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        paymentDate: { type: DataTypes.DATE },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        paid: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    { sequelize, modelName: 'Job', tableName: 'jobs' }
);

Job.belongsTo(Contract, { foreignKey: 'contractId' });

export default Job;
