const express = require("express");
const { Router } = express;

const cartRouter = new Router();

const { carts } = require("../../classes/carts");
const { prods } = require("../../classes/products");

// cartRouter.get("/", async (req, res) => {
//   try {
//     const prod = await prods.getAll();
//     // res.render("pages/allProducts", { prod });
//     res.send(prod);
//   } catch (error) {
//     console.log(error);
//   }
// });

cartRouter.post("/", async (req, res) => {
  try {
    const cartID = await carts.create();
    res.send({ cartID });
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/", async (req, res) => {
  try {
    const cart = await carts.deleteAll(req.params.id);
    res.send(cart);
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    const cart = await carts.deleteById(req.params.id);
    res.send(cart);
  } catch (error) {
    console.log(error);
  }
});

module.exports = cartRouter;
