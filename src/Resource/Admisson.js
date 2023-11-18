import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/admisson.css";
import AdmissonForm from "./sub-pages/admissonForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { Container } from "react-bootstrap";
import { LampFill } from "react-bootstrap-icons";

function Admisson() {
  const [open, setOpen] = useState(false);

  const paragraphText = `
  <ol>
    <li>
      Complete the online application form.</li>
    <li>
      Please ensure that the following documents are uploaded
      while filling the online application form :
    </li>
    <ul>
      <li>
        Photocopy of the student’s birth certificate and Aadhaar
        Card (if applicable).
      </li>
      <li>
        School leaving certificate (can be submitted later if
        not currently available).
      </li>
      <li>
        UDISE Number (Unified District information System for
        Education) from current school.
      </li>
      <li>
        Photocopy of the previous and current class Report Card.
      </li>
      <li>
        Photocopy of Address proof and Parent's Pan Card.
      </li>
      <li>Passport size photograph of the student.</li>
    </ul>

    <li>
      After submitting the online application form, if there are
      seats available in the standard that you have applied in,
      an email with a payment link for the first term fees will
      be sent to you. Parents are requested to make the
      necessary payment online.
    </li>
  </ol>`;

  const numberStyle = {
    fontWeight: "300",
    fontFamily: "Urbanist, sans-serif",
    textShadow:
      " 2px 0 #832996, -2px 0 #832996, 0 2px #832996, 0 -2px #832996, 1px 1px #832996, -1px -1px #832996, 1px -1px #832996, -1px 1px #832996",
  };
  const ButtonStyle = {
    background: "transparent", // Make the background transparent
    border: "2px solid #FF5733", // Add a colorful border (in this case, orange)
    color: "#FF5733", // Set the text color to match the border
    borderRadius: "5px", // Add some border radius for rounded corners
    padding: "10px 20px", // Adjust padding for better appearance
  };
  // const buttonBoxStyle = {
  //   // background:
  //   //   "transparent linear-gradient( 276deg, rgba(131, 41, 150, 0.1098039216) 0%, rgba(220, 118, 3, 0.1294117647) 100% ) 0% 0% no-repeat padding-box",
  //   // backdropFilter: "blur(43px)",
  //   justifyContent: "center", // Center horizontally
  //   alignItems: "center", // Center vertically
  //   height: "70vh", // 50% of the viewport height
  //   position: "relative",
  //   display: "flex",
  // };
  return (
    <>
      <div className="Header">
        <NavBar />
      </div>
      <Container>
        <Row>
          <Col >
            <div className="AdmissonFormhead">ONLINE APPLICATION FORM - ACADEMIC YEAR 2023-24</div>

            <li style={{ listStyle: "none", marginTop: "12px" }}>
              * For the Online Application form, please fill all nessesry fields
              and submit a Hard Copy of Document in School .
            </li>

          </Col>
        </Row>

        <div className="">
          <AdmissonForm />
        </div>

        <div>HERE ARE THE MUST-KNOWS FOR A SMOOTH ADMISSION PROCESS.</div>

        <div style={{}}>
          {/* Online Application Form */}
          <div style={{ position: "absolute" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Row>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    style={{}}
                    size="lg">
                    Online process
                  </Button>
                </Row>
              </li>
              <li className=" mt-5">
                <Row>
                  <Button
                    onClick={() => setOpen(open)}
                    aria-controls="Offline-collapse-text"
                    aria-expanded={open}
                    // style={ButtonStyle}
                    size="lg">
                    {" "}
                    Offline process{" "}
                  </Button>
                </Row>
              </li>
            </ul>
          </div>

          {/* offline process */}
        </div>

        <Col>
          <div style={{ minHeight: "20px" }}>
            <Collapse in={open} dimension="width">
              <div id="Offline-collapse-text">
                <Card body style={{ maxWidth: "device-width" }}>
                  <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
                </Card>
              </div>
            </Collapse>
          </div>
        </Col>
      </Container>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Admisson;
