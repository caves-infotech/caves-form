import React, { useState, useEffect } from "react";
import { udcprIndex } from "@/services/formData";

export default function ({ setPage }) {
    
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [firstMatchIndex, setFirstMatchIndex] = useState(null);
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
  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
    setPage(udcprIndex[index].sections[0].page);
  };

  const setPageAndTitle = (item) => {
    setPage(item.page);
    setTitle(item.title);
  };
  return (
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
                      {section.sections.map((subPoint, subIndex) => (
                        <tr
                          key={subIndex}
                          onClick={() => setPageAndTitle(subPoint)}
                          className={` ${
                            title == subPoint?.title ? "bg-gray-400" : ""
                          } hover:bg-slate-200 transition-all duration-200 border-b border-gray-400 `}
                        >
                          <td className="p-2 text-xs">
                            {highlightText(subPoint?.subchapter, searchQuery)}
                          </td>
                          <td className=" p-2 text-xs">
                            {highlightText(subPoint?.title, searchQuery)}
                          </td>
                          <td className=" p-2 text-xs ">{subPoint?.page}</td>
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
  );
}
