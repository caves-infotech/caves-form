"use client";

import { getToken, removeToken } from '@/services/auth';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Home() {
  const [token, setToken] = useState('');
  useEffect(()=>{
    setToken(getToken());
  }, [])
  
  const router = useRouter();

  const handleSignOut = () => {
    removeToken();
    router.push('/auth/signin');
  };
  return (
    <>
      <Head>
        <title>UDCPR Calculation Tool</title>
        <meta name="description" content="A tool to assist with UDCPR calculations and regulations." />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">

            <h1 className="text-2xl font-bold">UDCPR Calc</h1>
            <nav>
              {/* <Link href="" className="px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">About</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Tools</Link>
              <Link href="#" className="px-4 py-2 hover:bg-gray-700 rounded">Contact</Link> */}
              {
                token ?
                  <button
                    className="px-4 py-2 hover:bg-gray-700 rounded"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                  :
                  <button>
                    <Link href="auth/signup" className="px-4 py-2 hover:bg-gray-700 rounded">Sign Up</Link>
                  </button>
              }
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Welcome to UDCPR Calculation Tool</h2>
            <p className="text-lg mb-8">Simplifying the UDCPR calculation process with easy-to-use tools and resources.</p>
            <Link href={token ? "form": "auth/signin"} className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium">Create Performa-I</Link>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 mt-auto ">
          <div className="container mx-auto text-center flex justify-between">
            <p>&copy; 2024 UDCPR Calc. All rights reserved.</p>
            <div className="mt-4">
              <Link href="privacy" className="px-3">Privacy Policy</Link>
              <Link href="terms" className="px-3">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
