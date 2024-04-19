import React from "react";
import Landing from "./components/landing";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="bg-blue-300">
        <Navbar />
      </div>
      <Landing />
    </>
  );
}

export default App;
