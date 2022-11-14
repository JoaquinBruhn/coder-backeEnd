const express = require("express");
const { Router } = express;
const productosRouter = new Router();
const { authenticationAdmin } = require("../../middlewares/mongoAtlas/authenticate.js");
const ProductsController = require("../../controller/productsController.js");

productosRouter.get("/", ProductsController.getAllProducts);

productosRouter.get("/:id", ProductsController.getOneProduct);

productosRouter.post("/", authenticationAdmin, ProductsController.saveNewProduct);

productosRouter.put("/:id", authenticationAdmin, ProductsController.EditProduct);

productosRouter.delete("/:id", authenticationAdmin, ProductsController.deleteOneProduct);

productosRouter.delete("/", authenticationAdmin, ProductsController.deleteAllProducts);

module.exports = productosRouter;
