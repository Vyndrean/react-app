import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/index";
import Navbar from "./components/Navbar";
import './style/pages.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
