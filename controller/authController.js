const bcrypt = require("bcrypt");
const User = require("../modals/user.js");
const { cartsDB } = require("../daos/index.js");
const AuthServices = require("../services/authServices.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");
const Comunications = require("../services/comunications.js");

class AuthController {
  static async toRegister(req, res) {
    try {
      res.render("pages/register");
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async registerNewUser(req, res) {
    try {
      const { username, email, phone, age, address, password } = req.body;
      User.findOne({ username }, async (error, user) => {
        if (error) loggerApiError.error("there has been an error", "n/", error);
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
  }

  static async toLogin(req, res) {
    try {
      res.render("pages/login");
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async redirectToMainPage(req, res) {
    try {
      res.redirect("/");
      return;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async goToMainPage(req, res) {
    try {
      const userData = await AuthServices.goToMainPage(req.user._id);
      res.render("pages/home", { data: userData });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async userLogout(req, res) {
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
  }
}

module.exports = AuthController;
