import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import System from "./components/System";
import Contact from "./components/Contact";
import Download from "./components/Download";
import background from "./assets/background.jpg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center opacity-50 pointer-events-none"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Navbar */}
      <div className="relative z-20">
      <Navbar />
      </div>

      {/* Routes */}
      <div className="relative z-10 pt-20">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={ 
            <>
              
              
                <Project />
                <System />
                <Contact />
              </>
            }
          />

          {/* Download Route */}
          <Route path="/download" element={<Download />} />

          {/* System Route */}
          <Route path="/system" element={<System />} />

          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


