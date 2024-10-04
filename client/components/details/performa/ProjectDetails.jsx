import { districts } from "@/services/formData";

export default function ProjectDetails({
  formData,
  handleChange,
  handleNext,
}) {
  const getTalukas = () => {
    if (formData.project.district) {
      const district = districts.find(
        (district) => district.name === formData.project.district
      );
      return district ? district.tahasil : [];
    }
    return [];
  };

  return (
    <>
      <>
      {/* <div className="p-5 sm:hidden">
        <h2 className="mb-6 text-2xl">1. Project Details</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            1. Proposed Project Name:
          </label>
          <input
            type="text"
            name="project.projectName"
            value={formData.project.projectName}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
            placeholder="Enter your project name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            2. Plot Number:
          </label>
          <input
            type="text"
            name="project.plotNo"
            value={formData.project.plotNo}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
            placeholder="Enter your plot number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            3. District:
          </label>
          <select
            name="project.district"
            value={formData.project.district}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
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
            4. Taluka:
          </label>
          <select
            name="project.taluka"
            value={formData.project.taluka}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
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
            5. Village:
          </label>
          <input
            type="text"
            name="project.village"
            value={formData.project.village}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-lg border-slate-400"
            placeholder="Enter your village name"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Next
          </button>
        </div>
      </div> */}
      </>

      <div className="hidden p-5 sm:flex">
        <div>
          <h2 className="mb-4 text-2xl">1. Project Details</h2>
          <table className=" table-auto w-[830px] text-sm">
            <tbody>
              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  1. Proposed Project Name:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="text"
                    name="project.projectName"
                    value={formData.project.projectName}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your project name"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac] ">
                <td className="px-4 py-2 border border-slate-400">
                  2. Plot Number:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="text"
                    name="project.plotNo"
                    value={formData.project.plotNo}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your plot number"
                  />
                </td>
              </tr>

              <tr className="even:bg-white  odd:bg-[#dededeac]">
                <td className="px-4 py-2 border border-slate-400">
                  3. District:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="project.district"
                    value={formData.project.district}
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
                <td className="px-4 py-2 border border-slate-400">
                  4. Taluka:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <select
                    name="project.taluka"
                    value={formData.project.taluka}
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
                <td className="px-4 py-2 border border-slate-400">
                  5. Village:
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  <input
                    type="text"
                    name="project.village"
                    value={formData.project.village}
                    onChange={handleChange}
                    className="w-full p-2 border-2 rounded-lg border-slate-400 "
                    placeholder="Enter your village name"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4 ">
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
