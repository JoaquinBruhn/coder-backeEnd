const admin = require("../../configs/adminController.js");

const authenticationDB = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/logout");
  }
};

const authenticationFetch = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(500).json("timeout");
  }
};

const authenticationAdmin = async (req, res, next) => {
  if (admin) {
    next();
  } else {
    res.json({ error: -1, descripcion: "route '/' method 'POST' unauthorized" });
  }
};

module.exports = { authenticationDB, authenticationFetch, authenticationAdmin };
