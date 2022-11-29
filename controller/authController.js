const AuthServices = require("../services/authServices.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

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
      let registerData;
      registerData = await AuthServices.validateNewUser(req.body);
      if (registerData) {
        res.render("pages/register-error");
      } else {
        await AuthServices.saveNewUser(req.body);
        res.redirect("/auth/login");
      }
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
