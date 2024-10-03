const express = require('express');
const { handlePostForm, handlePutForm, handleParkingPostForm, handleParkingPutForm, handlePotentialFsiPostForm, handlePotentialFsiPutForm, handleBuildingMargingPostForm, handleBuildingMargingPutForm } = require('../controller/form.controller');

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

router.get('/building-margin', (req, res)=>{
    res.json({form: "form Data"});
});
router.post('/building-margin', handleBuildingMargingPostForm);
router.put('/building-margin', handleBuildingMargingPutForm);

module.exports = router;