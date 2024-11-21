"use client";

// import Link from "next/link";
import style from "@/app/style.module.css";
import { useGetContext } from "@/services/formStateContext";

const FormsTopbar = () => {
    const { setState, state } = useGetContext();
    return (
        <nav
            className={` w-full z-40 backdrop-blur-md transition-all duration-700 fixed top-14 sm:hidden `}
        >
            <div className="container mx-auto">
                <div
                    className={
                        style.colorThree +
                        " flex items-center justify-center rounded-2xl m-1 p-1"
                    }
                >
                    <ul className={"flex flex-wrap justify-between px-1 mx-1"}>
                        <li
                            className={
                                `${state === 6 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`
                            }
                        >
                            <button
                                onClick={() => setState(6)}
                                className="hover:text-slate-700"
                            >
                                UDCPR Index
                            </button>
                        </li>
                        <li
                            className={
                                `${state === 5 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`

                            }
                        >
                            <button
                                onClick={() => setState(5)}
                                className="hover:text-slate-700"
                            >
                                Appendix
                            </button>
                        </li>
                        <li
                            className={
                                `${state === 2 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`

                            }
                        >
                            <button
                                onClick={() => setState(2)}
                                className="hover:text-slate-700"
                            >
                                Potential FSI
                            </button>
                        </li>
                        <li
                            className={
                                `${state === 3 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`

                            }
                        >
                            <button
                                onClick={() => setState(3)}
                                className="hover:text-slate-700"
                            >
                                Parking
                            </button>
                        </li>
                        <li
                            className={
                                `${state === 4 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`

                            }
                        >
                            <button
                                onClick={() => setState(4)}
                                className="hover:text-slate-700"
                            >
                                Building Margin
                            </button>
                        </li>
                        <li
                            className={
                                `${state === 1 ? "bg-white" : style.colorOne} px-1 my-1 transition-all duration-700 rounded-full`

                            }
                        >
                            <button
                                onClick={() => setState(1)}
                                className="hover:text-slate-700"
                            >
                                Create Performa-I
                            </button>
                        </li>

                        {/* <li
              className={
                style.colorOne +
                "  w-[48%] p-1 transition-all duration-700 rounded-md my-1 " +
                `${isScrolled ? " " : " rounded-xl my-2 py-16"}`
              }
            >
              <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Height
              </Link>
            </li> */}
                    </ul>
                </div>

                {/* <div className="hidden sm:flex md:hidden lg:flex">
          <ul
            className={
              style.colorOne +
              " flex flex-row justify-center space-x-10 py-5 text-xl font-bold rounded-full xl:mx-32 w-screen"
            }
          >
            <li>
              <Link
                href="/form"
                onClick={() => setState(5)}
                className="hover:text-slate-700"
              >
                Appendix
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>

            <li>
              <Link
                href="/form"
                onClick={() => setState(6)}
                className="hover:text-slate-700"
              >
                UDCPR Index
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
            <li>
              <Link
                href="/form"
                onClick={() => setState(4)}
                className="hover:text-slate-700"
              >
                Building Height
              </Link>
            </li>
            <li className="hidden sm:flex">|</li>
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
                onClick={() => setState(1)}
                className="hover:text-slate-700"
              >
                Create Performa-I
              </Link>
            </li>
          </ul>
        </div> */}
            </div>
        </nav>
    );
};

export default FormsTopbar;
