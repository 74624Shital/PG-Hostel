// import React from "react";

// export default function PropertyCard({ property }) {
//   // ✅ fallback image
//   const imageSrc =
//     property?.img || "https://via.placeholder.com/400x300?text=No+Image";

//   return (
//     <div
//       className="
//         h-full
//         bg-white
//         rounded-xl sm:rounded-2xl
//         shadow-sm sm:shadow-md
//         hover:shadow-lg md:hover:shadow-xl
//         transition-all duration-300
//         overflow-hidden
//         flex flex-col
//       "
//     >
//       {/* 🔷 IMAGE */}
//       <div className="relative">
//         <img
//           src={imageSrc}
//           alt={property?.name || "property"}
//           className="
//             w-full
//             aspect-[4/3]
//             sm:aspect-[16/10]
//             object-cover
//           "
//         />

//         {/* 💰 PRICE */}
//         {property?.price && (
//           <span
//             className="
//               absolute top-2 right-2
//               sm:top-3 sm:right-3
//               bg-[#ff7a00] text-white
//               text-[10px] sm:text-xs
//               px-2 sm:px-3 py-1
//               rounded-full shadow
//             "
//           >
//             ₹{property.price}/mo
//           </span>
//         )}

//         {/* ⭐ RATING */}
//         {property?.rating && (
//           <span
//             className="
//               absolute top-2 left-2
//               sm:top-3 sm:left-3
//               bg-white text-gray-800
//               text-[10px] sm:text-xs
//               px-2 py-1
//               rounded-full shadow
//             "
//           >
//             ⭐ {property.rating}
//           </span>
//         )}
//       </div>

//       {/* 🔶 CONTENT */}
//       <div className="p-3 sm:p-4 flex flex-col flex-grow">
//         {/* 🏠 NAME */}
//         <h3
//           className="
//             font-semibold
//             text-sm sm:text-base md:text-lg
//             text-slate-800
//             line-clamp-1
//           "
//         >
//           {property?.name || "Unnamed Property"}
//         </h3>

//         {/* 📍 LOCATION */}
//         <p
//           className="
//             text-xs sm:text-sm
//             text-gray-500
//             mt-1
//             line-clamp-1
//           "
//         >
//           📍 {property?.area || "Unknown"}, {property?.city || "Location"}
//         </p>

//         {/* 🔖 TAGS */}
//         <div
//           className="
//             flex flex-wrap
//             gap-1.5 sm:gap-2
//             mt-2 sm:mt-3
//             text-[10px] sm:text-xs
//           "
//         >
//           {property?.gender && (
//             <span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-full whitespace-nowrap">
//               {property.gender}
//             </span>
//           )}

//           {property?.type && (
//             <span className="bg-orange-100 text-[#ff7a00] px-2 py-1 rounded-full whitespace-nowrap">
//               {property.type}
//             </span>
//           )}

//           {property?.occupancy && (
//             <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full whitespace-nowrap">
//               🛏 {property.occupancy}
//             </span>
//           )}
//         </div>

//         {/* 🔘 BUTTON */}
//         <div className="mt-auto pt-3 sm:pt-4">
//           <button
//             className="
//               w-full
//               bg-[#ff7a00]
//               hover:bg-[#e66a00]
//               active:scale-[0.98]
//               text-white
//               py-2.5 sm:py-3
//               rounded-lg
//               text-xs sm:text-sm
//               font-medium
//               transition-all duration-300
//             "
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyCard({ property }) {

  const navigate = useNavigate();

  // ✅ fallback image
  const imageSrc =
    property?.img || "https://via.placeholder.com/400x300?text=No+Image";

  // ✅ View Details Function
  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div
      className="
        h-full
        bg-white
        rounded-xl sm:rounded-2xl
        shadow-sm sm:shadow-md
        hover:shadow-lg md:hover:shadow-xl
        transition-all duration-300
        overflow-hidden
        flex flex-col
      "
    >
      {/* 🔷 IMAGE */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={property?.name || "property"}
          className="
            w-full
            aspect-[4/3]
            sm:aspect-[16/10]
            object-cover
          "
        />

        {/* 💰 PRICE */}
        {property?.price && (
          <span
            className="
              absolute top-2 right-2
              sm:top-3 sm:right-3
              bg-[#ff7a00] text-white
              text-[10px] sm:text-xs
              px-2 sm:px-3 py-1
              rounded-full shadow
            "
          >
            ₹{property.price}/mo
          </span>
        )}

        {/* ⭐ RATING */}
        {property?.rating && (
          <span
            className="
              absolute top-2 left-2
              sm:top-3 sm:left-3
              bg-white text-gray-800
              text-[10px] sm:text-xs
              px-2 py-1
              rounded-full shadow
            "
          >
            ⭐ {property.rating}
          </span>
        )}
      </div>

      {/* 🔶 CONTENT */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">

        {/* 🏠 NAME */}
        <h3
          className="
            font-semibold
            text-sm sm:text-base md:text-lg
            text-slate-800
            line-clamp-1
          "
        >
          {property?.name || "Unnamed Property"}
        </h3>

        {/* 📍 LOCATION */}
        <p
          className="
            text-xs sm:text-sm
            text-gray-500
            mt-1
            line-clamp-1
          "
        >
          📍 {property?.area || "Unknown"}, {property?.city || "Location"}
        </p>

        {/* 🔖 TAGS */}
        <div
          className="
            flex flex-wrap
            gap-1.5 sm:gap-2
            mt-2 sm:mt-3
            text-[10px] sm:text-xs
          "
        >
          {property?.gender && (
            <span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-full whitespace-nowrap">
              {property.gender}
            </span>
          )}

          {property?.type && (
            <span className="bg-orange-100 text-[#ff7a00] px-2 py-1 rounded-full whitespace-nowrap">
              {property.type}
            </span>
          )}

          {property?.occupancy && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full whitespace-nowrap">
              🛏 {property.occupancy}
            </span>
          )}
        </div>

        {/* 🔘 BUTTON */}
        <div className="mt-auto pt-3 sm:pt-4">
          <button
            onClick={handleViewDetails}
            className="
              w-full
              bg-[#ff7a00]
              hover:bg-[#e66a00]
              active:scale-[0.98]
              text-white
              py-2.5 sm:py-3
              rounded-lg
              text-xs sm:text-sm
              font-medium
              transition-all duration-300
            "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}