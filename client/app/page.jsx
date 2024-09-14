"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import style from "../app/style.module.css";
import Header from "@/components/Header";

export default function Home() {

  return (
    <>
      <Head>
        <title>UDCPR Calculation Tool</title>
        <meta
          name="description"
          content="A tool to assist with UDCPR calculations and regulations."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className={ style.colorTwo + " text-center pt-32 pb-52"}>
          <div className="container text-white mx-auto p">
            <h2 className="text-6xl font-bold mb-4">
              Welcome to UDCPR Calculation Tool
            </h2>
            <p className="text-lg my-10">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
          </div>
          
          <Navbar />

        </section>


          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>
          <hr className="my-10"/>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 mt-auto ">
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
