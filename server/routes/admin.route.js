const express = require('express');
const { handleAdminSignin, handleAdminSignup, handleGetAllUsers, handleGetAllAdmins, handleGetAllForms } = require('../controller/admin.controller');

const router = express.Router();

router.post('/signup', handleAdminSignup);
router.post('/signin', handleAdminSignin);
router.get('/users', handleGetAllUsers);
router.get('/admins', handleGetAllAdmins);
router.get('/forms', handleGetAllForms);

// router.get('/:id', (req, res)=>{
//     res.json({adminId: req.params.id});
// });

module.exports = router;