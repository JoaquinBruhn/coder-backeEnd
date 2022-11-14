const express = require("express");

const { Router } = express;
const { authenticationDB } = require("../../middlewares/mongoAtlas/authenticate.js");

const AuthController = require("../../controller/authController.js");

const homeRouter = new Router();

homeRouter.get("/", authenticationDB, AuthController.goToMainPage);

module.exports = homeRouter;
