
export default function Preview({ formData, handlePrevious, handleSubmit }) {

  return (
    <div>
      <h1 className="pt-10 pb-10 text-3xl font-bold text-center">
        Preview Page
      </h1>
      <div className="max-w-3xl mx-auto">

        {/* <div className="mb-4">
          <h3 className="pt-10 pb-4 text-xl font-bold">Plot Details: </h3>

          <h4 className="font-bold">Size: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">X: </b>
            {formData.plot.sizex} meter
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Y: </b>
            {formData.plot.sizey} meter
          </p>
          <p>
            <b className="pr-[95px]">Area: </b>
            {formData.plot.area} meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[42px]">Road Width: </b>
            {formData.plot.roadWidth} meter
          </p>
        </div>

        <div className="mb-4">
          <h3 className="pt-10 pb-4 text-xl font-bold">Location Details: </h3>
          <p>
            <b className="pr-[78px]">Village: </b>
            {formData.location.village}
          </p>
          <p>
            <b className="pr-[81px]">Taluka: </b>
            {formData.location.taluka}
          </p>
          <p>
            <b className="pr-[74px]">District: </b>
            {formData.location.district}
          </p>
          <p>
            <b className="pr-[98px]">ULB: </b>
            {formData.location.ulb}
          </p>
          <p>
            <b className="pr-[90px]">Zone: </b>
            {formData.location.zone}
          </p>
        </div>

        <div className="mb-5">
          <h3 className="pt-10 pb-4 text-xl font-bold">FSI Details: </h3>
          <p>
            <b className="pr-[95px]">Area: </b>
            {formData.fsi.area} meter<sup>2</sup>
          </p>
          <h4 className="font-bold">Deductions for: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">
              Proposed D.P./D.P. Road widening Area/ Service Road/ Highway
              widening:{" "}
            </b>
            {formData.fsi.deductions.proposedDp} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Any D.P. Reservation area: </b>
            {formData.fsi.deductions.anyDp} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Total: </b>
            {formData.fsi.deductions.anyDp +
              formData.fsi.deductions.proposedDp}{" "}
            meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[95px]">Balance area of plot: </b>
            {formData.fsi.area -
              (formData.fsi.deductions.anyDp +
                formData.fsi.deductions.proposedDp)}{" "}
            meter<sup>2</sup>
          </p>
          <h4 className="font-bold">Aminity Space: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">Required: </b>
            {formData.fsi.aminitySpace.required} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Adjustment of 2(b): </b>
            {formData.fsi.aminitySpace.adj2b} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Balance proposed: </b>
            {formData.fsi.aminitySpace.balanceProposed} meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[42px]">Net plot area: </b>
            {formData.fsi.area -
              (formData.fsi.deductions.anyDp +
                formData.fsi.deductions.proposedDp) -
              formData.fsi.aminitySpace.balanceProposed}{" "}
            meter
          </p>
          <h4 className="font-bold">Recreational open space: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">Required: </b>
            {formData.fsi.recreationOpenSpace.required} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Proposed: </b>
            {formData.fsi.recreationOpenSpace.proposed} meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[95px]">Internal road area: </b>
            {formData.fsi.internalRoadArea} meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[95px]">Plotable area: </b>
            {formData.fsi.plotableArea} meter<sup>2</sup>
          </p>
          <p>
            <b className="pr-[95px]">
              Built-ip area with reference to basic FSI as per front road width:{" "}
            </b>
            {formData.fsi.area} meter<sup>2</sup>
          </p>

          <h4 className="font-bold">Addition of FSI on payment of premium: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">
              Maximum permissible premium FSI based on road width/ TOD zone:{" "}
            </b>
            {formData.fsi.paymentOfPremium.maxPremium} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">Proposed FSI on payment of premium: </b>
            {formData.fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
          </p>

          <h4 className="font-bold">In-situ FSI/ TDR loading: </h4>
          <p className="pl-5">
            <b className="pr-[100px]">In-situ area against DP road: </b>
            {formData.fsi.deductions.proposedDp * 2} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">
              In-situ area against Aminity space if handed over:{" "}
            </b>
            {formData.fsi.inSituLoading.areaAgainstAminitySpace} meter<sup>2</sup>
          </p>
        </div> */}
        <div className="flex justify-between mt-4 ">
        <button 
        onClick={handlePrevious} 
        className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
>        
Previous
        </button>
        <button 
        onClick={handleSubmit} 
        className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
>        Submit
        </button>
      </div>
      </div>
    </div>
  );
}
