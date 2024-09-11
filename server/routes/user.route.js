const express = require('express');
const { handleSocialAuth, handleSignup, handleSignin, handleGetAllForms } = require('../controller/user.controller');

const router = express.Router();

router.post('/socialAuth', handleSocialAuth);
router.post('/signup', handleSignup);
router.post('/signin', handleSignin);
// router.get('/me', (req, res) => {    
//     res.status(200).json({ user: req.user});
//   });
  
router.post('/forms', handleGetAllForms);

// router.get('/:id', (req, res)=>{
//     res.json({userId: req.params.id});
// });

module.exports = router;