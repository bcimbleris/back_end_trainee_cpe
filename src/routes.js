const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProdutoController = require("./controllers/ProdutoController");
const FavoritoController = require("./controllers/FavoritoController");

//User
routes.get("/user/:user_id", UserController.getById);
routes.post("/user", UserController.create);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);


//Produto
routes.get("/produto/:product_id", ProdutoController.getById);
routes.post("/produto", ProdutoController.create);
routes.put("/produto/:product_id", ProdutoController.update);
routes.delete("/produto/:product_id", ProdutoController.delete);


//Favorito
routes.get("/favorito/:favorito_id", FavoritoController.getByUser);
routes.post("/favorito", FavoritoController.create);
routes.put("/favorito/:favorito_id", FavoritoController.update);
routes.delete("/favorito/:favorito_id", FavoritoController.delete);

module.exports = routes;