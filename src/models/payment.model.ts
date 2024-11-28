import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';
import Job from './job.model';

class Payment extends Model {}

Payment.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        jobId: { type: DataTypes.INTEGER, allowNull: false },
        operationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        paymentValue: { type: DataTypes.DOUBLE, allowNull: false },
    },
    { sequelize, modelName: 'Payment', tableName: 'payments' }
);

Payment.belongsTo(Job, { foreignKey: 'jobId' });

export default Payment;
