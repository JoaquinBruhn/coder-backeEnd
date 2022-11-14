const cartService = require("../services/cartServices.js");

class CartController {
  static async addProduct(req, res) {
    try {
      const prodToAdd = await cartService.addProduct(req.user._id, req.body.id);
      res.json(`Success, ${prodToAdd.title} added to the cart.`);
    } catch (error) {
      res.json("error, product not added");
    }
  }

  static async makePurchase(req, res) {
    try {
      const result = await cartService.makePurchase(req.user);
      // await Comunications.informPurchase(req.user.username, req.user.phone, purchase)
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CartController;
