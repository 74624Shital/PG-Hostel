import React, { useState, useRef, useEffect } from "react";

/* ---------- ICONS ---------- */

// arrow icon for dropdown
const ChevronDown = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// building icon for PG/Hostel
const BuildingIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// home icon for Flats
const HomeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// filter icon for More Filters button
const FilterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="14" y2="12" />
    <line x1="4" y1="18" x2="18" y2="18" />
    <circle cx="17" cy="6" r="2" fill="currentColor" stroke="none" />
  </svg>
);

// dropdown names
const filterDropdowns = ["Locality", "Budget", "Gender", "Preferred By"];

function Filters() {

  // stores selected tab (pg or flats)
  const [activeTab, setActiveTab] = useState("pg");

  // which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // modal open/close state
  const [showModal, setShowModal] = useState(false);

  // sort dropdown open/close
  const [sortOpen, setSortOpen] = useState(false);

  // selected sort value
  const [sortValue, setSortValue] = useState("Popularity");

  // reference to detect outside click
  const ref = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(null);
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // toggle dropdown open/close
  const toggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* MAIN FILTER BAR */}
      <div
        ref={ref}
        className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-2 flex-wrap relative"
      >

        {/* PG BUTTON */}
        <button
          onClick={() => setActiveTab("pg")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
            activeTab === "pg"
              ? "bg-[#2dc8a0] text-white border-[#2dc8a0]"
              : "bg-white text-gray-600 border-gray-300"
          }`}
        >
          <BuildingIcon />
          PG/Hostels
        </button>

        {/* FLATS BUTTON */}
        <button
          onClick={() => setActiveTab("flats")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
            activeTab === "flats"
              ? "bg-[#2dc8a0] text-white border-[#2dc8a0]"
              : "bg-white text-gray-600 border-gray-300"
          }`}
        >
          <HomeIcon />
          Flats
        </button>

        {/* FILTER DROPDOWNS */}
        {filterDropdowns.map((filter) => (
          <div key={filter} className="relative">

            <button
              onClick={() => toggle(filter)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-300 bg-white"
            >
              {filter}
              <ChevronDown />
            </button>

            {/* DROPDOWN CONTENT */}
            {openDropdown === filter && (
              <div className="absolute top-14 left-0 w-[520px] bg-white rounded-2xl shadow-xl p-6 z-50">

                {/* SEARCH BOX */}
                <div className="border rounded-xl px-4 py-3 flex items-center gap-2 mb-6">
                  <span>🔍</span>
                  <input
                    type="text"
                    placeholder={`Search ${filter}`}
                    className="w-full outline-none"
                  />
                </div>

                {/* OPTIONS */}
                <div className="flex flex-wrap gap-3">

                  {filter === "Locality" &&
                    ["Baner", "Wakad", "Hinjewadi"].map((item) => (
                      <Chip key={item} label={item} />
                    ))}

                  {filter === "Budget" &&
                    ["₹5k-10k", "₹10k-15k"].map((item) => (
                      <Chip key={item} label={item} />
                    ))}

                  {filter === "Gender" &&
                    ["Male", "Female"].map((item) => (
                      <Chip key={item} label={item} />
                    ))}

                  {filter === "Preferred By" &&
                    ["Students", "Working"].map((item) => (
                      <Chip key={item} label={item} />
                    ))}

                </div>

                {/* SEE MORE */}
                <p className="text-[#2dc8a0] mt-4 text-sm cursor-pointer">
                  See more
                </p>
              </div>
            )}
          </div>
        ))}

        {/* DIVIDER */}
        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* MORE FILTERS BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 text-sm text-gray-600"
        >
          <FilterIcon />
          More Filters
        </button>

        {/* SORT DROPDOWN */}
        <div className="ml-auto relative">
          <div
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer"
          >
            Sort By:
            <span className="text-[#2dc8a0] font-semibold ml-1">
              {sortValue}
            </span>
            <ChevronDown />
          </div>

          {/* SORT OPTIONS */}
          {sortOpen && (
            <div className="absolute right-0 top-8 bg-white shadow-md rounded-lg p-2 w-44">
              {["Popularity", "Price Low to High", "Price High to Low"].map(
                (item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSortValue(item);
                      setSortOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* MODAL (POPUP) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-[500px] max-h-[80vh] rounded-xl p-6 overflow-y-auto">

            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* OCCUPANCY */}
            <div className="mb-4">
              <p className="font-medium mb-2">Occupancy</p>

              <div className="flex flex-wrap gap-2">
                {["Single", "Double", "Triple"].map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowModal(false)}>
                Clear
              </button>

              <button className="bg-[#2dc8a0] text-white px-4 py-2 rounded">
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

/* CHIP BUTTON */
function Chip({ label }) {
  return (
    <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
      {label}
    </button>
  );
}

export default Filters;