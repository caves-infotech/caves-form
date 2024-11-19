import React from "react";

export default function Preview({ formData, handlePrevious, handleSubmit }) {
  return (
    <div>
      <h1 className="pt-10 pb-10 text-3xl font-bold text-center">
        Preview Page
      </h1>

      <div className="max-w-3xl sm:mx-auto mx-2">
        {/* {Object.entries(formData).map(([sectionKey, sectionValue]) =>
          ["project", "plot", "fsi"].includes(sectionKey) ? (
            <div key={sectionKey} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {sectionKey}
              </h2>
              <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 text-left">
                      Key
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 text-left">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(sectionValue).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {typeof value === "object" ? (
                        Object.entries(value).map(
                          ([nestedKey, nestedValue]) => (
                            <tr key={nestedKey}>
                              <td className="border-b border-gray-200 px-4 py-2">
                                {key} → {nestedKey}
                              </td>
                              <td className="border-b border-gray-200 px-4 py-2">
                                {nestedValue}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2">
                            {key}
                          </td>
                          <td className="border-b border-gray-200 px-4 py-2">
                            {value}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )
        )} */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">Project Details</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">1. Proposed Project Name:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.project.projectName || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">2. Plot Number:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.project.plotNo || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">3. District:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.project.district || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">4. Taluka:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.project.taluka || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">5. Village:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.project.village || "Enter data in required field"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">Plot Details</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">1. Building Type:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.buildingType?.input || "Enter data in required field"}</td>
              </tr>
              {formData.plot?.buildingType?.input === "Other" &&
              <tr>
                  <td className="border-b border-gray-200 px-4 py-2 pl-8">Categories of Other Buildings:</td>
                  <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.buildingType?.other || "Enter data in required field"}</td>
              </tr>
              }
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">2. Area Type:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.areaType || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">3. ULB:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.ulb || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">4. Zone:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.zone || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">5. Plot type:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.plotType || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">6. Is group housing scheme:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.groupHousing || "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">7. Plot Area:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.area ? formData.plot?.area + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              {formData.plot?.buildingType?.input === "Mix used" &&
              <>
                <tr>
                    <td className="border-b border-gray-200 px-4 py-2 pl-8">Residential Built-up Area:</td>
                    <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.buildingType?.residential ? formData.plot?.buildingType?.residential + " Sq. Meter" : "Enter data in required field"}</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 px-4 py-2 pl-8">Commercial Built-up Area:</td>
                  <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.buildingType?.commercial ? formData.plot?.buildingType?.commercial + " Sq. Meter" : "Enter data in required field"}</td>
                </tr>
              </>
              }
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">8. Pro-Rata factor (if applicable):</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.proRata || "1"} </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">9. Notional Plot Area (meter2):</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.builtUp ? formData.plot?.builtUp + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">10. Road Width:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.plot?.roadWidth ? formData.plot?.roadWidth + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">FSI Details</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">1. Area (meter2):</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.area ? formData.fsi?.area  + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">2. Deductions for (optional)</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Proposed D.P./D.P. Road widening Area/ Service Road/ Highway widening:</td>
                <td className=" px-4 py-1">{formData.fsi?.deductions?.proposedDp || 0} Sq. Meter</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. Any D.P. Reservation area:</td>
                <td className=" px-4 py-1">{formData.fsi?.deductions?.anyDp || 0} Sq. Meter</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">c. Total (a + b):</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.deductions?.total || 0} Sq. Meter</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">3. Balance area of plot(1 - 2):</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.balanceArea ? formData.fsi?.balanceArea + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">4. Aminity Space</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Required:</td>
                <td className=" px-4 py-1">{formData.fsi?.aminitySpace?.required || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. Adjustment of 2(b), if any:</td>
                <td className=" px-4 py-1">{formData.fsi?.aminitySpace?.adj2b || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">c. Balance Proposed:</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.aminitySpace?.balanceProposed || 0 + " Sq. Meter" }</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">5. Net plot area (3 - 4(c)):</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.netPlotArea ? formData.fsi?.netPlotArea + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">6. Recreational Open Space</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Required:</td>
                <td className=" px-4 py-1">{formData.fsi?.recreationOpenSpace?.required || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">b. Proposed:</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.recreationOpenSpace?.proposed || 0 + " Sq. Meter" }</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">7. Internal Road Area:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.internalRoadArea ? formData.fsi?.internalRoadArea + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">8. Plotable Area:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.builtUpArea || 0 + " Sq. Meter" }</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">10. Addition of FSI on payment of premium:</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Maximum permissible premium FSI - based on road width/ TOD zone:</td>
                <td className=" px-4 py-1">{formData.fsi?.paymentOfPremium?.maxPremium || 0}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">b. Proposed FSI on payment of premium:</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.paymentOfPremium?.proposedPremium || 0}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">11. In-situ FSI/ TDR loading:</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. In-situ area against D.P. road [2.0 * 2(a)]:</td>
                <td className=" px-4 py-1">{formData.fsi?.inSituLoading?.areaAgainstDpRoad || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. TDR area:</td>
                <td className=" px-4 py-1">{formData.fsi?.inSituLoading?.tdrArea || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">c. Total in-situ / TDR loading proposed (a + b):</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.inSituLoading?.toatlInSitu ? formData.fsi?.inSituLoading?.toatlInSitu + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">12. Additional FSI area under Chapter No.7:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.additinalFsi ? formData.fsi?.additinalFsi + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">13. Total entitlement of FSI in the proposal:</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. [9 + 10(b) + 11(d)] or 12 whichever is applicable:</td>
                <td className=" px-4 py-1">{formData.fsi?.totalEntitlementProposed?.whicheverApplicable ? formData.fsi?.totalEntitlementProposed?.whicheverApplicable + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. Ancillary Area FSI up to 60% or 80% with payment of charges:</td>
                <td className=" px-4 py-1">{formData.fsi?.totalEntitlementProposed?.ancillaryArea ? formData.fsi?.totalEntitlementProposed?.ancillaryArea + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">c. Total entitlement(a + b):</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.totalEntitlementProposed?.totalEntitlement ? formData.fsi?.totalEntitlementProposed?.totalEntitlement + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">14. Maximum utilization limit of FSI (building potential) permissible as per-2 road width:</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.maxUtilizationLimit ? formData.fsi?.maxUtilizationLimit + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">15. Total built-up area in proposal (excluding area at 17(b)):</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Existing built-up area:</td>
                <td className=" px-4 py-1">{formData.fsi?.totalBuiltUpAreaProposal?.existingBuiltUpArea ? formData.fsi?.totalBuiltUpAreaProposal?.existingBuiltUpArea + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. Proposed built-up area as per P-line:</td>
                <td className=" px-4 py-1">{formData.fsi?.totalBuiltUpAreaProposal?.proposedBuiltUpArea ? formData.fsi?.totalBuiltUpAreaProposal?.proposedBuiltUpArea+ " Sq. Meter" : "Enter data in required field"}</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-1 pl-8">c. Total (a + b):</td>
                <td className="border-b border-gray-200 px-4 py-1">{formData.fsi?.totalBuiltUpAreaProposal?.totalBuiltUp ? formData.fsi?.totalBuiltUpAreaProposal?.totalBuiltUp + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className="border-b border-gray-200 px-4 py-2">{"16. FSI consumed (15 / 13) OR < Sr.No. 14 :"}</td>
                <td className="border-b border-gray-200 px-4 py-2">{formData.fsi?.FSIConsumed ? formData.fsi?.FSIConsumed + " Sq. Meter" : "Enter data in required field"}</td>
              </tr>

              <tr>
                <td className=" px-4 py-2">17. Area for inclusive housing, if any:</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">a. Required(20% of Sr.No. 5):</td>
                <td className=" px-4 py-1">{formData.fsi?.areOfInclusiveHousing?.required || 0 + " Sq. Meter" }</td>
              </tr>
              <tr>
                <td className=" px-4 py-1 pl-8">b. Proposed:</td>
                <td className=" px-4 py-1">{formData.fsi?.areOfInclusiveHousing?.proposed || 0 + " Sq. Meter" }</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between p-2 gap-2">
          <button
            onClick={handlePrevious}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
