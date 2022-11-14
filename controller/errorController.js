const { loggerApiError, loggerNotFound } = require("../middlewares/log4js/class32.js");

class ErrorController {
  static async routeNotFound(req, res) {
    try {
      loggerNotFound.warn(`WARNING, route "${req.originalUrl}" does not exist`);
      res.json({ error: -2, descripcion: `ruta inexistente` });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async loginError(req, res) {
    try {
      res.render("pages/login-error");
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = ErrorController;
