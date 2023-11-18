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

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/About" element={<About />} />

                <Route path="/admisson" element={<Admisson></Admisson>} />
                <Route path="/alumni" element={<Alumani></Alumani>} />
                <Route path="/careers" element={<Career></Career>} />
                <Route path="/contact-us" element={<Contact></Contact>} />
                <Route path="/" element={<Home></Home>} />
                <Route path="/location" element={<Location></Location>} />
                <Route path="/whyIPS" element={<WhyUs></WhyUs>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/pricing" element={<Login></Login>} />
            </Routes>


        </BrowserRouter>
    );
}
