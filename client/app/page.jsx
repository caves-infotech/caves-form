"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import style from "../app/style.module.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>UDCPR Calculation Tool</title>
        <meta
          name="description"
          content="A tool to assist with UDCPR calculations and regulations."
        />
      </Head>
      <div className="flex flex-col h-3/5">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        {/* Hero Section */}
        <section className={style.colorTwo + " text-center pt-32 pb-52"}>
          <div className="container text-white mx-auto p">
            <h2 className=" sm:text-6xl text-3xl font-bold mb-4">
              Welcome to <span className="font-bold text-yellow-300">UDCPR</span> Calculation Tool
            </h2>
            <p className="text-lg my-10">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
          </div>

          <Navbar isScrolled={isScrolled} />

        </section>

        {isScrolled &&
          <button
            className={ style.colorOne + " fixed text-2xl bottom-10 right-8 p-5 rounded-full"}
            onClick={scrollToTop}>
            ⇑
          </button>}
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />
        <hr className="my-10" />

        {/* Footer */}
        <footer className={ style.colorThree + " text-white p-6 mt-auto "}>
          <div className="container mx-auto text-center flex justify-between items-center">
            <p>&copy; 2024 UDCPR Calc. All rights reserved.</p>
            <div>
              <Link href="privacy" className="px-3">
                Privacy Policy
              </Link>
              <Link href="terms" className="px-3">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
