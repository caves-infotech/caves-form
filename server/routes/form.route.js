const express = require("express");
const {
  handlePostForm,
  handlePutForm,
  handleDeleteForm,
  handleParkingPostForm,
  handleParkingPutForm,
  handleParkingDeleteForm,
  handlePotentialFsiPostForm,
  handlePotentialFsiPutForm,
  handlePotentialFsiDeleteForm,
  handleBuildingMargingPostForm,
  handleBuildingMargingPutForm,
  handleBuildingMarginDeleteForm,
  uploadFile,
  getFile,
} = require("../controller/form.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ form: "form Data" });
});
router.post("/", handlePostForm);
router.put("/", handlePutForm);
router.post("/delete", handleDeleteForm);

router.get("/parking", (req, res) => {
  res.json({ form: "form Data" });
});
router.post("/parking", handleParkingPostForm);
router.put("/parking", handleParkingPutForm);
router.post("/parking/delete", handleParkingDeleteForm);

router.get("/potential-fsi", (req, res) => {
  res.json({ form: "form Data" });
});
router.post("/potential-fsi", handlePotentialFsiPostForm);
router.put("/potential-fsi", handlePotentialFsiPutForm);
router.post("/potential-fsi/delete", handlePotentialFsiDeleteForm);

router.get("/building-margin", (req, res) => {
  res.json({ form: "form Data" });
});
router.post("/building-margin", handleBuildingMargingPostForm);
router.put("/building-margin", handleBuildingMargingPutForm);
router.post("/building-margin/delete", handleBuildingMarginDeleteForm);

// router.put('/resultSave', (req, res)=>{

// });
router.post("/upload", uploadFile);
router.get("/:id", getFile);

module.exports = router;
