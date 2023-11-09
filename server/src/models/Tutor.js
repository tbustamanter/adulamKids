const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Tutor',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        phoneNumber: {
            allowNull: false,
            type: DataTypes.STRING
        },
        relation: {
            allowNull: false,
            type: DataTypes.STRING
        },
              
    },
    {freezeTableName: true, timesStamp: true}
    );
};