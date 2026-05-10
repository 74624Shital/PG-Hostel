import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AdminLayout from "../layout/AdminLayout";

// ✅ LAZY LOADED PAGES
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Properties = lazy(() => import("../pages/Properties"));
const Bookings = lazy(() => import("../pages/Bookings"));
const Users = lazy(() => import("../pages/Users"));
const Login = lazy(() => import("../pages/Login"));

import ProtectedRoute from "./ProtectedRoute";

export default function AdminRoutes() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Default redirect */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* ⚡ FIX: safer fallback inside same route scope */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />

      </Routes>
    </Suspense>
  );
}