const { Router } = require("express");
const userRouter = Router();

//importing
const { signupUser, findAllUsers } = require("./controllers");

//creating a user
userRouter.post("/users/signup", signupUser);

//
userRouter.get("/users", findAllUsers);

//exporting
module.exports = userRouter;
