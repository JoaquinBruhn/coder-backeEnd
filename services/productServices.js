const { prodsDB } = require("../daos/index.js");
const { loggerApiError } = require("../middlewares/log4js/class32.js");

class ProductServices {
  static async getAllProducts() {
    try {
      const prod = await prodsDB.getAll();
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async getOneProduct(prodId) {
    try {
      const prod = await prodsDB.getById(prodId);
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async saveNewProduct(productObj) {
    try {
      const prod = await prodsDB.save(productObj);
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async EditProduct(prodId, newProd) {
    try {
      const prod = await prodsDB.edit(prodId, newProd);
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteOneProduct(prodId) {
    try {
      const prod = await prodsDB.deleteById(prodId);
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async deleteAllProducts() {
    try {
      const prod = await prodsDB.deleteAll();
      return prod;
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = ProductServices;
