// components/EnquiryForm.js
import { useState } from 'react';

import EnquiryPopup from './verticalNavbar/EnquiryPopup';

const EnquiryForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);       
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <div
                className={` animate-bg-color-change py-10 w-[90%] p-4 text-center border rounded-2xl shadow sm:p-14 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 `}>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    Online BPMS Enquiry
                </h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                    We have 5+ years of experience working with BPMS. Get your plan ready with our specialized team.
                </p>
                <button
                    onClick={togglePopup}
                    className='text-xl font-semibold bg-white text-black hover:bg-yellow-600 p-3 px-4 rounded-2xl'
                >
                    Click for enquiry
                </button>
            </div>

            {isVisible && (
                <EnquiryPopup togglePopup={togglePopup} isVisible={isVisible}/>
            )}
        </div>
    );
};

export default EnquiryForm;
