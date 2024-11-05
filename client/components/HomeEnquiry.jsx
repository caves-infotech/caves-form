// components/EnquiryForm.js
import { useState } from "react";

import EnquiryPopup from "./verticalNavbar/EnquiryPopup";

const EnquiryForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="relative max-w-7xl space-y-5  py-10 w-[90%] bg-black p-4 text-center border rounded-2xl shadow sm:p-14 hover:shadow-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 z-0 rounded-2xl"
          style={{
            backgroundImage: "url('/home-enquiry.jpg')",
          }}
        ></div>

        <h5 className="relative z-10 mb-2 text-4xl font-bold text-white">
          Online BPMS Enquiry
        </h5>
        <p className="relative z-10 mb-5 text-base sm:text-lg text-slate-300">
          We have 5+ years of experience working with BPMS. Get your plan ready
          with our specialized team.
        </p>
        <button
          onClick={togglePopup}
          className="relative z-10 text-xl font-semibold bg-white text-black hover:bg-yellow-600 p-3 px-4 rounded-2xl"
        >
          Get A Quote
        </button>
      </div>

      {isVisible && (
        <EnquiryPopup togglePopup={togglePopup} isVisible={isVisible} />
      )}
    </div>
  );
};

export default EnquiryForm;
