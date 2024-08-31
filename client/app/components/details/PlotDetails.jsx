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
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Input Field</th>
        </thead>
        <tbody>
          <tr>
            <td class="border-x px-4 py-2" colspan="2">2.1. Size</td>
          </tr>
          <tr>
            <td className="border-l px-16 ">2.1.1. X:</td>
            <td className="border-r px-4 ">
              <input
                type="text"
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
                type="email"
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
      {/* <h1 className="font-bold text-center text-3xl pb-5 pt-5">
        3. Plot Details
      </h1>
      <form className="max-w-4xl mx-auto" onSubmit={handleNext}>
        <div>
          <h4>3.1. Size:</h4>
          <div className="mb-5 ml-10">
            <label>3.1.1. X (meter):</label>
            <input
              type="number"
              name="plot.sizex"
              value={formData.plot.sizex}
              onChange={handleChange}
              className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"

            />
          </div>
          <div className="mb-5 ml-10">
            <label>3.1.2. Y (meter):</label>
            <input
              type="number"
              name="plot.sizey"
              value={formData.plot.sizey}
              onChange={handleChange}
              className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"

            />
          </div>
        </div>

        <div className="mb-5">
          <label>
            3.2. Area (meter<sup>2</sup>):
          </label>
          <input
            type="number"
            name="plot.area"
            value={formData.plot.area}
            onChange={handleChange}
            className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"
          />
        </div>
        <div className="mb-5">
          <label>3.3. Road Width (meter):</label>
          <input
            type="number"
            name="plot.roadWidth"
            value={formData.plot.roadWidth}
            onChange={handleChange}
            className="p-1 rounded-lg bg-slate-100 w-full block mb-2 text-lg font-medium text-gray-900"
          />
        </div>
        <button
          onClick={handlePrevious}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Previous
        </button>
        <button
          type="submit"
          className=" ml-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </form> */}
    </div>
  );
}
