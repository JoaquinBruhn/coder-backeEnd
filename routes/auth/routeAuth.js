const express = require("express");
const { Router } = express;
const bcrypt = require("bcrypt");
const passport = require("passport");
const { auth } = require("firebase-admin");
const authRouter = new Router();
const User = require("../../modals/user.js");
const { cartsDB } = require("../../daos/index.js");
const upload = require("../../middlewares/multer/multerSingle.js");
const Comunications = require("../../services/comunications.js");
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

authRouter.get("/register", (req, res) => {
  try {
    res.render("pages/register");
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

authRouter.post("/register", upload.single("avatar"), (req, res) => {
  try {
    const { username, email, phone, age, address, password } = req.body;
    User.findOne({ username }, async (err, user) => {
      if (err) console.log(err);
      if (user) res.render("pages/register-error");
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const cartID = await cartsDB.createCart();
        const newUser = new User({
          username,
          email,
          phone,
          age,
          address,
          password: hashedPassword,
          cart: cartID._id,
        });
        await newUser.save();
        await Comunications.sendAdminMail(newUser);
        res.redirect("/auth/login");
      }
    });
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

authRouter.get("/login", (req, res) => {
  try {
    res.render("pages/login");
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

authRouter.post("/login", passport.authenticate("local", { failureRedirect: "Loging-error" }), async (req, res) => {
  try {
    res.redirect("/");
    return;
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

authRouter.get("/loging-error", (req, res) => {
  try {
    res.render("pages/login-error");
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

authRouter.get("/logout", async (req, res) => {
  try {
    res.render("pages/logout", { data: req.user });
    req.session.destroy((err) => {
      if (err) {
        return res.json({ status: "Logout error", body: err });
      }
    });
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = authRouter;
