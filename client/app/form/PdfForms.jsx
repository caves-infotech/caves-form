"use client";
import React, { useState, useEffect, useRef } from "react";
import { appendix } from "@/services/formData";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";

export default function PdfForms() {
  const { isVerticalNavbarOpen } = useGetContext();
  const [page, setPage] = useState("01");
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


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
            } transition-transform duration-500 ease-in-out flex  `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className=" flex sm:w-[80%] h-[80vh] fixed sm:left-64 sm:mt-32 mt-20">
            <div className="overflow-y-auto">
              <div
                className={
                  style.colorFive +
                  ` w-full transform overflow-y-auto
                   z-10 shadow-xl sm:flex hidden`
                }
              >
                <table className=" mx-5 ">
                  <tbody>
                    {appendix.map((section, index) => (
                      <tr
                        className={` ${
                          page == section.no ? " bg-slate-200 " : " "
                        } hover:bg-slate-200 transition-all duration-200 cursor-pointer text-sm rounded-xl`}
                        onClick={() => setPage(section.no)}
                      >
                        <td className=" p-3">{section.no}</td>
                        <td className=" p-3">{section.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" sm:hidden flex">
                <button
                  onClick={toggleSidebar}
                  className="p-2 fixed top-[67px] left-4 z-20 "
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>

                <div
                  className={` overflow-y-auto fixed mt-12 left-0 top-0 w-[90%] h-full bg-white shadow-lg transform transition-transform duration-300 z-30 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <div className="flex items-center justify-end p-5">
                    <button onClick={() => setIsSidebarOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="45px"
                        viewBox="0 -960 960 960"
                        width="45px"
                      >
                        <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-2 list-disc ">
                    <table className=" mx-5 text-xs">
                      <tbody>
                        {appendix.map((section, index) => (
                          <tr
                            className={` ${
                              page == section.no ? " bg-slate-200 " : " "
                            } hover:bg-slate-200 transition-all duration-200 cursor-pointer text-sm rounded-xl`}
                            onClick={() => setPage(section.no)}
                          >
                            <td className=" p-3">{section.no}</td>
                            <td className=" p-3">{section.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={iframeRef}
              className=" w-screen sm:relative  sm:mt-0 mt-10"
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
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
