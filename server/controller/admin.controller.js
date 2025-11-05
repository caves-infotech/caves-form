const adminModel = require("../model/admin.model");
const enquiryModel = require("../model/enquiry.model");
const formModel = require("../model/form/form.model");
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

    const admin = await adminModel.findOne({ email }).select('+password');
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

// function handleAdminSignout(req, res) {
    
// }

// Dashboard Overview
async function handleGetDashboardStats(req, res) {
    try {
        const totalUsers = await userModel.countDocuments();
        const totalEnquiries = await enquiryModel.countDocuments();

        return res.status(200).json({
            success: true,
            message: "Dashboard stats fetched successfully",
            data: {
                totalUsers,
                totalEnquiries
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching dashboard stats",
            error: error.message
        });
    }
}


// Get Admin Profile 
async function handleGetAdminProfile(req, res) {
  try {
    // You can send adminId in query or body
    const adminId = req.params.id || req.body.adminId;

    if (!adminId) {
      return res.status(400).json({ message: "Admin ID is required" });
    }

    const admin = await adminModel.findById(adminId).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching admin profile",
      error: error.message,
    });
  }
}

// Update Admin Profile
async function handleUpdateAdminProfile(req, res) {
  try {
    const adminId = req.params.id || req.body.adminId;

    if (!adminId) {
      return res.status(400).json({ message: "Admin ID is required" });
    }

    const { name, email } = req.body;

    const updatedAdmin = await adminModel
      .findByIdAndUpdate(adminId, { name, email }, { new: true })
      .select("-password");

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedAdmin,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating admin profile",
      error: error.message,
    });
  }
}

//  Admin Signout 
function handleAdminSignout(req, res) {
  return res.status(200).json({
    success: true,
    message: "Admin signed out successfully ",
  });
}


module.exports = {
    handleAdminSignup,
    handleAdminSignin,
    handleGetAllUsers,
    handleGetAllAdmins,
    handleGetAllForms,
    handleGetDashboardStats,
    handleGetAdminProfile,
    handleUpdateAdminProfile,
    handleAdminSignout
};