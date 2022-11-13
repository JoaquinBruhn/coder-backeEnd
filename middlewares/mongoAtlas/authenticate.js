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

module.exports = { authenticationDB, authenticationFetch };
