import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';

class Profile extends Model {
    balance: any;
}

Profile.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        profession: { type: DataTypes.STRING },
        balance: { type: DataTypes.DOUBLE, defaultValue: 0 },
        type: { type: DataTypes.STRING },
    },
    { sequelize, modelName: 'Profile', tableName: 'profiles' }
);

export default Profile;
