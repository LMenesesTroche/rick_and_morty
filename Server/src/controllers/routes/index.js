const express = require('express');
const getCharById = require("../getCharById");
const { postFav, deleteFav } = require("../handleFavorites");
const login = require("../login");

const myRouter = express.Router();

myRouter.get('/character/:id', getCharById);

myRouter.get('/login', login);

myRouter.post('/fav', postFav);

myRouter.delete('/fav/:id', deleteFav);

module.exports = myRouter;