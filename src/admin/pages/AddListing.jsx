import React from "react";
import ListingForm from "../components/listings/ListingForm";

export default function AddListing() {
  return (
    <div className="space-y-6">

      {/* 🔷 PAGE HEADER */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Add Listing
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Add new PG or property listing details
        </p>
      </div>

      {/* 🔷 FORM CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <ListingForm />
      </div>

    </div>
  );
}