"use client";

import Head from "next/head";
import style from "@/app/style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import GoTopBouncer from "@/components/GoTopBouncer";

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

        <div className=" my-20">
          <PrivacyPolicy />
        </div>

        {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
