const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true, // Corrección aquí
         }
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
