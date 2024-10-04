export default function FSIDetails({
  formData,
  handleChange,
  handleNestedChange,
  handlePrevious,
  handleNext,
}) {
  formData.fsi.area = parseFloat(formData.plot.area)
  formData.fsi.deductions.total =
    (parseFloat(formData.fsi.deductions.proposedDp) +
      parseFloat(formData.fsi.deductions.anyDp)) || 0;
  formData.fsi.balanceArea =
    (parseFloat(formData.fsi.area) - parseFloat(formData.fsi.deductions.total)) || 0;

  if (formData.fsi.area > 4000 && formData.plot.ulb == "otherRp") {
    formData.fsi.aminitySpace.required = formData.fsi.balanceArea * 1.1;
  } else if (formData.fsi.area > 20000 && formData.plot.ulb == "muncipleCorp") {
    formData.fsi.aminitySpace.required = formData.fsi.balanceArea * 1.05;
  }
  
  formData.fsi.netPlotArea =
    parseFloat(formData.fsi.balanceArea) -
    parseFloat(formData.fsi.aminitySpace.balanceProposed);
  formData.fsi.inSituLoading.areaAgainstAminitySpace =
    parseFloat(formData.fsi.aminitySpace.adj2b) * 2.0;
  formData.fsi.inSituLoading.areaAgainstDpRoad =
    parseFloat(formData.fsi.deductions.proposedDp) * 2.0;
  formData.fsi.inSituLoading.toatlInSitu =
    parseFloat(formData.fsi.inSituLoading.areaAgainstDpRoad) +
    parseFloat(formData.fsi.inSituLoading.areaAgainstAminitySpace) +
    parseFloat(formData.fsi.inSituLoading.tdrArea);
  formData.fsi.totalEntitlementProposed.whicheverApplicable =
    parseFloat(formData.fsi.netPlotArea) +
    parseFloat(formData.fsi.paymentOfPremium.proposedPremium) +
    parseFloat(formData.fsi.inSituLoading.toatlInSitu);
  formData.fsi.builtUpArea = formData.fsi.netPlotArea * 1.1;
  formData.fsi.totalEntitlementProposed.totalEntitlement =
    parseFloat(formData.fsi.totalEntitlementProposed.whicheverApplicable) +
    parseFloat(formData.fsi.totalEntitlementProposed.ancillaryArea);
  formData.fsi.maxUtilizationLimit = 1.6;
  formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp =
    parseFloat(formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea) +
    parseFloat(formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea);

  return (
    <>
      {/* <div className="p-5 sm:hidden">
        <h2 className="mb-4 text-2xl">3. FSI Details</h2>

        <div className="mb-4">
          <label className="block mb-2">
            1. Area (meter<sup>2</sup>):
          </label>
          <div className="p-2 border border-slate-400">
            {formData.fsi.area || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">2. Deductions for</h3>
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
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Any D.P. Reservation area:</label>
            <input
              type="number"
              name="fsi.deductions.anyDp"
              value={formData.fsi.deductions.anyDp}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Total (a + b):</label>
            <div className="p-2 border border-slate-400">
              {formData.fsi.deductions.total || "Enter data in required field"}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">3. Balance area of plot (1 - 2):</label>
          <div className="p-2 border border-slate-400">
            {formData.fsi.balanceArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">4. Aminity Space</h3>
          <div className="mb-4">
            <label className="block mb-2">a. Required:</label>
            <input
              type="number"
              name="fsi.aminitySpace.required"
              value={formData.fsi.aminitySpace.required}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Adjustment of 2(b), if any:</label>
            <input
              type="number"
              name="fsi.aminitySpace.adj2b"
              value={formData.fsi.aminitySpace.adj2b}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Balance Proposed:</label>
            <input
              type="number"
              name="fsi.aminitySpace.balanceProposed"
              value={formData.fsi.aminitySpace.balanceProposed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">5. Net plot area (3 - 4(c)):</label>
          <div className="p-2 border border-slate-400">
            {formData.fsi.netPlotArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">6. Recreational Open Space</h3>
          <div className="mb-4">
            <label className="block mb-2">a. Required:</label>
            <input
              type="number"
              name="fsi.recreationOpenSpace.required"
              value={formData.fsi.recreationOpenSpace.required}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Proposed:</label>
            <input
              type="number"
              name="fsi.recreationOpenSpace.proposed"
              value={formData.fsi.recreationOpenSpace.proposed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
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
            className="w-full p-2 border-2 rounded border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">8. Plotable Area:</label>
          <input
            type="number"
            name="fsi.plotableArea"
            value={formData.fsi.plotableArea}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            9. Built up area with reference to basic FSI as per front road
            width:
          </label>
          <div className="p-2 border border-slate-400">
            {formData.fsi.builtUpArea || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">
            10. Addition of FSI on payment of premium:
          </h3>
          <div className="mb-4">
            <label className="block mb-2">
              a. Maximum permissible premium FSI - based on road width/ TOD
              zone:
            </label>
            <input
              type="number"
              name="fsi.paymentOfPremium.maxPremium"
              value={formData.fsi.paymentOfPremium.maxPremium}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
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
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">11. In-situ FSI/ TDR loading:</h3>
          <div className="mb-4">
            <label className="block mb-2">
              a. In-situ area against D.P. road [2.0 * 2(a)]:
            </label>
            <div className="p-2 border border-slate-400">
              {formData.fsi.inSituLoading.areaAgainstDpRoad ||
                "Enter data in required field"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              b. In-situ area against aminity space if handed over:
            </label>
            <div className="p-2 border border-slate-400">
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
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              d. Total in-situ / TDR loading proposed (a + b + c):
            </label>
            <div className="p-2 border border-slate-400">
              {formData.fsi.inSituLoading.toatlInSitu ||
                "Enter data in required field"}
            </div>
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
            className="w-full p-2 border-2 rounded border-slate-400"
          />
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">
            13. Total entitlement of FSI in the proposal:
          </h3>
          <label className="block mb-2">
            a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:
          </label>
          <div className="px-4 py-2 border border-slate-400">
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
            className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
          >
            <option value={60}>60 %</option>
            <option value={80}>80 %</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">c. Total entitlement(a + b):</label>
          <div className="px-4 py-2 border border-slate-400">
            {formData.fsi.totalEntitlementProposed.totalEntitlement ||
              "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            14. Maximum utilization limit of FSI (building potential)
            permissible as per road width:
          </label>
          <div className="px-4 py-2 border border-slate-400">
            {formData.fsi.maxUtilizationLimit || "Enter data in required field"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">
            15. Total built-up area in proposal (excluding area at 17(b)):
          </h3>

          <div className="mb-4">
            <label className="block mb-2">a. Existing built-up area:</label>
            <input
              type="number"
              name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
              value={formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
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
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">c. Total (a + b):</label>
            <div className="px-4 py-2 border border-slate-400">
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
            className="w-full p-2 border-2 rounded border-slate-400"
          />
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg">
            17. Area for inclusive housing, if any:
          </h3>

          <div className="mb-4">
            <label className="block mb-2">a. Required(20% of Sr.No. 5):</label>
            <input
              type="number"
              name="fsi.areOfInclusiveHousing.required"
              value={formData.fsi.areOfInclusiveHousing.required}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">b. Proposed:</label>
            <input
              type="number"
              name="fsi.areOfInclusiveHousing.proposed"
              value={formData.fsi.areOfInclusiveHousing.proposed}
              onChange={handleNestedChange}
              className="w-full p-2 border-2 rounded border-slate-400"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4 space-x-2">
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
      </div> */}

      <div className="hidden p-5 sm:flex">
        <div>
          <h2 className="mb-4 text-2xl">3. FSI Details</h2>
          <table className="table-auto w-[830px] mb-8 text-sm">
            <tbody>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  1. Area (meter<sup>2</sup>):
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="fsi.area"
                >
                  {formData.fsi.area || "Enter data in required field"}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  2. Deductions for (optional)
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400 ">
                  a. Proposed D.P./D.P. Road widening Area/ Service Road/
                  Highway widening:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.deductions.proposedDp"
                    value={formData.fsi.deductions.proposedDp}
                    onChange={handleNestedChange}
                    className="w-[250px] p-2 border-2 border-slate-400 rounded"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  b. Any D.P. Reservation area:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.deductions.anyDp"
                    value={formData.fsi.deductions.anyDp}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  c. Total (a + b):
                </td>
                <td
                  className="px-4 pb-4 border-r border-slate-400"
                  name="fsi.deductions.total"
                >
                  {formData.fsi.deductions.total ||
                    formData.fsi.deductions.proposedDp ||
                    formData.fsi.deductions.anyDp || 0}
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac]">
                <td className="px-4 py-2 border border-slate-400">
                  3. Balance area of plot(1 - 2):
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="fsi.balanceArea"
                >
                  {formData.fsi.balanceArea || "Enter data in required field"}
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac]">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  4. Aminity Space
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. Required:
                </td>
                <td className="px-4 border-r border-slate-400">
                  {formData.fsi.aminitySpace.required || 0}
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac]">
                <td className="px-16 border-l border-slate-400">
                  b. Adjustment of 2(b), if any:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.aminitySpace.adj2b"
                    value={formData.fsi.aminitySpace.adj2b}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  c. Balance Proposed:
                </td>
                <td className="px-4 pb-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.aminitySpace.balanceProposed"
                    value={formData.fsi.aminitySpace.balanceProposed}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  5. Net plot area (3 - 4(c)):
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="fsi.netPlotArea"
                >
                  {formData.fsi.netPlotArea || "Enter data in required field"}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  6. Recreational Open Space
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. Required:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.recreationOpenSpace.required"
                    value={formData.fsi.recreationOpenSpace.required}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  b. Proposed:
                </td>
                <td className="px-4 pb-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.recreationOpenSpace.proposed"
                    value={formData.fsi.recreationOpenSpace.proposed}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-2 border border-slate-400">
                  7. Internal Road Area:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="fsi.internalRoadArea"
                    value={formData.fsi.internalRoadArea}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-2 border border-slate-400">
                  8. Plotable Area:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="fsi.plotableArea"
                    value={formData.fsi.plotableArea}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  9. Built up area with reference to basic FSI as per front road
                  width:
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="fsi.builtUpArea"
                >
                  {formData.fsi.builtUpArea || "Enter data in required field"}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  10. Addition of FSI on payment of premium:
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. Maximum permissible premium FSI - based on road width/ TOD
                  zone:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.paymentOfPremium.maxPremium"
                    value={formData.fsi.paymentOfPremium.maxPremium}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  b. Proposed FSI on payment of premium:
                </td>
                <td className="px-4 pb-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.paymentOfPremium.proposedPremium"
                    value={formData.fsi.paymentOfPremium.proposedPremium}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td
                  className="px-4 py-2 border-t border-x border-slate-400"
                  colSpan="2"
                >
                  11. In-situ FSI/ TDR loading:
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. In-situ area against D.P. road [2.0 * 2(a)]:
                </td>
                <td
                  className="px-4 border-r border-slate-400"
                  name="fsi.inSituLoading.areaAgainstDpRoad"
                >
                  {formData.fsi.inSituLoading.areaAgainstDpRoad ||
                    "Enter data in required field"}
                </td>
              </tr>
              {/* conditional renderening remaining */}
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  b. In-situ area against aminity space if handed over:
                </td>
                <td
                  className="px-4 border-r border-slate-400"
                  name="fsi.inSituLoading.areaAgainstAminitySpace"
                >
                  {formData.fsi.inSituLoading.areaAgainstAminitySpace ||
                    "Enter data in required field"}
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  c. TDR area:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.inSituLoading.tdrArea"
                    value={formData.fsi.inSituLoading.tdrArea}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  d. Total in-situ / TDR loading proposed (a + b + c):
                </td>
                <td
                  className="px-4 pb-4 border-r border-slate-400"
                  name="fsi.inSituLoading.toatlInSitu"
                >
                  {formData.fsi.inSituLoading.toatlInSitu ||
                    "Enter data in required field"}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  12. Additional FSI area under Chapter No.7:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="fsi.additinalFsi"
                    value={formData.fsi.additinalFsi}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  13. Total entitlement of FSI in the proposal:
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:
                </td>
                <td
                  className="px-4 border-r border-slate-400"
                  name="fsi.totalEntitlementProposed.whicheverApplicable"
                >
                  {formData.fsi.totalEntitlementProposed.whicheverApplicable ||
                    "Enter data in required field"}
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  b. Ancillary Area FSI up to 60% or 80% with payment of
                  charges:
                </td>
                <td className="px-4 border-r border-slate-400">
                  {/* <input
                type="number"
                name="fsi.totalEntitlementProposed.ancillaryArea"
                value={formData.fsi.totalEntitlementProposed.ancillaryArea}
                onChange={handleNestedChange}
                className="w-full p-2 border-2 rounded border-slate-400"
              /> */}
                  <select
                    name="fsi.totalEntitlementProposed.ancillaryArea"
                    value={formData.fsi.totalEntitlementProposed.ancillaryArea}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select Ancillary Area--</option>
                    <option value={60}>60 %</option>
                    <option value={80}>80 %</option>
                  </select>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  c. Total entitlement(a + b):
                </td>
                <td
                  className="px-4 pb-4 border-r border-slate-400"
                  name="fsi.totalEntitlementProposed.totalEntitlement"
                >
                  {formData.fsi.totalEntitlementProposed.totalEntitlement ||
                    "Enter data in required field"}
                </td>
              </tr>

              {/* remaining for calculation */}
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  14. Maximum utilization limit of FSI (building potential)
                  permissible as per-2 border-slate-400 road width:
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="fsi.maxUtilizationLimit"
                >
                  {formData.fsi.maxUtilizationLimit ||
                    "Enter data in required field"}
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  15. Total built-up area in proposal (excluding area at 17(b)):
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. Existing built-up area:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
                    value={
                      formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea
                    }
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  b. Proposed built-up area as per P-line:
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea"
                    value={
                      formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea
                    }
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-l border-slate-400">
                  c. Total (a + b):
                </td>
                <td
                  className="px-4 pb-4 border-r border-slate-400"
                  name="fsi.totalBuiltUpAreaProposal.totalBuiltUp"
                >
                  {formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp ||
                    "Enter data in required field"}
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  16. FSI consumed (15 / 13) OR {" < "} Sr.No. 14 :
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="fsi.FSIConsumed"
                    value={formData.fsi.FSIConsumed}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border-x border-slate-400" colSpan="2">
                  17. Area for inclusive housing, if any:
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-[#dededeac] ">
                <td className="px-16 border-l border-slate-400">
                  a. Required(20% of Sr.No. 5):
                </td>
                <td className="px-4 border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.areOfInclusiveHousing.required"
                    value={formData.fsi.areOfInclusiveHousing.required}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-16 pb-4 border-b border-l border-slate-400">
                  b. Proposed:
                </td>
                <td className="px-4 pb-4 border-b border-r border-slate-400">
                  <input
                    type="number"
                    name="fsi.areOfInclusiveHousing.proposed"
                    value={formData.fsi.areOfInclusiveHousing.proposed}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 rounded border-slate-400"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between mt-4 ">
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
      </div>
    </>
  );
}
