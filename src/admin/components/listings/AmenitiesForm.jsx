import React, { useState } from "react";

export default function AmenitiesForm() {
  const [amenity, setAmenity] = useState("");
  const [list, setList] = useState([]);

  const addAmenity = () => {
    if (!amenity) return;

    setList([...list, amenity]);
    setAmenity("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="flex gap-4">
        <input
          type="text"
          value={amenity}
          onChange={(e) => setAmenity(e.target.value)}
          placeholder="Add Amenity"
          className="flex-1 border p-3 rounded-xl"
        />

        <button
          onClick={addAmenity}
          className="bg-orange-500 text-white px-5 rounded-xl"
        >
          Add
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}