const express = require("express");
const { Router } = express;
const User = require("../../modals/user.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { auth } = require("firebase-admin");
const upload = require("../../middlewares/multer/multerSingle");
const authRouter = new Router();
const { cartsDB } = require("../../daos/index.js");

authRouter.get("/register", (req, res) => {
  res.render("pages/register");
});

authRouter.post("/register", upload.single("avatar"), (req, res) => {
  const { username, email, phone, age, address, password } = req.body;
  console.log(req.file);
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
      res.redirect("/auth/login");
    }
  });
});

authRouter.get("/login", (req, res) => {
  res.render("pages/login");
});

authRouter.post("/login", passport.authenticate("local", { failureRedirect: "Loging-error" }), async (req, res) => {
  try {
    res.redirect("/");
    return;
  } catch (error) {
    console.log(error);
  }
});

authRouter.get("/loging-error", (req, res) => {
  res.render("pages/login-error");
});

authRouter.get("/logout", async (req, res) => {
  res.render("pages/logout", { data: req.user });
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: "Logout error", body: err });
    }
  });
});

module.exports = authRouter;
