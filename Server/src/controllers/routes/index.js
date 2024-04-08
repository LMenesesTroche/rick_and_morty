const express = require('express');
const getCharById  = require("../getCharById");
const  deleteFav  = require("../deleteFav");
const  postFav  = require("../postFav");
const  postUser  = require('../postUser');
const login = require('../login');

const myRouter = express.Router();

myRouter.get('/character/:id', getCharById);//ruta para sacar un character 

myRouter.get('/login', login); //

myRouter.post('/login', postUser); //ruta  para agregar un usuario

myRouter.post('/fav', postFav); //

myRouter.delete('/fav/:id', deleteFav);

module.exports = myRouter;