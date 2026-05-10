import React, { useEffect, useState } from "react";

const PGListing = () => {
  const [pgList, setPgList] = useState([]);

  // Fetch PG Data
  useEffect(() => {

    // Example Static Data
    // Replace with API later

    const data = [
      {
        id: 1,
        pgName: "Sunrise PG",
        description: "Fully furnished AC rooms available",
        price: 5000,
        address: "Delhi",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      },

      {
        id: 2,
        pgName: "Luxury PG",
        description: "WiFi + Food + Parking available",
        price: 7000,
        address: "Noida",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },

      {
        id: 3,
        pgName: "Boys PG",
        description: "Single & Double sharing rooms",
        price: 6000,
        address: "Gurgaon",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
    ];

    setPgList(data);

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          PG Listings
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {pgList.map((pg) => (

            <div
              key={pg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              {/* Image */}
              <img
                src={pg.image}
                alt={pg.pgName}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {pg.pgName}
                </h2>

                <p className="text-gray-600 mb-4">
                  {pg.description}
                </p>

                <div className="space-y-2">

                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Price:
                    </span>{" "}
                    ₹{pg.price}
                  </p>

                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Address:
                    </span>{" "}
                    {pg.address}
                  </p>

                </div>

                {/* Button */}
                <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default PGListing;