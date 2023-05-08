const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "jagmeet") {
    req.user = { name: "jagmeet", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
