const express = require('express');
const { handlePostForm, handlePutForm, handleParkingPostForm, handleParkingPutForm } = require('../controller/form.controller');

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

module.exports = router;