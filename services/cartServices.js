const { cartsDB } = require("../daos/index.js");
const mongodbDaoUsers = require("../daos/users/mongodbDaoUsers.js");
const Comunications = require("./comunications.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class CartServices {
  static async addProduct(userId, prodId) {
    try {
      const userData = await mongodbDaoUsers.getUserData(userId);
      const prodToAdd = await cartsDB.addProduct(userData.cart, prodId);
      return prodToAdd;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async makePurchase(userData) {
    try {
      const purchase = await cartsDB.makePurchase(userData.cart);
      await Comunications.informPurchase(userData.username, userData.email, userData.phone, purchase);
      return "Success, purchase completed";
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = CartServices;
