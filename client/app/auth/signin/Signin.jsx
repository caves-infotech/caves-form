"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import style from "../../style.module.css";
import { toast } from "react-toastify";
import Image from "next/image";
import Header from "../../../components/Header";

export default function SigninPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignin = async (e) => {
    try {
      signIn("google", { callbackUrl: "/", redirect: true });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signin failed");
    }
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/signin", formData);
      toast.success("User Signin Successfully");
      router.push("/form");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className={style.colorFour + " min-h-screen"}>
      <Header />
      <div className=" flex justify-center">
        <div
          className={
            style.colorTwo +
            "  p-20 rounded-l-2xl shadow-lg max-w-xl items-end mt-24 "
          }
        >
          <h2 className=" text-white text-4xl font-bold text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSignin} className="space-y-6 pt-8">
            <div>
              <label className=" text-xl text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="abc@mail.com"
                onChange={handleChange}
                className="block w-full p-2 border rounded bg-slate-300 mt-2"
                required
              />
            </div>
            <div>
              <label className=" text-xl text-white">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="*********"
                onChange={handleChange}
                className="block w-full p-2 border rounded bg-slate-300 mt-2"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={
                  style.colorFour + " text-white py-3 rounded-full w-3/4"
                }
              >
                Sign In
              </button>
            </div>
            {/* <div className="text-white text-center p-4">OR</div> */}
            <div>
              -----------------------------------------------------------------
            </div>
            <div className=" flex justify-center">
              <button
                onClick={handleGoogleSignin}
                className="flex justify-center w-3/4 py-2 bg-white hover:bg-slate-100 rounded-xl"
              >
                <FcGoogle size={30} className="mr-2" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
        <div className=" flex justify-center mt-24">
          <Image
            src="/img1.png"
            alt="logo"
            width={725}
            height={725}
            className="mr-2 rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
