import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { EnvelopeAtFill, Telephone } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
import logoImage from "../res_images/ips_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#3b5998",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Facebook</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#55acee",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; Twitter &nbsp;</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#ac2bac",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Instagram</p>
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#dd4b39",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; Google &nbsp;</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#25d366",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Whatsapp</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#ed302f",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; YouTube</p>
            </MDBBtn>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="4" xl="3" className="mx-auto mb-4">
                <p className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  <Image
                    src={logoImage}
                    alt="indian Public school"
                    className=""
                    style={{ height: "80px" }}
                  />
                  <br /> Vill. Suhili Ramnagar District: Satna Madhya-Pradesh
                  INDIA
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4"></MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/Pricing" className="text-reset">
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to="/admisson" className="text-reset">
                    Admisson
                  </Link>
                </p>
                <p>
                  <Link to="/Contact_us" className="text-reset">
                    Help
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <p>
                  <EnvelopeAtFill /> &nbsp;
                  <a href="mailto:Info@IndianPublicSchool.com">
                    Info@IndianPublicSchool.com
                  </a>
                </p>
                <p>
                  <Telephone /> &nbsp;
                  <a href="tel:6265173931">+91 6265173931</a>
                </p>
                <p>
                  <Telephone /> &nbsp;
                  <a href="tel:9685843843">+91 6265173931</a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-left"
          style={{ backgroundColor: "rgba(117, 17, 17, 0.05)" }}>
          <div className="text-center p-2">
            © 2023 Copyright:
            <a
              className="text-reset fw-bold"
              href="https://IndianPublicSchool.com/">
              IndianPublicSchool
            </a>
          </div>
          <Link to="/Devloper" style={{ textDecoration: "none" }}>
            {" "}
            Design and devloped By Ashok Kushwaha{" "}
          </Link>
        </div>
      </MDBFooter>
    </div>
  );
}
