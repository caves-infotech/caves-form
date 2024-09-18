'use client';
import { useState } from 'react';
import api from '@/services/axios';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import style from "../../style.module.css";
import { toast } from "react-toastify";
import Image from "next/image";
import Header from "../../../components/Header";
import { signIn } from "next-auth/react";
import {saveToken} from "../../../services/auth";

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', phone: undefined, password: '' });
    const [otp, setOtp] = useState();
    const [otpSent, setOtpSent] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState(false);
    const [invalidOtp, setInvalidOtp] = useState(false);


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

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/signup', formData);
            saveToken(response.data.token);
            toast.success(response?.data?.message || "Signup failed");
            router.push("/");
        } catch (err) {
            toast.error(err?.response?.data?.message || "Signup failed");
        }
    };


    const handleSentOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/send-otp', formData);
            if (response.status === 200) {
            toast.success("response?.data?.message" || "OTP sent to your Phone Number");
            setOtpSent(true);
            }
        } catch (error) {
            toast.error("Failed to sent OTP");
            setInvalidOtp(true)
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/verify-otp', { formData, otp });
            if (response.status === 200) {
            toast.success("Phone number Verified");
            setVerificationStatus(true);
            }
        } catch (error) {
            toast.error("Invalid OTP");
            setInvalidOtp(true);
        }
    }

    return (
        <div className={style.colorFour}>
            <Header />
            <div className=" flex items-center justify-center h-screen">
                <div
                    className={
                        style.colorTwo +
                        " w-1/3 p-16 rounded-l-2xl shadow-lg items-end mt-24 mb-5 "
                    }
                >
                    <h2 className=" text-white text-4xl font-bold text-center mb-6">
                        SignUp to <span className=' text-yellow-400'>UDCPR </span>
                    </h2>

                    <form onSubmit={verificationStatus ? handleSignup : (otpSent ? handleVerifyOtp : handleSentOtp)}>
                        {!otpSent ? <div className='space-y-6 pt-8'>
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
                                <label className=" text-xl text-white">Phone Number:</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder="7272727272"
                                    maxLength={10}
                                    onChange={handleChange}
                                    className="block w-full p-2 border rounded bg-slate-300 mt-2"
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type='submit'
                                    className={
                                        style.colorFour + " text-white py-3 rounded-full w-3/4"
                                    }
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </div>
                            :
                            (!verificationStatus &&
                                <div className='space-y-6 py-[58px]'>
                                    <div className="m-auto flex items-center justify-around">
                                        <input
                                            type="text"
                                            className={`w-[165px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${invalidOtp
                                                ? "shake border-red-500"
                                                : "border-white"
                                                }`}
                                            placeholder="XXXXXX"
                                            maxLength={6}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-center pt-8">
                                        <button
                                            type='submit'
                                            className={
                                                style.colorFour + " text-white py-3 rounded-full w-3/4"
                                            }
                                        >
                                            Verify
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        {verificationStatus &&
                            <div className='space-y-6 pt-8'>
                                <div>
                                    <label className=" text-xl text-white">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Prafull Giri"
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
                                        type='submit'
                                        className={
                                            style.colorFour + " text-white py-3 rounded-full w-3/4"
                                        }
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        }
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
