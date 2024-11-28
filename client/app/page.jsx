"use client";

import Navbar from "../components/Navbar";
import style from "../app/style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import NavBox from "@/components/NavBox";
import HomeEnquiry from "@/components/HomeEnquiry";
import GoTopBouncer from "@/components/GoTopBouncer";
import ContactUs from "./contact/ContactUs";
import FAQSection from "./faq/FAQSection";
import NavBox1 from "@/components/NavBox1";
import KeyFeatures from "@/components/KeyFeatures";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
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
      <div className="flex flex-col h-3/5">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        {/* Hero Section */}
        <section
          className={
            style.colorTwo +
            ` relative text-center pt-32 shadow-2xl transition-all duration-300 pb-20 `
          }
        >
          <div
            className="absolute inset-0 opacity-20  blur-sm bg-cover  bg-no-repeat z-0 rounded-2xl"
            style={{
              backgroundImage: "url('/home.jpg')",
            }}
          ></div>

          <div className="container text-white mx-auto max-w-7xl">
            <h1 className=" sm:text-6xl text-4xl font-bold mb-4">
              Welcome to <span className="font-bold text-[#F0A500]">UDCPR</span>{" "}
              Calculation Tool
            </h1>
            <h2 className="sm:text-2xl text-lg text-[#F0A500] py-1">
              &quot;Simplified UDCPR 2024 Building Byelaws and FSI Calculator
              for Maharashtra&quot;
            </h2>
            <div className="flex justify-center">
              <div className=" mt-8">
                <h3 className=" text-3xl font-bold text-white p-2">
                  Start Your Calculation Now
                </h3>
                <div className="animate-bounce flex justify-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                    fill="#F0A500"
                  >
                    <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Navbar isScrolled={isScrolled} />
        </section>

        {/* <AboutUs isHome={true}/> */}

        <NavBox />

        <HomeEnquiry />

        <KeyFeatures />

        <NavBox1 isHome={true}/>

        <FAQSection isHome={true} />

        <ContactUs isHome={true} />

        {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />}

        <Footer />
      </div>
    </>
  );
}
