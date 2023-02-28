const express = require("express");
const UserModel = require("../Models/User.model");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });
    const token = user.getJWTToken();

    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    return res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    return res.status(401).json({ success: false, msg: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ msg: "Please Enter Email and password" });
  }

  try {
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user)
      return res
        .status(401)
        .json({ msg: "Please Enter Your email and password" });

    const isPasswordCorrect = await user.comparePassword(password);
    
    if (!isPasswordCorrect)
      return res.status(401).json({ msg: "Enter Correct email and password" });


  } catch (err) {}
});