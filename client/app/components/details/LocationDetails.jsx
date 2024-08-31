export default function LocationDetails({ formData, handleChange, handleNext, handlePrevious }) {
  return (
    <div className='p-10'>
      <h2 className="text-2xl mb-4">2. Location Information</h2>
      <table className="table-auto w-full">
        <thead>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Input Field</th>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">2.1. Village:</td>
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
          <tr>
            <td className="border px-4 py-2">2.2. Taluka:</td>
            <td className="border px-4 py-2">
              <input
                type="email"
                name="location.taluka"
                value={formData.location.taluka}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.3. District:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="location.district"
                value={formData.location.district}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.3. ULB:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="location.ulb"
                value={formData.location.ulb}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.3. Zone:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="location.zone"
                value={formData.location.zone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" mt-4 flex justify-between">
        <button onClick={handlePrevious} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Previous
        </button>
        <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </div>
      {/* <h1 className='font-bold text-center text-3xl pb-5 pt-5'>2. Location Details</h1>
      <form className='max-w-4xl mx-auto ' onSubmit={handleNext}>
        <div className='mb-5'>
          <label>2.1. Village:</label>
          <input
            type="text"
            name="location.village"
            value={formData.location.village}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>2.2. Taluka:</label>
          <input
            type="text"
            name="location.taluka"
            value={formData.location.taluka}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>2.3. District:</label>
          <input
            type="text"
            name="location.district"
            value={formData.location.district}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>2.4. ULB:</label>
          <input
            type="text"
            name="location.ulb"
            value={formData.location.ulb}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <div className='mb-5'>
          <label>2.5. Zone:</label>
          <input
            type="text"
            name="location.zone"
            value={formData.location.zone}
            onChange={handleChange}
            className='p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900'
          />
        </div>
        <button onClick={handlePrevious} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Previous
        </button>
        <button type='submit' className=' ml-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </form> */}
    </div>
  );
}
