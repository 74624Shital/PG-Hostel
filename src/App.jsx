import React from "react"; // import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import routing

import Navbar from "./components/Navbar"; // navbar component
import Footer from "./components/Footer"; // footer component
import Home from "./pages/Home"; // home page
import PropertyList from "./PropertyList"; // property list page
import WhatsAppButton from "./components/WhatsAppButton"; // whatsapp button

export default function App() { // main App component
  return (
    <Router>
      {/* enables routing */}

      <div className="min-h-screen flex flex-col">
        {/* full height layout */}

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <Routes>
            {/* routes */}

            <Route path="/" element={<Home />} />
            {/* home page */}

            <Route path="/properties" element={<PropertyList />} />
            {/* property page */}

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP BUTTON */}
        <WhatsAppButton />

      </div>
    </Router>
  );
}