export default function FSIDetails({
  formData,
  handleChange,
  handleNestedChange,
  handlePrevious,
  handleNext,
}) {
  formData.fsi.area = parseFloat(formData.plot.area);

  formData.fsi.deductions.total =
    parseFloat(formData.fsi.deductions.proposedDp) +
      parseFloat(formData.fsi.deductions.anyDp) ||
    parseFloat(formData.fsi.deductions.proposedDp) ||
    parseFloat(formData.fsi.deductions.anyDp) ||
    0;

  formData.fsi.balanceArea =
    parseFloat(formData.fsi.area) - parseFloat(formData.fsi.deductions.total) ||
    parseFloat(formData.fsi.area) ||
    0;

  if (formData.fsi.area > 4000 && formData.plot.ulb == "otherRp") {
    formData.fsi.aminitySpace.required = formData.fsi.balanceArea * 0.1;
  } else if (formData.fsi.area > 20000 && formData.plot.ulb == "muncipleCorp") {
    formData.fsi.aminitySpace.required = formData.fsi.balanceArea * 0.05;
  } else {
    formData.fsi.aminitySpace.required = 0;
  }

  formData.fsi.netPlotArea =
    parseFloat(formData.fsi.balanceArea) -
    parseFloat(formData.fsi.aminitySpace.balanceProposed);

  if (formData.fsi.balanceArea >= 4000) {
    formData.fsi.recreationOpenSpace.required = formData.fsi.balanceArea * 0.1;
  } else {
    formData.fsi.recreationOpenSpace.required = 0;
  }

  formData.fsi.plotableArea =
    parseFloat(formData.fsi.balanceArea) -
      parseFloat(formData.fsi.internalRoadArea) ||
    parseFloat(formData.fsi.balanceArea);

  if (formData.plot.areaType == "congested") {
    if (formData.plot.roadWidth == "below9") {
      formData.fsi.builtUpArea = formData.fsi.netPlotArea * 1.5;
    } else {
      formData.fsi.builtUpArea = formData.fsi.netPlotArea * 2;
    }
  } else if (formData.plot.areaType == "non-congested") {
    formData.fsi.builtUpArea = formData.fsi.netPlotArea * 1.1;
  }

  if (formData.plot.roadWidth == "below9") {
    formData.fsi.paymentOfPremium.maxPremium = 0;
  } else {
    if (formData.plot.areaType == "non-congested") {
      if (formData.plot.ulb == "muncipleCorp") {
        formData.fsi.paymentOfPremium.maxPremium = 0.5;
      } else if (formData.plot.ulb == "otherRp") {
        formData.fsi.paymentOfPremium.maxPremium = 0.3;
      }
    } else if (formData.plot.areaType == "congested") {
      formData.fsi.paymentOfPremium.maxPremium = 0.3;
    }
  }

  formData.fsi.inSituLoading.areaAgainstDpRoad =
    parseFloat(formData.fsi.deductions.proposedDp) * 2.0 || 0;

  // formData.fsi.inSituLoading.areaAgainstAminitySpace =
  //   parseFloat(formData.fsi.aminitySpace.adj2b) * 2.0;

  formData.fsi.inSituLoading.tdrArea = 0;

  if (formData.plot.areaType == "non-congested") {
    if (formData.plot.ulb == "muncipleCorp") {
      switch (formData.plot.roadWidth) {
        case "below9":
          formData.fsi.inSituLoading.tdrArea = 0;
          formData.fsi.additinalFsi = 1.1;
          break;
        case "9toBelow12":
          formData.fsi.inSituLoading.tdrArea = 0.4;
          formData.fsi.additinalFsi = 2;
          break;
        case "12toBelow15":
          formData.fsi.inSituLoading.tdrArea = 0.65;
          formData.fsi.additinalFsi = 2.25;
          break;
        case "15toBelow18":
          formData.fsi.inSituLoading.tdrArea = 0.9;
          formData.fsi.additinalFsi = 2.5;
          break;
        case "18toBelow24":
          formData.fsi.inSituLoading.tdrArea = 0.9;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.5;
          }
          break;
        case "24toBelow30":
          formData.fsi.inSituLoading.tdrArea = 1.15;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else if (formData.plot.buildingType.other == "shelter") {
            formData.fsi.additinalFsi = 2.5;
          } else {
            formData.fsi.additinalFsi = 2.75;
          }
          break;
        case "above30":
          formData.fsi.inSituLoading.tdrArea = 1.4;
          if (formData.plot.buildingType.other == "shelter") {
            formData.fsi.additinalFsi = 2.5;
          } else {
            formData.fsi.additinalFsi = 3;
          }
          break;
        default:
          break;
      }
    } else if (formData.plot.ulb == "otherRp") {
      switch (formData.plot.roadWidth) {
        case "below9":
          formData.fsi.inSituLoading.tdrArea = 0;
          formData.fsi.additinalFsi = 1.1;
          break;
        case "9toBelow12":
          formData.fsi.inSituLoading.tdrArea = 0.3;
          formData.fsi.additinalFsi = 1.7;
          break;
        case "12toBelow15":
          formData.fsi.inSituLoading.tdrArea = 0.6;
          formData.fsi.additinalFsi = 2;
          break;
        case "15toBelow18":
          formData.fsi.inSituLoading.tdrArea = 0.7;
          formData.fsi.additinalFsi = 2.1;
          break;
        case "18toBelow24":
          formData.fsi.inSituLoading.tdrArea = 0.7;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.1;
          }
          break;
        case "24toBelow30":
          formData.fsi.inSituLoading.tdrArea = 0.9;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.3;
          }
          break;
        case "above30":
          formData.fsi.inSituLoading.tdrArea = 1.1;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.5;
          }
          break;
        default:
          break;
      }
    }
  } else if (formData.plot.areaType == "congested") {
    if (formData.plot.ulb == "muncipleCorp") {
      switch (formData.plot.roadWidth) {
        case "below9":
          formData.fsi.inSituLoading.tdrArea = 0;
          formData.fsi.additinalFsi = 1.5;
          break;
        case "9toBelow18":
          formData.fsi.inSituLoading.tdrArea = 0.3;
          if (formData.plot.buildingType.other == "shelter") {
            formData.fsi.additinalFsi = 2.5;
          } else {
            formData.fsi.additinalFsi = 2.6;
          }
          break;
        case "18toBelow30":
          formData.fsi.inSituLoading.tdrArea = 0.5;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else if (formData.plot.buildingType.other == "shelter") {
            formData.fsi.additinalFsi = 2.5;
          } else {
            formData.fsi.additinalFsi = 2.8;
          }
          break;
        case "above30":
          formData.fsi.inSituLoading.tdrArea = 0.7;
          if (formData.plot.buildingType.other == "shelter") {
            formData.fsi.additinalFsi = 2.5;
          } else {
            formData.fsi.additinalFsi = 3;
          }
          break;
        default:
          break;
      }
    } else if (formData.plot.ulb == "otherRp") {
      switch (formData.plot.roadWidth) {
        case "below9":
          formData.fsi.inSituLoading.tdrArea = 0;
          formData.fsi.additinalFsi = 1.5;
          break;
        case "9toBelow18":
          formData.fsi.inSituLoading.tdrArea = 0.1;
          formData.fsi.additinalFsi = 2.4;
          break;
        case "18toBelow30":
          formData.fsi.inSituLoading.tdrArea = 0.2;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.5;
          }
          break;
        case "above30":
          formData.fsi.inSituLoading.tdrArea = 0.2;
          if (
            formData.plot.buildingType.other == "medical" ||
            formData.plot.buildingType.other == "government"
          ) {
            formData.fsi.additinalFsi = 3;
          } else {
            formData.fsi.additinalFsi = 2.5;
          }
          break;
        default:
          break;
      }
    }
  }

  formData.fsi.inSituLoading.toatlInSitu =
    parseFloat(formData.fsi.inSituLoading.areaAgainstDpRoad) +
    // parseFloat(formData.fsi.inSituLoading.areaAgainstAminitySpace) +
    parseFloat(formData.fsi.inSituLoading.tdrArea);

  if (formData.plot.buildingType.input == "other") {
    formData.fsi.totalEntitlementProposed.whicheverApplicable = 12;
  } else {
    formData.fsi.totalEntitlementProposed.whicheverApplicable =
      parseFloat(formData.fsi.netPlotArea) +
      parseFloat(formData.fsi.paymentOfPremium.proposedPremium) +
      parseFloat(formData.fsi.inSituLoading.toatlInSitu);
  }

  if (formData.plot.buildingType.input == "residential") {
    formData.fsi.totalEntitlementProposed.ancillaryArea =
      parseFloat(formData.fsi.area) * 0.6;
    formData.fsi.maxUtilizationLimit =
      (parseFloat(formData.fsi.additinalFsi) * 1.6).toFixed(3);
  } else if (formData.plot.buildingType.input == "other") {
    formData.fsi.totalEntitlementProposed.ancillaryArea =
      (parseFloat(formData.fsi.area) * 0.8).toFixed(3);
    formData.fsi.maxUtilizationLimit =
      (parseFloat(formData.fsi.additinalFsi) * 1.6).toFixed(3);
  } else if (formData.plot.buildingType.input == "mix") {
    formData.fsi.totalEntitlementProposed.ancillaryArea =
      parseFloat(formData.plot.buildingType.residential) * 0.6 +
      parseFloat(formData.plot.buildingType.commercial) * 0.8;
    formData.fsi.maxUtilizationLimit =
      ((parseFloat(formData.plot.buildingType.residential) /
        parseFloat(formData.fsi.area)) *
        parseFloat(formData.fsi.additinalFsi) *
        1.6 +
      (parseFloat(formData.plot.buildingType.commercial) /
        parseFloat(formData.fsi.area)) *
        parseFloat(formData.fsi.additinalFsi) *
        1.8).toFixed(3);
  }

  formData.fsi.totalEntitlementProposed.totalEntitlement =
    parseFloat(formData.fsi.totalEntitlementProposed.whicheverApplicable) +
    parseFloat(formData.fsi.totalEntitlementProposed.ancillaryArea);

   
  formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp =
    parseFloat(formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea) +
    parseFloat(formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea);

  formData.fsi.FSIConsumed =
    (parseFloat(formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp) /
    parseFloat(formData.fsi.totalEntitlementProposed.totalEntitlement)).toFixed(3);

  formData.fsi.areOfInclusiveHousing.required =
    parseFloat(formData.fsi.netPlotArea) * 0.2;

  return (
    <>
      <div className="p-2">
        <form onSubmit={handleNext}>
          <div className="lg:flex gap-x-2  p-2">
            <div className="flex flex-col w-full mb-2 gap-y-2">
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  1. Area (meter<sup>2</sup>):
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {(formData.fsi.area && formData.fsi.area + " Sq. Meter") ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  2. Deductions for (optional)
                </div>

                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2">
                    a. Proposed D.P./D.P. Road widening Area/ Service Road/
                    Highway widening:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.deductions.proposedDp"
                      value={formData.fsi.deductions.proposedDp}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 border-slate-400 rounded"
                    />
                    <p className=" flex items-center">Sq. Meter</p>
                  </div>
                </div>

                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    b. Any D.P. Reservation area:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.deductions.anyDp"
                      value={formData.fsi.deductions.anyDp}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                    />
                    <p className=" flex items-center">Sq. Meter</p>
                  </div>
                </div>
                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2"> c. Total (a + b):</div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.deductions.total ||
                      formData.fsi.deductions.proposedDp ||
                      formData.fsi.deductions.anyDp ||
                      0}{" "}
                    Sq. Meter
                  </div>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  3. Balance area of plot(1 - 2):
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.fsi.balanceArea + " Sq. Meter" ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2"> 4. Aminity Space</div>
                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2"> a. Required:</div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.aminitySpace.required || 0} Sq. Meter
                  </div>
                </div>

                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2">
                    b. Adjustment of 2(b), if any:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    <input
                      type="number"
                      name="fsi.aminitySpace.adj2b"
                      value={formData.fsi.aminitySpace.adj2b}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                    />
                    <p className="flex items-center">Sq. Meter</p>
                  </div>
                </div>

                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    c. Balance Proposed:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    <input
                      type="number"
                      name="fsi.aminitySpace.balanceProposed"
                      value={formData.fsi.aminitySpace.balanceProposed}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                      required
                    />
                    <p className="flex items-center">Sq. Meter</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  5. Net plot area (3 - 4(c)):
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {(formData.fsi.netPlotArea &&
                    formData.fsi.netPlotArea + " Sq. Meter") ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  6. Recreational Open Space
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2"> a. Required:</div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.recreationOpenSpace.required + " Sq. Meter" ||
                      "Enter data in required field"}
                  </div>
                </div>

                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2"> b. Proposed:</div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.recreationOpenSpace.proposed"
                      value={formData.fsi.recreationOpenSpace.proposed}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                    />
                    <p className="flex items-center">Sq. Meter</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  7. Internal Road Area:
                </div>
                <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                  {" "}
                  <input
                    type="number"
                    name="fsi.internalRoadArea"
                    value={formData.fsi.internalRoadArea}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (
                        (!isNaN(value) && value >= 0) ||
                        e.target.value === ""
                      ) {
                        handleChange(e);
                      }
                    }}
                    min="0"
                    className="w-[75%] p-2 border-2 rounded border-slate-400"
                  />
                  <p className="flex items-center">Sq. Meter</p>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2"> 8. Plotable Area:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.fsi.plotableArea + " Sq. Meter" ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  9. Built up area with reference to basic FSI as per front road
                  width:
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {(formData.fsi.builtUpArea &&
                    formData.fsi.builtUpArea + " Sq. Meter") ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  10. Addition of FSI on payment of premium:
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    a. Maximum permissible premium FSI - based on road width/
                    TOD zone:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.paymentOfPremium.maxPremium ||
                      "Enter data in required field"}
                  </div>
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    b. Proposed FSI on payment of premium:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.paymentOfPremium.proposedPremium"
                      value={formData.fsi.paymentOfPremium.proposedPremium}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-full p-2 border-2 rounded border-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  11. In-situ FSI/ TDR loading:
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    a. In-situ area against D.P. road [2.0 * 2(a)]:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.inSituLoading.areaAgainstDpRoad +
                      " Sq. Meter"}
                  </div>
                </div>
                {/* conditional renderening remaining */}
                {/* <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  b. In-situ area against aminity space if handed over:
                </div>
                <td
                  className="px-4 border-r border-slate-400"
                  name="fsi.inSituLoading.areaAgainstAminitySpace"
                >
                  {formData.fsi.inSituLoading.areaAgainstAminitySpace ||
                    "Enter data in required field"}
                </div>
              </div> */}
                <div className="sm:flex ">
                  <div className="px-4 py-2 sm:w-1/2"> b. TDR area:</div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {(formData.fsi.inSituLoading.tdrArea &&
                      formData.fsi.inSituLoading.tdrArea + " Sq. Meter") ||
                      "Enter data in required field"}
                  </div>
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    c. Total in-situ / TDR loading proposed (a + b):
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.inSituLoading.toatlInSitu ||
                      "Enter data in required field"}
                  </div>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  12. Additional FSI area under Chapter No.7:
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.fsi.additinalFsi || "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  13. Total entitlement of FSI in the proposal:
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.totalEntitlementProposed
                      .whicheverApplicable || "Enter data in required field"}
                  </div>
                </div>

                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    b. Ancillary Area FSI up to 60% or 80% with payment of
                    charges:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    {(formData.fsi.totalEntitlementProposed.ancillaryArea &&
                      formData.fsi.totalEntitlementProposed.ancillaryArea +
                        " Sq. Meter") ||
                      "Enter data in required field"}
                  </div>
                </div>

                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    c. Total entitlement(a + b):
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {(formData.fsi.totalEntitlementProposed.totalEntitlement &&
                      formData.fsi.totalEntitlementProposed.totalEntitlement +
                        " Sq. Meter") ||
                      "Enter data in required field"}
                  </div>
                </div>
              </div>

              {/* remaining for calculation */}
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  14. Maximum utilization limit of FSI (building potential)
                  permissible as per-2 road width:
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.fsi.maxUtilizationLimit ||
                    "Enter data in required field"}
                </div>
              </div>

              <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  15. Total built-up area in proposal (excluding area at 17(b)):
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    a. Existing built-up area:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
                      value={
                        formData.fsi.totalBuiltUpAreaProposal
                          .existingBuiltUpArea
                      }
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                    />
                    <p className="flex items-center">Sq. Meter</p>
                  </div>
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    b. Proposed built-up area as per P-line:
                  </div>
                  <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea"
                      value={
                        formData.fsi.totalBuiltUpAreaProposal
                          .proposedBuiltUpArea
                      }
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (
                          (!isNaN(value) && value >= 0) ||
                          e.target.value === ""
                        ) {
                          handleNestedChange(e);
                        }
                      }}
                      min="0"
                      className="w-[75%] p-2 border-2 rounded border-slate-400"
                    />
                    <p className="flex items-center">Sq. Meter</p>
                  </div>
                </div>
                <div className="sm:flex ">
                  {" "}
                  <div className="px-4 py-2 sm:w-1/2"> c. Total (a + b):</div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp ||
                      "Enter data in required field"}
                  </div>
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  {" "}
                  16. FSI consumed (15 / 13) OR {" < "} Sr.No. 14 :
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.fsi.FSIConsumed || "Enter data in required field"}
                </div>
              </div>

              {formData.plot.groupHousing == "yes" && (
                <>
                  <div className=" even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                    <div className="px-4 py-2 sm:w-1/2">
                      17. Area for inclusive housing, if any:
                    </div>
                    <div className="sm:flex ">
                      {" "}
                      <div className="px-4 py-2 sm:w-1/2">
                        {" "}
                        a. Required(20% of Sr.No. 5):
                      </div>
                      <div className="px-4 py-2 sm:w-1/2">
                        {formData.fsi.areOfInclusiveHousing.required ||
                          "Enter data in required field"}
                      </div>
                    </div>
                    <div className="sm:flex ">
                      <div className="px-4 py-2 sm:w-1/2"> b. Proposed:</div>
                      <div className=" flex justify-between px-4 py-2 sm:w-1/2">
                        {" "}
                        <input
                          type="number"
                          name="fsi.areOfInclusiveHousing.proposed"
                          value={formData.fsi.areOfInclusiveHousing.proposed}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (
                              (!isNaN(value) && value >= 0) ||
                              e.target.value === ""
                            ) {
                              handleNestedChange(e);
                            }
                          }}
                          min="0"
                          className="w-[75%] p-2 border-2 rounded border-slate-400"
                        />
                        <p className="flex items-center">Sq. Meter</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between p-2 gap-2">
            <button
              onClick={handlePrevious}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Previous
            </button>
            <button
              type="submit"
              // onClick={handleNext}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
