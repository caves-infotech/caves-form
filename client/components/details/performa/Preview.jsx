import React from "react";

export default function Preview({ formData, handlePrevious, handleSubmit }) {
  return (
    <div>
      <h1 className="pt-10 pb-10 text-3xl font-bold text-center">
        Preview Page
      </h1>

      <div className="max-w-3xl mx-auto">
        {Object.entries(formData).map(([sectionKey, sectionValue]) =>
          ["project", "plot", "fsi"].includes(sectionKey) ? (
            <div key={sectionKey} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {sectionKey}
              </h2>
              <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 text-left">
                      Key
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 text-left">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(sectionValue).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {typeof value === "object" ? (
                        Object.entries(value).map(
                          ([nestedKey, nestedValue]) => (
                            <tr key={nestedKey}>
                              <td className="border-b border-gray-200 px-4 py-2">
                                {key} → {nestedKey}
                              </td>
                              <td className="border-b border-gray-200 px-4 py-2">
                                {nestedValue}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2">
                            {key}
                          </td>
                          <td className="border-b border-gray-200 px-4 py-2">
                            {value}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )
        )}
        {/* {Object.entries(formData).map(([sectionKey, sectionValue]) =>
          ["project", "plot", "fsi"].includes(sectionKey) ? (
            <div key={sectionKey} style={{ margin: "16px 0" }}>
              <h2 style={{ textTransform: "capitalize" }}>{sectionKey}</h2>
              {Object.entries(sectionValue).map(([key, value]) => (
                <div key={key} style={{ marginLeft: "16px" }}>
                  <strong>{key}: </strong>
                  {typeof value === "object" ? (
                    <div style={{ marginLeft: "16px" }}>
                      {Object.entries(value).map(([nestedKey, nestedValue]) => (
                        <div key={nestedKey}>
                          <strong>{nestedKey}: </strong>
                          <span>{nestedValue}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            ""
          )
        )} */}
        <div className="flex justify-between my-4 py-4 ">
          <button
            onClick={handlePrevious}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
