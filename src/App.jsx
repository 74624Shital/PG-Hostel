
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PGListing from "./pages/PGListing";

// 🔷 LAZY PAGES
const Home = lazy(() => import("./pages/Home"));
const Owner = lazy(() => import("./pages/Owner"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PropertyList = lazy(() => import("./PropertyList"));
const AdminRoutes = lazy(() => import("./admin/routes/AdminRoutes"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));

// ✅ IMPORT DATA
import properties from "./data/properties";

// 🔷 PAGE WRAPPER
const PageWrapper = ({ children }) => (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
    {children}
  </div>
);

function Layout() {
  const location = useLocation();

  // ✅ CHECK ADMIN ROUTE
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* 🔷 USER NAVBAR */}
      {!isAdmin && <Navbar />}

      {/* 🔷 MAIN */}
      <main
        className={
          `${!isAdmin ? "pt-16 sm:pt-20" : ""} min-h-screen bg-gray-50`
        }
      >

        {/* 🔷 SUSPENSE */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-lg font-semibold text-gray-500">
                Loading...
              </div>
            </div>
          }
        >

          <Routes>

            {/* 🔷 USER ROUTES */}
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            <Route
              path="/owner"
              element={
                <PageWrapper>
                  <Owner />
                </PageWrapper>
              }
            />

            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />

            <Route
              path="/properties"
              element={
                <PageWrapper>
                  <PropertyList />
                </PageWrapper>
              }
            />

            <Route
              path="/pg-listing"
              element={<PGListing />}
            />

            {/* 🔷 PROPERTY DETAILS */}
            <Route
              path="/property/:id"
              element={
                <PageWrapper>
                  <PropertyDetails properties={properties} />
                </PageWrapper>
              }
            />

            {/* 🔷 ADMIN ROUTES */}
            <Route
              path="/admin/*"
              element={<AdminRoutes />}
            />

            {/* 🔷 FALLBACK */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

        </Suspense>

      </main>

      {/* 🔷 FOOTER */}
      {!isAdmin && <Footer />}

      {/* 🔷 WHATSAPP */}
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
