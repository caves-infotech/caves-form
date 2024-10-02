const express = require('express');
const { handlePostForm, handlePutForm, handleParkingPostForm, handleParkingPutForm, handlePotentialFsiPostForm, handlePotentialFsiPutForm } = require('../controller/form.controller');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({form: "form Data"});
});
router.post('/', handlePostForm);
router.put('/', handlePutForm);

router.get('/parking', (req, res)=>{
    res.json({form: "form Data"});
});
router.post('/parking', handleParkingPostForm);
router.put('/parking', handleParkingPutForm);

router.get('/potential-fsi', (req, res)=>{
    res.json({form: "form Data"});
});
router.post('/potential-fsi', handlePotentialFsiPostForm);
router.put('/potential-fsi', handlePotentialFsiPutForm);

module.exports = router;