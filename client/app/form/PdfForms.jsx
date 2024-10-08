"use client";
import React, { useState, useEffect, useRef } from "react";
import { appendix } from "@/services/formData";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";

export default function PdfForms() {
  const { isSidebarOpen, setIsSidebarOpen, isVerticalNavbarOpen } =
    useGetContext();
  const [page, setPage] = useState("01");
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
            ` ${isVerticalNavbarOpen
              ?
              "translate-x-0 left-64"
              :
              "-translate-x-[160px] left-20 "
            } transition-transform duration-500 ease-in-out flex pt-20 `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className="flex w-[80%] h-[84vh] fixed mt-20 right-16">
            <div
              className={
                style.colorFive +
                `  w-80 transform overflow-y-auto
                   z-10 shadow-xl`
              }
            >

              <table className=" mx-5 ">
                <tbody>
                  {appendix.map((section, index) => (
                    // <React.Fragment key={index}>
                    <tr
                      className="hover:bg-slate-200 transition-all duration-200 cursor-pointer text-sm rounded-xl"
                      onClick={() => setPage(section.no)}
                    >
                      <td className=" p-3">
                        {section.no}
                      </td>
                      <td className=" p-3">
                        {section.title}
                      </td>
                    </tr>
                    // </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              ref={iframeRef}
              className="w-[60%] relative"
            >
              {isVisible && (
                <iframe
                  id="pdf-frame"
                  key={page}
                  src={`/appendix/${page}.pdf?#toolbar=0`}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  title="PDF Viewer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
