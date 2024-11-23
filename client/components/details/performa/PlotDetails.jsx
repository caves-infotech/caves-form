export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleNext,
  handlePrevious,
}) {
  formData.plot.builtUp = (
    parseFloat(formData.plot.proRata) > 0 || parseFloat(formData.plot.proRata)
      ? parseFloat(formData.plot.proRata) * parseFloat(formData.plot.area)
      : parseFloat(formData.plot.area)
  ).toFixed(2);

  return (
    <>
      <div className="p-2">
        <form onSubmit={handleNext}>
          <div className="lg:flex gap-x-2  p-2">
            <div className="flex flex-col w-full mb-2 gap-y-2">
              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">1. Building Type:</div>
                <div className="px-4 py-2 sm:w-1/2">
                  <select
                    name="plot.buildingType.input"
                    value={formData.plot.buildingType.input}
                    onChange={handleNestedChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg-[#dededeac]"
                    required
                  >
                    <option value="">--Select Building Type--</option>
                    <option value="Residential">Residential</option>
                    <option value="Mix used">Mix used</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {formData.plot.buildingType.input == "Other" && (
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
                      required
                    >
                      <option value="">--Select Other Building Type--</option>
                      <option value="Education">Education</option>
                      <option value="Medical">Medical</option>
                      <option value="Institutional Buildings/ Banks">
                        Institutional Buildings/ Banks
                      </option>
                      <option value="Starred category hotels">Starred category hotels </option>
                      <option value="Buildings of Government and Semi Government Offices">
                        Buildings of Government and Semi Government Offices
                      </option>
                      <option value="Religious Building"> Religious Building</option>
                      <option value="Yatri Niwas">Yatri Niwas</option>
                      <option value="Basic shelter for urban poor and Housing schemes
                        developed for EWS / LIG">
                        Basic shelter for urban poor and Housing schemes
                        developed for EWS / LIG
                      </option>
                      <option value="Hostel">Hostel</option>
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
                      value="Congested"
                      checked={formData.plot.areaType == "Congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">Congested</span>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="plot.areaType"
                      value="Non-congested"
                      checked={formData.plot.areaType == "Non-congested"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
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
                      value="Munciple Corporation"
                      checked={formData.plot.ulb == "Munciple Corporation"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">
                      Munciple Corporation
                    </span>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="plot.ulb"
                      value="Other / Rp"
                      checked={formData.plot.ulb == "Other / Rp"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
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
                      value="Yellow"
                      checked={formData.plot.zone == "Yellow"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">Yellow</span>
                  </label>
                  {formData.plot.areaType !== "Congested" && (
                    <label className="flex-1 ">
                      <input
                        type="radio"
                        name="plot.zone"
                        value="Green"
                        checked={formData.plot.zone == "Green"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleChange}
                        required
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
                      value="Agreeculture"
                      checked={formData.plot.plotType == "Agreeculture"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">Agreeculture</span>
                  </label>
                  <label className="flex-1 ">
                    <input
                      type="radio"
                      name="plot.plotType"
                      value="Non Agreeculture"
                      checked={formData.plot.plotType == "Non Agreeculture"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">Non Agreeculture</span>
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
                      value="Yes"
                      checked={formData.plot.groupHousing == "Yes"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex-1 ">
                    <input
                      type="radio"
                      name="plot.groupHousing"
                      value="No"
                      checked={formData.plot.groupHousing == "No"}
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleChange}
                      required
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
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (
                        (!isNaN(value) && value >= 0) ||
                        e.target.value === ""
                      ) {
                        handleChange(e);
                      }
                    }}
                    min="0"
                    className="p-2 border-2 rounded-lg w-[75%] border-slate-400"
                    placeholder="Enter Plot Area"
                    required
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
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (
                        (!isNaN(value) && value >= 0) ||
                        e.target.value === ""
                      ) {
                        handleChange(e);
                      }
                    }}
                    // min="0"
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                    placeholder="Enter Pro-Rata Factor"
                  />
                </div>
              </div>

              <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                <div className="px-4 py-2 sm:w-1/2">
                  9. Built-up Area (Sq. Meter):
                </div>
                <div className="px-4 py-2 sm:w-1/2">
                  {formData.plot.builtUp == "NaN"
                    ? "Enter data in required field"
                    : formData.plot.builtUp + " Sq. Meter"}
                </div>
              </div>

              {formData.plot.buildingType.input == "Mix used" && (
                <>
                  <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                    <div className="px-4 py-2 sm:w-1/2">
                      Residential Built-up Area:
                    </div>
                    <div className="flex justify-between px-4 py-3 :flex-col sm:w-1/2">
                      <input
                        type="number"
                        name="plot.buildingType.residential"
                        value={formData.plot.buildingType.residential}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (
                            (!isNaN(value) && value >= 0) ||
                            e.target.value === ""
                          ) {
                            handleNestedChange(e);
                          }
                        }}
                        min="0"
                        className="p-2 border-2 rounded-lg w-[75%] border-slate-400"
                        // className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                        placeholder="Enter Built-up Area"
                        required
                      />
                      <p className=" flex items-center">Sq. Meter</p>
                    </div>
                  </div>

                  <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                    <div className="px-4 py-2 sm:w-1/2">
                      Commercial Built-up Area:
                    </div>
                    <div className="flex justify-between px-4 py-3 :flex-col sm:w-1/2">
                      <input
                        type="number"
                        name="plot.buildingType.commercial"
                        value={formData.plot.buildingType.commercial}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (
                            (!isNaN(value) && value >= 0) ||
                            e.target.value === ""
                          ) {
                            handleNestedChange(e);
                          }
                        }}
                        min="0"
                        className="p-2 border-2 rounded-lg w-[75%] border-slate-400"
                        // className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                        placeholder="Enter Built-up Area"
                        required
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
                    required
                  >
                    <option value="">--Select Road Width--</option>
                    {formData.plot.areaType === "Congested" ? (
                      <>
                        <option value="below 9.0 m">below 9.0 m</option>
                        <option value="9 m and below 18 m">9 m and below 18 m</option>
                        <option value="18 m and below 30 m">18 m and below 30 m</option>
                        <option value="30 m and above">30 m and above</option>
                      </>
                    ) : (
                      <>
                        <option value="below 9.0 m">below 9.0 m</option>
                        <option value="9 m and below 12 m">9 m and below 12 m</option>
                        <option value="12 m and below 15 m">12 m and below 15 m</option>
                        <option value="15 m and below 18 m">15 m and below 18 m</option>
                        <option value="18 m and below 24 m">18 m and below 24 m</option>
                        <option value="24 m and below 30 m">24 m and below 30 m</option>
                        <option value="30 m and above">30 m and above</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2 p-2 ">
            <button
              onClick={handlePrevious}
              className=" text-white  bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Previous
            </button>
            <button
              type="submit"
              // onClick={handleNext}
              className=" text-white  bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
