import Image from "next/image";
import Link from "next/link";
import style from "../app/style.module.css";
import { signOut } from "next-auth/react";
import { getToken, removeToken } from "@/services/auth";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import api from "@/services/axios";
import { Marck_Script } from "next/font/google";
import { useAuth } from "@/services/authContext";
import SignUpPopup from "@/components/auth/Signup";
import SignInPopup from "@/components/auth/Signin";

const marckScript = Marck_Script({
  weight: "400", // This font only has 400 weight
  subsets: ["latin"], // Define the subset you want to use
  display: "swap", // Optional: adds swap behavior for better performance
});

export default function Header({ isScrolled }) {
  const { data: session } = useSession();
  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { isSignedIn, setIsSignedIn, user } = useAuth();
  const [openSigninPopup, setOpenSigninPopup] = useState(false);
  const [isSignin, setIsSignin] = useState(true);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsProfileOpen(false);
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
      setIsProfileOpen(false);
    }
  }, [isScrolled]);

  const handleSignOut = async () => {
    if (token) {
      try {
        const response = await api.post("/user/signout");
        removeToken();
        setToken("");
        setIsSignedIn(false);
        toast.info(response.data.message || "User Signout Successfully");
      } catch (err) {
        toast.info(err?.response?.data?.message || "Problem in signout");
      }
    } else if (session) {
      signOut("google");
      setIsSignedIn(false);
      toast.info("User Signout Successfully");
    }
  };

  function handleOpenAndChangeSignin() {
    setOpenSigninPopup(true);
    setIsSignin(!isSignin);
  }

  return (
    <>
      <header
        className={
          style.colorThree +
          " z-40 text-white p-3 fixed w-full items-center justify-center"
        }
      >
        <div className=" max-w-7xl mx-auto flex items-center justify-between ">
          <Link
            onClick={() => setOpenSigninPopup(false)}
            href="/"
            className="flex items-center justify-center"
          >
            <h1 className=" text-3xl font-bold text-white mr-1">UDCPR</h1>
            <span
              className={
                marckScript.className + " text-xl -mb-2 text-[#ffca57]"
              }
            >
              simplified
            </span>
          </Link>
          <nav ref={sidebarRef}>
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>

            <ul className="items-center justify-end hidden space-x-3 text-white sm:flex">
              <li>
                <Link
                  onClick={() => setOpenSigninPopup(false)}
                  href="/"
                  className="px-4 py-1 flex gap-1 rounded hover:bg-slate-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  {/* <p>Home</p> */}
                </Link>
              </li>
              {/* <li>
              <Link
                href="/about"
                className="px-4 py-1 flex gap-1 rounded hover:bg-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <p>About</p>
              </Link>
            </li> */}
              <li>
                <Link
                  href="/contact"
                  className="px-4 py-1 flex gap-1 rounded-lg hover:bg-slate-800 border-2 border-yellow-500"
                >
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg> */}
                  <p className=" text-sm">CONTACT US</p>
                </Link>
              </li>
              <li>
                {isSignedIn ? (
                  <>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="text-black bg-yellow-500 font-semibold rounded-lg px-2 py-1 text-center justify-center inline-flex gap-2 items-center "
                    >
                      {user?.avatar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22px"
                          viewBox="0 -960 960 960"
                          width="22px"
                          fill="#000000"
                        >
                          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22px"
                          viewBox="0 -960 960 960"
                          width="22px"
                          fill="#000000"
                        >
                          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                      )}
                      {user?.name == null ? "User" : user.name}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {isProfileOpen && (
                      <div
                        onClick={() => setIsProfileOpen(false)}
                        className="w-44 backdrop-blur-sm items-center text-center absolute mt-1 z-10 text-gray-800 bg-gray-100 divide-y divide-gray-800 rounded-lg shadow "
                      >
                        <ul className=" py-2 text-sm ">
                          <li>
                            <Link
                              href="/user"
                              className="block px-4 py-2 hover:bg-gray-300 "
                            >
                              My Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/user"
                              className="block px-4 py-2 hover:bg-gray-300 "
                            >
                              My Enquiries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/user"
                              className="block px-4 py-2 hover:bg-gray-300"
                            >
                              Profile
                            </Link>
                          </li>
                        </ul>
                        <div className="py-2">
                          <button
                            onClick={handleSignOut}
                            className="px-4 py-1 dark:hover:bg-gray-300 rounded"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={handleOpenAndChangeSignin}
                    className={` ${
                      isSignin ? " px-2 " : " px-3 "
                    } py-1 bg-[#F0A500] hover:bg-[#ffffff] text-black font-bold rounded flex items-center gap-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 -960 960 960"
                      width="22px"
                      fill="#000000"
                    >
                      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                    {isSignin ? "Signup" : "Login"}
                  </button>
                )}
              </li>
            </ul>

            {isOpen && (
              <div
                className={` shadow-xl font-semibold fixed z-50 right-0 mr-2 text-center`}
                onClick={() => setIsOpen(false)}
              >
                <ul
                  className={
                    style.colorOne +
                    " text-black space-y-2 mt-4 rounded-lg text-lg p-6 "
                  }
                >
                  <li>
                    <Link
                      href="/"
                      className="block px-6 py-2 rounded hover:bg-orange-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block px-6 py-2 rounded hover:bg-orange-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block px-6 py-2 rounded hover:bg-orange-200"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    {token || session ? (
                      <Link
                        href="/"
                        className="px-6 py-2 border-2 border-black rounded hover:bg-orange-200 "
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Link>
                    ) : (
                      <Link
                        onClick={handleOpenAndChangeSignin}
                        href="/"
                        className={` ${
                          isSignin ? " px-2 " : " px-3 "
                        } py-1 bg-[#F0A500] hover:bg-[#ffffff] text-black font-bold rounded flex items-center gap-1`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22px"
                          viewBox="0 -960 960 960"
                          width="22px"
                          fill="#000000"
                        >
                          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                        {isSignin ? "Sign Up" : "Sign In"}
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>
      {openSigninPopup && (
        <>
          {isSignin ? (
            <SignInPopup setIsSignin={setIsSignin} />
          ) : (
            <SignUpPopup setIsSignin={setIsSignin} />
          )}
        </>
      )}
    </>
  );
}
