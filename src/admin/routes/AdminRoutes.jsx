import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// 🔷 AUTH
const Login = lazy(() => import("../pages/Login"));

// 🔷 DASHBOARD
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Properties = lazy(() => import("../pages/Properties"));
const Bookings = lazy(() => import("../pages/Bookings"));
const Users = lazy(() => import("../pages/Users"));

// 🔷 LISTINGS
const Listings = lazy(() => import("../pages/Listings"));
const AddListing = lazy(() => import("../pages/AddListing"));
const EditListing = lazy(() => import("../pages/EditListing"));

// 🔷 CONTENT
const Gallery = lazy(() => import("../pages/Gallery"));
const Amenities = lazy(() => import("../pages/Amenities"));
const HeroSection = lazy(() => import("../pages/HeroSection"));

// 🔷 SETTINGS
const Settings = lazy(() => import("../pages/Settings"));

// 🔥 NEW MODULE (PG MANAGEMENT)
const PGManagement = lazy(() => import("../pages/PGManagement"));

// ❌ REMOVED (not used)
// const Profile = lazy(() => import("../pages/Profile"));
// const ChangePassword = lazy(() => import("../pages/ChangePassword"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export default function AdminRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN LAYOUT */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          {/* DEFAULT REDIRECT */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* DASHBOARD */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* PROPERTY */}
          <Route path="properties" element={<Properties />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />

          {/* LISTINGS */}
          <Route path="listings" element={<Listings />} />
          <Route path="add-listing" element={<AddListing />} />
          <Route path="edit-listing/:id" element={<EditListing />} />

          {/* CONTENT */}
          <Route path="gallery" element={<Gallery />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="hero-section" element={<HeroSection />} />

          {/* 🔥 PG MANAGEMENT (NEW) */}
          <Route path="pg" element={<PGManagement />} />

          {/* SETTINGS */}
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Suspense>
  );
}