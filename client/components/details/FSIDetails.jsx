
export default function FSIDetails({ formData, handleChange, handleNestedChange, handlePrevious, handleNext }) {

  formData.fsi.area = parseFloat(formData.plot.proRata) > 0 ? parseFloat(formData.plot.proRata) : parseFloat(formData.plot.area);
  formData.fsi.deductions.total = parseFloat(formData.fsi.deductions.proposedDp) + parseFloat(formData.fsi.deductions.anyDp);
  formData.fsi.balanceArea = parseFloat(formData.fsi.area) - parseFloat(formData.fsi.deductions.total);
  formData.fsi.netPlotArea = parseFloat(formData.fsi.balanceArea) - parseFloat(formData.fsi.aminitySpace.balanceProposed);
  formData.fsi.inSituLoading.areaAgainstAminitySpace = parseFloat(formData.fsi.aminitySpace.adj2b) * 2.0;
  formData.fsi.inSituLoading.areaAgainstDpRoad = parseFloat(formData.fsi.deductions.proposedDp) * 2.0;
  formData.fsi.inSituLoading.toatlInSitu = parseFloat(formData.fsi.inSituLoading.areaAgainstDpRoad) + parseFloat(formData.fsi.inSituLoading.areaAgainstAminitySpace) + parseFloat(formData.fsi.inSituLoading.tdrArea);
  formData.fsi.totalEntitlementProposed.whicheverApplicable = parseFloat(formData.fsi.netPlotArea) + parseFloat(formData.fsi.paymentOfPremium.proposedPremium) + parseFloat(formData.fsi.inSituLoading.toatlInSitu);
  formData.fsi.builtUpArea = formData.fsi.netPlotArea * 1.10;
  formData.fsi.totalEntitlementProposed.totalEntitlement = parseFloat(formData.fsi.totalEntitlementProposed.whicheverApplicable) + parseFloat(formData.fsi.totalEntitlementProposed.ancillaryArea);
  formData.fsi.maxUtilizationLimit = 1.6;
  formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp = parseFloat(formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea) + parseFloat(formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea);

  return (
    <div className='p-10'>
      <h2 className="text-2xl mb-4">3. FSI Details</h2>
      <table className="table-auto w-full mb-8">
        <tbody>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">1. Area (meter<sup>2</sup>):</td>
            <td
              className="border px-4 py-2"
              name="fsi.area"
            >
              {formData.fsi.area || "Enter data in required field"}
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">2. Deductions for</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16 ">a. Proposed D.P./D.P. Road widening Area/ Service Road/ Highway widening:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.deductions.proposedDp"
                value={formData.fsi.deductions.proposedDp}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16">b. Any D.P. Reservation area:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.deductions.anyDp"
                value={formData.fsi.deductions.anyDp}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16 pb-4">c. Total (a + b):</td>
            <td
              className="border-r px-4 pb-4"
              name="fsi.deductions.total"
            >
              {formData.fsi.deductions.total || formData.fsi.deductions.proposedDp || formData.fsi.deductions.anyDp || "Enter data in required field"}
            </td>
          </tr>


          <tr className="odd:bg-white  even:bg-gray-100">
            <td className="border px-4 py-2">3. Balance area of plot(1 - 2):</td>
            <td
              className="border px-4 py-2"
              name="fsi.balanceArea"
            >
              {formData.fsi.balanceArea || "Enter data in required field"}
            </td>
          </tr>

          <tr className="odd:bg-white  even:bg-gray-100">
            <td className="border-x px-4 py-2" colSpan="2">4. Aminity Space</td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16">a. Required:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.aminitySpace.required"
                value={formData.fsi.aminitySpace.required}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="odd:bg-white  even:bg-gray-100">
            <td className="border-l px-16">b. Adjustment of 2(b), if any:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.aminitySpace.adj2b"
                value={formData.fsi.aminitySpace.adj2b}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">c. Balance Proposed:</td>
            <td className="border-r px-4 pb-4">
              <input
                type="number"
                name="fsi.aminitySpace.balanceProposed"
                value={formData.fsi.aminitySpace.balanceProposed}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">5. Net plot area (3 - 4(c)):</td>
            <td
              className="border px-4 py-2"
              name="fsi.netPlotArea"
            >
              {formData.fsi.netPlotArea || "Enter data in required field"}
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">6. Recreational Open Space</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">a. Required:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.recreationOpenSpace.required"
                value={formData.fsi.recreationOpenSpace.required}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">b. Proposed:</td>
            <td className="border-r px-4 pb-4">
              <input
                type="number"
                name="fsi.recreationOpenSpace.proposed"
                value={formData.fsi.recreationOpenSpace.proposed}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">7. Internal Road Area:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="fsi.internalRoadArea"
                value={formData.fsi.internalRoadArea}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">8. Plotable Area:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="fsi.plotableArea"
                value={formData.fsi.plotableArea}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">9. Built up area with reference to basic FSI as per front road width:</td>
            <td
              className="border px-4 py-2"
              name="fsi.builtUpArea"
            >
              {formData.fsi.builtUpArea || "Enter data in required field"}
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">10. Addition of FSI on payment of premium:</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">a. Maximum permissible premium FSI - based on road width/ TOD zone:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.paymentOfPremium.maxPremium"
                value={formData.fsi.paymentOfPremium.maxPremium}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">b. Proposed FSI on payment of premium:</td>
            <td className="border-r px-4 pb-4">
              <input
                type="number"
                name="fsi.paymentOfPremium.proposedPremium"
                value={formData.fsi.paymentOfPremium.proposedPremium}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">11. In-situ FSI/ TDR loading:</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">a. In-situ area against D.P. road [2.0 * 2(a)]:</td>
            <td className="border-r px-4"
              name="fsi.inSituLoading.areaAgainstDpRoad"
            >
              {formData.fsi.inSituLoading.areaAgainstDpRoad || "Enter data in required field"}
            </td>
          </tr>
          {/* conditional renderening remaining */}
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16">b. In-situ area against aminity space if handed over:</td>
            <td className="border-r px-4"
              name="fsi.inSituLoading.areaAgainstAminitySpace"
            >
              {formData.fsi.inSituLoading.areaAgainstAminitySpace || "Enter data in required field"}
            </td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">c. TDR area:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.inSituLoading.tdrArea"
                value={formData.fsi.inSituLoading.tdrArea}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">d. Total in-situ / TDR loading proposed (a + b + c):</td>
            <td className="border-r px-4 pb-4"
              name="fsi.inSituLoading.toatlInSitu"
            >
              {formData.fsi.inSituLoading.toatlInSitu || "Enter data in required field"}
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">12. Additional FSI area under Chapter No.7:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="fsi.additinalFsi"
                value={formData.fsi.additinalFsi}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">13. Total entitlement of FSI in the proposal:</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:</td>
            <td className="border-r px-4"
              name="fsi.totalEntitlementProposed.whicheverApplicable"
            >
              {formData.fsi.totalEntitlementProposed.whicheverApplicable || "Enter data in required field"}
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16">b. Ancillary Area FSI up to 60% or 80% with payment of charges:</td>
            <td className="border-r px-4">
              {/* <input
                type="number"
                name="fsi.totalEntitlementProposed.ancillaryArea"
                value={formData.fsi.totalEntitlementProposed.ancillaryArea}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              /> */}
              <select
                name="fsi.totalEntitlementProposed.ancillaryArea"
                value={formData.fsi.totalEntitlementProposed.ancillaryArea}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value={60}>60 %</option>
                <option value={80}>80 %</option>
              </select>
            </td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16 pb-4">c. Total entitlement(a + b):</td>
            <td className="border-r px-4 pb-4"
              name="fsi.totalEntitlementProposed.totalEntitlement"
            >
              {formData.fsi.totalEntitlementProposed.totalEntitlement || "Enter data in required field"}
            </td>
          </tr>

          {/* remaining for calculation */}
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border px-4 py-2">14. Maximum utilization limit of FSI (building potential) permissible as per road width:</td>
            <td
              className="border px-4 py-2"
              name="fsi.maxUtilizationLimit"
            >
              {formData.fsi.maxUtilizationLimit || "Enter data in required field"}
            </td>
          </tr>

          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">15. Total built-up area in proposal (excluding area at 17(b)):</td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16">a. Existing built-up area:</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
                value={formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">b. Proposed built-up area as per 'P-line':</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea"
                value={formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpArea}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">c. Total (a + b):</td>
            <td
              className="border-r px-4 pb-4"
              name="fsi.totalBuiltUpAreaProposal.totalBuiltUp"
            >
              {formData.fsi.totalBuiltUpAreaProposal.totalBuiltUp || "Enter data in required field"}
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">16. FSI consumed (15 / 13) OR {" < "} Sr.No. 14 :</td>
            <td
              className="border px-4 py-2">
              <input
                type="number"
                name="fsi.FSIConsumed"
                value={formData.fsi.FSIConsumed}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-x px-4 py-2" colSpan="2">17. Area for inclusive housing, if any:</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <td className="border-l px-16">a. Required(20% of Sr.No. 5):</td>
            <td className="border-r px-4">
              <input
                type="number"
                name="fsi.areOfInclusiveHousing.required"
                value={formData.fsi.areOfInclusiveHousing.required}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border-l px-16 pb-4">b. Proposed:</td>
            <td className="border-r px-4 pb-4">
              <input
                type="number"
                name="fsi.areOfInclusiveHousing.proposed"
                value={formData.fsi.areOfInclusiveHousing.proposed}
                onChange={handleNestedChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" mt-4 flex justify-between">
        <button onClick={handlePrevious} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Previous
        </button>
        <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Preview
        </button>
      </div>
    </div >
  );
}
