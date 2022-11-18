const cartService = require("../services/cartServices.js");
const { cartsDB } = require("../daos/index.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");
const CartServices = require("../services/cartServices.js");

class CartController {
  static async createCartNouser(req, res) {
    try {
      const cartID = await CartServices.createCart();
      res.json({ cartID });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async getAllInCart(req, res) {
    try {
      const result = await CartServices.getAllInCart(req.params.id);
      res.render("pages/cart", { cart: result.products, totalPrice: result.totalPrice, cartId: req.params.id });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
      res.json("error, cart not avaliable.");
    }
  }

  static async makePurchase(req, res) {
    try {
      const result = await CartServices.makePurchase(req.user);
      res.json(result);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async addProductToCart(req, res) {
    try {
      const prodToAdd = await CartServices.addProduct(req.user._id, req.body.id);
      res.json(`Success, ${prodToAdd.title} added to the cart.`);
    } catch (error) {
      res.json("error, product not added");
    }
  }

  static async removeProductFromCart(req, res) {
    try {
      const result = await CartServices.removeProductFromCart(req.params.id, req.params.id_prod);
      res.json(result);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteCartById(req, res) {
    try {
      const cart = await CartServices.deleteCartById(req.params.id);
      res.json(cart);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteAllCarts(req, res) {
    try {
      const result = await CartServices.deleteAllCarts();
      res.json(result);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = CartController;
