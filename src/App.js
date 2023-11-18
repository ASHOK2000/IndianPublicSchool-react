import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alumani from "./Resource/Alumani";
import Career from "./Resource/Careers";
import Login from "./Resource/Login";
import WhyUs from "./Resource/Why-us";
import Admisson from "./Resource/Admisson";
import Home from "./Resource/Home";
import Location from "./Resource/Location";
import About from "./Resource/About";
import Contact from "./Resource/Contact-us";
import TermsCondition from "./Resource/sub-pages/TermsCondition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />}>

        </Route>

        <Route path="/admisson" element={<Admisson></Admisson>}> </Route>
        <Route path="/alumni" element={<Alumani></Alumani>}></Route>
        <Route path="/careers" element={<Career></Career>}> </Route>
        <Route path="/contact-us" element={<Contact></Contact>}> </Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/location" element={<Location></Location>}></Route>
        <Route path="/whyIPS" element={<WhyUs></WhyUs>}></Route>
        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/pricing" element={<Login></Login>}> </Route>
        <Route path="/terms-condition" element={<TermsCondition></TermsCondition>}> </Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App;