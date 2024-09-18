const jwt = require('jsonwebtoken');
const twilio = require('twilio');

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

function setUser(user) {

    return jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, { expiresIn: '2d' });
}

function getUser(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    getUser,
    setUser,
    client
}