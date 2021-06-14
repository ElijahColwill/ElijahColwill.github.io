import React, { useState } from "react";
import "../../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from "../../pdf/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume () {
    const [numPages, setNumPages] = useState(null);
    const pageNumber = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return (
       <>
       <h1 className='resume'>RESUME</h1>
       <Document
        file={resumePDF}
        onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
       </>     
    );
}

export default Resume;