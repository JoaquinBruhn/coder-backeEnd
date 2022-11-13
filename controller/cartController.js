const cartService = require("../services/cartServices.js");

class CartController {
  static async addProduct(req, res) {
    try {
      const userId = req.user._id;
      const prodId = req.body.id;
      const prodToAdd = await cartService.addProduct(userId, prodId);
      res.json(`Success, ${prodToAdd.title} added to the cart.`);
    } catch (error) {
      res.json("error, product not added");
    }
  }
}

module.exports = CartController;
