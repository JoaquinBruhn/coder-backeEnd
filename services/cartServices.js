const mongodbDaoUsers = require("../daos/users/mongodbDaoUsers.js");
const { cartsDB } = require("../daos/index.js");

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

  static async makePurchase(cart) {
    try {
      const purchase = await cartsDB.makePurchase(cart);
      // await Comunications.informPurchase(req.user.username, req.user.phone, purchase)
      console.log(purchase);
      return "Success, purchase completed";
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CartServices;
