const Form = require('../model/form.model');

async function handlePostForm(req, res) {
    const clientData = req.body;
    console.log("client data: ", clientData);
    
    const formData = new Form({
        owner: {
            name: clientData.owner.name,
            email: clientData.owner.email,
            phone: clientData.owner.phone,
        },
        location: {
            village: clientData.location.village,
            taluka: clientData.location.taluka,
            district: clientData.location.district,
            ulb: clientData.location.ulb,
            zone: clientData.location.zone,
        },
        plot: {
            sizex: clientData.plot.sizex,
            sizey: clientData.plot.sizey,
            area: clientData.plot.area,
            roadWidth: clientData.plot.roadWidth,
        },
    });

    await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));
    
    res.json({success: 200});
};

module.exports = {
    handlePostForm
};