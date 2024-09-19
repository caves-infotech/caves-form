const jwt = require('jsonwebtoken');
const twilio = require('twilio');

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

class OTPStore {
    constructor() {
        this.otpMap = {}; // To store OTPs
        this.expiryMap = {}; // To store OTP expiry times
    }

    // Store OTP with email and set an expiry time (e.g., 5 minutes)
    storeOTP(email, otp) {
        const expiryTime = Date.now() + 5 * 60 * 1000; // Expires in 5 minutes
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

    return jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, { expiresIn: '2d' });
}

function getUser(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    getUser,
    setUser,
    client,
    OTPStore
}