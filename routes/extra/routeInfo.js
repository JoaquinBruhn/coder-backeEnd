const express = require("express");
const { Router } = express;
const infoRouter = new Router();
const { loggerApiError } = require("../../middlewares/log4js/class32.js");

infoRouter.get("/", async (req, res) => {
  try {
    let info = {
      args: process.argv,
      platform: process.platform,
      nodeVersion: process.version,
      rss: process.memoryUsage().rss,
      execPath: process.execPath,
      processId: process.pid,
      filePath: process.cwd(),
    };
    res.send(info);
  } catch (error) {
    loggerApiError.error("there has been an error", "n/", error);
  }
});

module.exports = infoRouter;
