import React from "react"; // import React

function Features() { // create component

  const features = [ // list of features
    {
      icon: ( // icon using SVG
        <svg
          className="w-7 h-7" // size of icon
          viewBox="0 0 24 24" // svg view box
          fill="none" // no fill color
          stroke="currentColor" // use current text color
          strokeWidth="1.8" // line thickness
        >
          <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      ),
      title: "High-Speed Wi-Fi", // title
      desc: "Seamless internet in every room for work and entertainment.", // description
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: "Hygienic Meals",
      desc: "Chef-prepared nutritious meals served fresh every day.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "24/7 Security",
      desc: "CCTV surveillance and trained security staff round the clock.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" /> {/* AC box */}
          <path d="M6 17v2M18 17v2M6 7V5M18 7V5" /> {/* small lines */}
        </svg>
      ),
      title: "Air Conditioning",
      desc: "Climate-controlled rooms for maximum comfort all year.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-14">
      {/* main section */}

      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
        Why Choose Stanza Living?
      </h2>
      {/* heading */}

      <p className="text-sm text-gray-500 text-center mb-12">
        Everything you need, all under one roof.
      </p>
      {/* sub text */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* grid layout */}

        {features.map((f, index) => (
          <div
            key={index} // unique key
            className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center 
            shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* card */}

            <div
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2dc8a0] to-[#5fd1b7] 
              flex items-center justify-center mb-5 text-white 
              group-hover:scale-110 transition-transform duration-300"
            >
              {f.icon} {/* show icon */}
            </div>

            <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-[#2dc8a0] transition">
              {f.title} {/* show title */}
            </h3>

            <p className="text-xs text-gray-500 leading-relaxed">
              {f.desc} {/* show description */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; // export component