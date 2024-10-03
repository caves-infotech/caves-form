import Image from "next/image";
import Link from "next/link";
import style from "../app/style.module.css";
import { signOut } from "next-auth/react";
import { getToken, removeToken } from "@/services/auth";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { toast } from 'react-toastify';
import api from "@/services/axios";
import {Marck_Script} from 'next/font/google';

const marckScript = Marck_Script({
  weight: '400', // This font only has 400 weight
  subsets: ['latin'], // Define the subset you want to use
  display: 'swap', // Optional: adds swap behavior for better performance
});

export default function Header({ isScrolled }) {
  const { data: session } = useSession();
  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [pathName, setPathName] = useState();

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setToken(getToken());    
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isScrolled) {
      setIsOpen(false);
    }
  }, [ isScrolled])

  const handleSignOut = async () => {
    if (token) {
      try {
        const response = await api.post('/user/signout');
        removeToken();
        setToken("");
        toast.info(response.data.message || "User Signout Successfully");
      } catch (err) {
        toast.info(err?.response?.data?.message || "Problem in signout");
      }
    } else if (session) {
      signOut("google");
      toast.info("User Signout Successfully");
    }
  };

  useEffect(() => {
    setPathName(window.location.pathname)    
  }, [pathName]);

  return (
    <header className={style.colorThree + " z-40 text-white sm:p-2 fixed w-full items-center justify-center"}>
      <div className="flex items-center justify-between px-2 ">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logos/2wc.png"
            alt="logo"
            width={60}
            height={60}
          />
          <div className="items-center justify-center sm:flex sm:">
          <h1 className="-mb-2 text-xl font-bold text-white sm:text-2xl sm:mr-2 sm:-mt-2">UDCPR</h1>
          <span className={marckScript.className + " sm:text-xl sm:-mb-2 text-lg text-[#ffca57]"}>simplified</span>
          </div>
        </Link>
        <nav ref={sidebarRef}
        >
          <button
            className="block text-white sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>

          {/* Links for Desktop */}
          <ul className="items-center justify-end hidden space-x-6 text-white sm:flex">
            <li>
              <Link href="/" className="px-4 py-2 rounded hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-700">
                FaQ
              </Link>
            </li>
            <li>
              {token || session ? (
                <Link
                  href="/" 
                  onClick={handleSignOut}
                  className="px-4 py-2 hover:bg-gray-700 rounded border-[#fac148] border-2"
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  href={pathName == "/auth/signin" ? "/auth/signup" : "/auth/signin"}
                  className={ ` ${pathName == "/auth/signin" ? " px-2 " : " px-3 "} py-2 hover:bg-gray-700 border-[#fac148] border-2 rounded flex items-center`}
                >
                  <div className="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 0115 0" />
                    </svg>
                  </div>
                  {pathName == "/auth/signin" ? "Sign Up" : "Sign In"}
                </Link>
              )}
            </li>
          </ul>

          {isOpen && (
            <div
              className={` shadow-xl fixed z-50 right-0 mr-2 text-center`}
              onClick={() => setIsOpen(false)}
            >
              <ul className={style.colorOne + " text-black space-y-2 mt-4 rounded-lg text-lg p-5 "}>
                <li>
                  <Link href="/" className="block px-4 py-2 rounded hover:bg-orange-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2 rounded hover:bg-orange-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2 rounded hover:bg-orange-200">
                    FaQ
                  </Link>
                </li>
                <li>
                  {token || session ? (
                    <Link
                      href="/" 
                      className="px-4 py-2 border-2 border-black rounded hover:bg-orange-200 "
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Link>
                  ) : (
                    <Link
                      href={pathName == "/auth/signin" ? "/auth/signup" : "/auth/signin"}
                      className="flex items-center p-1 border-2 border-black rounded hover:bg-orange-200"
                    >
                      <div className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 0115 0" />
                        </svg>
                      </div>
                      {pathName == "/auth/signin" ? "Sign Up" : "Sign In"}
                    </Link>
                  )}
                </li>
              </ul>

            </div>
          )}
        </nav>
      </div>
    </header>
  )
}