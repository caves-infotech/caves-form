const mongoose = require('mongoose');
const {createHmac, randomBytes} = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },
    phone: {
        type: Number,
    },
    avatar: {
        url: String
    },
    googleId: {
        type: String,
    },
},
{ timestamps: true }
);

// userSchema.pre("save", function(next){
//     const user = this;
//     if(!user.isModified("password")) return;
//     const salt = randomBytes(16).toString('hex');
//     const hashedPass = createHmac('sha256', salt)
//     .update(user.password)
//     .digest('hex');
//     this.password = salt + '.' + hashedPass;
//     next();
// });

// userSchema.static("matchPassword", async function(saltedPassword, password){
//     const salt = saltedPassword.split('.')[0];
//     const originalPass = saltedPassword.split('.')[1];
//     const hashedPass = createHmac('sha256', salt)
//     .update(password)
//     .digest('hex');
//     return hashedPass === originalPass;
// });

const userModel = mongoose.model('User', userSchema);

module.exports =  userModel;
