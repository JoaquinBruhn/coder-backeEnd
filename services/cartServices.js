const { cartsDB } = require("../daos/index.js");
const mongodbDaoUsers = require("../daos/users/mongodbDaoUsers.js");
const Comunications = require("./comunications.js");

class CartServices {
  static async addProduct(userId, prodId) {
    try {
      const userData = await mongodbDaoUsers.getUserData(userId);
      const prodToAdd = await cartsDB.addProduct(userData.cart, prodId);
      return prodToAdd;
    } catch (error) {
      console.log(error);
    }
  }

  static async makePurchase(userData) {
    try {
      const purchase = await cartsDB.makePurchase(userData.cart);
      await Comunications.informPurchase(userData.username, userData.email, userData.phone, purchase);
      return "Success, purchase completed";
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CartServices;
