const Form = require('../model/form.model');

async function handlePostForm(req, res) {
    const clientData = req.body;
    if(!req.user){
      return res.status(400).json({
          message: "Signin to create form",
      });
    }
    const formData = new Form({
      user: req.user._id,
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
        fsi: {
            area: clientData.fsi.area,
            deductions: {
              proposedDp: clientData.fsi.deductions?.proposedDp,
              anyDp: clientData.fsi.deductions?.anyDp,
              total: clientData.fsi.deductions?.total,
            },
            balanceArea: clientData.fsi.balanceArea,
            aminitySpace: {
              required: clientData.fsi.aminitySpace?.required,
              adj2b: clientData.fsi.aminitySpace?.adj2b,
              balanceProposed: clientData.fsi.aminitySpace?.balanceProposed,
            },
            netPlotArea: clientData.fsi.netPlotArea,
            recreationOpenSpace: {
              required: clientData.fsi.recreationOpenSpace?.required,
              proposed: clientData.fsi.recreationOpenSpace?.proposed,
            },
            internalRoadArea: clientData.fsi.internalRoadArea,
            plotableArea: clientData.fsi.plotableArea,
            builtUpArea: clientData.fsi.builtUpArea,
            paymentOfPremium: {
              maxPremium: clientData.fsi.paymentOfPremium?.maxPremium,
              proposedPremium: clientData.fsi.paymentOfPremium?.proposedPremium,
            },
            inSituLoading: {
              areaAgainstDpRoad: clientData.fsi.inSituLoading?.areaAgainstDpRoad,
              areaAgainstAminitySpace: clientData.fsi.inSituLoading?.areaAgainstAminitySpace,
              tdrArea: clientData.fsi.inSituLoading?.tdrArea,
              toatlInSitu: clientData.fsi.inSituLoading?.toatlInSitu,
            },
            additinalFsi: clientData.fsi.additinalFsi,
            totalEntitlementProposed: {
              whicheverApplicable: clientData.fsi.totalEntitlementProposed?.whicheverApplicable,
              ancillaryArea: clientData.fsi.totalEntitlementProposed?.ancillaryArea,
              totalEntitlement: clientData.fsi.totalEntitlementProposed?.totalEntitlement,
            },
            maxUtilizationLimit: clientData.fsi.maxUtilizationLimit,
            totalBuiltUpAreaProposal: {
              existingBuiltUpArea: clientData.fsi.totalBuiltUpAreaProposal?.existingBuiltUpArea,
              proposedBuiltUpArea: clientData.fsi.totalBuiltUpAreaProposal?.proposedBuiltUpArea,
              totalBuiltUp: clientData.fsi.totalBuiltUpAreaProposal?.totalBuiltUp,
            },
            FSIConsumed: clientData.fsi.FSIConsumed,
            areOfInclusiveHousing: {
              required: clientData.fsi.areOfInclusiveHousing?.required,
              proposed: clientData.fsi.areOfInclusiveHousing?.proposed,
            },
        }
    });

    await formData.save()
        .then(data => console.log('Form saved successfully:', data))
        .catch(err => console.error('Error saving data in mongoDB:', err.message));

    return res.status(201).json({
        message: "Form created successfully",
    });
};

module.exports = {
    handlePostForm
};