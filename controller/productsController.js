const { prodsDB } = require("../daos/index.js");
const ProductServices = require("../services/productServices.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const prod = await ProductServices.getAllProducts();
      res.render("pages/allProducts", { prod });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async getOneProduct(req, res) {
    try {
      const prod = await ProductServices.getOneProduct(req.params.id);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async saveNewProduct(req, res) {
    try {
      const prod = await ProductServices.saveNewProduct(req.body);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async EditProduct(req, res) {
    try {
      const prod = await ProductServices.EditProduct(req.params.id, req.body);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteOneProduct(req, res) {
    try {
      const prod = await ProductServices.deleteOneProduct(req.params.id);
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteAllProducts(req, res) {
    try {
      const prod = await ProductServices.deleteAllProducts();
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = ProductsController;
