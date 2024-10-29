"use client";

import React, { useState } from "react";

const keyFeatures = [
  {
    title: "Optimize Floor Plan Layout",
    text: "Design an efficient floor plan that minimizes wasted spaces like corridors and corners, focusing on functional areas.",
  },
  {
    title: "Utilize Vertical Space",
    text: "Design an efficient floor plan that minimizes wasted spaces like corridors and corners, focusing on functional areas.",
  },
  {
    title: "Reduce Common Areas",
    text: "Minimize shared spaces like lobbies and hallways to boost the ratio of private saleable areas, while ensuring functionality and aesthetics.",
  },
  {
    title: "Incorporate Multi-functional Spaces",
    text: "Design rooms with flexible uses, such as home offices or convertible living spaces, making the property more versatile and marketable.",
  },
  {
    title: "Leverage Setback Areas",
    text: "Take advantage of permissible build areas around setbacks by using them for landscaping or parking, freeing up interior space for saleable use.",
  },
  {
    title: "Maximize FAR (Floor Area Ratio)",
    text: "Fully utilize the available FAR by expanding vertically or adding additional floors within the legal limits to increase the total built-up area.",
  },
  {
    title: "Use Smart Wall Placement",
    text: "Position structural walls strategically to create more open floor plans, reducing the need for extra internal walls and increasing usable space.",
  },
  {
    title: "Minimize Non-Saleable Spaces",
    text: "Reduce or eliminate areas like shafts, ducts, and service cores in the layout, to maximize the area available for saleable space.",
  },
  {
    title: "Strategic Balcony Placement",
    text: "Incorporate balconies that enhance the living experience but don’t excessively eat into the saleable area calculations.",
  },
  {
    title: "Innovative Parking Solutions",
    text: "Use space-efficient parking solutions like stack parking or mechanized systems to reduce the land consumed by parking lots.",
  },
  {
    title: "Compliance with Local Codes",
    text: "Stay within local regulations and zoning codes while ensuring the maximum buildable and saleable area allowed by law.",
  },
  {
    title: "Energy Efficiency and Sustainability",
    text: "Incorporate energy-efficient design strategies, such as passive solar design or green roofs, that could allow for government incentives and free up more space for saleable use.",
  },
];

export default function KeyFeatures() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    
  return (
    <section className={`py-10 bg-gray-100`}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className=" mb-4 font-extrabold tracking-tight text-gray-900  text-xl sm:text-5xl">
          10+ Pro Tips how to Miximize Saleable Built-Up Area in any
          Plot or Project
          </h2>
        </div>

        <div className="max-w-7xl mx-auto mt-8 space-y-4 md:mt-16">
          {keyFeatures.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-xl"
            >
              <button
                // type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                // onClick={() => handleToggle(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {index +1 }. {faq.title}
                </span>
                {/* <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    // openIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </button>

              {/* {openIndex === index && ( */}
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.text}</p>
                </div>
              {/* // )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
