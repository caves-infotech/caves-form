const jwt = require('jsonwebtoken');

function setUser(user) {

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
}

function getUser(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    getUser,
    setUser
}