const express = require("express");
const { Router } = express;
const admin = require("../../controllers/adminController");
const productosRouter = new Router();
const { prodsDB } = require("../../daos/index");
const { loggerApiError } = require("../../middlewares/log4js/class32");

productosRouter.get("/", async (req, res) => {
  try {
    const prod = await prodsDB.getAll();
    res.render("pages/allProducts", { prod });
    // res.json(prod);
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", `${error}`);
  }
});
productosRouter.get("/:id", async (req, res) => {
  try {
    const prod = await prodsDB.getById(req.params.id);
    // res.render("pages/products", prod);
    res.json(prod);
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", `${error}`);
  }
});

productosRouter.post("/", async (req, res) => {
  if (admin) {
    try {
      const prod = await prodsDB.save(req.body);
      // res.render("pages/products", prod);
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", `${error}`);
    }
  } else {
    res.json({ error: -1, descripcion: "route '/' method 'POST' unauthorized" });
  }
});

productosRouter.put("/:id", async (req, res) => {
  if (admin) {
    try {
      const prod = await prodsDB.edit(req.params.id, req.body);
      // res.render("pages/products", prod);
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", `${error}`);
    }
  } else {
    res.json({ error: -1, descripcion: "route '/req.params.id' method 'PUT' unauthorized" });
  }
});

productosRouter.delete("/", async (req, res) => {
  if (admin) {
    try {
      const prod = await prodsDB.deleteAll();
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", `${error}`);
    }
  } else {
    res.json({ error: -1, descripcion: `route '/${req.params.id}' method 'DELETE' unauthorized` });
  }
});

productosRouter.delete("/:id", async (req, res) => {
  if (admin) {
    try {
      const prod = await prodsDB.deleteById(req.params.id);
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", `${error}`);
    }
  } else {
    res.json({ error: -1, descripcion: `route '/${req.params.id}' method 'DELETE' unauthorized` });
  }
});
module.exports = productosRouter;
