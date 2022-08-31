// import FileContainer from "../../containers/fileContainer";
const fs = require("fs");
const FileContainer = require("../../containers/fileContainer");

class FileDaoCarts extends FileContainer {
  constructor(ruta) {
    super(ruta);
  }

  async getAllInCart(cartId) {
    let searchId = parseInt(cartId);
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      const index = data.findIndex((el) => el.id === searchId);
      return data[index].products;
    } catch (error) {
      console.log(error);
    }
  }

  async removeProduct(cartId, prodId) {
    try {
      let content = await fs.promises.readFile(this.fileName, "utf8");
      if (content == "") {
        fs.writeFileSync(this.fileName, "[]");
        content = "[]";
      }
      const data = JSON.parse(content);
      const cartIndex = data.findIndex((el) => el.id === parseInt(cartId));

      if (cartIndex >= 0) {
        data[cartIndex].products = data[cartIndex].products.filter((el) => el.id !== prodId);
        fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));

        return data[cartIndex].products;
      } else {
        throw new Object({ error: "Cart does not exist" });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

// export default FileDaoCarts;
module.exports = FileDaoCarts;
