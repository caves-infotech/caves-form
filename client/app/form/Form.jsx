"use client";
import Performa from "./Performa";
import PotentialFsi from "./PotentialFsi";
import PdfForms from "./PdfForms";
import Parking from "./Parking";
import BuildUpArea from "./BuildUpArea";
import BuildingHeight from "./BuildingHeight";
import { useState, useEffect } from "react";
import { getToken } from "@/services/auth";
import { useSession } from "next-auth/react";
import style from "../style.module.css";
import Header from "@/components/Header";
import VerticalNavbar from "@/components/VerticalNavbar";
import { useGetContext } from "@/services/formStateContext";

export default function Form() {
  const { state, setState } = useGetContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = getToken();
  const { data: session } = useSession();

  useEffect(() => {
    if (token || session) {
      setLoading(false);
    } else {
      redirect("/auth/signin");
    }
  }, []);

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
    <div className="flex ">
      <Header isScrolled={isScrolled} />

      <VerticalNavbar setState={setState} />

      {!loading && 
        <div>
          {state == 1 && (
          <Performa />
          )} {state == 2 && (
          <PotentialFsi />
          )} {state == 3 && (
          <Parking />
          )} {state == 4 && (
          <BuildingHeight />
          )} {state == 5 && (
          <BuildUpArea />
          )} {state == 6 && (
          <PdfForms />
          )}
        </div>
      }

      {isScrolled && (
        <button
          className={
            style.colorOne +
            " fixed text-2xl bottom-10 right-8 p-5 rounded-full"
          }
          onClick={scrollToTop}
        >
          ⇑
        </button>
      )}
    </div>
  );
}
