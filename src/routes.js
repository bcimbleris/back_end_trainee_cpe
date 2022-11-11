const express = require('express');
const routes = express.Router();



const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const ProdutoController = require("./controllers/ProdutoController");
const ProdutoValidator = require("./validators/ProdutoValidator");

const FavoritoController = require("./controllers/FavoritoController");
const FavoritoValidator = require("./validators/FavoritoValidator");

const SessionController = require("./controllers/SessionController");
const auth = require("./middlewares/authentication")

//Session

routes.post("/login", SessionController.signIn);
routes.delete("/logout", SessionController.signOut);

//User
routes.get("/user/:user_id", UserValidator.getById, UserController.getById);
routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);


//Produto
routes.get("/produto/:product_id", ProdutoValidator.getById, ProdutoController.getById);
routes.post("/produto", ProdutoValidator.create, ProdutoController.create);
routes.put("/produto/:product_id", ProdutoValidator.update, ProdutoController.update);
routes.delete("/produto/:product_id", ProdutoValidator.delete, ProdutoController.delete);


//Favorito
routes.get("/favorito/:user_id", FavoritoValidator.getById, auth.authenticateToken, FavoritoController.getById);
routes.post("/favorito", FavoritoValidator.create,  auth.authenticateToken, FavoritoController.create);

// routes.put("/favorito/:favorito_id", FavoritoValidator.update, FavoritoController.update); NAO TEM PORQUE DAR UPDATE EM FAVORITO, OU EH OU NAO EH
routes.delete("/favorito/:favorito_id", FavoritoValidator.delete ,FavoritoController.delete);

module.exports = routes;