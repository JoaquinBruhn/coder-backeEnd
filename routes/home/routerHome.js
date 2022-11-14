const express = require("express");
const User = require("../../modals/user.js");
const { Router } = express;
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

const homeRouter = new Router();

homeRouter.get("/", async (req, res) => {
  try {
    if (req.user) {
      const userData = await User.findById(req.user._id);
      res.render("pages/home", { data: userData });
    } else {
      res.redirect("/auth/login");
    }
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = homeRouter;
