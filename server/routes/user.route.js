const express = require("express");
const {
  handleGetUser,
  handleUpdateUser,
  handleSocialAuth,
  handleSignup,
  handleSignin,
  handleSendOtp,
  handleSendEmailOtp,
  handleVerifyOtp,
  handleSignout,
  handleGetAllForms,
  handleGetAllParkingForms,
  handleGetAllPotentialFsiForms,
  handleGetAllBuildingMarginForms,
  handleEnquiryForm,
  handleHomeEnquiryForm,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/socialAuth", handleSocialAuth);
router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.post('/', handleGetUser);
router.patch('/', handleUpdateUser);
router.post("/send-email-otp", handleSendEmailOtp );
router.post("/send-otp", handleSendOtp );
router.post("/verify-otp", handleVerifyOtp);

router.post("/signout", handleSignout);

router.post("/forms", handleGetAllForms);
router.post("/forms/parking", handleGetAllParkingForms);
router.post("/forms/potential-fsi", handleGetAllPotentialFsiForms);
router.post("/forms/building-margin", handleGetAllBuildingMarginForms);

router.post("/enquiry", handleEnquiryForm);
router.post("/home-enquiry", handleHomeEnquiryForm);

module.exports = router;
