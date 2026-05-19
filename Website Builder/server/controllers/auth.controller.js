const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function googleAuth(req, res) {
  try {
    const { name, email, avatar } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // Find user
    let user = await userModel.findOne({ email });

    // Create user if not exists
    if (!user) {
      user = await userModel.create({
        name,
        email,
        avatar,
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set cookie
   res.cookie("token", token, {
  httpOnly: true,
  secure: false, // true in production (HTTPS)
  sameSite: "lax", // good for localhost
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    return res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    console.error("Google Auth Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function logOut(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
  
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {googleAuth,logOut,};
