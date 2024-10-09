"use client";
import React, { useState, useEffect, useRef } from "react";
import { udcprIndex } from "@/services/formData";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";

export default function PdfForms() {
  const { isVerticalNavbarOpen } = useGetContext();
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
    setPage(udcprIndex[index].sections[0].page);
  };

  const setPageAndTitle = (item) => {
    setPage(item.page);
    setTitle(item.title);
  }

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
                ? "translate-x-0 left-64"
                : "-translate-x-[160px] left-20 "
            } transition-transform duration-500 ease-in-out flex pt-20 `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className="flex w-[80%] h-[80vh] fixed mt-20 right-16">
            <div
              className={
                style.colorFive +
                `  w-[60%] transform overflow-y-auto
                   z-10 shadow-xl`
              }
            >
              <table className="mx-5">
                <tbody>
                  {udcprIndex.map((section, index) => (
                    <>
                      <tr
                        className="hover:bg-slate-400 bg-slate-200 transition-all duration-200 cursor-pointer text-sm border-b border-gray-800 "
                        onClick={() => toggleChapter(index)}
                      >
                        {/* Adding 'no' column */}
                        <td className="  w-32 p-3">{section.chapter}</td>
                        <td className=" p-3">{section.title}</td>
                        <td className="p-3">{section.sections[0].page}</td>
                        <td>
                          {expandedChapter === index ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                            </svg>
                          )}
                        </td>
                      </tr>

                      {expandedChapter === index && section.sections && (
                        <tr>
                          <td colSpan={3}>
                            <table className="w-[95%] border-collapse ml-5 ">
                              <tbody>
                                {section.sections.map((subPoint, subIndex) => (
                                  <tr
                                    key={subIndex}
                                    onClick={() => setPageAndTitle(subPoint)}
                                    className={` ${ title == subPoint.title ? "bg-gray-400" : ""} hover:bg-slate-200 transition-all duration-200 border-b border-gray-400 `}
                                  >
                                    <td className="p-2 text-xs">
                                      {subPoint.subchapter}
                                    </td>
                                    <td className=" p-2 text-xs">
                                      {subPoint.title}
                                    </td>
                                    <td className=" p-2 text-xs ">
                                      {subPoint.page}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Iframe Container */}
            <div
              ref={iframeRef}
              className="w-[80%] relative"
            >
              {isVisible && (
                <iframe
                  id="pdf-frame"
                  key={page}
                  // src={`/udcprPdfPages/${page}.pdf?#toolbar=0`}
                  src={`/udcpr1.pdf?#page=${page}&toolbar=0`}
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
