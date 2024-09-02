
const formModel = require('../model/form.model');
const userModel = require('../model/user.model');

async function handleSignup(req, res) {
    const { name, email, phone, password } = req.body;

    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
        return res.status(400).json({
            message: "User already exist"
        });
    }
    const user = await userModel.create({
        name,
        email,
        phone,
        password,
    });

    return res.status(201).json({
        message: "User created successfully",
        user: user
    });
};

async function handleSignin(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if(!user){
        return res.status(400).json({
            message: "Please enter valid email"
        });
    }
    if(password !== user.password){
        return res.status(400).json({
            message: "Please enter valid password"
        });
    }
    return res.status(200).json({
        message: "signin successfully"
    });
};

async function handleGetAllForms(req, res) {
    const forms = await formModel.find();
    return res.status(200).json(forms);
};

function handleSignout(req, res) {
    
}

module.exports = {
    handleSignup,
    handleSignin,
    handleGetAllForms
}