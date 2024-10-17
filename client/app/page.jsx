"use client";

import Head from "next/head";
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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignin, setIsSignin] = useState(true);

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
        <Header
          isScrolled={isScrolled}
          isSignin={isSignin}
          setIsSignin={setIsSignin}
        />

        {/* Hero Section */}
        <section
          className={
            style.colorTwo +
            ` text-center pt-32 shadow-2xl transition-all duration-300 ${
              isScrolled ? "pb-20" : "pb-60"
            } `
          }
        >
          <div className="container text-white mx-auto max-w-7xl">
            <h2 className=" sm:text-6xl text-4xl font-bold mb-4">
              Welcome to <span className="font-bold text-[#F0A500]">UDCPR</span>{" "}
              Calculation Tool
            </h2>
            <p className=" sm:block md:hidden xl:block hidden text-lg my-20 text-justify">
              <span className="mx-5"></span>At UDCPRS, we are dedicated to
              providing accessible and easy-to-use tools that help you navigate
              the Unified Development Control and Promotion Regulations (UDCPR)
              2024 in Maharashtra. Whether you're an architect, developer, or
              individual looking to understand regulatory requirements, we have
              the resources you need to streamline your planning and development
              processes.
            </p>
            <p className=" block md:block sm:hidden xl:hidden text-lg mx-3 my-10 text-center">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
          </div>

          <Navbar isScrolled={isScrolled} />
        </section>

        {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />}

        <NavBox />
        <HomeEnquiry />

        <FAQSection isHome={true}/>
        <ContactUs isHome={true}/>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
