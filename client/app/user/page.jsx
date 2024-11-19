"use client";

import Head from "next/head";
import style from "@/app/style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { useAuth } from "@/services/authContext";
import GoTopBouncer from "@/components/GoTopBouncer";
import SignInPopup from "@/components/auth/Signin";
import SignUpPopup from "@/components/auth/Signup";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignin, setIsSignin] = useState(true);
  const { user } = useAuth();
  const [client, setClient] = useState(user);
  const { isSignedIn } = useAuth();

  const getUserFromUseAuth = ()=>{
    setClient(user);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getUserFromUseAuth();
  }, [user]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-col ">
        {/* Header */}
        <Header
          isScrolled={isScrolled}
          isSignin={isSignin}
          setIsSignin={setIsSignin}
        />

        <div className=" mt-14">
          {/* <button
            onClick={toggleSidebar}
            className="md:hidden fixed backdrop-blur-sm w-screen py-2 pl-8 text-left text-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#000000"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button> */}
          <div className="flex">
            {/* <ProfileSidebar isOpen={isOpen} closeSidebar={closeSidebar} /> */}
            <ProfileForm user={client} />
          </div>
        </div>

        {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />}

        {/* Footer */}
        <Footer />
      </div>
      {!isSignedIn && (
        <>
          {isSignin ? (
            <SignInPopup setIsSignin={setIsSignin} />
          ) : (
            <SignUpPopup setIsSignin={setIsSignin} />
          )}
        </>
      )}
    </>
  );
}
