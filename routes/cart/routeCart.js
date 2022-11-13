const express = require("express");
const { Router } = express;
const User = require("../../modals/user.js");
const { cartsDB } = require("../../daos/index.js");
const { authenticationDB, authenticationFetch } = require("../../middlewares/mongoAtlas/authenticate.js");
const CartController = require("../../controller/cartController.js");
const cartRouter = new Router();

cartRouter.get("/:id/productos", authenticationDB, async (req, res) => {
  try {
    const cart = await cartsDB.getAllInCart(req.params.id);
    res.render("pages/cart", { cart: cart });
  } catch (error) {
    console.log(error);
  }
});

cartRouter.get("/makepurchase", authenticationFetch, async (req, res) => {
  try {
    const result = await cartsDB.makePurchase(req.user.cart);
    console.log(result);
    res.json("Success, purchase completed");
  } catch (error) {
    console.log(error);
  }
});

cartRouter.post("/createnouser", async (req, res) => {
  try {
    const cartID = await cartsDB.createCart();
    res.json({ cartID });
  } catch (error) {
    console.log(error);
  }
});

cartRouter.post("/", authenticationFetch, CartController.addProduct);

cartRouter.delete("/", async (req, res) => {
  try {
    const cart = await cartsDB.deleteAll();
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    const cart = await cartsDB.deleteById(req.params.id);
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/:id/productos/:id_prod", authenticationFetch, async (req, res) => {
  try {
    const result = await cartsDB.removeProduct(req.params.id, req.params.id_prod);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = cartRouter;
