import React from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

export default function PropertyYard() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  // 🔥 FILTER LOGIC
  const filtered = city
    ? properties.filter((p) =>
        p.location.toLowerCase().includes(city.toLowerCase())
      )
    : properties;

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h2 className="text-xl font-bold mb-4">
        Showing results for: {city || "All"}
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {filtered.map((item, index) => (
          <PropertyCard key={index} property={item} />
        ))}
      </div>

    </div>
  );
}