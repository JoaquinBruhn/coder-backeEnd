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
}

module.exports = CartServices;
