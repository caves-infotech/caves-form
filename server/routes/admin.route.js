const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({admin: 123});
});
router.get('/:id', (req, res)=>{
    res.json({adminId: req.params.id});
});

module.exports = router;