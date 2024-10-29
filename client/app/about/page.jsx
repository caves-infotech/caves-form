"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import GoTopBouncer from "@/components/GoTopBouncer";
import AboutUs from "@/app/about/About";
import NavBox1 from "@/components/NavBox1";

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
          <AboutUs isHome={false}/>
          <NavBox1 />
        </div>

        {/* {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />} */}


        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
