const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      
      name:{
         type:DataTypes.STRING,
         allowNull:false,
      },
      status:{
         type:DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
         allowNull:true,
      },
      species:{
         type:DataTypes.STRING,
         allowNull:true,
      },
      gender:{
         type:DataTypes.ENUM('Female',"Male","Genderless","Unknown"),
         allowNull:true,
      },
      origin:{
         type:DataTypes.STRING,
         allowNull:true,
      },
      image:{
         type:DataTypes.STRING,
         allowNull:true,
      }
   }, { timestamps: false });//eSTO ES PARA GUARDAR LA FECHA Y HORA DEL REGISTRO
};
