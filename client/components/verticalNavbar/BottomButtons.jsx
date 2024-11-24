import Link from "next/link";
import React from "react";
import style from "@/app/style.module.css";
import EnquiryPopup from "./EnquiryPopup";

export default function BottomButtons({
  isVerticalNavbarOpen,
  togglePopup,
  isModalVisible,
}) {
  return (
    <div>
      <div className="sm:block flex justify-between  sm:w-auto w-screen p-2 ">
        <div>
          <Link
            href="faq"
            className={` font-semibold sm:bg-gray-200 bg-yellow-600 sm:fixed sm:bottom-20 ${
              isVerticalNavbarOpen ? "sm:px-20 px-14" : ""
            } py-3 flex justify-center hover:shadow-xl shadow-md transition-all duration-500 rounded-xl hovr:bg-[#949494] hover:bg-yellow-500 text-black fill-white `}
          >
            <p className="px-1">FAQs</p>
          </Link>
        </div>
        <div
          className={` ${
            isVerticalNavbarOpen ? "sm:px-20 " : ""
          } sm:px-3 px-2 font-semibold bg-black sm:fixed sm:bottom-4 py-3 gap-1 flex justify-center hover:shadow-xl shadow-md transition-all duration-500 rounded-xl hover:bg-[#4b4e58] text-white fill-white `}
          onClick={togglePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className=" sm:flex hidden"
          >
            <path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z" />
          </svg>
          {isVerticalNavbarOpen ? (
            <p className={style.typingEffect}>Online BPMS Enquiry</p>
          ) : (
            ""
          )}
        </div>
      </div>
      {isModalVisible && (
        <EnquiryPopup togglePopup={togglePopup} isVisible={isModalVisible} />
      )}
    </div>
  );
}
