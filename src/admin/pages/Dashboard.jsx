import { lazy, Suspense } from "react";

// 🔥 OPTIMIZED: lazy load heavy dashboard components
const StatsCards = lazy(() => import("../components/dashboard/StatsCards"));
const RevenueChart = lazy(() => import("../components/dashboard/RevenueChart"));
const BookingChart = lazy(() => import("../components/dashboard/BookingChart"));
const RecentBookings = lazy(() => import("../components/dashboard/RecentBookings"));

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* 🔷 TOP STATS */}
      <Suspense fallback={<div>Loading...</div>}>
        <StatsCards />
      </Suspense>

      {/* 🔷 CHART SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
          <Suspense fallback={<div>Loading...</div>}>
            <RevenueChart />
          </Suspense>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
          <Suspense fallback={<div>Loading...</div>}>
            <BookingChart />
          </Suspense>
        </div>

      </div>

      {/* 🔷 RECENT BOOKINGS */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
        <Suspense fallback={<div>Loading...</div>}>
          <RecentBookings />
        </Suspense>
      </div>

    </div>
  );
}