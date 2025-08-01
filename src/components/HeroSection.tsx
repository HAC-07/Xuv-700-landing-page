import React from "react";
import { HighlightItems } from "./HighlightItem";
import Navbar from "./Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center text-black">
      {/* nav */}
      <Navbar />
      {/* vid */}
      <div className=" absolute inset-0 -z-10">
        <div className=" absolute inset-0 bg-black/30 z-10" />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* text */}
      <div className="flex flex-col items-center gap-24 text-white">
        <div className="flex flex-col items-center gap-8 ">
          <h1 className="text-6xl max-w-[15ch] text-center font-serif">
            Experience the draw of Gravity.
          </h1>
          <p>Redefining the futere of SUVs</p>
          <Link href="https://auto.mahindra.com/on/demandware.store/Sites-amc-Site/en_IN/Stores-FindSelectedStores?showMap=true&radius=100">
            <button className="bg-white text-black uppercase px-6 py-2 rounded-md hover:bg-black transition-colors duration-200 hover:text-white">
              Nearby Dealers
            </button>
          </Link>
        </div>
        <div className="flex justify-between w-4/5 max-w-[900px] max-lg:gap-4 mx-6 items-center">
          <HighlightItems title="Mileage" content="Over 16 kmpl" />
          <div className="w-[2px] h-full bg-white "></div>
          <HighlightItems title="Peak Power" content="Over 180 bhp" />
          <div className="w-[2px] h-full bg-white "></div>
          <HighlightItems title="Seating" content="Up to 7" />
          <div className="w-[2px] h-full bg-white "></div>
          <HighlightItems title="0-100 km/h" content="Under 9 secs" />{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
