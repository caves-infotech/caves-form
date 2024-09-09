
import { districts } from "@/services/formData";

export default function LocationDetails({ formData, handleChange, handleNext }) {
  

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
    <div className='p-10'>
      <h2 className="text-2xl mb-4">1. Project Details</h2>
      <table className=" table-auto w-full text-sm">
        <tbody>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">1. Proposed Project Name:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.projectName"
                value={formData.location.projectName}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your project name"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">2. Building Type:</td>
            <td className="border px-4 py-2">
              <select
                name="location.buildingType"
                value={formData.location.buildingType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
              >
                <option value="">--Select Building Type--</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="copmposite">Copmposite</option>
              </select>
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">3. Plot Number:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.plotNo"
                value={formData.location.plotNo}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your plot number"
              />
            </td>
          </tr>

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">4. District:</td>
            <td className="border px-4 py-2">
              <select
                name="location.district"
                value={formData.location.district}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
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

          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">5. Taluka:</td>
            <td className="border px-4 py-2">
              <select
                name="location.taluka"
                value={formData.location.taluka}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-slate-100"
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

          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">6. Village:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.village"
                value={formData.location.village}
                onChange={handleChange}
                className="w-full p-2 border rounded "
                placeholder="Enter your village name"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" mt-4 flex justify-end">
        <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </div>
    </div>
  );
}
