
import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from "react-bootstrap/Image";
import logoImage from "../res_images/ips_logo.png";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const history = useNavigate();

  const handleLogin = async (e) => {
    if (e) {
      e.preventDefault();
      try {

        const response = await fetch("http://localhost:3100/api/auth/login", {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email, password })

        });



        if (response.status === 200) {
          const data = await response.json();
          console.log(response, "response"); console.log("data:", JSON.stringify(data.data));
          localStorage.setItem("userData", JSON.stringify(data.data))
          history('/');
        } else {
          console.error('authError');

        }
      } catch (error) {
        console.error("error during login", error);
      }
    }
    else {
      console.error('Event object is undefined');
    }
  };

  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div style={{}}>
        <MDBContainer className="my-5 ">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <MDBCard>

              <MDBRow className="g-0">
                <MDBCol md="6">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="rounded-start w-100"
                    style={{ height: "40rem" }}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="d-flex flex-column">
                    <div className="d-flex flex-row mt-2">
                      <MDBIcon
                        fas
                        icon="cubes fa-3x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h1 fw-bold mb-0">   <Image
                        src={logoImage}
                        alt="indian Public school"
                        className="navbar_logo" /></span>
                    </div>
                    <h5
                      className="fw-normal my-4 pb-3"
                      style={{ letterSpacing: "1px" }}>
                      Sign into your account
                    </h5>

                    <Form >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>

                      <Button variant="dark" size="lg" onClick={handleLogin} >
                        Submit
                      </Button>
                    </Form>





                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <a href="#!" style={{ color: "#393f81" }}>
                        Register here
                      </a>
                    </p>

                    <div className="d-flex flex-row justify-content-start">
                      <a href="#!" className="small text-muted me-1">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
