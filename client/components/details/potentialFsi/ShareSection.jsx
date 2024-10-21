import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ShareComponent = () => {
  const sectionRef = useRef(); // Reference to the section to convert to PDF

  // Function to generate PDF
  const generatePDF = () => {
    html2canvas(sectionRef.current).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 190; // Width in mm
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download.pdf'); // Filename for the downloaded PDF
    });
  };

  // Function to share on WhatsApp
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent('Check out this section:');
    const url = encodeURIComponent(window.location.href); // Current page URL
    window.open(`https://wa.me/?text=${message} ${url}`, '_blank');
  };

  // Function to share via email
  const shareViaEmail = () => {
    const subject = encodeURIComponent('Check out this section');
    const body = encodeURIComponent('Check out this section: ' + window.location.href);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div>
      <div ref={sectionRef} style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2>This is the section to be converted to PDF</h2>
        <p>Content of the section goes here.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={generatePDF}>Download PDF</button>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
        <button onClick={shareViaEmail}>Share via Email</button>
      </div>
    </div>
  );
};

export default ShareComponent;
