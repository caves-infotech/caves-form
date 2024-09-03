export default function LocationDetails({ formData, handleChange, handleNext }) {
  return (
    <div className='p-10'>
      <h2 className="text-2xl mb-4">1. Location Information</h2>
      <table className=" table-auto w-full text-sm">
        <thead>
          <tr className="odd:bg-white  even:bg-gray-100 ">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Input Field</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-white  odd:bg-gray-100 ">
            <td className="border px-4 py-2">1. Village:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.village"
                value={formData.location.village}
                onChange={handleChange}
                className="w-full p-2 border rounded "
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">2. Taluka:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.taluka"
                value={formData.location.taluka}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">3. District:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.district"
                value={formData.location.district}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">4. ULB:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.ulb"
                value={formData.location.ulb}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr className="even:bg-white  odd:bg-gray-100">
            <td className="border px-4 py-2">5. Zone:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="location.zone"
                value={formData.location.zone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
