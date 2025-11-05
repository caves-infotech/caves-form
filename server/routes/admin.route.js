
const express = require('express');
const { handleAdminSignin,
     handleAdminSignup, 
     handleGetAllUsers, 
     handleGetAllAdmins,
     handleGetAllForms , 
     handleGetDashboardStats,
     handleGetAdminProfile,
     handleUpdateAdminProfile,
     handleAdminSignout } = require('../controller/admin.controller');

const router = express.Router();
const { authenticateUser } = require('../middleware/auth.middleware');

// Get admin profile
router.get("/profile/:id", handleGetAdminProfile);
router.put("/profile/:id", handleUpdateAdminProfile);
router.post('/signup', handleAdminSignup);
router.post('/signin', handleAdminSignin);
router.get('/users', handleGetAllUsers);
router.get('/admins', handleGetAllAdmins);
router.get('/forms', handleGetAllForms);

// router.get('/:id', (req, res)=>{
//     res.json({adminId: req.params.id});
// });
//  New dashboard routes
router.get('/dashboard', authenticateUser, handleGetDashboardStats);
router.get('/profile', authenticateUser, handleGetAdminProfile);
router.put('/profile', authenticateUser, handleUpdateAdminProfile);
router.post('/signout', authenticateUser, handleAdminSignout);


module.exports = router;