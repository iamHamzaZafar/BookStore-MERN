import React from "react"
import { Home } from "./Home/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Cources from "./Cources/Cources";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Signup from "./Components/Signup";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Cources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

         
         


        </Routes>
      </BrowserRouter>
    </>
  )
}