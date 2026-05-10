import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PGListing from "./pages/PGListing";
// pages
const Home = lazy(() => import("./pages/Home"));
const Owner = lazy(() => import("./pages/Owner"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PropertyList = lazy(() => import("./PropertyList"));
const AdminRoutes = lazy(() => import("./admin/routes/AdminRoutes"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));

// ✅ IMPORT DATA
import properties from "./data/properties";

const PageWrapper = ({ children }) => (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
    {children}
  </div>
);

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <main className={`${!isAdmin ? "pt-16 sm:pt-20" : ""} min-h-screen bg-[#f9fafb]`}>

        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>

          <Routes>

            {/* USER ROUTES */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/owner" element={<PageWrapper><Owner /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/properties" element={<PageWrapper><PropertyList /></PageWrapper>} />
            <Route path="/pg-listing" element={<PGListing />} />

            {/* ⭐ FIXED ROUTE (IMPORTANT) */}
            <Route
              path="/property/:id"
              element={<PageWrapper><PropertyDetails properties={properties} /></PageWrapper>}
            />

            {/* ADMIN */}
            <Route path="/admin/*" element={<AdminRoutes />} />

          </Routes>

        </Suspense>

      </main>

      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}