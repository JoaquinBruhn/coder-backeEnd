const express = require("express");
const { Router } = express;

const passport = require("passport");
const authRouter = new Router();
const upload = require("../../middlewares/multer/multerSingle.js");
const AuthController = require("../../controller/authController.js");
const ErrorController = require("../../controller/errorController.js");

authRouter.get("/register", AuthController.toRegister);

authRouter.post("/register", upload.single("avatar"), AuthController.registerNewUser);

authRouter.get("/login", AuthController.toLogin);

authRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "Loging-error" }),
  AuthController.redirectToMainPage
);

authRouter.get("/loging-error", ErrorController.loginError);

authRouter.get("/logout", AuthController.userLogout);

module.exports = authRouter;
