// import React from "react";
// import Hero from "../components/Hero";
// import Filters from "../components/Filters";
// import Features from "../components/Features";
// import PropertyCard from "../components/PropertyCard";
// import properties from "../data/properties";
// console.log("Home loaded");
// function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
      
//       {/* HERO SECTION */}
//       <Hero />

//       {/* FILTERS */}
//       <Filters />

//       {/* PROPERTY LIST */}
//       <section className="px-6 py-8">
//         <h2 className="text-2xl font-bold mb-4">PG in Pune</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {properties.map((p) => (
//             <PropertyCard key={p.id || p.name} property={p} />
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <Features />

//     </div>
//   );
// }

// export default Home;

import React from "react";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Features from "../components/Features";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Home() {

  // 🔍 DEBUG HERE
  console.log(PropertyCard);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <Filters />

      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">PG in Pune</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      <Features />
    </div>
  );
}

export default Home;