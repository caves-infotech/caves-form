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
  const [numPages, setNumPages] = useState();
  const canvasRefs = useRef([]);

  // Intersection Observer to detect when canvas is in the viewport
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

    if (canvasRefs.current.length > 0) {
      canvasRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }

    return () => {
      if (canvasRefs.current.length > 0) {
        canvasRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  // Render PDF on the canvas when visible or when page changes
  useEffect(() => {
    const renderPdf = async () => {
      if (!isVisible) return;

      const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
      const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.mjs");
      pdfjs.GlobalWorkerOptions.workerSrc = "@/public/pdf.worker.mjs";

      const pdf = await pdfjs.getDocument(`/appendix/${page}.pdf`).promise;
      const numPages = pdf.numPages; // Get the total number of pages
      setNumPages(numPages);

      // Loop through each page and render it
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const pdfPage = await pdf.getPage(pageNum);
        const viewport = pdfPage.getViewport({ scale: 1.5 });

        // Use the refs to get the right canvas for each page
        const canvas = canvasRefs.current[pageNum - 1];

        // Check if canvas is defined before accessing getContext
        if (canvas) {
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          await pdfPage.render(renderContext).promise;
        }
      }
    };

    renderPdf();
  }, [isVisible, page]);

  const handlePageChange = (newPage) => {
    // Store the current scroll position
    const scrollY = window.scrollY;

    setPage(newPage);

    // Reset scroll position of the canvas to the top
    const canvasContainer = document.querySelector(".canvas-container");
    if (canvasContainer) {
      canvasContainer.scrollTop = 0; // Scroll to the top
    }

    // Restore the previous scroll position after rendering
    const restoreScrollPosition = () => {
      window.scrollTo(0, scrollY);
    };

    // Add an event listener to restore scroll position after rendering
    setTimeout(restoreScrollPosition, 0);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const setPageOfPdfForm = (item) => {
    setPage(item.no);
    setIsSidebarOpen(false);
  };

  const printPdf = () => {
    const iframe = document.createElement("iframe");
    const pdfUrl = `${window.location.origin}/appendix/${page}.pdf`
    iframe.src = pdfUrl;
    iframe.style.display = "none";  

    document.body.appendChild(iframe);

    iframe.onload = function () {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (error) {
        console.error('Print failed:', error);
        window.open(pdfUrl, '_blank')?.print();
      }
      // iframe.contentWindow.focus(); // Ensure iframe is focused
      // iframe.contentWindow.print(); // Print the PDF
      // iframe.contentWindow.onafterprint = () => {
      //   document.body.removeChild(iframe);
      // };
      setTimeout(() => {
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      }, 10000); 
    };
  }

  return (
    <>
      <div>
        <div
          className={
            style.colorSix +
            ` ${isVerticalNavbarOpen
              ? " left-64"
              : "-translate-x-[160px] left-20 "
            } transition-transform duration-500 ease-in-out flex  `
          }
        >
          <Heading text={"Appendix"} />

          <div className=" flex sm:w-[60%] h-[80vh] fixed sm:left-64 sm:mt-32 mt-20">
            <div className="overflow-y-auto ">
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
                        key={index}
                        className={` ${page == section.no ? " bg-slate-200 " : " "
                          } hover:bg-slate-200 transition-all duration-200 cursor-pointer text-sm rounded-xl`}
                        onClick={() => handlePageChange(section.no)}
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
                  className={` overflow-y-auto fixed mt-12 left-0 top-0 w-[90%] h-full bg-white shadow-lg transform transition-transform duration-300 z-30 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                            key={index}
                            className={` ${page == section.no ? " bg-slate-200 " : " "
                              } hover:bg-slate-200 transition-all duration-200 cursor-pointer text-sm rounded-xl`}
                            onClick={() => setPageOfPdfForm(section)}
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

            <div className="mt-5 sm:mt-0 w-[100%] h-[90%] flex flex-col overflow-y-auto">
              {[...Array(numPages)].map((_, index) => (
                <>
                  <canvas
                    key={index}
                    ref={(el) => (canvasRefs.current[index] = el)}
                    className=" w-full h-[180%]"
                  ></canvas>
                  {/* <button onClick={()=> (`${window.location.origin}/appendix/${page}.pdf`).print()} className=" absolute p-5 right-0 bottom-0 bg-blue-400 rounded-full "> */}
                  <button onClick={printPdf} className=" absolute p-5 right-0 bottom-0 bg-blue-400 rounded-full ">
                    Print
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
