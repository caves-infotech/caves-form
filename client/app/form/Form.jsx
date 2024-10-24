"use client";
import Performa from "./Performa";
import PotentialFsi from "./PotentialFsi";
import PdfForms from "./PdfForms";
import Parking from "./Parking";
import BuildingMargin from "./BuildingMargin";
import UdcprIndex from "./UdcprIndex";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import VerticalNavbar from "@/components/verticalNavbar/VerticalNavbar";
import { useGetContext } from "@/services/formStateContext";
import { useAuth } from "@/services/authContext";
import SignUpPopup from "@/components/auth/Signup";
import SignInPopup from "@/components/auth/Signin";
import GoTopBouncer from "@/components/GoTopBouncer";

export default function Form() {
  const { state } = useGetContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignin, setIsSignin] = useState(true);
  const { isSignedIn } = useAuth();
  const [isSignedinWhenSubmit, setIssignedinWhenSubmit] = useState(true);

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
    <div>
      <Header
        isScrolled={isScrolled}
        isSignin={isSignin}
        setIsSignin={setIsSignin}
      />

      <VerticalNavbar />

      <div>
        {state == 1 && <Performa setIssignedinWhenSubmit={setIssignedinWhenSubmit}/>}
        {state == 2 && <PotentialFsi setIssignedinWhenSubmit={setIssignedinWhenSubmit}/>}
        {state == 3 && <Parking setIssignedinWhenSubmit={setIssignedinWhenSubmit}/>}
        {state == 4 && <BuildingMargin setIssignedinWhenSubmit={setIssignedinWhenSubmit}/>} 
        {state == 5 && <PdfForms />}
        {state == 6 && <UdcprIndex />}
      </div>

      {!isSignedinWhenSubmit && (
        <>
          {isSignin ? (
            <SignInPopup setIsSignin={setIsSignin} />
          ) : (
            <SignUpPopup setIsSignin={setIsSignin} />
          )}
        </>
      )}

      {isScrolled && state == 1 && <GoTopBouncer scrollToTop={scrollToTop} />}
    </div>
  );
}
