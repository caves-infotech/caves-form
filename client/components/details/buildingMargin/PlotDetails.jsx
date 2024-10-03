import Image from "next/image";
import { useState } from "react";

export default function PlotDetails({
  formData,
  handleChange,
  handleSubmit,
  handleMoreNestedChange,
  setFormData
}) {
  const [dropOptions, setDropOptions] = useState([]);

  const handleAreaTypeRadioChange = (e) => {
    formData.areaType = e.target.value;
    if (formData.areaType === "congested") {
      setDropOptions([
        ["9toBelow18", "For streets / lane less than 4.5 m. width"],
        ["18toBelow30", "For streets 4.5 m. to less than 6.0 m. in width"],
        ["18toBelow30", "For streets 6.0 m. to less than 12.0 m. in width"],
        ["18toBelow30", "For streets 12.0 m. in width and above"],
      ]);
    } else if (formData.areaType === "non-congested") {
      setDropOptions([
        ["9toBelow12", "Roads of width 30.0 m. and above in local authority area"],
        ["12toBelow15", "In case of Regional Plan area. NH / SH"],
        ["15toBelow24", "Roads of width 18.0 m. and above but below 30.0 m."],
        ["24toBelow30", "Roads of width 15.0 m. and above but below 18.0 m. "],
        ["24toBelow30", "Roads of width less than 15.0 m."],
        ["24toBelow30", "Row Housing on roads of 12.0 m. and below"],
        ["24toBelow30", "24 m and below 30 mRow Housing for EWS / LIG / by public authority / private individual / Slum Upgradation etc. by public authority "],

      ]);
    }
  };

  const handleUlbRadioChange = (e) => {
    formData.ulb = e.target.value;
  };

  const handleZoneRadioChange = (e) => {
    formData.zone = e.target.value;
  };

  const handleMoreThan500RadioChange = (e) => {
    formData.moreThan500 = e.target.value;
  };

  const handleRadioChange = (direction, value) => {
    setFormData(prevState => ({
      ...prevState,
      roadDirection: {
        ...prevState.roadDirection,
        [direction]: {
          ...prevState.roadDirection[direction],
          input: value
        }
      }
    }));
  };

  return (
    <>
      
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

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">4. ULB:</td>
                <td
                  className="px-4 py-2 border-x border-slate-400"
                  name="ulb"
                >
                  <select
                    name="ulb"
                    value={formData.ulb}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select ULB--</option>
                    <option value={1}>
                      Pune, Pimpri-Chinchwad and Thane Municipal Corporation
                      area and PCNTDA area
                    </option>
                    <option value={0.9}>
                      Nagpur, Nashik Municipal Corporation area
                    </option>
                    <option value={0.8}>
                      Other Municipal Corporations in MMR area except Thane M.C.
                    </option>
                    <option value={0.7}>
                      Remaining Municipal Corporations not covered at Sr. No. 1
                      to 3 and 5, Metropolitan Area Development Authority / Area
                      Development Authority/ SPA area
                    </option>
                    <option value={0.6}>
                      'D' Class Municipal Corporation area except at Sr. No.3
                    </option>
                    <option value={0.6}>
                      'A' Class Municipal Council area.
                    </option>
                    <option value={0.5}>
                      'B' and 'C' Class Municipal Council area.
                    </option>
                    <option value={0.4}>
                      Nagar Panchayat, Non Municipal Town Development Plan area
                      and areas in Regional Plan
                    </option>
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  8. Plot Area:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="plotArea"
                    value={formData.plotArea}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>


              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  8. Building Height:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="buildingHeight"
                    value={formData.buildingHeight}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-3 border border-slate-400">
                  5. Area Type:
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
                <td className="px-4 py-3 border border-slate-400">6. Zone:</td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                  <label className="flex-[50%]">
                    <input
                      type="radio"
                      name="zone"
                      value="green"
                      className="w-4 h-4 text-blue-600 form-radio"
                      onChange={handleZoneRadioChange}
                    />
                    <span className="ml-2 text-gray-700">Green</span>
                  </label>
                  {formData.areaType == "non-congested" &&
                    <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="zone"
                        value="yellow"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={handleZoneRadioChange}
                      />
                      <span className="ml-2 text-gray-700">Yellow</span>
                    </label>
                  }
                </td>
              </tr>

              

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  8. Plot width:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="number"
                    name="plotWidth"
                    value={formData.plotWidth}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>

              

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  2. Plot Type:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="plotType"
                    value={formData.plotType}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                  >
                    <option value="">--Select Plot Type--</option>
                    <option value="rowHouse">Row House (Attached)</option>
                    <option value="teinHouse">Twin Row House (Semi detached)</option>
                    <option value="individualPlot">Individual Plot</option>
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  3. Building Type:
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
                    <option value="mix">Residential with Mixed Use</option>
                    <option value="commercial">Commercial / Public / Semi-Public</option>
                  </select>
                </td> 
              </tr>

              
   
              <tr className="even:bg-white  odd:bg-[#dededeac] border-slate-400 border-b">
                <td className="px-4 py-2 border w-60 border-slate-400">
                  7. Single floor plate B/Up area:
                </td>
                <td className="flex px-4 py-3 border-t border-r border-slate-400">
                <input
                    type="number"
                    name="moreThan500"
                    value={formData.moreThan500}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400"
                  />
                </td>
              </tr>

              

              <tr className="even:bg-white  odd:bg-[#dededeac] border-r border-slate-400">
                <td className="px-4 py-2 border-l border-slate-400" colSpan={2}>
                  9. Road Width:
                </td>
              </tr>
              
              <tr className="odd:bg-white  even:bg-[#dededeac]  border-slate-400">
                <td className="px-8 border-l border-slate-400 ">
                  a. Front (Road / Entry side):
                </td>
                <td>
                    <select
                      name="roadDirection.front.roadWidth"
                      value={formData.roadDirection.front.roadWidth}
                      onChange={handleMoreNestedChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Road Status--</option>
                      {dropOptions.map((val, index) => (
                        <option key={index} value={val[0]}>
                          {val[1]}
                        </option>
                      ))}
                    </select>
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac] border-r  border-slate-400">
                <td className="px-8 border-l border-slate-400 ">
                  d. Right (Side):
                </td>
                <td>
                  <div className="flex px-4 py-3 justify-evenly">
                  <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="right"
                        value="other"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('right', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Other property</span>
                    </label>
                    <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="right"
                        value="road"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('right', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Road</span>
                    </label>
                  </div>
                  {formData.roadDirection.right.input == "road" &&
                    <select
                      name="roadDirection.right.roadWidth"
                      value={formData.roadDirection.right.roadWidth}
                      onChange={handleMoreNestedChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Road Status--</option>
                      {dropOptions.map((val, index) => (
                        <option key={index} value={val[0]}>
                          {val[1]}
                        </option>
                      ))}
                    </select>
                  }
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-[#dededeac] border-r border-slate-400">
                <td className="px-8 border-l border-slate-400 ">
                  c. Left (Side):
                </td>
                <td>
                  <div className="flex px-4 py-3 justify-evenly">
                  <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="left"
                        value="other"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('left', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Other property</span>
                    </label>
                    <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="left"
                        value="road"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('left', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Road</span>
                    </label>
                  </div>
                  {formData.roadDirection.left.input == "road" &&
                    <select
                      name="roadDirection.left.roadWidth"
                      value={formData.roadDirection.left.roadWidth}
                      onChange={handleMoreNestedChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Road Status--</option>
                      {dropOptions.map((val, index) => (
                        <option key={index} value={val[0]}>
                          {val[1]}
                        </option>
                      ))}
                    </select>
                  }
                </td>
              </tr>

              

              <tr className="odd:bg-white  even:bg-[#dededeac] border-r border-b border-slate-400">
                <td className="px-8 border-l border-slate-400 ">
                  b. Back (Rare):
                </td>
                <td>
                  <div className="flex px-4 py-3 justify-evenly">
                  <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="back"
                        value="other"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('back', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Other property</span>
                    </label>
                    <label className="flex-[50%]">
                      <input
                        type="radio"
                        name="back"
                        value="road"
                        className="w-4 h-4 text-blue-600 form-radio"
                        onChange={(e) => handleRadioChange('back', e.target.value)}
                      />
                      <span className="ml-2 text-gray-700">Road</span>
                    </label>
                  </div>
                  {formData.roadDirection.back.input == "road" &&
                    <select
                      name="roadDirection.back.roadWidth"
                      value={formData.roadDirection.back.roadWidth}
                      onChange={handleMoreNestedChange}
                      className="w-full p-2 border-2 rounded-lg border-slate-400 bg-slate-100"
                    >
                      <option value="">--Select Road Status--</option>
                      {dropOptions.map((val, index) => (
                        <option key={index} value={val[0]}>
                          {val[1]}
                        </option>
                      ))}
                    </select>
                  }
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
