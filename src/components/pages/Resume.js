import React from "react";
import "../../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from "../../pdf/resume.pdf";
import { Button } from '../Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume () {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      React.useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        
    }
    
        window.addEventListener('resize', handleResize)
      })

    return (
        <>
        <div className='resume'>
            <h1>RESUME</h1> 
            <div className='resume-main'>
                <Document className='resume-shrink' file={resumePDF}>
                    <Page pageNumber={1}
                    scale={dimensions.width / 750} />
                </Document>
            </div>
            <Button className='btns' buttonStyle='btn--rounded-primary'
                    buttonSize='btn--large' to="resume.pdf" target="_blank"> Download <i class="fas fa-arrow-circle-down" /></Button>
            <div className='padding' />
        </div>
        </>
    );
}

export default Resume;