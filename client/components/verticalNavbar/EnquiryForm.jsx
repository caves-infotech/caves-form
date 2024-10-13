"use client";

import { useState, useEffect } from "react";
import style from "@/app/style.module.css";
import api from "@/services/axios";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { getToken } from "@/services/auth";
import { useSession } from "next-auth/react";

const EnquiryForm = ({ isVerticalNavbarOpen }) => {
  // const token = getToken();
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (!(token || session)) {
  //     redirect("/auth/signin");
  //   }
  // }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTitle("");
    setMessage("");
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('message', message);
    formData.append('attachment', file);
    try {
      await api.post("/user/enquiry", formData);
      handleCancel(); // Reset form after submission
      toast.success("Enquiry submitted successfully");
    } catch (err) {
      toast.error("Failed to submit enquiry");
    }
  };

  return (
    <>
      <li
        className={
          style.colorTwo +
          " fixed bottom-3 space-x-2 px-3 text-nowrap py-3 flex justify-center hover:shadow-xl shadow-md transition-all duration-500 rounded-xl hover:bg-[#4b4e58] text-white fill-white "
        }
        onClick={showModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z" />
        </svg>

        {isVerticalNavbarOpen ? (
          <div className={" flex justify-between"}>
            <p className={style.typingEffect}>Online BPMS Enquiry</p>
          </div>
        ) : (
          ""
        )}
      </li>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-xl shadow-md w-96 z-50">
            <div className="flex items-center justify-between my-2 mb-5">
              <h2 className="text-xl text-center font-bold">Enquiry Form</h2>

              <button
                type="button"
                onClick={handleCancel}
                className="mr-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-500 rounded-md p-2"
                  placeholder="Enter title of Enquiry"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-500 rounded-md p-2"
                  placeholder="Enter Enquiry..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="attachment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Attachment (Optional)
                </label>
                <input
                  type="file"
                  name="attachment"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryForm;
