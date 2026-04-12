import React from "react";

// ✅ Reusable Card Component
function PropertyCard({ property }) {
  return (
    <div
      style={{
        display: "flex", // horizontal layout (image + content)
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* 🔹 LEFT SIDE IMAGE */}
      <div style={{ position: "relative", width: "40%" }}>
        <img
          src={property.img}
          alt={property.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* 🔸 Badge (Preferred tag) */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "#facc15",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Preferred by {property.preferred}
        </span>

        {/* 🔸 Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "#6ee7b7",
            padding: "6px",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          1 Person Visiting Today
        </div>
      </div>

      {/* 🔹 RIGHT SIDE CONTENT */}
      <div style={{ padding: "16px", flex: 1 }}>
        
        {/* 🔸 Title + Gender */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0 }}>{property.name}</h3>

          <span
            style={{
              background: "#f3f4f6",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            {property.gender}
          </span>
        </div>

        {/* 🔸 Location */}
        <p style={{ color: "#6b7280", margin: "4px 0 10px" }}>
          PG in {property.location}
        </p>

        {/* 🔸 Amenities */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {property.amenities.map((item, index) => (
            <span
              key={index}
              style={{
                background: "#ecfeff",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔸 Room Types */}
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          {property.rooms.map((room, i) => (
            <span
              key={i}
              style={{
                border: "1px solid #ddd",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {room}
            </span>
          ))}
        </div>

        {/* 🔸 Price + Buttons */}
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Price */}
          <div>
            <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
              Starts from
            </p>
            <h3 style={{ margin: 0 }}>
              ₹{property.price}/mo*
            </h3>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                background: "#2dc8a0",
                color: "#fff",
                border: "none",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              SCHEDULE A VISIT
            </button>

            <button
              style={{
                border: "1px solid #2dc8a0",
                color: "#2dc8a0",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#fff",
              }}
            >
              REQUEST A CALLBACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ MAIN PAGE COMPONENT
export default function PropertyList() {

  // 🔥 10 PG DATA
  const properties = [
    {
      id: 1,
      name: "Whitehaven House",
      location: "Wagholi",
      gender: "Female",
      price: "10,499",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      amenities: ["Attached Balcony", "Attached Washroom"],
      rooms: ["Double", "Triple"],
    },
    {
      id: 2,
      name: "Austin House",
      location: "Kondhwa",
      gender: "Unisex",
      price: "9,200",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      amenities: ["Attached Washroom"],
      rooms: ["Single", "Double"],
    },
    {
      id: 3,
      name: "Green Nest PG",
      location: "Baner",
      gender: "Male",
      price: "8,500",
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      amenities: ["WiFi", "AC"],
      rooms: ["Double"],
    },
    {
      id: 4,
      name: "Urban Stay",
      location: "Wakad",
      gender: "Unisex",
      price: "7,800",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      amenities: ["Food", "Laundry"],
      rooms: ["Single", "Triple"],
    },
    {
      id: 5,
      name: "Comfort Living",
      location: "Hinjewadi",
      gender: "Male",
      price: "11,000",
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      amenities: ["Parking", "AC"],
      rooms: ["Single"],
    },
    {
      id: 6,
      name: "Royal PG",
      location: "Kharadi",
      gender: "Female",
      price: "9,500",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      amenities: ["WiFi", "Laundry"],
      rooms: ["Double"],
    },
    {
      id: 7,
      name: "Prime Stay",
      location: "Viman Nagar",
      gender: "Unisex",
      price: "12,000",
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      amenities: ["AC", "Food"],
      rooms: ["Single"],
    },
    {
      id: 8,
      name: "Elite PG",
      location: "Magarpatta",
      gender: "Male",
      price: "8,800",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      amenities: ["Gym", "WiFi"],
      rooms: ["Triple"],
    },
    {
      id: 9,
      name: "Happy Homes",
      location: "Hadapsar",
      gender: "Female",
      price: "7,500",
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      amenities: ["Laundry"],
      rooms: ["Double"],
    },
    {
      id: 10,
      name: "Silver Residency",
      location: "Kothrud",
      gender: "Unisex",
      price: "10,000",
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      amenities: ["Parking", "WiFi"],
      rooms: ["Single", "Double"],
    },
  ];

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1100px",
        margin: "20px auto",
      }}
    >
      {/* 🔁 LOOP ALL PROPERTIES */}
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}