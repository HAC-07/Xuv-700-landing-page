import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Sectiondata from "@/components/Sectiondata";

export default function Home() {
  useEffect(()=>{
 // Initialize Lenis
const lenis = new Lenis();
// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
  },[]);
  return (
    <main className="min-h-screen">
  <HeroSection />
  <Sectiondata/>
  {/* <Testimonial/> */}
</main>

  );
}
