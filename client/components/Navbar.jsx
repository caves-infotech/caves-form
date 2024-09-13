"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import style from "../app/style.module.css";

const Navbar = () => {
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? 'top-0' : 'top-1/2 -translate-y-1/2 bg-transparent'
      }`}
    >
      <div className="container mx-auto py-2">
        <ul className={ style.colorTwo + " flex justify-center space-x-10 py-5 text-xl font-bold rounded-full mx-32"}>
          <li>
            <Link href="form" className="hover:text-blue-500">
              Create Performa-I
            </Link>
          </li>
          <li>
          |
          </li>
          <li>
            <Link href="data/pfsi" className="hover:text-blue-500">
              Potential FSI
            </Link>
          </li>
          <li>
          |
          </li>
          <li>
            <Link href="data/parking" className="hover:text-blue-500">
              Parking
            </Link>
          </li>
          <li>
          |
          </li>
          <li>
            <Link href="data/bh" className="hover:text-blue-500">
              Building Height
            </Link>
          </li>
          <li>
          |
          </li>
          <li>
            <Link href="data/bupa" className="hover:text-blue-500">
              B/Up Area
            </Link>
          </li>
          <li>
          |
          </li>
          <li>
            <Link href="data/forms" className="hover:text-blue-500">
              Forms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
