"use client";

import Link from "next/link";
import style from "../app/style.module.css";
import { useGetContext } from "@/services/formStateContext";

const Navbar = ({ isScrolled }) => {
  const { setState } = useGetContext();
  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-700 ${
        isScrolled ? " sm:top-24 -top-20" : "top-[350px] bg-transparent"
      }`}
    >
      <div className="container py-2 mx-auto">
        <div
          className={
            style.colorThree + " sm:hidden sm:py-5 py-2 rounded-2xl mx-2"
          }
        >
          {/* <ul className={ style.colorFour + " flex flex-wrap rounded-2xl mx-3 "}> */}
          <ul className={" flex justify-between flex-wrap mx-4 "}>
            <li
              className={
                style.colorOne +
                " w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            >
              <Link
                href="/form"
                onClick={() => setState(1)}
                className="hover:text-slate-700"
              >
                Create Performa-I
              </Link>
            </li>
            <li
              className={
                style.colorOne +
                "  w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2  py-16"}`
              }
            >
              <Link
                href="/form"
                onClick={() => setState(2)}
                className="hover:text-slate-700"
              >
                Potential FSI
              </Link>
            </li>
            <li
              className={
                style.colorOne +
                "  w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            >
              <Link
                href="/form"
                onClick={() => setState(3)}
                className="hover:text-slate-700"
              >
                Parking
              </Link>
            </li>
            <li
              className={
                style.colorOne +
                "  w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            >
              {/* <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Height
              </Link>
            </li>
            <li
              className={
                style.colorOne +
                " w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            > */}
              <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Margin
              </Link>
            </li>
            <li
              className={
                style.colorOne +
                " w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            >
              <Link
                href="/form"
                onClick={() => setState(5)}
                className="hover:text-slate-700"
              >
                Forms
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex">
          <ul
            className={
              style.colorOne +
              " flex flex-col sm:flex-row justify-center space-x-10 py-5 text-xl font-bold rounded-full xl:mx-32 w-screen"
            }
          >
            <li>
              <Link
                href="/form"
                onClick={() => setState(1)}
                className="hover:text-slate-700"
              >
                Create Performa-I
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>
            <li>
              <Link
                href="/form"
                onClick={() => setState(2)}
                className="hover:text-slate-700"
              >
                Potential FSI
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>
            <li>
              <Link
                href="/form"
                onClick={() => setState(3)}
                className="hover:text-slate-700"
              >
                Parking
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>
            {/* <li>
              <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Height
              </Link>
            </li>
            <li className="hidden sm:flex">|</li> */}
            <li>
              <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Margin
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>
            <li>
              <Link
                href="/form"
                onClick={() => setState(5)}
                className="hover:text-slate-700"
              >
                Forms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
