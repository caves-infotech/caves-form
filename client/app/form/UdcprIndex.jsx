"use client";
import React, { useState, useEffect, useRef } from "react";
import { udcprIndex } from "@/services/formData";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";

export default function PdfForms() {

  const [expandedChapter, setExpandedChapter] = useState(null);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
  };

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
            ` flex pt-20 `
          }
        >
          <Heading text={"UDCPR Index"} />

          <div className="flex w-[80%] fixed mt-16 right-16">
            <div className="w-[40%] h-screen overflow-y-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {udcprIndex.map((section, index) => (
                    <React.Fragment key={index}>
                      <tr
                        className="hover:bg-slate-400 bg-slate-200 transition-all duration-200 cursor-pointer text-sm border-b border-gray-600 "
                        onClick={() => toggleChapter(index)}
                      >
                        {/* Adding 'no' column */}
                        <td className=" p-3">
                          {section.no}
                        </td>
                        <td className=" p-3">
                          {section.title}
                        </td>
                        <td className="p-3">
                          {section.page}
                        </td>
                      </tr>

                      {expandedChapter === index && section.subPoints && (
                        <tr>
                          <td colSpan={3}>
                            <table className="w-[95%] border-collapse ml-5 ">
                              <tbody>
                                {section.subPoints.map((subPoint, subIndex) => (
                                  <tr
                                    key={subIndex}
                                    className="hover:bg-slate-200 transition-all duration-200 border-b border-gray-600 "
                                    onClick={() => setPage(subPoint.page)}
                                  >
                                    <td className="p-2 text-xs">
                                      {subPoint.no}
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
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Iframe Container */}
            <div
              ref={iframeRef}
              style={{ width: "80%", height: "85vh", position: "relative" }}
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
