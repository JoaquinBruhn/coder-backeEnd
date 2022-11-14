const express = require("express");
const { Router } = express;
const minimist = require("minimist");
const processors = require("os");
const randomsRouter = new Router();
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

randomsRouter.get("/", (req, res) => {
  try {
    let info = {
      port: Object.values(minimist(process.argv.slice(2)))[0][0] || 8080,
      numb_random: Math.floor(Math.random() * 1000000 + 1),
      processorsAmount: processors.cpus().length,
    };
    res.render("pages/randoms", { info: info });
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = randomsRouter;
