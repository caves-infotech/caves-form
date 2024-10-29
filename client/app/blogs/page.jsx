"use client";

import React from "react";
import KeyFeatures from "./KeyFeatures";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import GoTopBouncer from "@/components/GoTopBouncer";

export default function page() {
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
    <div>
      <div className="flex flex-col h-3/5">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        <div className="bg-gray-50 sm:py-10">
          <KeyFeatures />
        </div>

        {isScrolled && <GoTopBouncer scrollToTop={scrollToTop} />}

        <Footer />
      </div>
    </div>
  );
}
