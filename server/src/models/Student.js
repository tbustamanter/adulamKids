const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Student',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        picture: {
            allowNull: true,
            type: DataTypes.STRING
        },
        birthdate: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        schoolGrade: {
            allowNull: false,
            type: DataTypes.STRING
        },
        comments: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        active: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
        vip: {
            allowNull: true,
            type: DataTypes.DATEONLY,
        }
    },
    {timesStamp: true}
    );
};