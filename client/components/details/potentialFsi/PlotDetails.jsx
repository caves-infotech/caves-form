import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PlotDetails({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
}) {
  const sectionRef = useRef(); // Reference to the section to convert to PDF

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

    formData.builtUp = builtUp;

    // Calculate basic, prem, and tdr based on area type and ULB
    const calculateValues = () => {
      let newBasic = 0;
      let newPrem = 0;
      let newTdr = 0;

      if (formData.areaType === "non-congested") {
        newBasic = builtUp * 1.1;
        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorpNC(formData.roadWidth, builtUp);
          newTdr = getTdrForMunicipalCorpNC(formData.roadWidth, builtUp);
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRpNC(formData.roadWidth, builtUp);
          newTdr = getTdrForOtherRpNC(formData.roadWidth, builtUp);
        }
      } else if (formData.areaType === "congested") {
        newBasic = getBasicCongested(formData.roadWidth, builtUp);

        if (formData.ulb === "muncipleCorp") {
          newPrem = getPremForMunicipalCorpC(formData.roadWidth, builtUp);
          newTdr = getTdrForMunicipalCorpC(formData.roadWidth, builtUp);
        } else if (formData.ulb === "otherRp") {
          newPrem = getPremForOtherRpC(formData.roadWidth, builtUp);
          newTdr = getTdrForOtherRpC(formData.roadWidth, builtUp);
        }
      }

      setValues({ prem: newPrem, basic: newBasic, tdr: newTdr });
      formData.maxPotential =
        (newBasic + newPrem + newTdr) *
        (formData.buildingType.input === "residential" ? 1.6 : 1.8);
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

  const generatePDF = () => {
    html2canvas(sectionRef.current).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190; // Width in mm
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("download.pdf"); // Filename for the downloaded PDF
    });
  };

  // Function to share on WhatsApp
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent("Check out this section:");
    const url = encodeURIComponent(window.location.href); // Current page URL
    window.open(`https://wa.me/?text=${message} ${url}`, "_blank");
  };

  // Function to share via email
  const shareViaEmail = () => {
    const subject = encodeURIComponent("Check out this section");
    const body = encodeURIComponent(
      "Check out this section: " + window.location.href
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
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
              <button onClick={shareOnWhatsApp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                </svg>
              </button>
              <button onClick={shareViaEmail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#000000"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div ref={sectionRef} className=" w-72">
              <h2 className="mb-4 text-2xl">Result</h2>

              <div className=" text-center text-2xl p-5">
                <h3 className=" font-extrabold">Maximum Potential FSI</h3>
                <p className="mt-10 p-5">
                  {(formData.maxPotential &&
                    formData.maxPotential + " Sq. Meter") ||
                    "Enter data in required field"}
                </p>
              </div>
            </div>
            {/* {formData.maxPotential > 0 && ( */}
            {/* <div className="flex justify-end mt-60 "> */}
            {/* <button onClick={generatePDF}>Download PDF</button> */}
            {/* <button onClick={shareOnWhatsApp}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                  </svg>
                </button>
                <button onClick={shareViaEmail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                    fill="#000000"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                </button>
              </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
}
