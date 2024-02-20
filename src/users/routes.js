const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass } = require("../middleware/auth");

//importing from controllers
const { signupUser, findAllUsers, login } = require("./controllers");

//creating a user
userRouter.post("/users/signup", hashPass, signupUser);

userRouter.post("/users/login", comparePass, login);

userRouter.get("/users/findAllUsers", findAllUsers);

//exporting
module.exports = userRouter;
