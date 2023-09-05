import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import  jwt  from 'jsonwebtoken'

// GET  /api/users/login  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Days
    })

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// POST  /api/users/register  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// POST  /api/users/logout  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  
  res.status(200).json({message: 'Logged out successfully'});
});

// GET  /api/users/profile  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("user profile");
});

// PUT  /api/users/login  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// GET  /api/users  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("auth admin user");
});

// GET  /api/users/:id  Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user By Id");
});

// PUT  /api/users/:id  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

// Delete  /api/users/:id  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
