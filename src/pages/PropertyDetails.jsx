import React from "react";
import { useParams } from "react-router-dom";

export default function PropertyDetails({ properties = [] }) {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        Property Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5">

      <img
        src={property.img}
        alt={property.name}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <div className="mt-6">

        <h1 className="text-3xl font-bold text-slate-800">
          {property.name}
        </h1>

        <p className="text-gray-500 mt-2">
          📍 {property.area}, {property.city}
        </p>

        <h2 className="text-2xl text-[#ff7a00] font-semibold mt-4">
          ₹{property.price}/month
        </h2>

        <div className="flex gap-3 mt-4 flex-wrap">

          <span className="bg-orange-100 text-[#ff7a00] px-3 py-1 rounded-full">
            {property.type}
          </span>

          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
            {property.gender}
          </span>

          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            🛏 {property.occupancy}
          </span>

        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">
            Description
          </h3>

          <p className="text-gray-600 leading-7">
            {property.description || "No description available."}
          </p>
        </div>

      </div>
    </div>
  );
}