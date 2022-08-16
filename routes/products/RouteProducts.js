const express = require("express");
const { Router } = express;
const admin = require("../../controllers/adminController");

const productosRouter = new Router();

const { prods } = require("../../classes/products");

productosRouter.get("/", async (req, res) => {
  try {
    const prod = await prods.getAll();
    // res.render("pages/allProducts", { prod });
    res.json(prod);
  } catch (error) {
    console.log(error);
  }
});
productosRouter.get("/:id", async (req, res) => {
  try {
    const prod = await prods.getById(req.params.id);
    // res.render("pages/products", prod);
    res.json(prod);
  } catch (error) {
    console.log(error);
  }
});

productosRouter.post("/", async (req, res) => {
  if (admin) {
    try {
      const prod = await prods.save(req.body);
      // res.render("pages/products", prod);
      res.json(prod);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ error: -1, descripcion: "route '/' method 'POST' unauthorized" });
  }
});

productosRouter.put("/:id", async (req, res) => {
  if (admin) {
    try {
      const prod = await prods.edit(req.params.id, req.body);
      // res.render("pages/products", prod);
      res.json(prod);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ error: -1, descripcion: "route '/req.params.id' method 'PUT' unauthorized" });
  }
});

productosRouter.delete("/", async (req, res) => {
  if (admin) {
    try {
      const prod = await prods.deleteAll();
      res.json(prod);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ error: -1, descripcion: `route '/${req.params.id}' method 'DELETE' unauthorized` });
  }
});

productosRouter.delete("/:id", async (req, res) => {
  if (admin) {
    try {
      const prod = await prods.deleteById(req.params.id);
      res.json(prod);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ error: -1, descripcion: `route '/${req.params.id}' method 'DELETE' unauthorized` });
  }
});
module.exports = productosRouter;
