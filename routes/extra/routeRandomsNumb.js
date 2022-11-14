const express = require("express");
const { Router } = express;
const { fork } = require("child_process");
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

const randomsNumbRouter = new Router();

randomsNumbRouter.get("/", (req, res) => {
  try {
    const childProcess = fork("./modals/processRandoms");
    childProcess.send({ type: "calculate", radius: 100000000 });
    childProcess.on("message", (result) => {
      console.log("completed");
      res.json(result);
    });
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});
randomsNumbRouter.get("/:cant", (req, res) => {
  try {
    const childProcess = fork("./modals/processRandoms.js");
    childProcess.send({ type: "calculate", radius: req.params.cant });
    childProcess.on("message", (result) => {
      console.log("completed");
      res.json(result);
    });
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = randomsNumbRouter;
