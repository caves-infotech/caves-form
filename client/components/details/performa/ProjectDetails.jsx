import { districts } from "@/services/formData";

export default function ProjectDetails({
  formData,
  handleChange,
  handleNext,
}) {
  const getTalukas = () => {
    if (formData.location.district) {
      const district = districts.find(
        (district) => district.name === formData.location.district
      );
      return district ? district.tahasil : [];
    }
    return [];
  };

  return (
    <>
      <div className="p-5 sm:hidden">
        <h2 className="text-2xl mb-6">1. Project Details</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            1. Proposed Project Name:
          </label>
          <input
            type="text"
            name="location.projectName"
            value={formData.location.projectName}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
            placeholder="Enter your project name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            2. Building Type:
          </label>
          <select
            name="location.buildingType"
            value={formData.location.buildingType}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
          >
            <option value="">--Select Building Type--</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="composite">Composite</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            3. Plot Number:
          </label>
          <input
            type="text"
            name="location.plotNo"
            value={formData.location.plotNo}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
            placeholder="Enter your plot number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            4. District:
          </label>
          <select
            name="location.district"
            value={formData.location.district}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
          >
            <option value="">--Select District--</option>
            {districts.map((district, index) => (
              <option key={index} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            5. Taluka:
          </label>
          <select
            name="location.taluka"
            value={formData.location.taluka}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
          >
            <option value="">--Select Taluka--</option>
            {getTalukas().map((taluka, index) => (
              <option key={index} value={taluka}>
                {taluka}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            6. Village:
          </label>
          <input
            type="text"
            name="location.village"
            value={formData.location.village}
            onChange={handleChange}
            className="w-full p-2 border-2 border-slate-400 rounded-lg"
            placeholder="Enter your village name"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Next
          </button>
        </div>
      </div>

      <div className="p-5 sm:flex hidden">
        <div>
          <h2 className="text-2xl mb-4">1. Project Details</h2>
          <table className=" table-auto w-[830px] text-sm">
            <tbody>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">
                  1. Proposed Project Name:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <input
                    type="text"
                    name="location.projectName"
                    value={formData.location.projectName}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg "
                    placeholder="Enter your project name"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">
                  2. Building Type:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <select
                    name="location.buildingType"
                    value={formData.location.buildingType}
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

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">
                  3. Plot Number:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <input
                    type="text"
                    name="location.plotNo"
                    value={formData.location.plotNo}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg "
                    placeholder="Enter your plot number"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="border border-slate-400 px-4 py-2">
                  4. District:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <select
                    name="location.district"
                    value={formData.location.district}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select District--</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district.name}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="border border-slate-400 px-4 py-2">
                  5. Taluka:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <select
                    name="location.taluka"
                    value={formData.location.taluka}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg bg--bg-[#dededeac]"
                  >
                    <option value="">--Select Taluka--</option>
                    {getTalukas().map((taluka, index) => (
                      <option key={index} value={taluka}>
                        {taluka}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="border border-slate-400 px-4 py-2">
                  6. Village:
                </td>
                <td className="border border-slate-400 px-4 py-2">
                  <input
                    type="text"
                    name="location.village"
                    value={formData.location.village}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-slate-400 rounded-lg "
                    placeholder="Enter your village name"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className=" mt-4 flex justify-end">
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
