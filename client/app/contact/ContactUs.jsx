import React from "react";
import style from "@/app/style.module.css";
import { useState } from "react";
import api from "@/services/axios";
import { toast } from "react-toastify";
import { useAuth } from "@/services/authContext";

const ContactUs = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || "",
    phone: user?.phone || "",
    message: "",
    attachment: null,
  });

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
  return (
    <section className="bg-gray-100" id="contact">
      <div className="mx-auto w-[90%] max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className=" mb-4 font-extrabold tracking-tight text-gray-900  text-3xl sm:text-5xl">
              Get in Touch
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center ">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600">
                If you have any questions or would like to discuss your project,
                please fill out the form, and we'll get back to you as soon as
                possible!
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      College Rd, D'souza <br />
                      Colony, Nashik.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Contact
                    </h3>
                    <p className="text-gray-600">Mobile: +91 9209905101</p>
                    <p className="text-gray-600">
                      Mail: udcprs@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Working hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 11:00 Am - 05:30 Pm
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-fit max-w-6xl sm:px-12" id="form">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="w-full border-2 border-gray-400 rounded-2xl py-2 px-3 text-gray-700"
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
                    className="w-full border-2 border-gray-400 rounded-2xl py-2 px-3 text-gray-700"
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
                    className="w-full border-2 border-gray-400 rounded-2xl py-2 px-3 text-gray-700"
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
                    className="w-full border-2 border-gray-400 rounded-2xl"
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-xl font-bold text-white bg-black hover:bg-yellow-500 hover:text-black p-3 px-4 rounded-2xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
