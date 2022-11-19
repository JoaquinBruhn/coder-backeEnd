const User = require("../modals/user.js");

const { loggerApiError } = require("../middlewares/log4js/class32.js");

class AuthServices {
  static async goToMainPage(userId) {
    try {
      const userData = await User.findById(userId);
      return userData;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = AuthServices;
