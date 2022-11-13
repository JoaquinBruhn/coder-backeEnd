const express = require("express");
const { Router } = express;
const { authenticationDB } = require("../../middlewares/mongoAtlas/authenticate");
const User = require("../../modals/user.js");

const routeUserInfo = new Router();

routeUserInfo.get("/", authenticationDB, async (req, res) => {
  try {
    const userData = await User.findById(req.user._id);
    const { _id, password, ...userInfo } = userData.toObject({ versionKey: false });
    res.render("pages/userInfo", { userInfo: userInfo });
  } catch (error) {
    console.log(error);
  }
});

module.exports = routeUserInfo;
