// import Card from "./components/Card";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // logic
  // 페이지 3개: Home, About, Contact

  // view
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
