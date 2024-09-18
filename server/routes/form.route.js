const express = require('express');
const { handlePostForm, handlePutForm } = require('../controller/form.controller');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({form: "form Data"});
});

router.post('/', handlePostForm);
router.put('/', handlePutForm);

module.exports = router;