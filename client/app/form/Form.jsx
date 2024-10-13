"use client";
import Performa from "./Performa";
import PotentialFsi from "./PotentialFsi";
import PdfForms from "./PdfForms";
import Parking from "./Parking";
import BuildingMargin from "./BuildingMargin";
import UdcprIndex from "./UdcprIndex";
import { useState, useEffect } from "react";
import { getToken } from "@/services/auth";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import Header from "@/components/Header";
import VerticalNavbar from "@/components/verticalNavbar/VerticalNavbar";
import { useGetContext } from "@/services/formStateContext";
import { redirect } from "next/navigation";
import { useAuth } from "@/services/authContext";
import SignUpPopup from "@/components/auth/Signup";

export default function Form() {
  const { state } = useGetContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = getToken();
  const { data: session } = useSession();

  // const { isSignedIn } = useAuth();
  // useEffect(() => {
  //   if (token || session) {
  //     setLoading(false);
  //   } else {
  //     redirect("/auth/signin");
  //   }
  // }, []);

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
    <div >
      <Header isScrolled={isScrolled} />

      <VerticalNavbar />

       {token || session && 
        <div>
          {state == 1 && (
          <Performa />
          )} {state == 2 && (
          <PotentialFsi />
          )} {state == 3 && (
          <Parking />
          )}
          {/* {state == 4 && (
          <BuildingHeight />
          )}  */}
          {state == 4 && (
          <BuildingMargin />
          )} {state == 5 && (
          <PdfForms />
          )} {state == 6 && (
          <UdcprIndex />
          )}
        </div>
      } 

      {isScrolled && (
        <div className="fixed bottom-5 right-5 sm:right-8 ">
        <button
          className={
            style.colorThree + " animate-bounce hover:bg-[#F0A500] p-2 sm:p-5 rounded-full"
          }
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 -960 960 960"
            width="36px"
            fill="#FFFFFF"
          >
            <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
