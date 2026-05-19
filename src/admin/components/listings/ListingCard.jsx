import React from "react";

export default function ListingCard({ listing }) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{listing.name}</h2>

        <p className="text-gray-500">{listing.location}</p>

        <p className="text-orange-500 font-semibold mt-2">
          ₹{listing.price}
        </p>
      </div>
    </div>
  );
}