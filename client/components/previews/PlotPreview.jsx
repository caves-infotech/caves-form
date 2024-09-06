import NestedList from "../NestedList";
export default function PlotPreview({ plot }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl pb-4 pt-10">Plot Details: </h3>
      {/* <NestedList data={plot} /> */}

      <h4 className="font-bold">Size: </h4>
      <p className="pl-5">
        <b className="pr-[100px]">X: </b>
        {plot.sizex} meter
      </p>
      <p className="pl-5">
        <b className="pr-[100px]">Y: </b>
        {plot.sizey} meter
      </p>
      <p>
        <b className="pr-[95px]">Area: </b>
        {plot.area} meter<sup>2</sup>
      </p>
      <p>
        <b className="pr-[42px]">Road Width: </b>
        {plot.roadWidth} meter
      </p>
    </div>
  );
}
