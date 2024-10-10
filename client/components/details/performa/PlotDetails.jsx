export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleNext,
  handlePrevious,
}) {

  formData.plot.builtUp =
    parseFloat(formData.plot.proRata) > 0 || parseFloat(formData.plot.proRata)
      ? parseFloat(formData.plot.proRata) * parseFloat(formData.plot.area)
      : parseFloat(formData.plot.area);

  return (
    <>

      {/* <div className="p-5 sm:hidden">
        <h2 className="mb-4 text-2xl">2. Plot Details and FSI</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            1. Building Type:
          </label>
          <select
            name="plot.buildingType"
            value={formData.plot.buildingType}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          >
            <option value="">--Select Building Type--</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="composite">Composite</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">2. Area Type:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="plot.areaType"
                value="congested"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleAreaTypeRadioChange}
              />
              <span className="ml-2">Congested</span>
            </label>
            <label>
              <input
                type="radio"
                name="plot.areaType"
                value="non-congested"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleAreaTypeRadioChange}
              />
              <span className="ml-2">Non-congested</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">3. ULB:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="plot.ulb"
                value="muncipleCorp"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleUlbRadioChange}
              />
              <span className="ml-2">Municipal Corporation</span>
            </label>
            <label>
              <input
                type="radio"
                name="plot.ulb"
                value="otherRp"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleUlbRadioChange}
              />
              <span className="ml-2">Other / Rp</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">4. Zone:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="plot.zone"
                value="green"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleZoneRadioChange}
              />
              <span className="ml-2">Green</span>
            </label>
            <label>
              <input
                type="radio"
                name="plot.zone"
                value="yellow"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleZoneRadioChange}
              />
              <span className="ml-2">Yellow</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">5. Plot Type:</label>
          <div className="flex justify-start">
            <label className="mr-4">
              <input
                type="radio"
                name="plot.plotType"
                value="agree"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handlePlotTypeRadioChange}
              />
              <span className="ml-2">Agriculture</span>
            </label>
            <label>
              <input
                type="radio"
                name="plot.plotType"
                value="non-agree"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handlePlotTypeRadioChange}
              />
              <span className="ml-2">N/A</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">6. Plot Area:</label>
          <input
            type="number"
            name="plot.area"
            value={formData.plot.area}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">7. Pro-Rata Factor:</label>
          <input
            type="number"
            name="plot.proRata"
            value={formData.plot.proRata}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">8. Built-up Area (m²):</label>
          <p className="w-full p-2 border-2 rounded-lg border-slate-400">
            {formData.plot.builtUp || "Enter data in required field"}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">9. Road Width:</label>
          <select
            name="plot.roadWidth"
            value={formData.plot.roadWidth}
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

        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={handlePrevious}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Next
          </button>
        </div>
      </div> */}

      <div className="hidden p-5 sm:flex">
        <div>
          <h2 className="mb-4 text-2xl">2. Plot Details and FSI</h2>
          <table className="table-auto  w-[830px] text-sm">
            <tbody>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  1. Building Type:
                </td>
                <td className=" w-[60%] px-4 py-2 border border-slate-400">
                  <select
                    name="plot.buildingType.input"
                    value={formData.plot.buildingType.input}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select Building Type--</option>
                    <option value="residential">Residential</option>
                    <option value="mix">Mix used</option>
                    <option value="other">Other</option>
                  </select>
                </td>
              </tr>

              {formData.plot.buildingType.input == "other" &&
                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-16 py-2 border-l border-slate-400">
                    Categories of Other Buildings:
                  </td>
                  <td className="px-4 py-2 border-r border-b border-slate-400">
                    <select
                      name="plot.buildingType.other"
                      value={formData.plot.buildingType.other}
                      onChange={handleNestedChange}
                      className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                    >
                      <option value="">--Select Other Building Type--</option>
                      <option value="education">Education</option>
                      <option value="medical">Medical</option>
                      <option value="institution">Institutional Buildings/ Banks</option>
                      <option value="hotels">Starred category hotels </option>
                      <option value="government">Buildings of Government and Semi Government Offices</option>
                      <option value="religious"> Religious Building</option>
                      <option value="yatri">Yatri Niwas</option>
                      <option value="shelter">Basic shelter for urban poor and Housing schemes developed for EWS / LIG</option>
                      <option value="hostel">Hostel</option>
                    </select>
                  </td>
                </tr>
              }


              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">
                  2. Area Type:
                </td>
                <td className="flex px-4 py-3 border-r border-slate-400">
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="plot.areaType"
                      value="congested"
                      checked={formData.plot.areaType == "congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="plot.areaType"
                      value="non-congested"
                      checked={formData.plot.areaType == "non-congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Non-congested</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">3. ULB:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="plot.ulb"
                      value="muncipleCorp"
                      checked={formData.plot.ulb == "muncipleCorp"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">
                      Munciple Corporation
                    </span>
                  </label>
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="plot.ulb"
                      value="otherRp"
                      checked={formData.plot.ulb == "otherRp"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Other / Rp</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">4. Zone:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="plot.zone"
                      value="yellow"
                      checked={formData.plot.zone == "yellow"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.plot.areaType !== "congested" && (
                    <label className="flex-[50%] ">
                      <input
                        type="radio"
                        name="plot.zone"
                        value="green"
                        checked={formData.plot.zone == "green"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-gray-700">Green</span>
                    </label>
                  )}
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-3 border border-slate-400">
                  5. Plot type:
                </td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="plot.plotType"
                      value="agree"
                      checked={formData.plot.plotType == "agree"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Agreeculture</span>
                  </label>
                  <label className="flex-[50%] ">
                    <input
                      type="radio"
                      name="plot.plotType"
                      value="non-agree"
                      checked={formData.plot.plotType == "non-agree"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">N/A</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-3 border border-slate-400">
                  6. Is group housing scheme:
                </td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%] items-center ">
                    <input
                      type="radio"
                      name="plot.groupHousing"
                      value="yes"
                      checked={formData.plot.groupHousing == "yes"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex-[50%] ">
                    <input
                      type="radio"
                      name="plot.groupHousing"
                      value="no"
                      checked={formData.plot.groupHousing == "no"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  7. Plot Area:
                </td>
                <td className="flex gap-2 px-4 py-2 border-t border-r border-slate-400">
                  <input
                    type="number"
                    name="plot.area"
                    value={formData.plot.area}
                    onChange={handleChange}
                    className="p-2 border-2 rounded-lg w-[80%] border-slate-400"
                    placeholder="Enter Plot Area"
                  />
                  <p className=" flex items-center">
                    Sq. Meter
                  </p>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  8. Pro-Rata factor (if applicable):
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="plot.proRata"
                    value={formData.plot.proRata}
                    onChange={handleChange}
                    className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                    placeholder="Enter Pro-Rata Factor"
                  />

                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  9. Built-up Area (meter<sup>2</sup>):
                </td>
                <td
                  className="px-4 py-2 border border-slate-400"
                  name="plot.builtUp"
                >
                  {formData.plot.builtUp && (formData.plot.builtUp + " Sq. Meter") || "Enter data in required field"}
                </td>
              </tr>

              {formData.plot.buildingType.input == "mix" &&
                <>
                  <tr className="even:bg-white  odd:bg-[#dededeac] ">
                    <td className="px-16 py-2 border-l border-slate-400">
                      Residential Built-up Area:
                    </td>
                    <td className=" flex gap-2 px-4 py-2 border-r border-slate-400">
                      <input
                        type="number"
                        name="plot.buildingType.residential"
                        value={formData.plot.buildingType.residential}
                        onChange={handleNestedChange}
                        className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                        placeholder="Enter Pro-Rata Factor"
                      />
                      <p className=" flex items-center">
                        Sq. Meter
                      </p>
                    </td>
                  </tr>

                  <tr className="even:bg-[#dededeac]  odd:bg-white ">
                    <td className="px-16 py-2 border-l border-slate-400">
                      Commercial Built-up Area:
                    </td>
                    <td className="flex gap-2 px-4 py-2 border-r border-slate-400">
                      <input
                        type="number"
                        name="plot.buildingType.commercial"
                        value={formData.plot.buildingType.commercial}
                        onChange={handleNestedChange}
                        className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                        placeholder="Enter Pro-Rata Factor"
                      />
                      <p className=" flex items-center">
                        Sq. Meter
                      </p>
                    </td>
                  </tr>
                </>
              }

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  10. Road Width:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="plot.roadWidth"
                    value={formData.plot.roadWidth}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select Road Width--</option>
                    {formData.plot.areaType === "congested" ?
                      <>
                        <option value="below9">below 9.0 m</option>
                        <option value="9toBelow18">9 m and below 18 m</option>
                        <option value="18toBelow30">18 m and below 30 m</option>
                        <option value="above30">30 m and above</option>
                      </>
                      :
                      <>
                        <option value="below9">below 9.0 m</option>
                        <option value="9toBelow12">9 m and below 12 m</option>
                        <option value="12toBelow15">12 m and below 15 m</option>
                        <option value="15toBelow18">15 m and below 18 m</option>
                        <option value="18toBelow24">18 m and below 24 m</option>
                        <option value="24toBelow30">24 m and below 30 m</option>
                        <option value="above30">30 m and above</option>
                      </>
                    }
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between mt-4 ">
            <button
              onClick={handlePrevious}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
