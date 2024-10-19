import { useState, useEffect } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
}) {
  // const [prem, setPrem] = useState(0);
  // const [basic, setBasic] = useState(0);
  // const [tdr, setTdr] = useState(0);

  // formData.builtUp =
  //   parseFloat(formData.proRata) > 0 || parseFloat(formData.proRata)
  //     ? parseFloat(formData.proRata) * parseFloat(formData.area)
  //     : parseFloat(formData.area);

  // useEffect(() => {     
  //   if (formData.areaType == "non-congested") {
  //     setBasic(formData.builtUp * 1.1);
  //     if (formData.ulb == "muncipleCorp") {
  //       switch (formData.roadWidth) {
  //         case "below9":
  //           setPrem(parseFloat(formData.builtUp) * 0);
  //           setTdr(parseFloat(formData.builtUp) * 0);
  //           break;
  //         case "9toBelow12":
  //           setPrem(parseFloat(formData.builtUp) * 0.5);
  //           setTdr(parseFloat(formData.builtUp) * 0.4);
  //           break;
  //         case "12toBelow15":
  //           setPrem(parseFloat(formData.builtUp) * 0.5);
  //           setTdr(parseFloat(formData.builtUp) * 0.65);
  //           break;
  //         case "15toBelow24":
  //           setPrem(parseFloat(formData.builtUp) * 0.5);
  //           setTdr(parseFloat(formData.builtUp) * 0.9);
  //           break;
  //         case "24toBelow30":
  //           setPrem(parseFloat(formData.builtUp) * 0.5);
  //           setTdr(parseFloat(formData.builtUp) * 1.15);
  //           break;
  //         case "above30":
  //           setPrem(parseFloat(formData.builtUp) * 0.5);
  //           setTdr(parseFloat(formData.builtUp) * 1.4);
  //           break;
  //         default:
  //           break;
  //       }
  //     } else if (formData.ulb == "otherRp") {
  //       switch (formData.roadWidth) {
  //         case "below9":
  //           setPrem(parseFloat(formData.builtUp) * 0);
  //           setTdr(parseFloat(formData.builtUp) * 0);
  //           break;
  //         case "9toBelow12":
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.3);
  //           break;
  //         case "12toBelow15":
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.6);
  //           break;
  //         case "15toBelow24":
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.7);
  //           break;
  //         case "24toBelow30":
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.9);
  //           break;
  //         case "above30":
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 1.1);
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   } else if (formData.areaType == "congested") {
  //     if (formData.ulb == "muncipleCorp") {
  //       switch (formData.roadWidth) {
  //         case "below9":
  //           setBasic(parseFloat(formData.builtUp) * 1.5);
  //           setPrem(parseFloat(formData.builtUp) * 0);
  //           setTdr(parseFloat(formData.builtUp) * 0);
  //           break;
  //         case "9toBelow18":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.3);
  //           break;
  //         case "18toBelow30":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.5);
  //           break;
  //         case "above30":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.7);
  //           break;
  //         default:
  //           break;
  //       }
  //     } else if (formData.ulb == "otherRp") {
  //       switch (formData.roadWidth) {
  //         case "below9":
  //           setBasic(parseFloat(formData.builtUp) * 1.5);
  //           setPrem(parseFloat(formData.builtUp) * 0);
  //           setTdr(parseFloat(formData.builtUp) * 0);
  //           break;
  //         case "9toBelow18":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.1);
  //           break;
  //         case "18toBelow30":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.2);
  //           break;
  //         case "above30":
  //           setBasic(parseFloat(formData.builtUp) * 2);
  //           setPrem(parseFloat(formData.builtUp) * 0.3);
  //           setTdr(parseFloat(formData.builtUp) * 0.2);
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  //   console.log("1");
  //   if (formData.buildingType.input == "residential") {
  //     formData.maxPotential = (basic + prem + tdr) * 1.6;
  //   } else if (formData.buildingType.input == "commercial") {
  //     formData.maxPotential = (basic + prem + tdr) * 1.8;
  //   }
  // }, [formData.buildingType.input, basic, prem, tdr, formData.area, formData.proRata, formData.areaType, formData.ulb, formData.roadWidth]);

  // // useEffect(()=>{
  // //   if (formData.buildingType.input == "residential") {
  // //     formData.maxPotential = (basic + prem + tdr) * 1.6;
  // //   } else if (formData.buildingType.input == "commercial") {
  // //     formData.maxPotential = (basic + prem + tdr) * 1.8;
  // //   }
  // //   console.log("2");
     
  // //   // else if (formData.buildingType.input == "composite") {
  // //   //   formData.maxPotential =
  // //   //     ((basic + prem + tdr) * 1.6 + (basic + prem + tdr) * 1.8);
  // //   // }
  // // }, [formData.buildingType.input, basic, prem, tdr, formData.roadWidth])

  const [values, setValues] = useState({
    prem: 0,
    basic: 0,
    tdr: 0,
  });

  const { prem, basic, tdr } = values;

  useEffect(() => {
    const builtUp =
      parseFloat(formData.proRata) > 0
        ? parseFloat(formData.proRata) * parseFloat(formData.area)
        : parseFloat(formData.area);
    
    formData.builtUp = builtUp;

    // Calculate basic, prem, and tdr based on area type and ULB
    const calculateValues = () => {
      let newBasic = 0;
      let newPrem = 0;
      let newTdr = 0;

      if (formData.areaType === "non-congested") {
        newBasic = builtUp * 1.1;
        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorp(formData.roadWidth, builtUp);
          newTdr = getTdrForMunicipalCorp(formData.roadWidth, builtUp);
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRp(formData.roadWidth, builtUp);
          newTdr = getTdrForOtherRp(formData.roadWidth, builtUp);
        }
      } else if (formData.areaType === "congested") {
        newBasic = getBasic(formData.roadWidth, builtUp);
        // *****************************
        // new functions have to create for prem and tdr
// *******************************************
        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorp(formData.roadWidth, builtUp);
          newTdr = getTdrForMunicipalCorp(formData.roadWidth, builtUp);
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRp(formData.roadWidth, builtUp);
          newTdr = getTdrForOtherRp(formData.roadWidth, builtUp);
        }
      }

      setValues({ prem: newPrem, basic: newBasic, tdr: newTdr });
      formData.maxPotential =
        (newBasic + newPrem + newTdr) * (formData.buildingType.input === "residential" ? 1.6 : 1.8);
    };

    calculateValues();
  }, [formData]);

  const getBasic = (roadWidth, builtUp) => {
    switch (roadWidth) {
      case "below9":
        return 1.5;
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

  const getPremForMunicipalCorp = (roadWidth, builtUp) => {
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

  const getTdrForMunicipalCorp = (roadWidth, builtUp) => {
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

  const getPremForOtherRp = (roadWidth, builtUp) => {
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

  const getTdrForOtherRp = (roadWidth, builtUp) => {
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
                onChange={handleChange}
              />
              <span className="ml-2">Congested</span>
            </label>
            <label>
              <input
                type="radio"
                name="areaType"
                value="non-congested"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <span className="ml-2">Municipal Corporation</span>
            </label>
            <label>
              <input
                type="radio"
                name="ulb"
                value="otherRp"
                className="w-4 h-4 text-blue-600 form-radio"
                onChange={handleChange}
              />
              <span className="ml-2">Other / Rp</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">3. Plot Area:</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">4. Pro-Rata Factor:</label>
          <input
            type="number"
            name="proRata"
            value={formData.proRata}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">5. Built-up Area (m²):</label>
          <p className="w-full p-2 border-2 rounded-lg border-slate-400">
            {formData.builtUp || "Enter data in required field"}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">6. Road Width:</label>
          <select
            name="roadWidth"
            value={formData.roadWidth}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
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
        <div className="flex gap-x-5">
          <div>
            <h2 className="mb-4 text-2xl">Plot Details and FSI</h2>
            <table className="table-auto  w-[530px] text-sm">
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
                      name="buildingType.input"
                      value={formData.buildingType.input}
                      onChange={handleNestedChange}
                      className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                    >
                      <option value="">--Select Building Type--</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      {/* <option value="composite">Composite</option> */}
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
                        checked={formData.areaType == "congested"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-gray-700">Congested</span>
                    </label>
                    <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="areaType"
                        value="non-congested"
                        checked={formData.areaType == "non-congested"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleChange}
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
                        checked={formData.ulb == "muncipleCorp"}
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
                        name="ulb"
                        value="otherRp"
                        checked={formData.ulb == "otherRp"}
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-gray-700">Other / Rp</span>
                    </label>
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    5. Plot Area:
                  </td>
                  <td className="flex gap-2 px-4 py-2 border border-slate-400">
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Enter Plot Area"
                      className="w-[70%] p-2 border-2 rounded-lg border-slate-400"
                    />
                    <p className=" flex items-center">Sq. Meter</p>
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    6. Pro-Rata factor:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <input
                      type="number"
                      name="proRata"
                      value={formData.proRata}
                      onChange={handleChange}
                      placeholder="Enter Pro-rata factor if applicable"
                      className="w-full p-2 border-2 rounded-lg border-slate-400"
                    />
                  </td>
                </tr>

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    7. Built-up Area (meter<sup>2</sup>):
                  </td>
                  <td
                    className="px-4 py-2 border border-slate-400"
                    name="builtUp"
                  >
                    {(formData.builtUp && formData.builtUp + " Sq. Meter") ||
                      "Enter data in required field"}
                  </td>
                </tr>

                {formData.buildingType.input == "composite" && (
                  <>
                    <tr className="even:bg-white  odd:bg-[#dededeac] ">
                      <td className="px-8 py-2 border-l border-slate-400">
                        Residential Built-up Area:
                      </td>
                      <td className=" flex gap-2 px-4 py-2 border-r border-slate-400">
                        <input
                          type="number"
                          name="buildingType.residential"
                          value={formData.buildingType.residential}
                          onChange={handleNestedChange}
                          className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                          placeholder="Enter Pro-Rata Factor"
                        />
                        <p className=" flex items-center">Sq. Meter</p>
                      </td>
                    </tr>

                    <tr className="even:bg-[#dededeac]  odd:bg-white ">
                      <td className="px-8 py-2 border-l border-slate-400">
                        Commercial Built-up Area:
                      </td>
                      <td className="flex gap-2 px-4 py-2 border-r border-slate-400">
                        <input
                          type="number"
                          name="buildingType.commercial"
                          value={formData.buildingType.commercial}
                          onChange={handleNestedChange}
                          className="w-[80%] p-2 border-2 rounded-lg border-slate-400"
                          placeholder="Enter Pro-Rata Factor"
                        />
                        <p className=" flex items-center">Sq. Meter</p>
                      </td>
                    </tr>
                  </>
                )}

                <tr className="even:bg-white  odd:bg-[#dededeac] ">
                  <td className="px-4 py-2 border border-slate-400">
                    8. Road Width:
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    <select
                      name="roadWidth"
                      value={formData.roadWidth}
                      onChange={handleChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Road Width--</option>
                      {formData.areaType === "congested" ? (
                        <>
                          <option value="below9">below 9.0 m</option>
                          <option value="9toBelow18">9 m and below 18 m</option>
                          <option value="18toBelow30">
                            18 m and below 30 m
                          </option>
                          <option value="above30">30 m and above</option>
                        </>
                      ) : (
                        <>
                          <option value="below9">below 9.0 m</option>
                          <option value="9toBelow12">9 m and below 12 m</option>
                          <option value="12toBelow15">
                            12 m and below 15 m
                          </option>
                          <option value="15toBelow24">
                            15 m and below 24 m
                          </option>
                          <option value="24toBelow30">
                            24 m and below 30 m
                          </option>
                          <option value="above30">30 m and above</option>
                        </>
                      )}
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

          <div className=" w-80">
            <h2 className="mb-4 text-2xl">Result</h2>

            <div className=" text-center text-2xl p-5">
              <h3 className=" font-extrabold">Maximum Potential FSI</h3>
              <p className="mt-10 p-5">
                {(
                  formData.maxPotential &&
                  formData.maxPotential + " Sq. Meter") ||
                  "Enter data in required field"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
