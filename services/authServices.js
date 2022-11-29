const User = require("../modals/user.js");
const bcrypt = require("bcrypt");
const { cartsDB } = require("../daos/index.js");
const Comunications = require("./comunications.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class AuthServices {
  static async validateNewUser(userData) {
    try {
      const { username } = userData;
      let validation = await User.findOne({ username });
      return !!validation;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async saveNewUser(userData) {
    try {
      const { username, email, phone, age, address, password } = userData;
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
      let result = true;
      return result;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

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
