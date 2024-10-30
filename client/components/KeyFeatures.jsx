"use client";

import Image from "next/image";
import React, { useState } from "react";

const keyFeatures = [
  {
    title: "Accurate FSI and TDR calculations based on UDCPR 2024",
  },
  {
    title: "User-friendly tools for streamlined building planning",
  },
  {
    title: "Comprehensive guidance on redevelopment regulations",
  },
  {
    title: "Dedicated sections explaining building byelaw components",
  },
];

export default function KeyFeatures() {
  return (
    <section className={`py-10 bg-gray-100`}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className=" mb-4 font-extrabold tracking-tight text-gray-900  text-xl sm:text-5xl">
            Key Features
          </h2>
        </div>

        <div className="max-w-5xl text-center mt-8 gap-10 md:mt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2  ">
          <div
            className={`transition-all  max-w-xl duration-200 bg-white border border-gray-200 shadow-lg  hover:bg-gray-50 rounded-xl`}
          >
            <div className="flex flex-col items-center justify-center w-full px-4 py-5 sm:p-6">
                <Image 
                src={"/homeimages/4.jpg"}
                width={150}
                height={150}
                />
              <div className="flex text-lg text-center font-semibold text-black">
                Accurate FSI and TDR calculations based on UDCPR 2024
              </div>
            </div>
          </div>
          <div
            className={`transition-all max-w-xl duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-xl`}
          >
            <div className="flex flex-col items-center justify-center w-full px-4 py-5 sm:p-6">
            <Image 
                src={"/homeimages/1.jpg"}
                width={150}
                height={150}
                />
              <div className="flex text-lg text-center font-semibold text-black">
                User-friendly tools for streamlined building planning{" "}
              </div>
            </div>
          </div>
          <div
            className={`transition-all max-w-xl duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-xl`}
          >
            <div className="flex flex-col  items-center justify-center w-full px-4 py-5 sm:p-6">
            <Image 
                src={"/homeimages/2.jpg"}
                width={150}
                height={150}
                />
              <div className="flex text-lg font-semibold text-black">
                Comprehensive guidance on redevelopment regulations
              </div>
            </div>
          </div>
          <div
            className={`transition-all max-w-xl duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-xl`}
          >
            <div className="flex flex-col items-center justify-center w-full px-4 py-5 sm:p-6">
            <Image 
                src={"/homeimages/3.jpg"}
                width={150}
                height={150}
                />
              <div className="flex text-lg font-semibold text-black">
                Dedicated sections explaining building byelaw components
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
