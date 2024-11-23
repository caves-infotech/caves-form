"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";
import { udcprIndex } from "@/services/formData";

// Function to load PDF from cache or network
const getPdf = async () => {
  const cache = await caches.open("pdf-cache"); // Open a cache named 'pdf-cache'
  const cachedResponse = await cache.match("/udcpr1.pdf");
  if (cachedResponse) {
    console.log("Using cached PDF");
    return cachedResponse.arrayBuffer();
  } else {
    console.log("Fetching PDF from network");
    const response = await fetch("/udcpr1.pdf");
    cache.put("/udcpr1.pdf", response.clone());
    return response.arrayBuffer();
  }
};

// Function to initialize PDF.js and load the document
const loadPdf = async () => {
  try {
    const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.mjs");
    const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc = "../../public/pdf.worker.mjs";

    const pdfData = await getPdf();
    return pdfjs.getDocument({ data: pdfData }).promise;
  } catch (error) {
    console.error("Error loading PDF.js:", error);
  }
};

export default function UdcprIndex() {
  const { isVerticalNavbarOpen } = useGetContext();
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [title, setTitle] = useState("");
  const canvasRef = useRef(new Map());
  const pdfRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const loadedPages = useRef(new Map()); // Cache rendered pages
  const [currentPage, setCurrentPage] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [firstMatchIndex, setFirstMatchIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredResults = udcprIndex
    .map((item) => {
      const chapterMatch = item.chapter
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const titleMatch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const filteredSections = item.sections.filter((subchapter) =>
        subchapter.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (chapterMatch || titleMatch || filteredSections.length > 0) {
        return { ...item, sections: filteredSections };
      }
      return null;
    })
    .filter(Boolean);

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    if (filteredResults.length > 0 && firstMatchIndex === null) {
      setFirstMatchIndex(0);
    }
  }, [filteredResults]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const loadPdfDocument = async () => {
      setLoading(true);
      try {
        const loadedPdf = await loadPdf();
        pdfRef.current = loadedPdf;
        setTotalPages(loadedPdf.numPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
      setLoading(false);
    };
    loadPdfDocument();
  }, []);

  const renderPage = useCallback(async (pageNum) => {
    if (!pdfRef.current || loadedPages.current.has(pageNum)) return;

    const page = await pdfRef.current.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = canvasRef.current.get(pageNum);
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    loadedPages.current.set(pageNum, true); // Cache rendered page
    setLoading(false);
  }, []);

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      renderPage(i);
    }
  }, [totalPages, renderPage]);

  const toggleChapter = (index, pageNumber) => {
    setExpandedChapter(expandedChapter === index ? null : index);
    setCurrentPage(pageNumber);
  };

  const setPageAndTitle = (item) => {
    setTitle(item.title);
    setCurrentPage(item.page);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (currentPage !== null) {
      const canvas = canvasRef.current.get(currentPage);
      if (canvas) {
        const canvasTop = canvas.offsetTop;
        document
          .getElementById("pdfContainer")
          .scrollTo({ top: canvasTop, behavior: "smooth" });
      }
    }
  }, [currentPage]);

  return (
    <div>
      <div
        className={`${style.colorSix} ${
          isVerticalNavbarOpen
            ? "sm:left-64"
            : "sm:-translate-x-[160px] sm:left-20"
        } transition-all duration-500 ease-in-out flex`}
      >
        <Heading
          isVerticalNavbarOpen={isVerticalNavbarOpen}
          text={"UDCPR Index"}
        />
        <div className="flex xl:w-[70%] lg:w-[80%] h-[80vh] fixed sm:left-64 sm:top-5 top-20 sm:mt-32 mt-20">
          <div className="overflow-y-auto sm:w-[50%]">
            <div
              className={
                style.colorFive +
                ` transform overflow-y-auto
               z-10 shadow-xl sm:flex hidden`
              }
            >
              <table className="mx-5 my-2 w-full">
                <tbody>
                  <tr>
                    <td colSpan={4}>
                      <input
                        type="text"
                        placeholder="Search by title, chapter, or subchapter"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-2 border-gray-400 p-2 w-full rounded-xl mb-4"
                      />
                    </td>
                  </tr>
                  {filteredResults.map((section, index) => (
                    <>
                      <tr
                        className="hover:bg-slate-400 bg-slate-200 transition-all duration-200 cursor-pointer text-sm border-b border-gray-800 "
                        onClick={() =>
                          toggleChapter(index, section?.sections[0]?.page)
                        }
                      >
                        <td className=" w-32 p-3">
                          {highlightText(section?.chapter, searchQuery)}
                        </td>
                        <td className=" p-3">
                          {highlightText(section?.title, searchQuery)}
                        </td>
                        <td className="p-3">{section?.sections[0]?.page}</td>
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

                      {expandedChapter === index && section?.sections && (
                        <tr>
                          <td colSpan={3}>
                            <table className="w-[95%] border-collapse ml-5 ">
                              <tbody>
                                {section.sections.map((subPoint, subIndex) => (
                                  <tr
                                    key={subIndex}
                                    onClick={() => setPageAndTitle(subPoint)}
                                    className={` ${
                                      title == subPoint?.title
                                        ? "bg-gray-400"
                                        : ""
                                    } hover:bg-slate-200 transition-all duration-200 border-b border-gray-400 `}
                                  >
                                    <td className="p-2 text-xs">
                                      {highlightText(
                                        subPoint?.subchapter,
                                        searchQuery
                                      )}
                                    </td>
                                    <td className=" p-2 text-xs">
                                      {highlightText(
                                        subPoint?.title,
                                        searchQuery
                                      )}
                                    </td>
                                    <td className=" p-2 text-xs ">
                                      {subPoint?.page}
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

            <div className=" sm:hidden flex">
            <button
                onClick={toggleSidebar}
                className="p-2 fixed top-[130px] left-4 z-20 "
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
                className={` overflow-y-auto fixed mt-12 left-0 top-20 w-[90%] h-full bg-white shadow-lg transform transition-transform duration-300 z-30 ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="absolute right-2 p-1">
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
                  <table className="mx-2 my-2 text-xs">
                    <tbody>
                      <tr>
                        <td
                          colSpan={2}
                        >
                          <input
                            type="text"
                            placeholder="Search by title, chapter, or subchapter"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border-2 border-gray-400 p-2 w-full rounded-xl mb-4"
                          />
                        </td>
                      </tr>
                      {filteredResults.map((section, index) => (
                        <>
                          <tr
                            className="hover:bg-slate-400 bg-slate-200 transition-all duration-200 cursor-pointer text-sm border-b border-gray-800 "
                            onClick={() =>
                              toggleChapter(index, section?.sections[0]?.page)
                            }
                          >
                            <td className=" w-32 p-3">
                              {highlightText(section?.chapter, searchQuery)}
                            </td>
                            <td className=" p-3">
                              {highlightText(section?.title, searchQuery)}
                            </td>
                            <td className="p-3">
                              {section?.sections[0]?.page}
                            </td>
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

                          {expandedChapter === index && section?.sections && (
                            <tr>
                              <td colSpan={3}>
                                <table className="w-[95%] border-collapse ml-5 ">
                                  <tbody>
                                    {section.sections.map(
                                      (subPoint, subIndex) => (
                                        <tr
                                          key={subIndex}
                                          onClick={() =>
                                            setPageAndTitle(subPoint)
                                          }
                                          className={` ${
                                            title == subPoint?.title
                                              ? "bg-gray-400"
                                              : ""
                                          } hover:bg-slate-200 transition-all duration-200 border-b border-gray-400 `}
                                        >
                                          <td className="p-2 text-xs">
                                            {highlightText(
                                              subPoint?.subchapter,
                                              searchQuery
                                            )}
                                          </td>
                                          <td className=" p-2 text-xs">
                                            {highlightText(
                                              subPoint?.title,
                                              searchQuery
                                            )}
                                          </td>
                                          <td className=" p-2 text-xs ">
                                            {subPoint?.page}
                                          </td>
                                        </tr>
                                      )
                                    )}
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
              </div>
            </div>
          </div>

          <div
            className="relative mt-5 sm:mt-0 sm:w-[50%] flex flex-col overflow-y-auto"
            id="pdfContainer"
          >
            {loading && (
              <div className="text-center flex items-center justify-center sm:absolute  w-screen sm:w-full h-full">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 animate-spin text-gray-200 fill-orange-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <canvas
                  key={pageNum}
                  ref={(el) => canvasRef.current.set(pageNum, el)}
                  className={`${loading ? "hidden" : ""} w-full h-full mb-5`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
