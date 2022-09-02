const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://joaco:admin1@coder-backend.jyd2rnt.mongodb.net/?retryWrites=true&w=majority");

class MongodbContainer {
  constructor(schema) {
    this.schema = schema;
  }

  async getAll() {
    try {
      const content = await this.schema.find();
      mongoose.disconnect();
      return content;
    } catch (error) {
      console.log(error);
      mongoose.disconnect();
    }
  }

  async getById(id) {
    try {
      const content = await this.schema.findById(id);
      mongoose.disconnect();
      return content;
    } catch (error) {
      mongoose.disconnect();
      console.log(error);
      throw new Object({ error: "Object does not exist" });
    }
  }

  async deleteById(id) {
    try {
      const deleted = await this.schema.findByIdAndDelete(id);
      mongoose.disconnect();

      return `Deleted the product: ${deleted.title}`;
    } catch (error) {
      mongoose.disconnect();
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await this.schema.deleteMany();
      mongoose.disconnect();
      return "Collection was emptied";
    } catch (error) {
      mongoose.disconnect();
      return error;
    }
  }
}

module.exports = MongodbContainer;
