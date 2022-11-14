const cartService = require("../services/cartServices.js");
const { cartsDB } = require("../daos/index.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class CartController {
  static async getAllInCart(req, res) {
    try {
      const cart = await cartsDB.getAllInCart(req.params.id);
      let totalPrice = 0;
      cart.products.map((el) => {
        totalPrice += el.price;
      });
      res.render("pages/cart", { cart: cart, totalPrice });
    } catch (error) {
      res.json("error, product not added");
    }
  }

  static async createCartNouser(req, res) {
    try {
      const cartID = await cartsDB.createCart();
      res.json({ cartID });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async makePurchase(req, res) {
    try {
      const result = await cartService.makePurchase(req.user);
      res.json(result);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", `${error}`);
    }
  }

  static async addProductToCart(req, res) {
    try {
      const prodToAdd = await cartService.addProduct(req.user._id, req.body.id);
      res.json(`Success, ${prodToAdd.title} added to the cart.`);
    } catch (error) {
      res.json("error, product not added");
    }
  }

  static async deleteAllCarts(req, res) {
    try {
      const cart = await cartsDB.deleteAll();
      res.json(cart);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteCartById(req, res) {
    try {
      const cart = await cartsDB.deleteById(req.params.id);
      res.json(cart);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async removeProductFromCart(req, res) {
    try {
      const result = await cartsDB.removeProduct(req.params.id, req.params.id_prod);
      res.json(result);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = CartController;
