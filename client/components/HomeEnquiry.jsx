// components/EnquiryForm.js
import { useState } from 'react';

import EnquiryPopup from './verticalNavbar/EnquiryPopup';

const EnquiryForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);       
    };

    return (
        <div className="flex flex-col items-center justify-center mb-20">
            <div
                className={`max-w-7xl space-y-5 animate-bg-color-change py-10 w-[90%] p-4 text-center border rounded-2xl shadow sm:p-14 hover:shadow-2xl`}>
                <h5 className="mb-2 text-3xl font-bold text-white">
                    Online BPMS Enquiry
                </h5>
                <p className="mb-5 text-base sm:text-lg text-gray-400">
                    We have 5+ years of experience working with BPMS. Get your plan ready with our specialized team.
                </p>
                <button
                    onClick={togglePopup}
                    className='text-xl font-semibold bg-white text-black hover:bg-yellow-600 p-3 px-4 rounded-2xl'
                >
                    Get A Quote
                </button>
            </div>

            {isVisible && (
                <EnquiryPopup togglePopup={togglePopup} isVisible={isVisible}/>
            )}
        </div>
    );
};

export default EnquiryForm;
