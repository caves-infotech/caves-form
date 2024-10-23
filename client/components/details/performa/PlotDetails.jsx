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
      <div className="p-2">
        <div className="lg:flex gap-x-2  p-2">
          <div className="flex flex-col w-full mb-2 gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">1. Building Type:</div>
              <div className="px-4 py-2 sm:w-1/2">
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
              </div>
            </div>

            {formData.plot.buildingType.input == "other" && (
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  Categories of Other Buildings:
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  <select
                    name="plot.buildingType.other"
                    value={formData.plot.buildingType.other}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select Other Building Type--</option>
                    <option value="education">Education</option>
                    <option value="medical">Medical</option>
                    <option value="institution">
                      Institutional Buildings/ Banks
                    </option>
                    <option value="hotels">Starred category hotels </option>
                    <option value="government">
                      Buildings of Government and Semi Government Offices
                    </option>
                    <option value="religious"> Religious Building</option>
                    <option value="yatri">Yatri Niwas</option>
                    <option value="shelter">
                      Basic shelter for urban poor and Housing schemes developed
                      for EWS / LIG
                    </option>
                    <option value="hostel">Hostel</option>
                  </select>
                </div>
              </div>
            )}

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200"> 
              <div className="px-4 py-2 sm:w-1/2"> 2. Area Type:</div>
              <div className="flex px-4 py-3  sm:w-1/2">
                <label className="flex-1">
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
                <label className="flex-1">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">3. ULB:</div>
              <div className="flex px-4 py-3 :flex-col sm:w-1/2">
                <label className="flex-1">
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
                <label className="flex-1">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">4. Zone:</div>
              <div className="flex px-4 py-3 :flex-col sm:w-1/2">
                <label className="flex-1 items-center ">
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
                  <label className="flex-1 ">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">5. Plot type:</div>
              <div className="flex px-4 py-3 :flex-col sm:w-1/2">
                <label className="flex-1 items-center ">
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
                <label className="flex-1 ">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                6. Is group housing scheme:
              </div>
              <div className="flex px-4 py-3 :flex-col sm:w-1/2">
                <label className="flex-1 items-center ">
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
                <label className="flex-1 ">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">7. Plot Area:</div>
              <div className="flex justify-between px-4 py-3 :flex-col sm:w-1/2">
                <input
                  type="number"
                  name="plot.area"
                  value={formData.plot.area}
                  onChange={handleChange}
                  className="p-2 border-2 rounded-lg w-[75%] border-slate-400"
                  placeholder="Enter Plot Area"
                />
                <p className=" flex items-center">Sq. Meter</p>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                8. Pro-Rata factor (if applicable):
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="number"
                  name="plot.proRata"
                  value={formData.plot.proRata}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter Pro-Rata Factor"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                9. Built-up Area (meter<sup>2</sup>):
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                {(formData.plot.builtUp &&
                  formData.plot.builtUp + " Sq. Meter") ||
                  "Enter data in required field"}
              </div>
            </div>

            {formData.plot.buildingType.input == "mix" && (
              <>
                <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                  <div className="px-4 py-2 sm:w-1/2">
                    Residential Built-up Area:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="plot.buildingType.residential"
                      value={formData.plot.buildingType.residential}
                      onChange={handleNestedChange}
                      className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter Pro-Rata Factor"
                    />
                    <p className=" flex items-center">Sq. Meter</p>
                  </div>
                </div>

                <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                  <div className="px-4 py-2 sm:w-1/2">
                    Commercial Built-up Area:
                  </div>
                  <div className="px-4 py-2 sm:w-1/2">
                    {" "}
                    <input
                      type="number"
                      name="plot.buildingType.commercial"
                      value={formData.plot.buildingType.commercial}
                      onChange={handleNestedChange}
                      className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                      placeholder="Enter Pro-Rata Factor"
                    />
                    <p className=" flex items-center">Sq. Meter</p>
                  </div>
                </div>
              </>
            )}

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">10. Road Width:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <select
                  name="plot.roadWidth"
                  value={formData.plot.roadWidth}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                >
                  <option value="">--Select Road Width--</option>
                  {formData.plot.areaType === "congested" ? (
                    <>
                      <option value="below9">below 9.0 m</option>
                      <option value="9toBelow18">9 m and below 18 m</option>
                      <option value="18toBelow30">18 m and below 30 m</option>
                      <option value="above30">30 m and above</option>
                    </>
                  ) : (
                    <>
                      <option value="below9">below 9.0 m</option>
                      <option value="9toBelow12">9 m and below 12 m</option>
                      <option value="12toBelow15">12 m and below 15 m</option>
                      <option value="15toBelow18">15 m and below 18 m</option>
                      <option value="18toBelow24">18 m and below 24 m</option>
                      <option value="24toBelow30">24 m and below 30 m</option>
                      <option value="above30">30 m and above</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>

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
    </>
  );
}
