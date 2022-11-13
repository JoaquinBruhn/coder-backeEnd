const express = require("express");
const { Router } = express;
const router = new Router();
const { loggerDefault } = require("../middlewares/log4js/class32.js");
const homeRouter = require("./home/routerHome.js");
const authRouter = require("./auth/routeAuth.js");
const infoRouter = require("./extra/routeInfo.js");
const routeUserInfo = require("./extra/userInfo.js");
const randomsRouter = require("./extra/routeRandoms.js");
const randomsNumbRouter = require("./extra/routeRandomsNumb.js");
const productosRouter = require("./products/routeProds.js");
const cartRouter = require("./cart/routeCart.js");
const testRouter = require("./extra/routeTest.js");
const notFoundError = require("./errors/404.js");

router.use((req, res, next) => {
  loggerDefault.info(`Searched the route "${req.originalUrl}"`);
  next();
});
router.use("/", homeRouter);
router.use("/auth", authRouter);
router.use("/info", infoRouter);
router.use("/api/userinfo", routeUserInfo);
router.use("/api/randoms", randomsRouter);
router.use("/api/randomsNumb", randomsNumbRouter);
router.use("/api/productos", productosRouter);
router.use("/api/carrito", cartRouter);
router.use("/test", testRouter);
router.use("*", notFoundError);

module.exports = router;
