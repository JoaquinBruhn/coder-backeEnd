const express = require("express");
const { Router } = express;
const notFoundError = Router();
const ErrorController = require("../../controller/errorController.js");

notFoundError.get("*", ErrorController);

notFoundError.post("*", ErrorController);

notFoundError.delete("*", ErrorController);

notFoundError.put("*", ErrorController);

module.exports = notFoundError;
