
const formModel = require('../model/form.model');
const userModel = require('../model/user.model');
const {setUser} = require('../utils/auth');

async function handleSignup(req, res) {
    const { name, email, phone, password } = req.body;

    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
        return res.status(400).json({
            message: "User already exist"
        });
    }
    const user = await userModel.create({
        name: name,
        email: email,
        phone: phone,
        password: password,
    });

    return res.status(201).json({
        message: "User created successfully",
        user: user
    });
};

async function handleSignin(req, res) {
    const tokenHeader = req.cookies?.token;
    if(tokenHeader){
        return res.status(400).json({
            message: "You are already signed in"
        });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    
    if(!user){
        return res.status(401).json({
            message: "Please enter valid Email"
        });
    }
    const passwordMatched = await userModel.matchPassword(user.password, password);
    if(!passwordMatched) {
        return res.status(401).json({
            message: "Please enter valid Password"
        });
    };

    const token = setUser(user);
    res.cookie('token', token);

    return res.status(200).json({
        message: "signin successfully",
        token
    });
};

async function handleGetAllForms(req, res) {
    const user = req.user;
    if(!user){
        return res.status(400).json({
            message: "Signin to get all forms"
        });
    }

    try {
        const forms = await formModel.find({user: user?._id});
            return res.status(200).json({
            forms: forms
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occured in handleGetAllForms"
        });
    }
    
};

function handleSignout(req, res) {
    const token = req.cookies?.token;
    if(!token){
        return res.status(400).json({
            message: "you are not signed in"
        });
    }
    res.clearCookie('token');
    return res.status(200).json({
        message: "Signout successfully"
    });
}

module.exports = {
    handleSignup,
    handleSignin,
    handleGetAllForms,
    handleSignout
}