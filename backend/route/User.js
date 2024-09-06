const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/User');
const auth = require('../midlleware/auth');

// @route   POST /api/users/register
// @desc    Register user
router.post('/register', registerUser);

// @route   POST /api/users/login
// @desc    Authenticate user & get token
router.post('/login', loginUser);

// @route   GET /api/users/profile
// @desc    Get user profile (protected)
router.get('/profile', auth, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
