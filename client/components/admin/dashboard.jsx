"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import {
  HomeIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { FaCalendar, FaFileImage, FaMailBulk, FaPhone } from "react-icons/fa";
//import { AiFillFileText } from "react-icons/ai";
//import { data } from "autoprefixer";
import { FileText, Menu, Paperclip } from "react-feather";
import { baseURL } from "../Constant";
//import { content } from "html2canvas/dist/types/css/property-descriptors/content";
//import { detectContentType } from "next/dist/server/image-optimizer";

const Dashboard = () => {
  const [admin, setAdmin] = useState({});
  const [users, setUsers] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const dropdownRef = useRef(null); // For clicking outside
  const COLORS = ["#4FD1C5", "#63B3ED", "#F6AD55", "#F56565"];

  // Fetch data
  useEffect(() => {
    axios
      .get(`${baseURL}/admin/profile/dashboard`)
      .then((res) => setAdmin(res?.data?.data))
      .catch((err) => console.log(err));

    axios
      .get(`${baseURL}/user/all`)
      .then((res) => setUsers(res?.data?.users))
      .catch((err) => console.log(err));

    axios
      .get(`${baseURL}/api/enquiries`)
      .then((res) => setEnquiries(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignout = async () => {
    try {
      const response = await fetch(`${baseURL}/admin/signout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        window.location.href = "/admin/signin";
      }
    } catch (error) {
      console.error("Signout failed:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed md:relative z-40 top-0 left-0 h-full flex flex-col bg-blue-600 text-white transition-all duration-300
        ${sidebarOpen ? "w-60" : "w-20 md:w-20"}
         ${
           !sidebarOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"
         }
       `}
      >
        {/* Sidebar Header */}
        <div
          className={`flex items-center  gap-3 py-4 p-4 border-b border-blue-500  ${
            !sidebarOpen ? "justify-center" : "justify-between"
          }`}
        >
          {sidebarOpen && <span className="font-bold text-xl py-2">Home</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
              <ChevronLeftIcon className="w-7 h-7 my-2" />
            ) : (
              <ChevronRightIcon className="w-7 h-7 my-2" />
            )}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 mt-4 flex flex-col gap-2 items-center">
          <button
            className={`flex items-center gap-3 py-3 px-4 rounded hover:bg-blue-500 transition-colors w-full ${
              activeTab === "dashboard" ? "bg-blue-500" : ""
            } ${!sidebarOpen ? "justify-center" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <HomeIcon className="w-6 h-6 text-white" />
            {sidebarOpen && <span className="ml-3">{`Dashboard`}</span>}
          </button>

          <button
            className={`flex items-center gap-3 py-3 px-4 rounded hover:bg-blue-500 transition-colors w-full ${
              activeTab === "users" ? "bg-blue-500" : ""
            } ${!sidebarOpen ? "justify-center" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <UsersIcon className="w-6 h-6 text-white" />
            {sidebarOpen && <span className="ml-3">Users</span>}
          </button>

          <button
            className={`flex items-center gap-3 py-3 px-4 rounded hover:bg-blue-500 transition-colors w-full ${
              activeTab === "enquiries" ? "bg-blue-500" : ""
            } ${!sidebarOpen ? "justify-center" : ""}`}
            onClick={() => setActiveTab("enquiries")}
          >
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
            {sidebarOpen && <span className="ml-3">Enquiries</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen && "md:ml-30"
        }`}
      >
        {/* Navbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow relative">
          <div ref={dropdownRef} className="relative">
            <button
              className="font-semibold px-4 py-2 rounded bg-orange-200 hover:bg-orange-300 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <UserIcon className="w-7 h-7 text-blue-600" />
              <span className="ml-2">{admin.name || "Admin"}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded border border-gray-200 z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          <button
            className="md:hidden fixed left-6 p-2 rounded bg-blue-600 text-white "
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-100 rounded shadow hover:shadow-lg transition-colors">
                  <h2 className="text-lg font-semibold text-blue-800">
                    Total Users
                  </h2>
                  <p className="text-3xl font-bold text-blue-900">
                    {users?.length}
                  </p>
                </div>
                <div className="p-6 bg-green-100 rounded shadow hover:shadow-lg transition-colors">
                  <h2 className="text-lg font-semibold text-green-800">
                    Total Enquiries
                  </h2>
                  <p className="text-3xl font-bold text-green-900">
                    {enquiries?.length}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="flex-1 overflow-auto">
              <div className="p-8">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">Users</h1>
                  <p className="text-gray-600 mt-2">Manage registered users</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {users?.map((user) => (
                    <div
                      key={user._id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col"
                    >
                      <div className="p-6 flex-1">
                        {/* Fixed icon instead of user avatar */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                            <UserIcon className="w-7 h-7 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {user.name || "No Name"}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {user.email && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaMailBulk className="w-4 h-4 text-gray-400" />
                              <span>{user.email}</span>
                            </div>
                          )}

                          {user.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <PhoneIcon className="w-4 h-4 text-gray-400" />
                              <span>{user.phone}</span>
                            </div>
                          )}

                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCalendar className="w-4 h-4 text-gray-400" />
                            <span>
                              {new Date(user.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "enquiries" && (
            <>
              <div className="flex-1 overflow-auto">
                <div className="p-8">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Enquiries
                    </h1>
                    <p className="text-gray-600 mt-2">
                      Manage and track customer enquiries
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...(enquiries || [])]
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .map((enquiry) => (
                        <div
                          key={enquiry._id}
                          className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col"
                        >
                          <div className="p-6 flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {enquiry.user}
                                </h3>
                                {enquiry.status && (
                                  <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                      enquiry.status
                                    )}`}
                                  >
                                    {enquiry.status.charAt(0).toUpperCase() +
                                      enquiry.status.slice(1)}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="space-y-3 mb-4">
                              {enquiry.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <FaMailBulk className="w-4 h-4 text-gray-400" />
                                  <span>{enquiry.email}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <PhoneIcon className="w-4 h-4 text-gray-400" />
                                <span>{enquiry.phone}</span>
                                <button
                                  onClick={() =>
                                    window.open(`tel:${enquiry.phone}`)
                                  }
                                  className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded-md hover:bg-green-700 transition-colors"
                                >
                                  Call
                                </button>
                              </div>

                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <FaCalendar className="w-4 h-4 text-gray-400" />
                                <span>
                                  {new Date(
                                    enquiry.createdAt
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                              <div className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-gray-700 mt-1 flex-shrink-0" />
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {enquiry.message}
                                </p>
                              </div>
                            </div>

                            {/* Single attachment support */}
                            {enquiry.attachment && (
                              <div className="border-t border-gray-200 pt-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <Paperclip className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm font-medium text-gray-700">
                                    Attachment
                                  </span>
                                </div>

                                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                                  <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 truncate">
                                      {enquiry.attachment}
                                    </span>
                                  </div>
                                  {/* Only View button - open directly in new tab */}
                                  <button
                                    onClick={() =>
                                      window.open(enquiry.attachment, "_blank")
                                    }
                                    className="ml-2 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
