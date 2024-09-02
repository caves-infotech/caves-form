export default function PlotDetails({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) {
  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">3. Plot Information</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Input Field</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-x px-4 py-2" colSpan="2">2.1. Size</td>
          </tr>
          <tr>
            <td className="border-l px-16 ">2.1.1. X:</td>
            <td className="border-r px-4 ">
              <input
                type="number"
                name="plot.sizex"
                value={formData.plot.sizex}
                onChange={handleChange}
                className="w-full p-2 border rounded "
              />
            </td>
          </tr>
          <tr>
            <td className="border-l px-16 ">2.1.2. Y:</td>
            <td className="border-r px-4 pb-4">
              <input
                type="number"
                name="plot.sizey"
                value={formData.plot.sizey}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.2. Area:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="plot.area"
                value={formData.plot.area}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.3. Road Width:</td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name="plot.roadWidth"
                value={formData.plot.roadWidth}
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
    </div>
  );
}
