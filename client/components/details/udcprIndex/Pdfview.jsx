import React from "react";

export default function Pdfview({ isVisible, page }) {
  return (
    <div className="w-full h-full">
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
  );
}
