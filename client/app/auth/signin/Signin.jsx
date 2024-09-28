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
import {saveToken} from "../../../services/auth";
import Link from "next/link";

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
      const response = await api.post("/user/signin", formData);      
      saveToken(response.data.token);
      toast.success("User Signin Successfully");
      router.push("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className={style.colorTwo }>
      <Header />
      <div className=" sm:mx-60 flex items-center justify-center h-screen">
        <div
          className={
            style.colorSix +
            " sm:w-1/3 p-14 sm:rounded-l-2xl items-end mt-24 mb-5 "
          }
        >
          <h2 className="  text-4xl font-bold text-center mb-6">
            Sign In
          </h2>

          <div className=" flex justify-center">
            <button
              onClick={handleGoogleSignin}
              className={ style.colorThree + " text-white flex justify-center sm:w-3/4 w-full py-2 hover:bg-gray-700 rounded-lg"}
            >
              <FcGoogle size={30} className="mr-2" />
              Sign In with Google
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-dashed border-gray-400"></div>
            <span className="mx-4 ">OR</span>
            <div className="flex-grow border-t border-dashed border-gray-400"></div>
          </div>

          <form onSubmit={handleSignin} className="space-y-6 pt-4">
            <div>
              <label className=" text-xl e">Email:</label>
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
              <label className=" text-xl ">Password:</label>
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
                  style.colorThree + " text-white py-3 rounded-lg w-3/4"
                }
              >
                Sign In
              </button>
            </div>
          </form>
          
          
          <div className=" flex-col text-center pt-9">
            <p className="p-1  font-light">If you hav&#39;t have account,</p>
            <Link href="/auth/signup" className="hover:text-lg underline  px-3 font-sans text-xl">
              SignUp
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex mt-24 mb-5">
          <Image
            src="/img1.png"
            alt="logo"
            width={700}
            height={700}
            className=" rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
