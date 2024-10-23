const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const nodemailer =require('nodemailer');

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
console.log(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

class OTPStore {
    constructor() {
        this.otpMap = {}; // To store OTPs
        this.expiryMap = {}; // To store OTP expiry times
    }

    // Store OTP with email and set an expiry time (e.g., 5 minutes)
    storeOTP(email, otp) {
        const expiryTime = Date.now() + 10 * 60 * 1000; // Expires in 10 minutes
        this.otpMap[email] = otp;
        this.expiryMap[email] = expiryTime;
    }

    // Retrieve OTP if it is still valid
    retrieveOTP(email) {
        const currentTime = Date.now();
        const expiryTime = this.expiryMap[email];
        
        if (expiryTime && currentTime < expiryTime) {
            return this.otpMap[email];
        } else {
            // OTP has expired or does not exist
            return null;
        }
    }

    // Remove OTP after use or expiry
    removeOTP(email) {
        delete this.otpMap[email];
        delete this.expiryMap[email];
    }
}

function setUser(user) {

    return jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET);
}

function getUser(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    getUser,
    setUser,
    client,
    transporter,
    OTPStore
}