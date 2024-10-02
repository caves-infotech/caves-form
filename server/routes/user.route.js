const express = require('express');
const { handleSocialAuth, handleSignup, handleSignin, handleSendOtp, handleVerifyOtp, handleSignout, handleGetAllForms, handleGetAllParkingForms } = require('../controller/user.controller');

const router = express.Router();

router.post('/socialAuth', handleSocialAuth);
router.post('/signup', handleSignup);
router.post('/signin', handleSignin);
// router.get('/me', (req, res) => {    
//     res.status(200).json({ user: req.user});
//   });
router.post('/send-otp', handleSendOtp);
router.post('/verify-otp', handleVerifyOtp);

router.post('/signout', handleSignout);

  
router.post('/forms', handleGetAllForms);
router.post('/forms/parking', handleGetAllParkingForms);


module.exports = router;