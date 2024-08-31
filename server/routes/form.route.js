const express = require('express');
const { handlePostForm } = require('../controller/form.controller');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({form: "form Data"});
});

router.post('/', handlePostForm);

module.exports = router;