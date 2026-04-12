import React, { useState, useEffect } from "react"; // import React and hooks
import img1 from "../assets/img1.png"; // import image 1
import img2 from "../assets/img2.png"; // import image 2
import img3 from "../assets/img3.png"; // import image 3

function Hero() { // main component

  const slides = [ // array of slides
    {
      title: "Speed of internet: High\nBuffering time: Low", // title with line break
      subtitle: "Residences with seamless Wi-Fi.\nBook a visit. Limited slots left.", // subtitle
      img: img1, // image
    },
    {
      title: "Fully furnished rooms\nReady to move in",
      subtitle: "Comfort living with modern amenities.\nHurry up!",
      img: img2,
    },
    {
      title: "Comfort living\nBest experience",
      subtitle: "Premium PG in prime locations.\nBook now!",
      img: img3,
    },
  ];

  const [active, setActive] = useState(0); // store current slide index

  useEffect(() => {
    // run auto slider
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length); // go to next slide
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup interval
  }, []);

  return (
    <div className="mx-6 mt-4 rounded-2xl overflow-hidden bg-gradient-to-r from-[#9fd2c8] to-[#7fc9bd]">
      {/* main container with gradient */}

      <div className="flex items-center justify-between px-12 py-12 min-h-[340px] relative">
        {/* content container */}

        {/* LEFT TEXT */}
        <div className="max-w-xl z-10">
          <h1 className="text-5xl font-bold whitespace-pre-line text-gray-900">
            {slides[active]?.title} {/* show title */}
          </h1>

          <p className="mt-6 text-xl whitespace-pre-line text-gray-700">
            {slides[active]?.subtitle} {/* show subtitle */}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full flex items-end justify-end pointer-events-none">
          {/* image container */}

          <img
            src={slides[active]?.img} // show image of current slide
            alt="slide"
            className="h-full object-contain opacity-95"
          />
        </div>

      </div>

      {/* DOTS NAVIGATION */}
      <div className="flex justify-center gap-2 pb-4">
        {slides.map((_, i) => (
          <button
            key={i} // unique key
            onClick={() => setActive(i)} // change slide on click
            className={`h-2 rounded-full ${
              active === i ? "w-6 bg-green-600" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero; // export component