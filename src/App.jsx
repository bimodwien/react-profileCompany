import React from "react";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Service from "./pages/service";
import Teams from "./pages/teams";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/team" element={<Teams />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
