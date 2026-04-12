import React, { useState } from "react"; // import React and useState
import { useNavigate } from "react-router-dom"; // import navigation hook

export default function Navbar() { // main Navbar component

  const [searchValue, setSearchValue] = useState("Pune"); // store input value
  const [showDropdown, setShowDropdown] = useState(false); // dropdown state
  const navigate = useNavigate(); // navigation function

  const handleSearch = () => { // search function
    if (searchValue.trim() !== "") {
      navigate(`/properties?city=${searchValue}`);
    }
  };

  return (
    <div className="bg-white px-6 py-3 shadow-sm flex items-center justify-between">

      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        {/* SVG LOGO */}
        <div className="w-10 h-10">
          <svg viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#2dc8a0" />
            <path d="M13 20 L20 14 L27 20 L27 27 L13 27 Z" fill="white" />
            <rect x="17" y="22" width="6" height="5" fill="#2dc8a0" />
          </svg>
        </div>

        <div className="font-bold leading-tight text-sm">
          stanza <br /> living
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center bg-[#f5f5f5] rounded-xl px-4 py-2 w-[600px] shadow-inner">

        <div className="flex flex-col flex-1">
          <span className="text-xs text-gray-500">
            Find in and around...
          </span>

          <input
            type="text"
            placeholder="Search city like Pune, Mumbai..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent outline-none font-medium text-gray-700"
          />
        </div>

        {/* LOCATION ICON */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e6f7f5] mx-2 text-[#2dc8a0]">
          📍
        </div>

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          className="px-5 py-2 bg-[#2dc8a0] text-white rounded-lg font-medium hover:bg-[#26b394] transition"
        >
          Search
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center gap-4">

        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-700 flex items-center gap-1 hover:text-[#2dc8a0]"
        >
          Know More ⌄
        </button>

        {/* DROPDOWN */}
        {showDropdown && (
          <div className="absolute right-0 top-10 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <ul className="text-sm text-gray-600">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                About Us
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Contact
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Careers
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Help Center
              </li>
            </ul>
          </div>
        )}

      </div>

    </div>
  );
}