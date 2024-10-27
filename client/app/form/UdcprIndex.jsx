"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";
import Pdfview from "@/components/details/udcprIndex/Pdfview";
import Pdfsidebar from "@/components/details/udcprIndex/Pdfsidebar";

export default function PdfForms() {
  const { isVerticalNavbarOpen } = useGetContext();
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  // Intersection Observer to detect when iframe is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={
            style.colorSix +
            ` ${
              isVerticalNavbarOpen
                ? " sm:left-64"
                : "sm:-translate-x-[160px] sm:left-20 "
            } 
            transition-all duration-500 ease-in-out flex `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className=" flex sm:w-[80%] h-[80vh] fixed sm:left-64 sm:mt-32 mt-20">
            <div
              className={
                style.colorFive +
                `  sm:w-[60%] sm:transform sm:overflow-y-auto
                   sm:z-10 sm:shadow-xl `
              }
            >
            <Pdfsidebar setPage={setPage} />
            </div>

            <div
              ref={iframeRef}
              className="sm:w-[80%] w-screen sm:relative  sm:mt-0 mt-10"
            >
              <Pdfview isVisible={isVisible} page={page} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
