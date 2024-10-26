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

  // search in udcpr

  return (
    <>
      <div>
        <div
          className={
            style.colorSix +
            ` ${
              isVerticalNavbarOpen
                ? " left-64"
                : "-translate-x-[160px] left-20 "
            } 
            transition-all duration-500 ease-in-out flex pt-20 `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className="flex w-[80%] h-[80vh] fixed mt-20 left-64">
            <div
              className={
                style.colorFive +
                `  w-[60%] transform overflow-y-auto
                   z-10 shadow-xl`
              }
            >
              <Pdfsidebar setPage={setPage} />
            </div>

            <div ref={iframeRef} className="w-[80%] relative">
              <Pdfview
                isVisible={isVisible}
                page={page}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
