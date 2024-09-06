
import NestedList from "../NestedList";

export default function FSIPreview({ fsi }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl pb-4 pt-10">FSI Details: </h3>

            <NestedList data={fsi} />

      <p>
        <b className="pr-[95px]">Area: </b>
        {fsi.area} meter<sup>2</sup>
      </p>
      <h4 className="font-bold">Deductions for: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">
          Proposed D.P./D.P. Road widening Area/ Service Road/ Highway widening:{" "}
        </b>
        {fsi.deductions.proposedDp} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Any D.P. Reservation area: </b>
        {fsi.deductions.anyDp} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Total: </b>
        {fsi.deductions.anyDp + fsi.deductions.proposedDp} meter<sup>2</sup>
      </p>
      <p>
        <b className="pr-[95px]">Balance area of plot: </b>
        {fsi.area - (fsi.deductions.anyDp + fsi.deductions.proposedDp)} meter
        <sup>2</sup>
      </p>
      <h4 className="font-bold">Aminity Space: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">Required: </b>
        {fsi.aminitySpace.required} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Adjustment of 2(b): </b>
        {fsi.aminitySpace.adj2b} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Balance proposed: </b>
        {fsi.aminitySpace.balanceProposed} meter<sup>2</sup>
      </p>
      <p>
        <b className="pr-[42px]">Net plot area: </b>
        {fsi.area -
          (fsi.deductions.anyDp + fsi.deductions.proposedDp) -
          fsi.aminitySpace.balanceProposed}{" "}
        meter
      </p>
      <h4 className="font-bold">Recreational open space: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">Required: </b>
        {fsi.recreationOpenSpace.required} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Proposed: </b>
        {fsi.recreationOpenSpace.proposed} meter<sup>2</sup>
      </p>
      <p>
        <b className="pr-[95px]">Internal road area: </b>
        {fsi.internalRoadArea} meter<sup>2</sup>
      </p>
      <p>
        <b className="pr-[95px]">Plotable area: </b>
        {fsi.plotableArea} meter<sup>2</sup>
      </p>
      {/* remaining  */}
      <p>
        <b className="pr-[95px]">
          Built-ip area with reference to basic FSI as per front road width:{" "}
        </b>
        {fsi.area} meter<sup>2</sup>
      </p>

      <h4 className="font-bold">Addition of FSI on payment of premium: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">
          Maximum permissible premium FSI based on road width/ TOD zone:{" "}
        </b>
        {fsi.paymentOfPremium.maxPremium} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Proposed FSI on payment of premium: </b>
        {fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
      </p>

      <h4 className="font-bold">In-situ FSI/ TDR loading: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">In-situ area against DP road: </b>
        {fsi.deductions.proposedDp * 2} meter<sup>2</sup>
      </p>
      {/* remaining */}
      <p className="pl-5">
        <b className="pr-[100px]">
          In-situ area against Aminity space if handed over:{" "}
        </b>
        {fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">
          In-situ area against Aminity space if handed over:{" "}
        </b>
        {fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">
          In-situ area against Aminity space if handed over:{" "}
        </b>
        {fsi.paymentOfPremium.proposedPremium} meter<sup>2</sup>
      </p>
    </div>
  );
}
