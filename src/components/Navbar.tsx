import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" absolute right-6 top-2 text-lg bg-gradient-to-b from-black/70 to-black/70 rounded-lg px-4 py-1 text-white">
      <div className="flex gap-8 ">
        <Link
          className="hover:text-neutral-200 transition-colors duration-200"
          href="https://auto.mahindra.com/own-online/model-selection"
        >
          Book Now
        </Link>
        <Link
          className="hover:text-neutral-200 transition-colors duration-200"
          href="https://auto.mahindra.com/on/demandware.store/Sites-amc-Site/en_IN/BookTestDrive-Begin?pid=X700"
        >
          Test Drive
        </Link>
        <Link
          className="hover:text-neutral-200 transition-colors duration-200"
          href="https://auto.mahindra.com/own-online/model-selection?cgid=suvs"
        >
          SUVs
        </Link>
        <Link
          className="hover:text-neutral-200 transition-colors duration-200"
          href="https://auto.mahindra.com/contact-us.html"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
