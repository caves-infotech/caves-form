const express = require('express');
const { handleSocialAuth, handleSignup, handleSignin, handleSendOtp, handleVerifyOtp, handleGetAllForms } = require('../controller/user.controller');

const router = express.Router();

router.post('/socialAuth', handleSocialAuth);
router.post('/signup', handleSignup);
router.post('/signin', handleSignin);
// router.get('/me', (req, res) => {    
//     res.status(200).json({ user: req.user});
//   });
router.post('/send-otp', handleSendOtp);
router.post('/verify-otp', handleVerifyOtp);

  
router.post('/forms', handleGetAllForms);

module.exports = router;