import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const resume =
  "https://cors-anywhere.herokuapp.com/https://github.com/CaptainPoldark/jonathankyle/blob/newPortfolio/src/Images/JonathankyleBrooks.pdf?raw=true";

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const resumeZoomSlider = document.getElementById("resumeZoom");
  const [width, setWidth] = useState(1200);
  const [zoom, setZoom] = useState(1.6);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {width > 800 ? (
          <div className="resume-slider-container">
            <input
              className="resume-slider-slider"
              type="range"
              min="1"
              max="2.2"
              value={zoom}
              step="0.1"
              onChange={(e) => setZoom(e.target.value)}
              id="resumeZoom"
            />
          </div>
        ) : (
          ""
        )}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "20rem", opacity: "70%" }}
          >
            <AiOutlineDownload />
            &#x2001; Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Col>
            <Document file={resume} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 800 ? Number(zoom) : 0.6} />
            </Document>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "20rem" }}
          >
            <AiOutlineDownload />
            &#x2001; Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
