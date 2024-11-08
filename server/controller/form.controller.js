const buildingMarginFormModel = require("../model/form/buildingMargin.model");
const Form = require("../model/form/form.model");
const parkingForm = require("../model/form/parking.model");
const potentialFsiFormModel = require("../model/form/potentialFsi.model");
const File = require("../model/form/resultShare.model");
const cloudinary = require("cloudinary").v2;

async function handlePostForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const userMail = req.body?.session?.user?.email;

  console.log(req.body);

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  const formData = new Form({
    user: user?.email || userMail,
    project: {
      projectName: clientData.project.projectName,
      plotNo: clientData.plotNo,
      village: clientData.project.village,
      taluka: clientData.project.taluka,
      district: clientData.project.district,
    },
    plot: {
      groupHousing: "",
      buildingType: {
        input: clientData.plot.buildingType.input,
        other: clientData.plot.buildingType.other,
        residential: clientData.plot.buildingType.residential,
        commercial: clientData.plot.buildingType.commercial,
      },
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
        areaAgainstAminitySpace:
          clientData.fsi.inSituLoading?.areaAgainstAminitySpace,
        tdrArea: clientData.fsi.inSituLoading?.tdrArea,
        toatlInSitu: clientData.fsi.inSituLoading?.toatlInSitu,
      },
      additinalFsi: clientData.fsi.additinalFsi,
      totalEntitlementProposed: {
        whicheverApplicable:
          clientData.fsi.totalEntitlementProposed?.whicheverApplicable,
        ancillaryArea: clientData.fsi.totalEntitlementProposed?.ancillaryArea,
        totalEntitlement:
          clientData.fsi.totalEntitlementProposed?.totalEntitlement,
      },
      maxUtilizationLimit: clientData.fsi.maxUtilizationLimit,
      totalBuiltUpAreaProposal: {
        existingBuiltUpArea:
          clientData.fsi.totalBuiltUpAreaProposal?.existingBuiltUpArea,
        proposedBuiltUpArea:
          clientData.fsi.totalBuiltUpAreaProposal?.proposedBuiltUpArea,
        totalBuiltUp: clientData.fsi.totalBuiltUpAreaProposal?.totalBuiltUp,
      },
      FSIConsumed: clientData.fsi.FSIConsumed,
      areOfInclusiveHousing: {
        required: clientData.fsi.areOfInclusiveHousing?.required,
        proposed: clientData.fsi.areOfInclusiveHousing?.proposed,
      },
    },
  });

  await formData
    .save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

async function handlePutForm(req, res) {
  const user = req.user;
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await Form.findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(200).json({
    message: "Form updated successfully",
  });
}

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
        area150above: parseInt(clientData.residential.multi.area150above || 0),
        area80To150: parseInt(clientData.residential.multi.area80To150 || 0),
        area40To80: parseInt(clientData.residential.multi.area40To80 || 0),
        area30To40: parseInt(clientData.residential.multi.area30To40 || 0),
        areaLess30: parseInt(clientData.residential.multi.areaLess30 || 0),
        above5PercentCar: parseInt(
          clientData.residential.multi.above5PercentCar || 0
        ),
        ulbForAboveCar: parseInt(clientData.residential.multi.ulbForAboveCar || 0),
        above5PercentScooter: parseInt(
          clientData.residential.multi.above5PercentScooter || 0
        ),
        ulbForAboveScooter: parseInt(
          clientData.residential.multi.ulbForAboveScooter || 0
        ),
      },
      lodge: clientData.residential.lodge,
      restaurants: clientData.residential.restaurants,
    },
    institutional: clientData.institutional,
    publicGathering: {
      input: clientData.publicGathering.input,
      assembly: clientData.publicGathering.assembly,
      multiplex: clientData.publicGathering.multiplex,
      mangalKaryalaya: clientData.publicGathering.mangalKaryalaya,
      communityHall: clientData.publicGathering.communityHall,
    },
    educational: {
      input: clientData.educational.input,
      schools: {
        forEvery100sqm: clientData.educational.schools.forEvery100sqm,
        forEvery3Classroom: clientData.educational.schools.forEvery3Classroom,
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

  await formData
    .save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

async function handleParkingPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await parkingForm
    .findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

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
    buildingType: {
      input: clientData.buildingType.input,
      other: clientData.buildingType.other,
      residential: clientData.buildingType.residential,
      commercial: clientData.buildingType.commercial,
    },
    areaType: clientData.areaType,
    ulb: clientData.ulb,
    proRata: clientData.proRata,
    builtUp: clientData.builtUp,
    area: clientData.area,
    roadWidth: clientData.roadWidth,
    maxPotential: clientData.maxPotential,
  });

  await formData
    .save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

async function handlePotentialFsiPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await potentialFsiFormModel
    .findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

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
    buildingType: {
      input: clientData.buildingType.input,
      commercial: {
        input: clientData.buildingType.commercial.input,
        subInput: clientData.buildingType.commercial.subInput,
      },
    },
    areaType: clientData.areaType,
    ulb: clientData.ulb,
    zone: clientData.zone,
    moreThan500: clientData.moreThan500,
    buildingHeight: clientData.buildingHeight,
    plotWidth: clientData.plotWidth,
    plotArea: clientData.plotArea,
    plotType: clientData.plotType,
    roadDirection: {
      front: {
        input: clientData.roadDirection.front.input,
        margin: clientData.roadDirection.front.margin,
      },
      back: {
        input: clientData.roadDirection.back.input,
        radioInput: clientData.roadDirection.back.radioInput,
        margin: clientData.roadDirection.back.margin,
      },
      left: {
        input: clientData.roadDirection.left.input,
        radioInput: clientData.roadDirection.left.radioInput,
        margin: clientData.roadDirection.left.margin,
      },
      right: {
        input: clientData.roadDirection.right.input,
        radioInput: clientData.roadDirection.right.radioInput,
        margin: clientData.roadDirection.right.margin,
      },
    },
  });

  await formData
    .save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

async function handleBuildingMargingPutForm(req, res) {
  const clientData = req.body?.formData;
  const formId = req.body?.formId;
  const userMail = req.body?.session?.user?.email;

  if (!req.user && !userMail) {
    return res.status(400).json({
      message: "Signin to update form",
    });
  }

  await buildingMarginFormModel
    .findByIdAndUpdate(formId, clientData)
    // await formData.save()
    .then((data) => console.log("Form saved successfully:", data))
    .catch((err) =>
      console.error("Error saving data in mongoDB:", err.message)
    );

  return res.status(201).json({
    message: "Form created successfully",
  });
}

async function uploadFile(req, res) {
  const file = req.files?.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw", // Specify the file type (raw for PDFs)
          // public_id: user, // Optionally set the public ID based on the title
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error); // Reject the promise on error
          }
          resolve(result); // Resolve the promise with the upload result
        }
      );

      uploadStream.end(file.data); // End the stream with the file data
    });

    const response = await File.create({
      fileUrl: uploadResult.secure_url,
      cloudinaryId: uploadResult.public_id, // Store the file URL in MongoDB
    });

    return res.status(200).json({
      message: "File uploaded successfully",
      file: response,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error is upload file", error: error.message });
  }
}

async function getFile(req, res) {
  const imageId = req.params.id;
    if (!imageId || imageId.length < 24) {
      return res.status(404).json({ message: "Url not found" });
    }
  try {
    const file = await File.findById(imageId); 

    if (!file ) {
      return res.status(404).json({ message: "Image not found" });
    }
    return res.json({ fileUrl: file.fileUrl }); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error at getting image from cloudinary" });
  }
}

module.exports = {
  handlePostForm,
  handlePutForm,
  handleParkingPostForm,
  handleParkingPutForm,
  handlePotentialFsiPostForm,
  handlePotentialFsiPutForm,
  handleBuildingMargingPostForm,
  handleBuildingMargingPutForm,
  uploadFile,
  getFile,
};
