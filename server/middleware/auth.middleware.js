const {getUser} = require('../utils/auth');

function authenticateUser(req, res, next){
    const token = req.headers['authorization']?.split(' ')[1];
    // const token = req.cookies?.token;
    req.user = null;
    if(!token){
        next();
    }else{
        const user = getUser(token);
        if(!user){
            next();
        } else {
            req.user = user;
            next();
        }
    }
}

module.exports = {
    authenticateUser
}