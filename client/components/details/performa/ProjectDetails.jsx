import { districts } from "@/services/formData";

export default function ProjectDetails({ formData, handleChange, handleNext }) {
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
      <div className="p-2">
        <div className="lg:flex gap-x-2  p-2">
          <div className="flex flex-col w-full mb-2 gap-y-2">
            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">
                1. Proposed Project Name:
              </div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="text"
                  name="project.projectName"
                  value={formData.project.projectName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 "
                  placeholder="Enter your project name"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">2. Plot Number:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="text"
                  name="project.plotNo"
                  value={formData.project.plotNo}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 "
                  placeholder="Enter your plot number"
                />
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">3. District:</div>
              <div className="px-4 py-2 sm:w-1/2">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">4. Taluka:</div>
              <div className="px-4 py-2 sm:w-1/2">
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
              </div>
            </div>

            <div className="sm:flex even:bg-white odd:bg-[#dededeac] rounded-xl border border-slate-200">
              <div className="px-4 py-2 sm:w-1/2">5. Village:</div>
              <div className="px-4 py-2 sm:w-1/2">
                <input
                  type="text"
                  name="project.village"
                  value={formData.project.village}
                  onChange={handleChange}
                  className="w-full p-2 border-2 rounded-lg border-slate-400 "
                  placeholder="Enter your village name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-2">
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
