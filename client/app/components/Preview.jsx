
export default function OwnerPreview() {

  return (
    <div>
      <h1 className="font-bold text-center text-3xl pb-10 pt-10">
        Preview Page
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-5">
          <h3 className="font-bold text-xl pb-4 pt-10">FSI Details: </h3>
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
          {/* remaining  */}
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
          {/* remaining */}
          <p className="pl-5">
            <b className="pr-[100px]">
              In-situ area against Aminity space if handed over:{" "}
            </b>
            {formData.fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">
              In-situ area against Aminity space if handed over:{" "}
            </b>
            {formData.fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
          </p>
          <p className="pl-5">
            <b className="pr-[100px]">
              In-situ area against Aminity space if handed over:{" "}
            </b>
            {formData.fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
}
