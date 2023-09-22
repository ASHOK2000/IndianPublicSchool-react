import React from "react";
import HomeContent from "./sub-pages/home-content";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import { Container } from "react-bootstrap";

export default function Home() {

  return (
    <div>

      <div className="Header">
        <NavBar />
      </div>


      <HomeContent />



      <div className="Footer">
        <Footer />
      </div>



    </div>
  );

}