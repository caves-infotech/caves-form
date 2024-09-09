const express = require('express');
const { handleSignup, handleSignin, handleGetAllForms } = require('../controller/user.controller');

const router = express.Router();

router.post('/signup', handleSignup);
router.post('/signin', handleSignin);
// router.get('/me', (req, res) => {    
//     res.status(200).json({ user: req.user});
//   });
  
router.get('/forms', handleGetAllForms);

// router.get('/:id', (req, res)=>{
//     res.json({userId: req.params.id});
// });

module.exports = router;