const buildingMarginFormModel = require('../model/form/buildingMargin.model');
const Form = require('../model/form/form.model');
const parkingForm = require('../model/form/parking.model');
const potentialFsiFormModel = require('../model/form/potentialFsi.model');

async function handlePostForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  const formData = new Form({
    user: user?.email || userMail,
    project: {
      projectName: clientData.project.projectName,
      buildingType: clientData.project.buildingType,
      plotNo: clientData.plotNo,
      village: clientData.project.village,
      taluka: clientData.project.taluka,
      district: clientData.project.district,

    },
    plot: {
      areaType: clientData.plot.areaType,
      ulb: clientData.plot.ulb,
      zone: clientData.plot.zone,
      plotType: clientData.plot.plotType,
      proRata: clientData.plot.proRata,
      builtUp: clientData.plot.builtUp,
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

async function handlePutForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await Form.findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

async function handleParkingPostForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  const formData = new parkingForm({
    user: user?.email || userMail,
    name: clientData.name,
    ulb: clientData.ulb,
    areaType: clientData.areaType,
    zone: clientData.zone,
    buildingType: clientData.buildingType,
    residential: {
      input: clientData.residential.input,
      multi: {
        area150above: parseInt(clientData.residential.multi.area150above),
        area80To150: parseInt(clientData.residential.multi.area80To150),
        area40To80: parseInt(clientData.residential.multi.area40To80),
        area30To40: parseInt(clientData.residential.multi.area30To40),
        areaLess30: parseInt(clientData.residential.multi.areaLess30),
        above5PercentCar: parseInt(clientData.residential.multi.above5PercentCar),
        ulbForAboveCar: parseInt(clientData.residential.multi.ulbForAboveCar),
        above5PercentScooter: parseInt(clientData.residential.multi.above5PercentScooter),
        ulbForAboveScooter: parseInt(clientData.residential.multi.ulbForAboveScooter),
      },
      lodge: clientData.residential.lodge,
      restaurants: clientData.residential.restaurants
    },
    institutional: clientData.institutional,
    publicGathering: {
      input: clientData.publicGathering.input,
      assembly: clientData.publicGathering.assembly,
      multiplex: clientData.publicGathering.multiplex,
      mangalKaryalaya: clientData.publicGathering.mangalKaryalaya,
      communityHall: clientData.publicGathering.communityHall
    },
    educational: {
      input: clientData.educational.input,
      schools: {
        forEvery100sqm: clientData.educational.schools.forEvery100sqm,
        forEvery3Classroom: clientData.educational.schools.forEvery3Classroom
      },
      college: {
        forEvery100sqm: clientData.educational.college.forEvery100sqm,
        forEvery3Classroom: clientData.educational.college.forEvery3Classroom,
      },
      coaching: clientData.educational.coaching,
    },
    govOrPublicOrPrivate: {
      input: clientData.govOrPublicOrPrivate.input,
      visitor: 20,
    },
    mercantile: {
      input: clientData.mercantile.input,
      marketStoresShops: clientData.mercantile.marketStoresShops,
      wholeSale: clientData.mercantile.wholeSale,
      hazardousBuilding: clientData.mercantile.hazardousBuilding,
      officeItBuilding: clientData.mercantile.officeItBuilding,
    },
    industrial: clientData.industrial,
    storage: clientData.storage,
    dataCentre: clientData.dataCentre,
  });

  await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

async function handleParkingPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await parkingForm.findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

async function handlePotentialFsiPostForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  const formData = new potentialFsiFormModel({
    user: user?.email || userMail,
    projectName: clientData.projectName,
    buildingType: clientData.buildingType,
    areaType: clientData.areaType,
    ulb: clientData.ulb,
    zone: clientData.zone,
    plotType: clientData.plotType,
    proRata: clientData.proRata,
    builtUp: clientData.builtUp,
    area: clientData.area,
    roadWidth: clientData.roadWidth,
  });

  await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

async function handlePotentialFsiPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await potentialFsiFormModel.findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

async function handleBuildingMargingPostForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  const formData = new buildingMarginFormModel({
    user: user?.email || userMail,
    projectName: clientData.projectName,
    buildingType: clientData.buildingType,
    areaType: clientData.areaType,
    ulb: clientData.ulb,
    zone: clientData.zone,
    plotType: clientData.plotType,
    moreThan500: clientData.moreThan500,
    buildingHeight: clientData.buildingHeight,
    roadDirection: {
      front: {
        input: clientData.roadDirection.front.input,
        roadWidth: clientData.roadDirection.front.roadWidth
      },
      back: {
        input: clientData.roadDirection.back.input,
        roadWidth: clientData.roadDirection.back.roadWidth
      },
      left: {
        input: clientData.roadDirection.left.input,
        roadWidth: clientData.roadDirection.left.roadWidth
      },
      right: {
        input: clientData.roadDirection.right.input,
        roadWidth: clientData.roadDirection.right.roadWidth
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

async function handleBuildingMargingPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await buildingMarginFormModel.findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then(data => console.log('Form saved successfully:', data))
    .catch(err => console.error('Error saving data in mongoDB:', err.message));

  return res.status(201).json({
    message: "Form created successfully",
  });
};

module.exports = {
  handlePostForm,
  handlePutForm,
  handleParkingPostForm,
  handleParkingPutForm,
  handlePotentialFsiPostForm,
  handlePotentialFsiPutForm,
  handleBuildingMargingPostForm,
  handleBuildingMargingPutForm
};