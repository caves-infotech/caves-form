"use client";
import { useState } from "react";
import api from "@/services/axios";
import { FcGoogle } from "react-icons/fc";
import style from "@/app/style.module.css";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { saveToken } from "@/services/auth";
import { useAuth } from "@/services/authContext";

export default function SignInPopup({ setIsSignin }) {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [invalidOtp, setInvalidOtp] = useState(false);
  const { setIsSignedIn } = useAuth();

  const handleGoogleSignin = async (e) => {
    try {
      await signIn("google");
      toast.success('Signin Success');
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signin failed");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/signin", { email, emailOtp });
      if (response.status === 200) {
        saveToken(response.data.token);
        setIsVisible(false);
        setIsSignedIn(true);
        toast.success(response?.data?.message || "Signup Success");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed");
      setInvalidOtp(true);
    }
  };

  const handleSentOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/send-email-otp", { email });
      if (response.status === 200) {
        toast.success(response?.data?.message || "OTP sent to your email");
        setOtpSent(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to sent OTP");
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-30 bg-black bg-opacity-70">
          <div
            className={
              style.colorSix +
              " sm:mx-auto mx-2 sm:w-96 h-[550px] p-14 rounded-2xl items-end mt-24 mb-10 relative"
            }
          >
            {/* <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button> */}
            <h2 className="  text-4xl font-bold text-center mb-6">
              Login
              {/* to <span className=' text-yellow-400'>UDCPR </span> */}
            </h2>

            <div className=" flex justify-center">
              <button
                onClick={handleGoogleSignin}
                className={
                  style.colorThree +
                  " flex justify-center sm:w-3/4 w-full py-2  text-white hover:bg-gray-700 rounded-lg"
                }
              >
                <FcGoogle size={25} className="mr-2 font-sans" />
                Signup with Google
              </button>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-dashed border-gray-400"></div>
              <span className="mx-4 ">OR</span>
              <div className="flex-grow border-t border-dashed border-gray-400"></div>
            </div>

            <form onSubmit={otpSent ? handleSignin : handleSentOtp}>
              {!otpSent ? (
                <div className="space-y-6 pt-4">
                  <div>
                    <label className=" text-xl ">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="abc@mail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full p-2 border rounded bg-slate-300 mt-2"
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className={
                        style.colorThree +
                        " hover:bg-gray-700 text-white py-3 rounded-lg w-3/4"
                      }
                    >
                      Request OTP
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-2">
                  <div className="m-auto flex items-center justify-around">
                    <input
                      type="text"
                      className={`w-[200px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black justify-center text-[18px] font-Poppins outline-none text-center ${
                        invalidOtp ? "shake border-red-500" : "border-black"
                      }`}
                      placeholder="XXXXXX"
                      maxLength={6}
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center pt-8">
                    <button
                      type="submit"
                      className={
                        style.colorThree + " text-white py-3 rounded-lg w-3/4"
                      }
                    >
                      Login
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className=" flex-col text-center pt-9">
              <p className="p-1  font-light">New to UDCPR simplified,</p>
              <button
                onClick={() => setIsSignin(false)}
                className="hover:text-lg underline  px-3 font-sans text-xl"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
