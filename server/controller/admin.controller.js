const adminModel = require("../model/admin.model");
const formModel = require("../model/form.model");
const userModel = require("../model/user.model");


async function handleAdminSignup(req, res) {
    const { name, email, password } = req.body;

    const isEmailExist = await adminModel.findOne({ email });
    if (isEmailExist) {
        return res.status(400).json({
            message: "Admin already exist"
        });
    }
    const admin = await adminModel.create({
        name,
        email,
        password,
    });

    return res.status(201).json({
        message: "Admin created successfully",
        admin: admin
    });
};

async function handleAdminSignin(req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });
    if(!admin){
        return res.status(400).json({
            message: "Please enter valid email"
        });
    }
    if(password !== admin.password){
        return res.status(400).json({
            message: "Please enter valid password"
        });
    }
    return res.status(200).json({
        message: "Admin signin successfully"
    });
};

async function handleGetAllUsers(req, res) {
    const users = await userModel.find({});
    return res.status(200).json({
        users
    });
};

async function handleGetAllAdmins(req, res) {
    const admins = await adminModel.find({});
    return res.status(200).json({
        admins
    });
};

async function handleGetAllForms(req, res) {
    const forms = await formModel.find();
    return res.status(200).json(forms);
};

function handleAdminSignout(req, res) {
    
}

module.exports = {
    handleAdminSignup,
    handleAdminSignin,
    handleGetAllUsers,
    handleGetAllAdmins,
    handleGetAllForms
}