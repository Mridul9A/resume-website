// Download.jsx

import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Download = ({ content }) => {
  const handleDownloadPDF = () => {
    const input = document.getElementById("resume-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="navbar">
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};

export default Download;
