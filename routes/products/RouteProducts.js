const express = require("express");
const { Router } = express;

const productosRouter = new Router();

const { prods } = require("../../classes/products");

productosRouter.get("/", async (req, res) => {
  try {
    const prod = await prods.getAll();
    // res.render("pages/allProducts", { prod });
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});
productosRouter.get("/:id", async (req, res) => {
  try {
    const prod = await prods.getById(req.params.id);
    // res.render("pages/products", prod);
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.post("/", async (req, res) => {
  try {
    const prod = await prods.save(req.body);
    // res.render("pages/products", prod);
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.put("/:id", async (req, res) => {
  try {
    const prod = await prods.edit(req.params.id, req.body);
    // res.render("pages/products", prod);
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.delete("/:id", async (req, res) => {
  try {
    const prod = await prods.deleteById(req.params.id);
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});
module.exports = productosRouter;
