import React from "react"; // import React

// logo component using SVG
const StanzaLogo = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none"> {/* svg container */}
    <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#2dc8a0" /> {/* outer hexagon */}
    <path d="M13 20 L20 14 L27 20 L27 27 L13 27 Z" fill="white" opacity="0.9" /> {/* inner house shape */}
    <rect x="17" y="22" width="6" height="5" fill="#2dc8a0" /> {/* small door */}
  </svg>
);

// footer links data (object with sections)
const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"], // company links
  Support: ["Help Center", "Contact Us", "Safety", "Cancellation Policy"], // support links
  Cities: ["Pune", "Bangalore", "Hyderabad", "Delhi", "Mumbai"], // cities list
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"], // legal links
};

export default function Footer() { // main footer component
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-10">
      {/* main footer container */}

      <div className="max-w-6xl mx-auto">
        {/* center align content */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* grid: 2 columns small screen, 5 columns medium+ */}

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            {/* takes 2 columns on small, 1 on medium */}

            <div className="flex items-center gap-2 mb-3">
              <StanzaLogo /> {/* show logo */}
              
              <div className="leading-tight">
                <span className="block text-sm font-bold text-gray-900">
                  stanza
                </span>
                <span className="block text-sm font-bold text-gray-900">
                  living
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Tech-enabled coliving spaces designed for the modern resident.
            </p>
            {/* small description text */}
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            // convert object into array and loop

            <div key={section}> {/* each section */}

              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                {section} {/* section name */}
              </h4>

              <ul className="space-y-2">
                {/* list of links */}

                {links.map((link) => (
                  // loop through links

                  <li key={link}>
                    <a
                      href="#" // link (currently dummy)
                      className="text-xs text-gray-500 hover:text-[#2dc8a0] transition-colors"
                    >
                      {link} {/* display link text */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* bottom section with top border */}

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Stanza Living. All rights reserved.
          </p>
          {/* current year using JS Date */}

          <div className="flex items-center gap-4">
            {/* social links */}

            {["Twitter", "Instagram", "LinkedIn", "Facebook"].map((s) => (
              // loop social names

              <a
                key={s} // unique key
                href="#" // dummy link
                className="text-xs text-gray-400 hover:text-[#2dc8a0] transition-colors"
              >
                {s} {/* show social name */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}