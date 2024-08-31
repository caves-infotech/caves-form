export default function FSIDetails({ formData, handleChange, handleNestedChange, handlePrevious, handleSubmit }) {
  return (
    <div className='p-10'>
    <h1 className='font-bold text-center text-3xl pb-5 pt-5'>4. Proforma-I: Area Statements(FSI Details)</h1>
      <form className='max-w-4xl mx-auto' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label>4.1. Area (meter<sup>2</sup>):</label>
          <input
            type="number"
            name="fsi.area"
            value={formData.fsi.area}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4>4.2. Deductions for:  </h4>

        <div className='mb-5 ml-10'>
          <label>4.2.1. Proposed D.P./D.P. Road widening Area/ Service Road/ Highway widening:</label>
          <input
            type="number"
            name="fsi.deductions.proposedDp"
            value={formData.fsi.deductions.proposedDp}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5 ml-10'>
          <label>4.2.2. Any D.P. Reservation area:</label>
          <input
            type="number"
            name="fsi.deductions.anyDp"
            value={formData.fsi.deductions.anyDp}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4 >4.3. Amenity Space(if required):  </h4>

        <div className='mb-5 ml-10'>
          <label>4.3.1. Required:</label>
          <input
            type="number"
            name="fsi.aminitySpace.required"
            value={formData.fsi.aminitySpace.required}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5 ml-10'>
          <label>4.3.2. Adjustment of 2(b), if any:</label>
          <input
            type="number"
            name="fsi.aminitySpace.adj2b"
            value={formData.fsi.aminitySpace.adj2b}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>4.3.3. Balance Proposed: </label>
          <input
            type="number"
            name="balanceProposed"
            value={formData.fsi.aminitySpace.balanceProposed}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4 >4.4. Recreational open space:  </h4>

        <div className='mb-5 ml-10'>
          <label>4.4.1. Required: </label>
          <input
            type="number"
            name="fsi.recreationOpenSpace.required"
            value={formData.fsi.recreationOpenSpace.required}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5 ml-10'>
          <label>4.4.2. Proposed: </label>
          <input
            type="number"
            name="fsi.recreationOpenSpace.proposed"
            value={formData.fsi.recreationOpenSpace.proposed}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>4.5. Internal Road Area: </label>
          <input
            type="number"
            name="fsi.internalRoadArea"
            value={formData.fsi.internalRoadArea}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>4.6. Plotable Area: </label>
          <input
            type="number"
            name="fsi.plotableArea"
            value={formData.fsi.plotableArea}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4>4.7. Addition of FSI on payment of premium:  </h4>

        <div className='mb-5 ml-10'>
          <label>4.7.1. Maximum pemissible premium FSI - based on road width/ TOD zone: </label>
          <input
            type="number"
            name="fsi.paymentOfPremium.maxPremium"
            value={formData.fsi.paymentOfPremium.maxPremium}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5 ml-10'>
          <label>4.7.2. Proposed FSI on payment of premium: </label>
          <input
            type="number"
            name="fsi.paymentOfPremium.balanceProposed"
            value={formData.fsi.paymentOfPremium.proposedPremium}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4>4.8. In-situ FSI/ TDR loading: </h4>

        <div className='mb-5 ml-10'>
          <label>4.8.1. TDR area: </label>
          <input
            type="number"
            name="fsi.inSituLoading.tdrArea"
            value={formData.fsi.inSituLoading.tdrArea}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>4.9. Additional FSI area under Chapter No.7: </label>
          <input
            type="number"
            name="fsi.inSituLoading.additinalFsi"
            value={formData.fsi.additinalFsi}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4 >4.10. Total entitlement of FSI in the proposal: </h4>

        <div className='mb-5 ml-10'>
          <label>4.10.1. Ancillary Area FS upto 60% or 80% with payment of charges: </label>
          <input
            type="number"
            name="fsi.totalEntitlementProposed.ancillaryArea"
            value={formData.fsi.totalEntitlementProposed.ancillaryArea}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <div className='mb-5'>
          <label>4.11. Maximum utilization limit of FSI(building potential) permissible as per road width: </label>
          <input
            type="number"
            name="fsi.maxUtilizationLimit"
            value={formData.fsi.maxUtilizationLimit}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4>4.12. Total built-up area in proposal: </h4>

        <div className='mb-5 ml-10'>
          <label>4.12.1. Existing built-up area: </label>
          <input
            type="number"
            name="fsi.totalBuiltUpAreaProposal.existingBuiltUpArea"
            value={formData.fsi.totalBuiltUpAreaProposal.existingBuiltUpArea}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5 ml-10'>
          <label>4.12.2. Proposed built-up area: </label>
          <input
            type="number"
            name="fsi.totalBuiltUpAreaProposal.proposedBuiltUpAreaPLine"
            value={formData.fsi.totalBuiltUpAreaProposal.proposedBuiltUpAreaPLine}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>4.13. FSI consumed(15/13): </label>
          <input
            type="number"
            name="fsi.additinalFsi"
            value={formData.fsi.FSIConsumed}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>

        <h4>4.14. Area of inclusive housing, if any: </h4>

        <div className='mb-5 ml-10'>
          <label>4.14.1. Proposed: </label>
          <input
            type="number"
            name="fsi.areOfInclusiveHousing.proposed"
            value={formData.fsi.areOfInclusiveHousing.proposed}
            onChange={handleNestedChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <button onClick={handlePrevious} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Previous
        </button>
        <button type='submit' className=' ml-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </form>
    </div>
    );
}
