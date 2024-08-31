export default function OwnerPreview({ owner }) {

  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl pb-4 pt-10">Owner Details: </h3>
      {/* <NestedList data={owner} /> */}

      <p>
        <b className="pr-[88px]">Name: </b>
        {owner.name}
      </p>
      <p>
        <b className="pr-[92px]">Email: </b>
        {owner.email}
      </p>
      <p>
        <b className="pr-[18px]">Phone Number: </b>
        {owner.phone}
      </p>
    </div>
  );
}
