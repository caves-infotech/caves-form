import { useState } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) {


  const [dropOptions, setDropOptions] = useState([]);

  formData.plot.builtUp = parseFloat(formData.plot.proRata) > 0 || parseFloat(formData.plot.proRata) ? parseFloat(formData.plot.proRata) * parseFloat(formData.plot.area) : parseFloat(formData.plot.area);

  const handleAreaTypeRadioChange = (e) => {
    formData.plot.areaType = e.target.value;
    if( formData.plot.areaType === "congested"){
      setDropOptions([[ "9toBelow18", "9 m and below 18 m" ],
        [ "18toBelow30", "18 m and below 30 m" ]]);
    }else if (formData.plot.areaType === "non-congested") {
      setDropOptions([[ "9toBelow12", "9 m and below 12 m" ],
        ["12toBelow15", "12 m and below 15 m"],
        ["15toBelow24", "15 m and below 24 m"],
        ["24toBelow30", "24 m and below 30 m" ]]);
    };    
  };

  const handleUlbRadioChange = (e) => {
    formData.plot.ulb = e.target.value;
  };

  const handleZoneRadioChange = (e) => {
    formData.plot.zone = e.target.value;
  };

  const handlePlotTypeRadioChange = (e) => {
    formData.plot.plotType = e.target.value;
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">2. Plot Details and FSI</h2>
      <table className="table-auto w-full">
        <tbody>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">1. Area Type:</td>
            <td className="border px-4 py-2 flex justify-around">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.areaType"
                  value="congested"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleAreaTypeRadioChange}
                />
                <span className="ml-2 text-gray-700">Congested</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.areaType"
                  value="non-congested"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleAreaTypeRadioChange}
                />
                <span className="ml-2 text-gray-700">Non-congested</span>
              </label>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">2. ULB:</td>
            <td className="border px-4 py-2 flex justify-around">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.ulb"
                  value="muncipleCorp"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleUlbRadioChange}
                />
                <span className="ml-2 text-gray-700">Munciple Corporation</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.ulb"
                  value="otherRp"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleUlbRadioChange}
                />
                <span className="ml-2 text-gray-700">Other / Rp</span>
              </label>
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">3. Zone:</td>
            <td className="border px-4 py-2 flex justify-around">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.zone"
                  value="green"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleZoneRadioChange}
                />
                <span className="ml-2 text-gray-700">Green</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.zone"
                  value="yellow"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handleZoneRadioChange}
                />
                <span className="ml-2 text-gray-700">Yellow</span>
              </label>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">4. Plot type:</td>
            <td className="border px-4 py-2 flex justify-around">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.plotType"
                  value="agree"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handlePlotTypeRadioChange}
                />
                <span className="ml-2 text-gray-700">Agreeculture</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="plot.plotType"
                  value="non-agree"
                  className="form-radio h-4 w-4 text-blue-600"
                  onChange={handlePlotTypeRadioChange}
                />
                <span className="ml-2 text-gray-700">N/A</span>
              </label>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">5. Plot Area:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="plot.area"
                value={formData.plot.area}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">6. Pro-Rata factor:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="plot.proRata"
                value={formData.plot.proRata}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">7. Built-up Area (meter<sup>2</sup>):</td>
            <td
              className="border px-4 py-2"
              name="plot.builtUp"
            >
              {formData.plot.builtUp || "Enter data in required field"}
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">8. Road Width:</td>
            <td className="border px-4 py-2">
              <select
                name="plot.roadWidth"
                value={formData.plot.roadWidth}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value="">--Select Road Width--</option>
                <option value="below9">below 9.0 m</option>
                {
                  dropOptions.map((val, index)=>(
                    <option key={index} value={val[0]}>{val[1]}</option>
                  ))
                }
                <option value="above30">30 m and above</option>
              </select>
            </td>
          </tr>

        </tbody>
      </table>
      <div className=" mt-4 flex justify-between">
        <button onClick={handlePrevious} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Previous
        </button>
        <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </div>
    </div>
  );
}
