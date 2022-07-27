const express = require("express");
const { Router } = express;

const Productos = require("../classes/products");

const productosRouter = new Router();

const prods = new Productos("desafio");

productosRouter.get("/products", async (req, res) => {
  try {
    const prod = await prods.getAll();
    res.render("allProducts", { prod });
  } catch (error) {
    console.log(error);
  }
});
productosRouter.get("/products/:id", async (req, res) => {
  try {
    const prod = await prods.getById(req.params.id);
    res.render("products", prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.post("/products", async (req, res) => {
  try {
    const prod = await prods.save(req.body);
    res.render("products", prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.put("/products/:id", async (req, res) => {
  try {
    const prod = await prods.edit(req.params.id, req.body);
    res.render("products", prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.delete("/products/:id", async (req, res) => {
  try {
    const prod = await prods.deleteById(req.params.id);
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});

module.exports = productosRouter;
