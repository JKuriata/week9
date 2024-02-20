const User = require("./model");

const signupUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: "user added", user: user });
  } catch (error) {
    res.status(500).json({ messege: error.messege, error: error });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "users found", users: users });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {
    res.send({ messege: "Login successful", user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  signupUser: signupUser,
  findAllUsers: findAllUsers,
  login: login,
};
