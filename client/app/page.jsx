"use client";

import { getToken, removeToken } from "@/services/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getToken());
  }, []);

  const router = useRouter();

  const handleSignOut = () => {
    signOut("google");
    removeToken();
    router.push("/auth/signin");
  };
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
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logos/2.png" // Path to your image
                alt="Description of the image" // Alt text for accessibility
                width={50} // Desired width
                height={50} // Desired height
                className="mr-2"
              />
              <h1 className="text-2xl font-bold">UDCPR </h1>
            </div>
            <nav>
              {/* <Link href="" className="px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">About</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Tools</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Contact</Link> */}
              {token || session ? (
                <button
                  className="px-4 py-2 hover:bg-gray-700 rounded"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <button>
                  <Link
                    href="auth/signup"
                    className="px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Sign Up
                  </Link>
                </button>
              )}
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20">
          <div className="container mx-auto p">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to UDCPR Calculation Tool
            </h2>
            <p className="text-lg mb-8">
              Simplifying the UDCPR calculation process with easy-to-use tools
              and resources.
            </p>
            <Link
              href={token || session ? "form" : "auth/signin"}
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium"
            >
              Create Performa-I
            </Link>
          </div>
        </section>

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
