const { cartsDB } = require("../daos/index.js");
const mongodbDaoUsers = require("../daos/users/mongodbDaoUsers.js");
const Comunications = require("./comunications.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class CartServices {
  static async createCartNouser() {
    try {
      const cartID = await cartsDB.createCart();
      return cartID;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async getAllInCart(cartID) {
    try {
      const products = await cartsDB.getAllInCart(cartID);
      let totalPrice = 0;
      products.products.map((el) => {
        totalPrice += el.price;
      });
      return { products, totalPrice };
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async addProduct(userId, prodId) {
    try {
      const userData = await mongodbDaoUsers.getUserData(userId);
      const prodToAdd = await cartsDB.addProduct(userData.cart, prodId);
      return prodToAdd;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async removeProductFromCart(cartId, prodId) {
    const result = await cartsDB.removeProduct(cartId, prodId);
    return result;
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

  static async deleteCartById(cartId) {
    const cart = await cartsDB.deleteById(cartId);
    return cart;
  }

  static async deleteAllCarts() {
    const cart = await cartsDB.deleteAll();
    return cart;
  }
}

module.exports = CartServices;
