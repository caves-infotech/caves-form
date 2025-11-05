const express = require('express');
const router = express.Router();
const { createEnquiry, getEnquiries } = require('../controller/enquiry.controller');

router.post('/enquiry', createEnquiry);  // For adding a new enquiry
router.get('/enquiries', getEnquiries);  // For getting all enquiries

module.exports = router;
