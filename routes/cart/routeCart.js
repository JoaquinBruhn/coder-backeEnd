const express = require("express");
const { Router } = express;

const cartRouter = new Router();

const { carts } = require("../../classes/carts");
const { prods } = require("../../classes/products");

cartRouter.get("/:id/productos", async (req, res) => {
  try {
    const products = await carts.getAllInCart(req.params.id);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const cartID = await carts.create();
    res.json({ cartID });
  } catch (error) {
    console.log(error);
  }
});

cartRouter.post("/:id/productos", async (req, res) => {
  try {
    const product = await prods.getById(req.body.id);
    const prodsInCart = await carts.addProduct(req.params.id, product);
    res.json(prodsInCart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/", async (req, res) => {
  try {
    const cart = await carts.deleteAll();
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    const cart = await carts.deleteById(req.params.id);
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/:id/productos/:id_prod", async (req, res) => {
  try {
    const cart = await carts.removeProduct(parseInt(req.params.id), parseInt(req.params.id_prod));
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

module.exports = cartRouter;
