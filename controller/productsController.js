const { prodsDB } = require("../daos/index.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const prod = await prodsDB.getAll();
      res.render("pages/allProducts", { prod });
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async getOneProduct(req, res) {
    try {
      const prod = await prodsDB.getById(req.params.id);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async saveNewProduct(req, res) {
    try {
      const prod = await prodsDB.save(req.body);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async EditProduct(req, res) {
    try {
      const prod = await prodsDB.edit(req.params.id, req.body);
      res.render("pages/products", prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteOneProduct(req, res) {
    try {
      const prod = await prodsDB.deleteById(req.params.id);
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteAllProducts(req, res) {
    try {
      const prod = await prodsDB.deleteAll();
      res.json(prod);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = ProductsController;
