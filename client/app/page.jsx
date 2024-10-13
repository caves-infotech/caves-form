"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import style from "../app/style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import NavBox from '@/components/NavBox';
import HomeEnquiry from "@/components/HomeEnquiry";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="flex flex-col h-3/5">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        {/* Hero Section */}
        <section className={style.colorTwo + ` text-center pt-32 shadow-2xl transition-all duration-500 ${isScrolled ? "pb-10" : "pb-56" } `}>
          <div className="container text-white mx-auto p">
            <h2 className=" sm:text-6xl text-4xl font-bold mb-4">
              Welcome to <span className="font-bold text-[#F0A500]">UDCPR</span>{" "}
              Calculation Tool
            </h2>
            <p className="text-lg my-10">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
          </div>

          <Navbar isScrolled={isScrolled} />
        </section>

        {isScrolled && (
          <div className="fixed bottom-5 right-5 sm:right-8">
            <button
              className={style.colorThree + " animate-bounce hover:bg-[#F0A500] p-2 sm:p-5 rounded-full"}
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


        <NavBox />
        <HomeEnquiry />
        
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
