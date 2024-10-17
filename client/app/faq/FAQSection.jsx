"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    question: "How to create an account?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    question: "How can I make payment using Paypal?",
    answer:
      "You can make a payment using Paypal by selecting it as your payment method during checkout.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Yes, you can cancel your plan at any time. Please refer to our cancellation policy for details.",
  },
  {
    question: "How can I reach support?",
    answer:
      "You can reach our support team via the contact form on our website or email us at support@example.com.",
  },
];

const FAQSection = ({ isHome = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          {faqs.map((faq, index) => (
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
        {!isHome && (
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
