const Enquiry = require('../model/enquiry.model');

// Create a new enquiry
const createEnquiry = async (req, res) => {
    try {
        const { user, phone, message, attachment } = req.body;
        const enquiry = new Enquiry({ user, phone, message, attachment });
        await enquiry.save();
        res.status(201).json({ success: true, data: enquiry });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all enquiries
    const getEnquiries = async (req, res) => {
        try {
            const enquiries = await Enquiry.find();
            console.log("enquiries", enquiries);
            res.status(200).json({ success: true, data: enquiries });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };

    module.exports = { createEnquiry, getEnquiries };
