"use client";
import { useState } from "react";
import api from "@/services/axios";
import { toast } from "react-toastify";
import { saveToken } from "@/services/auth";
// import { useAuth } from "@/context/AuthContext"; // Import useAuth

const SignInPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [otpSent, setOtpSent] = useState(false);
//   const { isSignedIn } = useAuth(); // Access the auth context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/send-otp", { phone: formData.email });
      setOtpSent(true);
      toast.success("OTP sent to your email");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/verify-otp", {phone: formData.email, otp: formData.otp});
      saveToken(response.data.token);
      onClose(); // Close the popup
      toast.success("OTP verified. Signing in...");
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label className="text-lg">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="abc@mail.com"
                onChange={handleChange}
                className="block w-full p-2 border rounded bg-gray-200 mt-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label className="text-lg">Enter OTP:</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                placeholder="Enter OTP"
                onChange={handleChange}
                className="block w-full p-2 border rounded bg-gray-200 mt-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Verify OTP & Sign In
            </button>
          </form>
        )}
        <button onClick={onClose} className="text-red-500 mt-4">Cancel</button>
      </div>
    </div>
  );
};

export default SignInPopup;
