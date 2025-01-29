const userModel = require("../models/user.model");
const userservice = require("../services/user.services")
const { validationResult } = require("express-validator");

async function registerUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  const { fullName, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userservice.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
}

module.exports = { registerUser };
