"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "../style.module.css";
import Heading from "@/components/details/Heading";
import { useGetContext } from "@/services/formStateContext";
import { udcprIndex } from "@/services/formData";

export default function PdfForms() {
  const { isVerticalNavbarOpen } = useGetContext();
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [pagesToLoad, setPagesToLoad] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [title, setTitle] = useState("");
  const canvasRef = useRef(new Map());
  const pdfRef = useRef(null);
  const isRendering = useRef(new Map());
  const [isJumpToPage, setIsJumpToPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadedPages, setLoadedPages] = useState(new Set()); // Track loaded pages

  const [searchQuery, setSearchQuery] = useState("");
  const [firstMatchIndex, setFirstMatchIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      loadPdf("/udcpr1.pdf");
    } catch (error) {
      console.log("Error in loading pdf", error);
    }
  });

  const loadPdf = async (url) => {
    const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
    const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc = "@/public/pdf.worker.mjs";

    const loadingTask = pdfjs.getDocument(url);
    loadingTask.promise.then(
      async (loadedPdf) => {
        pdfRef.current = loadedPdf;
        setTotalPages(loadedPdf.numPages);
        // Initialize with the first page
        setPagesToLoad([1]);
        await renderPages([1]); // Render the first page initially
      },
      (reason) => {
        console.error("Error loading PDF: ", reason);
      }
    );
  };

  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
    setPagesToLoad([udcprIndex[index].sections[0].page]);
  };

  const setPageAndTitle = (item) => {
    setTitle(item.title);
    const allPages = Array.from({ length: item.page }, (_, i) => i + 1);
    setPagesToLoad(allPages);
    setIsJumpToPage(true);
  };

  useEffect(() => {
    loadPdf("/udcpr1.pdf");
  }, []);

  useEffect(() => {
    if (isJumpToPage) {
      const renderAndScroll = async () => {
        setLoading(true); // Start loading
        await renderPages(pagesToLoad);
        const lastPageCanvas = canvasRef.current.get(
          pagesToLoad[pagesToLoad.length - 1]
        );
        if (lastPageCanvas) {
          lastPageCanvas.scrollIntoView({ behavior: "smooth" });
        }
        setLoading(false); // End loading
        setIsJumpToPage(false);
      };
      renderAndScroll();
    }
  }, [isJumpToPage, pagesToLoad]);

  const renderPages = async (pageNumbers) => {
    await Promise.all(
      pageNumbers.map(async (pageNum) => {
        if (
          !pdfRef.current ||
          isRendering.current.get(pageNum) ||
          loadedPages.has(pageNum)
        )
          return; // Check if already loaded
        isRendering.current.set(pageNum, true);
        loadedPages.add(pageNum); // Add to loaded pages

        try {
          const page = await pdfRef.current.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.5 });
          let canvas = canvasRef.current.get(pageNum);

          if (!canvas) {
            canvas = document.createElement("canvas");
            canvasRef.current.set(pageNum, canvas);
            document.getElementById("pdfContainer").appendChild(canvas);
          }

          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
        } catch (error) {
          console.error("Error rendering page: ", error);
        } finally {
          isRendering.current.set(pageNum, false);
        }
      })
    );
    setLoadedPages(new Set(loadedPages)); // Update the state to trigger a re-render if necessary
  };

  const handleScroll = () => {
    const container = document.getElementById("pdfContainer");
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;

    // Load the next page when scrolling to the bottom
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      const nextPage = Math.min(
        pagesToLoad.length ? Math.max(...pagesToLoad) + 1 : 1,
        totalPages
      );
      if (!pagesToLoad.includes(nextPage)) {
        setPagesToLoad((prev) => [...prev, nextPage]);
        renderPages([nextPage]);
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById("pdfContainer");
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [pagesToLoad]);

  useEffect(() => {
    if (pagesToLoad.length > 0) {
      renderPages(pagesToLoad);
    }
  }, [pagesToLoad]);

  const filteredResults = udcprIndex
    .map((item) => {
      const chapterMatch = item.chapter
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const titleMatch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Filter sections (subchapters)
      const filteredSections = item.sections.filter((subchapter) =>
        subchapter.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Return item only if there is a chapter match, title match, or if there are matching sections
      if (chapterMatch || titleMatch || filteredSections.length > 0) {
        return {
          ...item,
          sections: filteredSections, // Only include matched sections
        };
      }
      return null; // Exclude this item if no matches
    })
    .filter(Boolean); // Remove null values from the array

  const highlightText = (text, search) => {
    if (!search) return text; // Return text if search is empty
    const regex = new RegExp(`(${search})`, "gi"); // Create regex for case-insensitive search
    const parts = text.split(regex); // Split the text by the search term

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
    // Automatically open the first matching chapter when searchQuery changes
    if (filteredResults.length > 0 && firstMatchIndex === null) {
      setFirstMatchIndex(0); // Set to first match
    }
  }, [filteredResults]);

  useEffect(() => {
    if (firstMatchIndex !== null) {
      setExpandedChapter(firstMatchIndex); // Expand the first match
    }
  }, [firstMatchIndex]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
            <div>
              <div
                className={
                  style.colorFive +
                  ` transform overflow-y-auto
                   z-10 shadow-xl sm:flex hidden`
                }
              >
                <table className="mx-5 my-2">
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
                          onClick={() => toggleChapter(index)}
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
                    <table className="mx-2 my-2 text-xs">
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
                              onClick={() => toggleChapter(index)}
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
              className="mt-5 sm:mt-0 sm:w-[60%] w-[40%] flex flex-col overflow-y-auto"
              id="pdfContainer"
            >
              {loading && <div className="text-center">Loading...</div>}{" "}
              {/* Loading indicator */}
              {Array.from(loadedPages)
                .sort((a, b) => a - b)
                .map(
                  (
                    pageNum // Ensure order of loaded pages
                  ) => (
                    <canvas
                      key={pageNum}
                      ref={(el) => canvasRef.current.set(pageNum, el)}
                      className=" w-full h-full mb-5"
                    />
                  )
                )}
            </div>
            {/* <div
              ref={iframeRef}
              className="sm:w-[80%] w-screen sm:relative  sm:mt-0 mt-10"
            >
              <Pdfview isVisible={isVisible} page={page} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
