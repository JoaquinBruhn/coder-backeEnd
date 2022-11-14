const express = require("express");
const { Router } = express;
const testRouter = new Router();
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

let str = "";

testRouter.get("/", (req, res) => {
  try {
    for (let i = 0; i < 1000; i++) {
      str += "Hola que tal? ";
    }

    res.send(str);
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = testRouter;
