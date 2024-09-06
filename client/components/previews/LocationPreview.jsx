export default function LocationPreview({ location }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl pb-4 pt-10">Location Details: </h3>
      <p>
        <b className="pr-[78px]">Village: </b>
        {location.village}
      </p>
      <p>
        <b className="pr-[81px]">Taluka: </b>
        {location.taluka}
      </p>
      <p>
        <b className="pr-[74px]">District: </b>
        {location.district}
      </p>
      <p>
        <b className="pr-[98px]">ULB: </b>
        {location.ulb}
      </p>
      <p>
        <b className="pr-[90px]">Zone: </b>
        {location.zone}
      </p>
    </div>
  );
}
