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
import {saveToken} from "@/services/auth";

export default function SigninPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

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
      await api.post("/user/signin", formData);
      toast.success("User Signin Successfully");
      saveToken(response.data.token);
      router.push("/form");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className={style.colorFour }>
      <Header />
      <div className=" flex items-center justify-center h-screen">
        <div
          className={
            style.colorTwo +
            " w-1/3 p-16 rounded-l-2xl shadow-lg items-end mt-24 mb-5 "
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
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-dashed border-gray-400"></div>
            <span className="mx-4 text-white">OR</span>
            <div className="flex-grow border-t border-dashed border-gray-400"></div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={handleGoogleSignin}
              className="flex justify-center w-5/6 py-2 bg-white hover:bg-slate-100 rounded-lg"
            >
              <FcGoogle size={30} className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
        <div className=" flex mt-24 mb-5">
          <Image
            src="/img1.png"
            alt="logo"
            width={600}
            height={600}
            className="mr-2 rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
