const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // Check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  // try to keep payload small, better experience for user
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).send({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  console.log(token);

  const luckyNumber = Math.floor(Math.random() * 99);
  res.status(200).json({
    msg: `Hello,  User`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
