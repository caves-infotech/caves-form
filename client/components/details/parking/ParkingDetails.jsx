export default function ParkingDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleNext,
  setFormData,
}) {

  if(formData.parking?.residential?.multi){
    formData.parking.residential.multi.above5Percent =
    (parseInt(formData.parking.residential.multi.area150above.input || 0) +
      parseInt(formData.parking.residential.multi.area80To150.input || 0) +
      parseInt(formData.parking.residential.multi.area40To80.input || 0) +
      parseInt(formData.parking.residential.multi.area30To40.input || 0) +
      parseInt(formData.parking.residential.multi.areaLess30.input || 0)) *
    1.05;

  formData.parking.residential.multi.ulbForAbove =
    parseFloat(formData.parking.residential.multi.above5Percent) *
    parseFloat(formData.parking.ulb);

  }
  
  const handleAreaTypeRadioChange = (e) => {
    setFormData((prevData) => ({
      parking: {
        ...prevData.parking,
        areaType: e.target.value,
      },
    }));
  };

  const handleZoneRadioChange = (e) => {
    setFormData((prevData) => ({
      parking: {
        ...prevData.parking,
        zone: e.target.value,
      },
    }));
  };

  return (
    <>
      {/* <div className="p-5  sm:hidden">
        <h2 className="text-2xl mb-4">2. Parking Details</h2>

        <div className="mb-4">
          <label className="block mb-2">
            1. Area (meter<sup>2</sup>):
          </label>
          <div className="border border-slate-400 p-2">
            {formData.fsi.area || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">2. Deductions for</h3>
          <div className="mb-4">
            <label className="block mb-2">
              a. Proposed D.P./D.P. Road widening Area/ Service Road/ Highway
              widening:
            </label>
            <input
              type="number"
              name="fsi.deductions.proposedDp"
              value={formData.fsi.deductions.proposedDp}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Any D.P. Reservation area:</label>
            <input
              type="number"
              name="fsi.deductions.anyDp"
              value={formData.fsi.deductions.anyDp}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Total (a + b):</label>
            <div className="border border-slate-400 p-2">
              {formData.fsi.deductions.total || "Enter data in required field"}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">3. Balance area of plot (1 - 2):</label>
          <div className="border border-slate-400 p-2">
            {formData.fsi.balanceArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">4. Aminity Space</h3>
          <div className="mb-4">
            <label className="block mb-2">a. Required:</label>
            <input
              type="number"
              name="fsi.aminitySpace.required"
              value={formData.fsi.aminitySpace.required}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Adjustment of 2(b), if any:</label>
            <input
              type="number"
              name="fsi.aminitySpace.adj2b"
              value={formData.fsi.aminitySpace.adj2b}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Balance Proposed:</label>
            <input
              type="number"
              name="fsi.aminitySpace.balanceProposed"
              value={formData.fsi.aminitySpace.balanceProposed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">5. Net plot area (3 - 4(c)):</label>
          <div className="border border-slate-400 p-2">
            {formData.fsi.netPlotArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">6. Recreational Open Space</h3>
          <div className="mb-4">
            <label className="block mb-2">a. Required:</label>
            <input
              type="number"
              name="fsi.recreationOpenSpace.required"
              value={formData.fsi.recreationOpenSpace.required}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Proposed:</label>
            <input
              type="number"
              name="fsi.recreationOpenSpace.proposed"
              value={formData.fsi.recreationOpenSpace.proposed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">7. Internal Road Area:</label>
          <input
            type="number"
            name="fsi.internalRoadArea"
            value={formData.fsi.internalRoadArea}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">8. Plotable Area:</label>
          <input
            type="number"
            name="fsi.plotableArea"
            value={formData.fsi.plotableArea}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            9. Built up area with reference to basic FSI as per front road width:
          </label>
          <div className="border border-slate-400 p-2">
            {formData.fsi.builtUpArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">
            10. Addition of FSI on payment of premium:
          </h3>
          <div className="mb-4">
            <label className="block mb-2">
              a. Maximum permissible premium FSI - based on road width/ TOD zone:
            </label>
            <input
              type="number"
              name="fsi.paymentOfPremium.maxPremium"
              value={formData.fsi.paymentOfPremium.maxPremium}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              b. Proposed FSI on payment of premium:
            </label>
            <input
              type="number"
              name="fsi.paymentOfPremium.proposedPremium"
              value={formData.fsi.paymentOfPremium.proposedPremium}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">11. In-situ FSI/ TDR loading:</h3>
          <div className="mb-4">
            <label className="block mb-2">
              a. In-situ area against D.P. road [2.0 * 2(a)]:
            </label>
            <div className="border border-slate-400 p-2">
              {formData.fsi.inSituLoading.areaAgainstDpRoad ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              b. In-situ area against aminity space if handed over:
            </label>
            <div className="border border-slate-400 p-2">
              {formData.fsi.inSituLoading.areaAgainstAminitySpace ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. TDR area:</label>
            <input
              type="number"
              name="fsi.inSituLoading.tdrArea"
              value={formData.fsi.inSituLoading.tdrArea}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              d. Total in-situ / TDR loading proposed (a + b + c):
            </label>
            <div className="border border-slate-400 p-2">
              {formData.fsi.inSituLoading.total || "Enter data in required field"}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-2">11. In-situ FSI/ TDR loading:</h3>

          <div className="mb-4">
            <label className="block mb-2">
              a. In-situ area against D.P. road [2.0 * 2(a)]:
            </label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.inSituLoading.areaAgainstDpRoad ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              b. In-situ area against aminity space if handed over:
            </label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.inSituLoading.areaAgainstAminitySpace ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. TDR area:</label>
            <input
              type="number"
              name="fsi.inSituLoading.tdrArea"
              value={formData.fsi.inSituLoading.tdrArea}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              d. Total in-situ / TDR loading proposed (a + b + c):
            </label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.inSituLoading.toatlInSitu ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              12. Additional FSI area under Chapter No.7:
            </label>
            <input
              type="number"
              name="fsi.additinalFsi"
              value={formData.fsi.additinalFsi}
              onChange={handleChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-2">
              13. Total entitlement of FSI in the proposal:
            </h3>
            <label className="block mb-2">
              a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:
            </label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.totalEntitlementProposed.whicheverApplicable ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              b. Ancillary Area FSI up to 60% or 80% with payment of charges:
            </label>
            <select
              name="fsi.totalEntitlementProposed.ancillaryArea"
              value={formData.fsi.totalEntitlementProposed.ancillaryArea}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
            >
              <option value={60}>60 %</option>
              <option value={80}>80 %</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Total entitlement(a + b):</label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.totalEntitlementProposed.totalEntitlement ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              14. Maximum utilization limit of FSI (building potential)
              permissible as per road width:
            </label>
            <div className="border border-slate-400 px-4 py-2">
              {formData.fsi.maxUtilizationLimit || "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-2">
              15. Total built-up area in proposal (excluding area at 17(b)):
            </h3>

            <div className="mb-4">
              <label className="block mb-2">a. Existing built-up area:</label>
              <input
                type="number"
                name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
                value={formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea}
                onChange={handleNestedChange}
                className="w-full p-2 border-2 border-slate-400 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">
                b. Proposed built-up area as per P-line:
              </label>
              <input
                type="number"
                name="fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea"
                value={formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea}
                onChange={handleNestedChange}
                className="w-full p-2 border-2 border-slate-400 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">c. Total (a + b):</label>
              <div className="border border-slate-400 px-4 py-2">
                {formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp ||
                  "Enter data in required field"}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              16. FSI consumed (15 / 13) OR {" < "} Sr.No. 14:
            </label>
            <input
              type="number"
              name="fsi.FSIConsumed"
              value={formData.fsi.FSIConsumed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 border-slate-400 rounded"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-2">
              17. Area for inclusive housing, if any:
            </h3>

            <div className="mb-4">
              <label className="block mb-2">a. Required(20% of Sr.No. 5):</label>
              <input
                type="number"
                name="fsi.areOfInclusiveHousing.required"
                value={formData.fsi.areOfInclusiveHousing.required}
                onChange={handleNestedChange}
                className="w-full p-2 border-2 border-slate-400 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">b. Proposed:</label>
              <input
                type="number"
                name="fsi.areOfInclusiveHousing.proposed"
                value={formData.fsi.areOfInclusiveHousing.proposed}
                onChange={handleNestedChange}
                className="w-full p-2 border-2 border-slate-400 rounded"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between space-x-2">
            <button
              onClick={handlePrevious}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
              Previous
            </button>
            <button
              onClick={handleNext}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
              Preview
            </button>
          </div>
        </div>
      </div> */}

      <div className="p-5 sm:flex hidden">
        <div>
          <h2 className="text-2xl mb-4">2. Parking Details</h2>
          <table className="table-auto w-[830px] mb-8 text-sm">
            <tbody>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">1. ULB:</td>
                <td
                  className="border border-slate-400 px-4 py-2"
                  name="parking.ulb"
                >
                  <select
                    name="parking.ulb"
                    value={formData.parking.ulb}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                  >
                    <option value="">--Select ULB--</option>
                    <option value={1}>
                      Pune, Pimpri-Chinchwad and Thane Municipal Corporation
                      area and PCNTDA area
                    </option>
                    <option value={0.9}>
                      Nagpur, Nashik Municipal Corporation area
                    </option>
                    <option value={0.8}>
                      Other Municipal Corporations in MMR area except Thane M.C.
                    </option>
                    <option value={0.7}>
                      Remaining Municipal Corporations not covered at Sr. No. 1
                      to 3 and 5, Metropolitan Area Development Authority / Area
                      Development Authority/ SPA area
                    </option>
                    <option value={0.6}>
                      'D' Class Municipal Corporation area except at Sr. No.3
                    </option>
                    <option value={0.6}>
                      'A' Class Municipal Council area.
                    </option>
                    <option value={0.5}>
                      'B' and 'C' Class Municipal Council area.
                    </option>
                    <option value={0.4}>
                      Nagar Panchayat, Non Municipal Town Development Plan area
                      and areas in Regional Plan
                    </option>
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-3">
                  2. Area Type:
                </td>
                <td className="border-r border-slate-400 px-4 py-3 flex">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="parking.areaType"
                      value="congested"
                      className="form-radio h-4 w-4 text-blue-600"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-[50%] ">
                    <input
                      type="radio"
                      name="parking.areaType"
                      value="non-congested"
                      className="form-radio h-4 w-4 text-blue-600"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Non-congested</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-3">3. Zone:</td>
                <td className="border-r border-t border-slate-400 px-4 py-3 flex">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="parking.zone"
                      value="yellow"
                      className="form-radio h-4 w-4 text-blue-600"
                      onChange={handleZoneRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.parking.areaType !== "congested" && (
                    <label className="flex-[50%] ">
                      <input
                        type="radio"
                        name="parking.zone"
                        value="green"
                        className="form-radio h-4 w-4 text-blue-600"
                        onChange={handleZoneRadioChange}
                      />
                      <span className="ml-2 text-gray-700">Green</span>
                    </label>
                  )}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">
                  4. Building Type:
                </td>
                <td
                  className="border border-slate-400 px-4 py-2"
                  name="parking.buildingType"
                >
                  <select
                    name="parking.buildingType"
                    value={formData.parking.buildingType}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                  >
                    <option value="">--Select Building Type--</option>
                    <option value="residential">Residential</option>
                    <option value="institutional">Institutional</option>
                    <option value="publicGathering">Public Gathering</option>
                    <option value="educational">Educational</option>
                    <option value="govOrPublicOrPrivate">
                      Government or semi public or private business buildings
                    </option>
                    <option value="mercantile">Mercantile</option>
                    <option value="industrial">Industrial</option>
                    <option value="storage">Storage</option>
                    <option value="dataCentre"> Data Centre</option>
                  </select>
                </td>
              </tr>

              {formData.parking.buildingType == "residential" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="border border-slate-400 px-4 py-2">
                      5. Occupancy:
                    </td>
                    <td
                      className="border border-slate-400 px-4 py-2"
                      name="parking.residential.input"
                    >
                      <select
                        name="parking.residential.input"
                        value={formData.parking.residential.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                      >
                        <option value="">--Select Residential Area--</option>
                        <option value="multi">Multi- Family residential</option>
                        <option value="lodge">
                          Lodging establishment's tourist homes, hotels with
                          lodging accommodation, Star Category Hotels
                        </option>
                        <option value="restaurants">Restaurants</option>
                      </select>
                    </td>
                  </tr>

                  {formData.parking.residential?.input == "multi" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          a. For every tenement having carpet area of 150sq.m.
                          and above:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.multi.area150above.input"
                            value={
                              formData.parking.residential.multi.area150above
                                .input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {2 *
                                formData.parking.residential.multi.area150above
                                  .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {formData.parking.residential.multi.area150above
                                .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8">
                          b. For every tenement having carpet area equal to or
                          above 80 sq.m. but less than 150 sq.m.:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.multi.area80To150.input"
                            value={
                              formData.parking.residential.multi.area80To150
                                .input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.residential.multi.area80To150
                                .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {formData.parking.residential.multi.area80To150
                                .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8">
                          c. For every two tenements with each tenement having
                          carpet area equal to or above 40 sq.m. but less than
                          80 sq.m.:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.multi.area40To80.input"
                            value={
                              formData.parking.residential.multi.area40To80
                                .input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.residential.multi.area40To80
                                .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {2 *
                                formData.parking.residential.multi.area40To80
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8">
                          d. For every two tenements with each tenement having
                          carpet area less than 40 Sq.m. but more than 30 sq.m.:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.multi.area30To40.input"
                            value={
                              formData.parking.residential.multi.area30To40
                                .input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.residential.multi.area30To40
                                    .input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {formData.parking.residential.multi.area30To40
                                    .input || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.residential.multi.area30To40
                                    .input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {2 *
                                    formData.parking.residential.multi
                                      .area30To40.input || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8">
                          e. For every two tenements with each tenement having
                          carpet area less than 30 Sq.m:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.multi.areaLess30.input"
                            value={
                              formData.parking.residential.multi.areaLess30
                                .input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>Car(s): {"00"}</b>
                            <b>
                              Scooter(s):{"0"}
                              {2 *
                                formData.parking.residential.multi.areaLess30
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-b border-slate-400 px-8">
                          f. After 5% calculation:
                        </td>
                        <td
                          className="border-b border-slate-400 px-4 py- 2"
                          name="parking.residential.multi.above5Percent"
                        >
                          {formData.parking.residential.multi.above5Percent ||
                            "Enter data in required field"}
                        </td>
                      </tr>

                      <tr className="even:bg-white  odd:bg-[#dededeac] ">
                        <td className="border-l border-b border-slate-400 px-4">
                          5. ULB for above choosen option after 5% calculation:
                        </td>
                        <td
                          className="border-b border-slate-400 px-4 py-2"
                          name="parking.residential.multi.ulbForAbove"
                        >
                          {formData.parking.residential.multi.ulbForAbove ||
                            "Enter data in required field"}
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.residential?.input == "lodge" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-b border-slate-400 px-8 ">
                          For every five guest rooms:
                        </td>
                        <td className="border-r border-b border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.lodge.input"
                            value={formData.parking.residential.lodge.input}
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.residential.lodge.input ||
                                   "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {4 *
                                    formData.parking.residential.lodge.input ||
                                    "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.residential.lodge.input ||
                                    "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {6 *
                                    formData.parking.residential.lodge.input ||
                                    "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.residential?.input == "restaurants" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400  px-8 ">
                          For every 50 sq.m. of carpet area of restaurant
                          including kitchen, pantry hall, dining room etc.:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.residential.restaurants.input"
                            value={
                              formData.parking.residential.restaurants.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {"0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {8 *
                                    formData.parking.residential.restaurants
                                      .input ||"0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.residential.restaurants
                                    .input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {8 *
                                    formData.parking.residential.restaurants
                                      .input || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.parking.buildingType == "institutional" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="border-l border-slate-400 px-4 ">
                      For every 10 beds :
                    </td>
                    <td className="border-r border-slate-400 px-4 flex">
                      <input
                        type="number"
                        name="parking.institutional.input"
                        value={formData.parking.institutional.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded"
                      />
                      <div className=" flex space-x-10 px-4 items-center ">
                        {formData.parking.areaType === "congested" ? (
                          <>
                            <b>
                              Car(s):{"0"}
                              {2 * formData.parking.institutional.input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {12 * formData.parking.institutional.input || "0"}
                            </b>
                          </>
                        ) : (
                          <>
                            <b>
                              Car(s):{"0"}
                              {3 * formData.parking.institutional.input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {10 * formData.parking.institutional.input || "0"}
                            </b>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              )}

              {formData.parking.buildingType == "publicGathering" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="border border-slate-400 px-4 py-2">
                      5. Occupancy:
                    </td>
                    <td
                      className="border border-slate-400 px-4 py-2"
                      name="parking.publicGathering.input"
                    >
                      <select
                        name="parking.publicGathering.input"
                        value={formData.parking.publicGathering?.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                      >
                        <option value="">--Select Public Gathering--</option>
                        <option value="assembly">
                          Assembly (theatres, cinema houses, concert halls,
                          auditoria, assembly halls including those of college
                          and hostels)
                        </option>
                        <option value="multiplex">Multiplexes</option>
                        <option value="mangalKaryalaya">
                          Mangal karyalaya / Marriage Halls, Cultural Halls and
                          Banquet Hall
                        </option>
                        <option value="communityHall">
                          Community hall and club house in layout open
                          space(applicable only for open spaces having area 4000
                          sq.m. and more)
                        </option>
                      </select>
                    </td>
                  </tr>

                  {formData.parking.publicGathering?.input == "assembly" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 40 seats :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.publicGathering.assembly.input"
                            value={
                              formData.parking.publicGathering.assembly.input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {4 *
                                formData.parking.publicGathering.assembly
                                  .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {16 *
                                formData.parking.publicGathering.assembly
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.publicGathering?.input == "multiplex" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 40 seats :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.publicGathering.multiplex.input"
                            value={
                              formData.parking.publicGathering.multiplex.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {5 *
                                formData.parking.publicGathering.multiplex
                                  .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {14 *
                                formData.parking.publicGathering.multiplex
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.publicGathering?.input ==
                    "mangalKaryalaya" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area / lawn area of
                          fraction thereof :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.publicGathering.mangalKaryalaya.input"
                            value={
                              formData.parking.publicGathering.mangalKaryalaya
                                .input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.publicGathering.mangalKaryalaya
                                .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {5 *
                                formData.parking.publicGathering.mangalKaryalaya
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.publicGathering?.input ==
                    "communityHall" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 200 sq.m. carpet area :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.publicGathering.communityHall.input"
                            value={
                              formData.parking.publicGathering.communityHall
                                .input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.publicGathering.communityHall
                                .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {5 *
                                formData.parking.publicGathering.communityHall
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.parking.buildingType == "educational" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="border border-slate-400 px-4 py-2">
                      5. Occupancy:
                    </td>
                    <td
                      className="border border-slate-400 px-4 py-2"
                      name="parking.residential.input"
                    >
                      <select
                        name="parking.educational.input"
                        value={formData.parking.educational.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                      >
                        <option value="">--Select Educational Area--</option>
                        <option value="schools">
                          Educational Schools and the administrative as well as
                          public service areas therein
                        </option>
                        <option value="college">
                          College and administrative as well as public service
                          area therein
                        </option>
                        <option value="coaching">
                          Coaching Classes / Tuition Classes / Hobby Classes
                        </option>
                      </select>
                    </td>
                  </tr>

                  {formData.parking.educational?.input == "schools" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.educational.schools.forEvery100sqm.input"
                            value={
                              formData.parking.educational.schools
                                .forEvery100sqm.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.parking.educational.schools
                                  .forEvery100sqm.input || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.parking.educational.schools
                                    .forEvery100sqm.input || "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {4 *
                                formData.parking.educational.schools
                                  .forEvery100sqm.input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>

                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 3 class rooms :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.educational.schools.forEvery3Classroom.input"
                            value={
                              formData.parking.educational.schools
                                .forEvery3Classroom.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <b className=" px-4 ">
                            Scooter(s):{"0"}
                            {5 *
                              formData.parking.educational.schools
                                .forEvery3Classroom.input || "0"}
                          </b>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.educational?.input == "college" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area of the administrative
                          as well as public service area of the school :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.educational.college.forEvery100sqm.input"
                            value={
                              formData.parking.educational.college
                                .forEvery100sqm.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.educational.college
                                    .forEvery100sqm.input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {12 *
                                    formData.parking.educational.college
                                      .forEvery100sqm.input || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {2 *
                                    formData.parking.educational.college
                                      .forEvery100sqm.input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {17 *
                                    formData.parking.educational.college
                                      .forEvery100sqm.input || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 3 class rooms :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.educational.college.forEvery3Classroom.input"
                            value={
                              formData.parking.educational.college
                                .forEvery3Classroom.input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.parking.educational.college
                                  .forEvery3Classroom.input || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.parking.educational.college
                                    .forEvery3Classroom.input || "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {24 *
                                formData.parking.educational.college
                                  .forEvery3Classroom.input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.educational?.input == "coaching" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 20 students :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.educational.coaching.input"
                            value={formData.parking.educational.coaching.input}
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.educational.coaching.input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {9 *
                                formData.parking.educational.coaching.input ||
                                "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.parking.buildingType == "govOrPublicOrPrivate" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="border-l border-slate-400 px-4 ">
                      Government or semi public or private business buildings.
                      For every 100 sq.m. carpet area or fraction thereof :
                    </td>
                    <td className="border-r border-slate-400 px-4 flex">
                      <input
                        type="number"
                        name="parking.govOrPublicOrPrivate.input"
                        value={formData.parking.govOrPublicOrPrivate.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded"
                      />
                      <div className=" flex space-x-10 px-4 items-center ">
                        {formData.parking.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {formData.parking.govOrPublicOrPrivate.input || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {2 * formData.parking.govOrPublicOrPrivate.input ||
                              "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {12 * formData.parking.govOrPublicOrPrivate.input ||
                            "0"}
                        </b>
                      </div>
                    </td>
                  </tr>
                </>
              )}

              {formData.parking.buildingType == "mercantile" && (
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="border border-slate-400 px-4 py-2">
                      5. Occupancy:
                    </td>
                    <td
                      className="border border-slate-400 px-4 py-2"
                      name="parking.mercantile.input"
                    >
                      <select
                        name="parking.mercantile.input"
                        value={formData.parking.mercantile.input}
                        onChange={handleNestedChange}
                        className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                      >
                        <option value="">--Select Mercantile Area--</option>
                        <option value="marketStoresShops">
                          Markets, departmental stores, shops and other
                          Commercials users
                        </option>
                        <option value="wholeSale">
                          Whole sale shops not being used for retail trading.
                        </option>
                        <option value="hazardousBuilding">
                          Hazardous building
                        </option>
                        <option value="officeItBuilding">
                          Office and I.T. building
                        </option>
                      </select>
                    </td>
                  </tr>

                  {formData.parking.mercantile?.input ==
                    "marketStoresShops" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area or fraction thereof:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.mercantile.marketStoresShops.input"
                            value={
                              formData.parking.mercantile.marketStoresShops
                                .input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <b>
                                Car(s):{"0"}
                                {formData.parking.mercantile.marketStoresShops
                                  .input || "0"}
                              </b>
                            ) : (
                              <b>
                                Car(s):{"0"}
                                {2 *
                                  formData.parking.mercantile.marketStoresShops
                                    .input || "0"}
                              </b>
                            )}
                            <b>
                              Scooter(s):{"0"}
                              {6 *
                                formData.parking.mercantile.marketStoresShops
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.mercantile?.input == "wholeSale" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area or fraction thereof:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.mercantile.wholeSale.input"
                            value={formData.parking.mercantile.wholeSale.input}
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {formData.parking.mercantile.wholeSale.input || "0"}
                            </b>
                            {formData.parking.areaType === "congested" ? (
                              <b>
                                Scooter(s):{"0"}
                                {4 *
                                  formData.parking.mercantile.wholeSale.input ||
                                  "0"}
                              </b>
                            ) : (
                              <b>
                                Scooter(s):{"0"}
                                {5 *
                                  formData.parking.mercantile.wholeSale.input ||
                                  "0"}
                              </b>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.mercantile?.input ==
                    "hazardousBuilding" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400 ">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 100 sq.m. carpet area :
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.mercantile.hazardousBuilding.input"
                            value={
                              formData.parking.mercantile.hazardousBuilding
                                .input
                            }
                            onChange={handleNestedChange}
                            className="  p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            {formData.parking.areaType === "congested" ? (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {0}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {4 *
                                    formData.parking.mercantile
                                      .hazardousBuilding.input || "0"}
                                </b>
                              </>
                            ) : (
                              <>
                                <b>
                                  Car(s):{"0"}
                                  {formData.parking.mercantile.hazardousBuilding
                                    .input || "0"}
                                </b>
                                <b>
                                  Scooter(s):{"0"}
                                  {3 *
                                    formData.parking.mercantile
                                      .hazardousBuilding.input || "0"}
                                </b>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}

                  {formData.parking.mercantile?.input == "officeItBuilding" && (
                    <>
                      <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                        <td className="border-l border-slate-400 px-8 ">
                          For every 200 sq.m. carpet area or fraction thereof:
                        </td>
                        <td className="border-r border-slate-400 px-4 flex">
                          <input
                            type="number"
                            name="parking.mercantile.officeItBuilding.input"
                            value={
                              formData.parking.mercantile.officeItBuilding.input
                            }
                            onChange={handleNestedChange}
                            className=" p-2 border-2 border-slate-400 rounded"
                          />
                          <div className=" flex space-x-10 px-4 items-center ">
                            <b>
                              Car(s):{"0"}
                              {3 *
                                formData.parking.mercantile.officeItBuilding
                                  .input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {11 *
                                formData.parking.mercantile.officeItBuilding
                                  .input || "0"}
                            </b>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}

              {formData.parking.buildingType == "industrial" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="border-l border-slate-400 px-4 ">
                      5. Industrial (For every 300 sq.m. carpet area or fraction
                      thereof):
                    </td>
                    <td className="border-r border-slate-400 px-4 flex">
                      <input
                        type="number"
                        name="parking.industrial.input"
                        value={formData.parking.industrial.input}
                        onChange={handleNestedChange}
                        className=" p-2 border-2 border-slate-400 rounded"
                      />
                      <div className=" flex space-x-10 px-4 items-center ">
                        {formData.parking.areaType === "congested" ? (
                          <b>
                            Car(s):{"0"}
                            {2 * formData.parking.industrial.input || "0"}
                          </b>
                        ) : (
                          <b>
                            Car(s):{"0"}
                            {3 * formData.parking.industrial.input || "0"}
                          </b>
                        )}
                        <b>
                          Scooter(s):{"0"}
                          {9 * formData.parking.industrial.input || "0"}
                        </b>
                      </div>
                    </td>
                  </tr>
                </>
              )}

              {formData.parking.buildingType == "storage" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] border-b border-slate-400">
                    <td className="border-l border-slate-400 px-4 ">
                      5. Storage (any type) For every 300 sq.m. carpet area or
                      fraction thereof:
                    </td>
                    <td className="border-r border-slate-400 px-4 flex">
                      <input
                        type="number"
                        name="parking.storage.input"
                        value={formData.parking.storage.input}
                        onChange={handleNestedChange}
                        className=" p-2 border-2 border-slate-400 rounded"
                      />
                      <div className=" flex space-x-10 px-4 items-center ">
                        {formData.parking.areaType === "congested" ? (
                          <>
                            <b>
                              Car(s):{"0"}
                              {0}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {4 * formData.parking.storage.input || "0"}
                            </b>
                          </>
                        ) : (
                          <>
                            <b>
                              Car(s):{"0"}
                              {formData.parking.storage.input || "0"}
                            </b>
                            <b>
                              Scooter(s):{"0"}
                              {3 * formData.parking.storage.input || "0"}
                            </b>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              )}

              {formData.parking.buildingType == "dataCentre" && (
                <>
                  <tr className="odd:bg-white  even:bg-[#dededeac] ">
                    <td className="border-l border-slate-400 px-4 ">
                      5. Data centre Per 400 sq.m.:
                    </td>
                    <td className="border-r border-slate-400 px-4 flex">
                      <input
                        type="number"
                        name="parking.dataCentre.input"
                        value={formData.parking.dataCentre.input}
                        onChange={handleNestedChange}
                        className=" p-2 border-2 border-slate-400 rounded"
                      />
                      <div className=" flex space-x-10 px-4 items-center ">
                        <b>
                          Car(s):{"0"}
                          {formData.parking.dataCentre.input || "0"}
                        </b>
                        <b>
                          Scooter(s):{"0"}
                          {0}
                        </b>
                      </div>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <div className=" mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
