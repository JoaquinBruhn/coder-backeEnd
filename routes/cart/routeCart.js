const express = require("express");
const { Router } = express;
const { authenticationDB, authenticationFetch } = require("../../middlewares/mongoAtlas/authenticate.js");
const CartController = require("../../controller/cartController.js");
const cartRouter = new Router();

cartRouter.get("/:id/productos", authenticationDB, CartController.getAllInCart);

cartRouter.get("/makepurchase", authenticationFetch, CartController.makePurchase);

cartRouter.post("/createCartNouser", authenticationDB, CartController.createCartNouser);

cartRouter.post("/", authenticationFetch, CartController.addProductToCart);

cartRouter.delete("/deleteAll", authenticationDB, CartController.deleteAllCarts);

cartRouter.delete("/:id", authenticationDB, CartController.deleteCartById);

cartRouter.delete("/:id/productos/:id_prod", authenticationFetch, CartController.removeProductFromCart);

module.exports = cartRouter;
