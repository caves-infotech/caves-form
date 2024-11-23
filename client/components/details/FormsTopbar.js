"use client";

// import button from "next/button";
import style from "@/app/style.module.css";
import { useGetContext } from "@/services/formStateContext";

const FormsTopbar = () => {
  const { setState, state } = useGetContext();

  const row1Data = [
    ["Appendix", 6],
    ["UDCPR Index", 5],
    ["Potential FSI", 2],
  ];
  const row2Data = [
    ["Parking", 3],
    ["Building Margin", 4],
    ["Create Performa-I", 1],
  ];
  return (
    <nav className={` w-full z-30 backdrop-blur-md fixed top-16 sm:hidden`}>
      <div className="container mx-auto">
        <div
          className={
            "bg-gray-100 flex items-center font-semibold justify-center "
          }
        >
          <div className="flex flex-col overflow-x-auto">
            <div className="flex space-x-2 whitespace-nowrap px-4 pt-1">
              {row1Data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setState(item[1])}
                  className={`${
                    state === item[1]
                      ? "bg-white shadow  text-slate-600"
                      : " bg-yellow-500 "
                  } px-2 py-1 text-sm font-medium rounded-full hover:text-slate-700 cursor-pointer`}
                >
                  {item[0]}
                </button>
              ))}
            </div>

            <div className="flex space-x-2 whitespace-nowrap px-4 pt-1">
              {row2Data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setState(item[1])}
                  className={`${
                    state === item[1]
                      ? "bg-white shadow  text-slate-600"
                      : " bg-yellow-500 "
                  } px-2 py-1 text-sm font-medium rounded-full hover:text-slate-700  cursor-pointer`}
                >
                  {item[0]}
                </button>
              ))}
            </div>
            <hr className="mt-1" />

          </div>
        </div>
      </div>
    </nav>
  );
};

export default FormsTopbar;
