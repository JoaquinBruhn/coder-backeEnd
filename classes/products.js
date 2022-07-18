const fs = require("fs");

class Productos {
  constructor(fileName) {
    this.fileName = "./data/" + fileName + ".txt";
  }
  async getAll() {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      const product = data.find((el) => el.id == numb);
      if (product) {
        return product;
      } else {
        throw new Object({ error: "Product does not exist" });
      }
    } catch (error) {
      return error;
    }
  }

  async save(obj) {
    try {
      let content = await fs.promises.readFile(this.fileName, "utf8");
      if (content == "") {
        fs.writeFileSync(this.fileName, "[]");
        content = "[]";
      }
      const data = JSON.parse(content);
      if (data.length > 0) {
        data.push({ ...obj, id: data[data.length - 1].id + 1 });
      } else {
        data.push({ ...obj, id: 1 });
      }
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
      return data[data.length - 1];
    } catch (error) {
      console.log(error);
    }
  }

  async edit(numb, newObj) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const products = JSON.parse(content);
      const prodId = products.findIndex((prod) => prod.id == numb);
      if (prodId < 0) {
        throw new Object({ error: "Product does not exist" });
      }

      const updatedProd = {
        title: newObj.title ? newObj.title : products[prodId].title,
        price: newObj.price ? newObj.price : products[prodId].price,
        thumbnail: newObj.thumbnail ? newObj.thumbnail : products[prodId].thumbnail,
        id: products[prodId].id,
      };
      products[prodId] = updatedProd;
      fs.writeFileSync(this.fileName, JSON.stringify(products, null, 2));
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const products = JSON.parse(content);
      const data = products.filter((el) => {
        return el.id != numb;
      });
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
      return "Updated the product";
    } catch (error) {
      console.log(error);
    }
  }
  deleteAll() {
    try {
      fs.writeFileSync(this.fileName, "[]");
      return "File was deleted";
    } catch (error) {
      return error;
    }
  }
}

module.exports = Productos;
