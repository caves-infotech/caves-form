export default function OwnerDetails({ formData, handleChange, handleNext }) {

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">1. Owner Information</h2>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">1.1. Name:</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name="owner.name"
                value={formData.owner.name}
                onChange={handleChange}
                className="w-full p-2 border rounded "
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1.2. Email:</td>
            <td className="border px-4 py-2">
              <input
                type="email"
                name="owner.email"
                value={formData.owner.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1.3. Mobile Number:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="owner.phone"
                value={formData.owner.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
      <button onClick={handleNext} className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Next
        </button>
      </div>
      {/* <h1 className=" font-bold text-center text-3xl pb-5 pt-5">
        1. Owner Details
      </h1>
      <form className="max-w-4xl mx-auto " onSubmit={handleNext}>
        <div className="mb-5">
          <label>1.1. Name:</label>
          <input
            type="text"
            name="owner.name"
            value={formData.owner.name}
            onChange={handleChange}
            className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"
          />
        </div>
        <div className="mb-5">
          <label>1.2. Email:</label>
          <input
            type="email"
            name="owner.email"
            value={formData.owner.email}
            onChange={handleChange}
            className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"
          />
        </div>
        <div className="mb-5">
          <label>1.3. Mobile Number:</label>
          <input
            type="number"
            name="owner.phone"
            value={formData.owner.phone}
            onChange={handleChange}
            className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </form> */}
    </div>
  );
}
