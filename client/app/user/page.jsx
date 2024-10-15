"use client";

import Head from "next/head";
import style from "@/app/style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>UDCPR Calculation Tool</title>
        <meta
          name="description"
          content="A tool to assist with UDCPR calculations and regulations."
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col ">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        <div className=" mt-14">
          <button
            onClick={toggleSidebar}
            className="md:hidden fixed backdrop-blur-sm w-screen py-3 pl-8 text-left text-indigo-600"
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
          </button>
          <div className="flex">
            <ProfileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />
            <ProfileForm />
          </div>
        </div>

        {isScrolled && (
          <div className="fixed bottom-5 right-5 sm:right-8">
            <button
              className={
                style.colorThree +
                " animate-bounce hover:bg-[#F0A500] p-2 sm:p-5 rounded-full"
              }
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="#FFFFFF"
              >
                <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
              </svg>
            </button>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
