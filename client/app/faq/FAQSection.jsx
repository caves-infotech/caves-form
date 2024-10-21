"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
      question: "What is UDCPR?",
      answer: "The Unified Development Control and Promotion Regulations (UDCPR) 2024 are guidelines set by the Maharashtra Government to regulate building construction and development across the state. These rules standardize development control regulations across different urban and rural areas in Maharashtra."
  },
  {
      question: "What is a congested area as per UDCPR?",
      answer: "A congested area refers to parts of a city or town that have high population density and are characterized by closely packed buildings. The UDCPR outlines specific building regulations, such as reduced FSI (Floor Space Index), for construction in congested areas to ensure proper urban planning."
  },
  {
      question: "What is the side margin as per UDCPR?",
      answer: "The side margin refers to the minimum space that must be maintained between the edge of a building and the plot boundary. As per UDCPR, side margins vary depending on the plot size, type of building, and zone. Margins ensure proper ventilation, light, and safety."
  },
  {
      question: "What is FSI in UDCPR?",
      answer: "FSI (Floor Space Index) is the ratio of the total floor area of a building to the size of the plot on which the building is constructed. UDCPR defines different FSI limits for various zones (residential, commercial, etc.) and plot sizes to regulate construction density."
  },
  {
      question: "What is 33(7)(B) in redevelopment?",
      answer: "Section 33(7)(B) under the UDCPR deals with the redevelopment of cessed buildings (buildings that pay a cess for repairs) in Mumbai. It provides guidelines for increasing FSI during redevelopment projects to encourage builders to take up reconstruction of old buildings."
  },
  {
      question: "What is the full form of TDR in UDCPR?",
      answer: "TDR stands for Transfer of Development Rights. It allows landowners to transfer unused FSI from one plot to another plot, typically in designated receiving areas, as defined by the UDCPR."
  },
  {
      question: "How is FSI calculated?",
      answer: "FSI is calculated by dividing the total built-up area of a building by the total area of the plot. For example, if the plot area is 1,000 square meters and the total built-up area is 2,000 square meters, the FSI would be 2.0."
  },
  {
      question: "What is 2 FSI?",
      answer: "An FSI of 2 means that the total floor area of a building can be twice the area of the plot. For example, on a 1,000 square meter plot, you are allowed to build up to 2,000 square meters of total floor space."
  },
  {
      question: "What is FSI level?",
      answer: "FSI level refers to the permitted FSI for a particular zone or plot, which determines how much construction can be carried out. Different areas and types of land use have different FSI limits under UDCPR."
  },
  {
      question: "How many floors is 1.5 FSI?",
      answer: "The number of floors depends on the plot size and the design of the building. For example, a plot with 1.5 FSI can have 1.5 times the plot area as the total built-up area. The actual number of floors will vary based on the height of each floor and local building codes."
  },
  {
      question: "Is the balcony included in FSI?",
      answer: "Typically, balconies are excluded from FSI calculations up to a certain limit, as per UDCPR. However, if the balcony area exceeds the allowed limit, the excess may be included in the FSI calculation."
  },
  {
      question: "What is TDR and FSI?",
      answer: "TDR (Transfer of Development Rights) and FSI are both related to the amount of floor space a building can occupy on a plot. TDR allows developers to use additional FSI beyond the base limit by purchasing rights from other landowners."
  },
  {
      question: "How is TDR calculated?",
      answer: "TDR is calculated based on the unused FSI of a property, which can be transferred to a designated plot where more construction is permissible. The specific rate or amount of TDR is regulated by local government authorities under UDCPR."
  },
  {
      question: "Is GST applicable on FSI?",
      answer: "Yes, GST (Goods and Services Tax) may be applicable on the transfer of development rights (FSI or TDR), especially for the commercial sale of property. The applicability of GST is subject to government regulations."
  },
  {
      question: "Is GST payable on unsold flats?",
      answer: "Yes, GST is payable on unsold flats if they remain unsold at the time of receiving the completion certificate. The liability to pay GST arises for the developer or builder in such cases."
  },
  {
      question: "Can builders claim ITC (Input Tax Credit)?",
      answer: "Yes, builders can claim Input Tax Credit (ITC) for GST paid on the inputs (like raw materials and services) used in the construction of properties intended for sale, provided certain conditions under the GST law are met."
  },
  {
      question: "Who pays GST in redevelopment?",
      answer: "In a redevelopment project, the builder or developer is responsible for paying GST on construction services provided to the property owners. However, the cost may be passed on to the buyers depending on the terms of the agreement."
  },
  {
      question: "Who will pay GST for a new flat?",
      answer: "In most cases, the buyer of the new flat is responsible for paying GST on the purchase. The developer will typically collect the GST and remit it to the government as part of the property sale transaction."
  }
];


const FAQSection = ({ isHome = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  let limitedFaqs = [];
  if(isHome){
    limitedFaqs = faqs.slice(0, 5);
  } else {
    limitedFaqs = faqs;
  }

  return (
    <section
      className={`py-10 ${isHome ? " " : " bg-gray-100"} py-20`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className=" mb-4 font-extrabold tracking-tight text-gray-900  text-3xl sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {limitedFaqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-xl"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => handleToggle(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
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
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {isHome ?
        <>
        <p className="text-center text-gray-600 text-base mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="faq"
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              More FAQs...
            </Link>
          </p>
        </>
        :
        (
          <p className="text-center text-gray-600 text-base mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="contact"
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
