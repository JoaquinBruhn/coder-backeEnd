const express = require("express");
const { Router } = express;
const router = new Router();
const productosRouter = require("./products/routeProducts");
const cartRouter = require("./cart/routeCart");

router.use("/products", productosRouter);
router.use("/carrito", cartRouter);

module.exports = router;
