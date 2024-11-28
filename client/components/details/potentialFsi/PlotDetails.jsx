import { useState, useEffect, useRef } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  shareWhatsApp,
  shareViaEmail,
  shareViaLink,
}) {
  const sectionRef = useRef();
  const [copied, setCopied] = useState(false);

  const [values, setValues] = useState({
    prem: 0,
    basic: 0,
    tdr: 0,
  });

  useEffect(() => {
    const builtUp =
      parseFloat(formData.proRata) > 0
        ? parseFloat(formData.proRata) * parseFloat(formData.area)
        : parseFloat(formData.area);

    formData.builtUp = builtUp.toFixed(2);
    const calculateValues = () => {
      let newBasic = 0;
      let newPrem = 0;
      let newTdr = 0;

      if (formData.areaType === "non-congested") {
        newBasic = builtUp * 1.1;
        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorpNC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
          newTdr = getTdrForMunicipalCorpNC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRpNC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
          newTdr = getTdrForOtherRpNC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
        }
      } else if (formData.areaType === "congested") {
        newBasic = getBasicCongested(formData.roadWidth, builtUp);

        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorpC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
          newTdr = getTdrForMunicipalCorpC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRpC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
          newTdr = getTdrForOtherRpC(
            formData.roadWidth,
            parseFloat(formData.area)
          );
        }
      }

      setValues({ prem: newPrem, basic: newBasic, tdr: newTdr });
      formData.maxPotential = Math.ceil(
        (newBasic + newPrem + newTdr) *
          (formData.buildingType.input === "residential" ? 1.6 : 1.8)
      );
      // formData.maxPotential =
      //   (newBasic + newPrem + newTdr) *
      //   (formData.buildingType.input === "residential" ? 1.6 : 1.8);
    };

    calculateValues();
  }, [formData]);

  const getBasicCongested = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 1.5 * builtUp;
      case "9toBelow18":
        return 2 * builtUp;
      case "18toBelow30":
        return 2 * builtUp;
      case "above30":
        return 2 * builtUp;
      default:
        return 0;
    }
  };
  const getPremForMunicipalCorpC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow18":
        return 0.3 * builtUp;
      case "18toBelow30":
        return 0.3 * builtUp;
      case "above30":
        return 0.3 * builtUp;
      default:
        return 0;
    }
  };
  const getTdrForMunicipalCorpC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow18":
        return 0.3 * builtUp;
      case "18toBelow30":
        return 0.5 * builtUp;
      case "above30":
        return 0.7 * builtUp;
      default:
        return 0;
    }
  };

  const getPremForOtherRpC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow18":
        return 0.3 * builtUp;
      case "18toBelow30":
        return 0.3 * builtUp;
      case "above30":
        return 0.3 * builtUp;
      default:
        return 0;
    }
  };
  const getTdrForOtherRpC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow18":
        return 0.1 * builtUp;
      case "18toBelow30":
        return 0.2 * builtUp;
      case "above30":
        return 0.2 * builtUp;
      default:
        return 0;
    }
  };

  const getPremForMunicipalCorpNC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow12":
        return 0.5 * builtUp;
      case "12toBelow15":
        return 0.5 * builtUp;
      case "15toBelow24":
        return 0.5 * builtUp;
      case "24toBelow30":
        return 0.5 * builtUp;
      case "above30":
        return 0.5 * builtUp;
      default:
        return 0;
    }
  };

  const getTdrForMunicipalCorpNC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow12":
        return 0.4 * builtUp;
      case "12toBelow15":
        return 0.65 * builtUp;
      case "15toBelow24":
        return 0.9 * builtUp;
      case "24toBelow30":
        return 1.15 * builtUp;
      case "above30":
        return 1.4 * builtUp;
      default:
        return 0;
    }
  };

  const getPremForOtherRpNC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow12":
        return 0.3 * builtUp;
      case "12toBelow15":
        return 0.3 * builtUp;
      case "15toBelow24":
        return 0.3 * builtUp;
      case "24toBelow30":
        return 0.3 * builtUp;
      case "above30":
        return 0.3 * builtUp;
      default:
        return 0;
    }
  };

  const getTdrForOtherRpNC = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 0;
      case "9toBelow12":
        return 0.3 * builtUp;
      case "12toBelow15":
        return 0.6 * builtUp;
      case "15toBelow24":
        return 0.7 * builtUp;
      case "24toBelow30":
        return 0.9 * builtUp;
      case "above30":
        return 1.1 * builtUp;
      default:
        return 0;
    }
  };

  function shareViaLinkHelper(sectionRef) {
    shareViaLink(sectionRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
  }
  return (
    <>
      <div className="p-4 lg:flex gap-x-5 ">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-2 flex flex-col gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                1. Proposed Project Name:
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  placeholder="Enter your project name"
                  required
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">2. Building Type:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <select
                  name="buildingType.input"
                  value={formData.buildingType.input}
                  onChange={handleNestedChange}
                  className="w-full p-2 border-2 border-slate-400 rounded-lg bg-slate-100"
                  required
                >
                  <option value="">--Select Building Type--</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">3. Area Type:</div>
              <div className="flex px-4 py-3 lg:flex-col sm:w-1/2">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="areaType"
                    value="congested"
                    checked={formData.areaType === "congested"}
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-2 text-gray-700">Congested</span>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    name="areaType"
                    value="non-congested"
                    checked={formData.areaType === "non-congested"}
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-2 text-gray-700">Non-congested</span>
                </label>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-3 sm:w-1/2">4. ULB:</div>
              <div className="flex px-4 py-3 lg:flex-col sm:w-1/2">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="ulb"
                    value="muncipleCorp"
                    checked={formData.ulb === "muncipleCorp"}
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
                    name="ulb"
                    value="otherRp"
                    checked={formData.ulb === "otherRp"}
                    className="w-4 h-4 text-blue-600 form-radio"
                    onChange={handleChange}
                    required
                  />
                  <span className="ml-2 text-gray-700">Other / Rp</span>
                </label>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">5. Plot Area:</div>
              <div className="flex gap-2 px-4 py-2 lg:flex-col sm:w-1/2">
                <input
                  type="number"
                  name="area"
                  value={formData.area}
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
                  placeholder="Enter Plot Area"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                  required
                />
                <p className="flex items-center">Sq. Meter</p>
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">6. Pro-Rata factor:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="number"
                  name="proRata"
                  value={formData.proRata}
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
                  placeholder="Enter Pro-rata factor if applicable"
                  className="w-full p-2 border-2 rounded-lg border-slate-400"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                7. {formData.proRata ? "Notional " : "Net "} Plot Area (Sq.
                Meter ):
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                {formData.builtUp == "NaN"
                  ? "Enter data in required field"
                  : formData.builtUp + " Sq. Meter"}
              </div>
            </div>

            {/* {formData.buildingType.input === "composite" && (
                        <>
                      <div className="flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                            <div className="px-8 py-2 w-1/2">Residential Built-up Area:</div>
                            <div className="flex gap-2 px-4 py-2 w-1/2">
                              <input
                                type="number"
                                name="buildingType.residential"
                                value={formData.buildingType.residential}
                                onChange={handleNestedChange}
                                className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                                placeholder="Enter Pro-Rata Factor"
                              />
                              <p className="flex items-center">Sq. Meter</p>
                            </div>
                          </div>

                      <div className="flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
                            <div className="px-8 py-2 w-1/2">Commercial Built-up Area:</div>
                            <div className="flex gap-2 px-4 py-2 w-1/2">
                              <input
                                type="number"
                                name="buildingType.commercial"
                                value={formData.buildingType.commercial}
                                onChange={handleNestedChange}
                                className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                                placeholder="Enter Pro-Rata Factor"
                              />
                              <p className="flex items-center">Sq. Meter</p>
                            </div>
                          </div>
                        </>
                      )} 
                       */}

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">8. Road Width:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <select
                  name="roadWidth"
                  value={formData.roadWidth}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  required
                >
                  <option value="">--Select Road Width--</option>
                  {formData.areaType === "congested" ? (
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
                      <option value="15toBelow24">15 m and below 24 m</option>
                      <option value="24toBelow30">24 m and below 30 m</option>
                      <option value="above30">30 m and above</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="flex justify-center p-2 space-x-5">
              <button
                type="submit"
                // onClick={handleSubmit}
                className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* <div className="grid grid-rows "> */}
        <div className=" w-full lg:w-[50%] p-5 mb-2 bg-slate-100 rounded-xl">
          <div ref={sectionRef} className=" text-center text-2xl p-5">
            <h3 className=" font-extrabold">Maximum Potential FSI</h3>
            <p className="mt-10 p-5">
              {(formData.maxPotential &&
                formData.maxPotential + " Sq. Meter") ||
                "Enter data in required field"}
            </p>
          </div>
          {formData.maxPotential ? (
            <div className="mb-2 sm:px-10  p-2 border rounded-2xl bg-slate-100 flex flex-col space-y-2">
              <button
                className="flex items-center gap-2"
                onClick={() => {
                  if (formData.maxPotential > 0) shareWhatsApp(sectionRef);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>Share on WhatsApp</p>
              </button>
              <hr />
              <button
                className="flex items-center gap-2"
                onClick={() => {
                  if (formData.maxPotential > 0) shareViaEmail(sectionRef);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e0e0e0"
                    d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                  ></path>
                  <path
                    fill="#d9d9d9"
                    d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                  ></path>
                  <path
                    fill="#eee"
                    d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                  ></path>
                  <path
                    fill="#e0e0e0"
                    d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                  ></path>
                  <path
                    fill="#ca3737"
                    d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                  ></path>
                  <path
                    fill="#f5f5f5"
                    d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                  ></path>
                  <path
                    fill="#e84f4b"
                    d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                  ></path>
                </svg>
                <p>Share on Email</p>
              </button>
              <hr />
              <button
                className="flex items-center "
                onClick={() => {
                  if (formData.roadDirection.front.margin)
                    shareViaLinkHelper(sectionRef);
                }}
              >
                {copied ? (
                  <h4 className="font-bold">Copied</h4>
                ) : (
                  <div className="flex items-center gap-2">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/fluency/48/copy.png"
                      alt="copy"
                    />
                    <p>Copy link of your result.</p>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* </div> */}
      </div>
    </>
  );
}
