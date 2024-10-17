// components/EnquiryForm.js
import { useState, useEffect } from "react";
import api from "@/services/axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { useAuth } from "@/services/authContext";

const EnquiryPopup = ({ togglePopup, isVisible }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || "",
    phone: user?.phone || "",
    message: "",
    attachment: null,
  });

  const handleOverlayClick = (e) => {
    // Close the modal if the user clicks on the overlay (not the form)
    if (e.target === e.currentTarget) {
      togglePopup();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("message", formData.message);
    formDataObj.append("attachment", formData.attachment);
    try {
      await api.post("/user/home-enquiry", formDataObj);
      toast.success("Enquiry submitted successfully");
    } catch (error) {
      toast.error("Failed to submit enquiry");
    }
  };

  useEffect(() => {
    // Stop scrolling when the popup is open
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <div
      className="fixed inset-0 bg-gray-600 backdrop-blur-md bg-opacity-50 min-h-screen flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white sm:flex items-center max-w-6xl mx-2 sm:mx-auto shadow-lg rounded-lg p-6 relative m-2">
        <button
          onClick={togglePopup}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </button>
        <div className="p-2">
          <h2 className=" text-2xl font-bold text-center">Enquiry Form</h2>
          <Image
            src="/formImage.png"
            alt="Form Image"
            width={400}
            height={700}
          />
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="w-full border-2 rounded py-2 px-3 text-gray-700"
                type="email"
                name="email"
                value={user?.email || formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                className="w-full border-2 rounded py-2 px-3 text-gray-700"
                type="tel"
                name="phone"
                value={user?.phone || formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="w-full border-2 rounded py-2 px-3 text-gray-700"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Attachment
              </label>
              <input
                className="w-full border-2"
                type="file"
                name="attachment"
                onChange={handleFileChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-xl font-semibold text-white bg-black hover:bg-yellow-600 p-3 px-4 rounded-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
