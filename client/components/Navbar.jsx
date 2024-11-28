"use client";

import Link from "next/link";
import { useGetContext } from "@/services/formStateContext";

const Navbar = ({ isScrolled }) => {
  const { setState } = useGetContext();

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
    <nav
      className={` w-full z-40 backdrop-blur-md ${
        isScrolled ? " fixed top-14 py-1" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-wrap justify-center sm:p-2  py-2  bg-white bg-opacity-10 rounded-3xl mx-2 ">
          <div className="sm:p-2 my-1 sm:space-x-4 space-x-1">
          {row1Data.map((item, index) => (
            <Link
              href="/form"
              key={index}
              onClick={() => setState(item[1])}
              className={` bg-yellow-500 px-2 sm:px-5 sm:p-2 py-1 my-1 text-sm sm:text-xl font-semibold rounded-xl hover:text-slate-700 cursor-pointer`}
            >
              {item[0]}
            </Link>
          ))}
          </div>
          
          <div className="sm:p-2 my-1 sm:space-x-4 space-x-1">
          {row2Data.map((item, index) => (
            <Link
              href="/form"
              key={index}
              onClick={() => setState(item[1])}
              className={` bg-yellow-500 px-2 sm:px-5 sm:p-2 py-1 my-1 text-sm sm:text-xl font-semibold rounded-xl hover:text-slate-700  cursor-pointer`}
            >
              {item[0]}
            </Link>
          ))}
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
