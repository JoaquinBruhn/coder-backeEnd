const User = require("../../modals/user.js");

class MongodbDaoUsers {
  async getUserData(userId) {
    try {
      const userData = await User.findById(userId);
      return userData;
    } catch (error) {
      console.log(error);
    }
  }
}

const mongodbDaoUsers = new MongodbDaoUsers();

module.exports = mongodbDaoUsers;
