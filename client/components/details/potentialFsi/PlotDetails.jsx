import { useState } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleSubmit,
}) {
  const [dropOptions, setDropOptions] = useState([]);

  formData.builtUp =
    parseFloat(formData.proRata) > 0 || parseFloat(formData.proRata) ? parseFloat(formData.proRata) * parseFloat(formData.area) : parseFloat(formData.area);

  const handleAreaTypeRadioChange = (e) => {
    formData.areaType = e.target.value;
    if (formData.areaType === "congested") {
      setDropOptions([
        ["9toBelow18", "9 m and below 18 m"],
        ["18toBelow30", "18 m and below 30 m"],
      ]);
    } else if (formData.areaType === "non-congested") {
      setDropOptions([
        ["9toBelow12", "9 m and below 12 m"],
        ["12toBelow15", "12 m and below 15 m"],
        ["15toBelow24", "15 m and below 24 m"],
        ["24toBelow30", "24 m and below 30 m"],
      ]);
    }
  };

  const handleUlbRadioChange = (e) => {
    formData.ulb = e.target.value;
  };

  const handleZoneRadioChange = (e) => {
    formData.zone = e.target.value;
  };

  const handlePlotTypeRadioChange = (e) => {
    formData.plotType = e.target.value;
  };

  return (
    <>
      <div className="p-5 sm:hidden">
        <h2 className="mb-4 text-2xl">Plot Details and FSI</h2>

        <div className="mb-4">
          <label className="block text-gray-700">1. Area Type:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="areaType"
                value="congested"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleAreaTypeRadioChange}
              />
              <span className="ml-2">Congested</span>
            </label>
            <label>
              <input
                type="radio"
                name="areaType"
                value="non-congested"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleAreaTypeRadioChange}
              />
              <span className="ml-2">Non-congested</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">2. ULB:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="ulb"
                value="muncipleCorp"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleUlbRadioChange}
              />
              <span className="ml-2">Municipal Corporation</span>
            </label>
            <label>
              <input
                type="radio"
                name="ulb"
                value="otherRp"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleUlbRadioChange}
              />
              <span className="ml-2">Other / Rp</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">3. Zone:</label>
          <div className="flex justify-start">
          <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="zone"
                      value="yellow"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleZoneRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.areaType !== "congested" && (
                    <label className="flex-[50%] ">
                      <input
                        type="radio"
                        name="zone"
                        value="green"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleZoneRadioChange}
                      />
                      <span className="ml-2 text-gray-700">Green</span>
                    </label>
                  )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">4. Plot Type:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="plotType"
                value="agree"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handlePlotTypeRadioChange}
              />
              <span className="ml-2">Agriculture</span>
            </label>
            <label>
              <input
                type="radio"
                name="plotType"
                value="non-agree"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handlePlotTypeRadioChange}
              />
              <span className="ml-2">N/A</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">5. Plot Area:</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">6. Pro-Rata Factor:</label>
          <input
            type="number"
            name="proRata"
            value={formData.proRata}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">7. Built-up Area (m²):</label>
          <p className="w-full p-2 border-2 rounded-lg border-slate-400">
            {formData.builtUp || "Enter data in required field"}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">8. Road Width:</label>
          <select
            name="roadWidth"
            value={formData.roadWidth}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
          >
            <option value="">--Select Road Width--</option>
            <option value="below9">below 9.0 m</option>
            {dropOptions.map((val, index) => (
              <option key={index} value={val[0]}>
                {val[1]}
              </option>
            ))}
            <option value="above30">30 m and above</option>
          </select>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={handleSubmit}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Next
          </button>
        </div>
      </div>

      <div className="hidden p-5 sm:flex">
        <div>
          <h2 className="mb-4 text-2xl">Plot Details and FSI</h2>
          <table className="table-auto  w-[830px] text-sm">
            <tbody>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  1. Proposed Project Name:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your project name"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  2. Building Type:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select Building Type--</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="copmposite">Copmposite</option>
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">
                  3. Area Type:
                </td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="areaType"
                      value="congested"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="areaType"
                      value="non-congested"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleAreaTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Non-congested</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">4. ULB:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="ulb"
                      value="muncipleCorp"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleUlbRadioChange}
                    />
                    <span className="ml-2 text-gray-700">
                      Munciple Corporation
                    </span>
                  </label>
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="ulb"
                      value="otherRp"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleUlbRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Other / Rp</span>
                  </label>
                </td>
              </tr>
              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">5. Zone:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="zone"
                      value="yellow"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleZoneRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.areaType !== "congested" && (
                    <label className="flex-[50%] ">
                      <input
                        type="radio"
                        name="zone"
                        value="green"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleZoneRadioChange}
                      />
                      <span className="ml-2 text-gray-700">Green</span>
                    </label>
                  )}

                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-3 border border-slate-400">
                  6. Plot type:
                </td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="plotType"
                      value="agree"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handlePlotTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Agreeculture</span>
                  </label>
                  <label className="flex-[50%] ">
                    <input
                      type="radio"
                      name="plotType"
                      value="non-agree"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handlePlotTypeRadioChange}
                    />
                    <span className="ml-2 text-gray-700">N/A</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  7. Plot Area:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  8. Pro-Rata factor:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="proRata"
                    value={formData.proRata}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  9. Built-up Area (meter<sup>2</sup>):
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="builtUp"
                >
                  {formData.builtUp || "Enter data in required field"}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  10. Road Width:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="roadWidth"
                    value={formData.roadWidth}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select Road Width--</option>
                    <option value="below9">below 9.0 m</option>
                    {dropOptions.map((val, index) => (
                      <option key={index} value={val[0]}>
                        {val[1]}
                      </option>
                    ))}
                    <option value="above30">30 m and above</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4 ">
            <button
              onClick={handleSubmit}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
