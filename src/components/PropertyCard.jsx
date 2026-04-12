import React from "react"; // import React

// PropertyCard component
// receives property object as prop
export default function PropertyCard({ property }) {

  return (
    <div
      style={{
        width: "100%", // full width card
        border: "1px solid #e5e7eb", // light border
        borderRadius: "12px", // rounded corners
        marginBottom: "16px", // spacing between cards
        overflow: "hidden", // hide overflow
        background: "#fff", // white background
      }}
    >
      {/* IMAGE SECTION */}
      <img
        src={property.img} // property image
        alt={property.name} // alt text for accessibility
        style={{
          width: "100%", // full width image
          height: "200px", // fixed height
          objectFit: "cover", // crop image properly
        }}
      />

      {/* CONTENT SECTION */}
      <div style={{ padding: "12px" }}>

        {/* TITLE + LOCATION */}
        <div
          style={{
            display: "flex", // horizontal layout
            justifyContent: "space-between", // space between items
          }}
        >
          <h3 style={{ margin: 0 }}>
            {property.name} {/* property name */}
          </h3>

          <span style={{ fontSize: "12px", color: "#666" }}>
            {property.location} {/* property location */}
          </span>
        </div>

        {/* PROPERTY DETAILS */}
        <p style={{ fontSize: "12px", margin: "6px 0" }}>
          {property.bhk} • {property.area} • {property.status}
        </p>

        {/* PRICE + BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong>
            {property.price} {/* price */}
          </strong>

          <button>
            View {/* button text */}
          </button>
        </div>

      </div>
    </div>
  );
}