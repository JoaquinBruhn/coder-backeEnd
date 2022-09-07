class MemoryContainer {
  constructor(arr) {
    this.arr = arr;
  }

  async getAll() {
    try {
      const content = this.arr;
      return content;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MemoryContainer;
