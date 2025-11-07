"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseURL } from "../Constant";

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //  Full backend URL here
      const res = await axios.post(
        `${baseURL}/admin/signin`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      alert("Signin successful!");
      router.push("/admin/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
           ADMIN SIGNIN
        </h2>


        <div className="w-full mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">
    Email
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
 </div>

<div className="w-full mb-6">
  <label className="block text-sm font-medium mb-1 text-gray-700">
    Password
  </label>
  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        {message && (
          <p className="text-center text-red-500 mt-4 font-medium">{message}</p>
        )}

        <div className="text-center mt-4">
  <p className="text-sm text-gray-600">
    Don’t have an account?{" "}
    <a
      href="/admin/signup"
      className="text-blue-600 font-medium hover:underline"
    >
      Sign up
    </a>
  </p>
</div>

      </form>
    </div>
  );
};

export default AdminSignin;
