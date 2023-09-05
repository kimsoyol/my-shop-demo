import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'

// GET  /api/users/login  Public
const authUser = asyncHandler(async(req, res) => {
    res.send('auth user')
})

// POST  /api/users/register  Public
const registerUser = asyncHandler(async(req, res) => {
    res.send('register user')
})

// POST  /api/users/logout  Private
const logoutUser = asyncHandler(async(req, res) => {
    res.send('logout user')
})

// GET  /api/users/profile  Private
const getUserProfile = asyncHandler(async(req, res) => {
    res.send('user profile')
})

// PUT  /api/users/login  Private
const updateUserProfile = asyncHandler(async(req, res) => {
    res.send('update user profile')
})


// GET  /api/users  Private/Admin
const getUsers = asyncHandler(async(req, res) => {
    res.send('auth admin user')
})

// GET  /api/users/:id  Private/Admin
const getUserByID = asyncHandler(async(req, res) => {
    res.send('get user By Id')
})

// PUT  /api/users/:id  Private/Admin
const updateUser = asyncHandler(async(req, res) => {
    res.send('update user')
})

// Delete  /api/users/:id  Private/Admin
const deleteUser = asyncHandler(async(req, res) => {
    res.send('delete user')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
}
