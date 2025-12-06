import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Sectiondata from "@/components/Sectiondata";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>XUV 700 - Landing Page</title>
        <meta name="description" content="XUV 700 landing page created to learn about parallax scrolling and smooth scroll using lenis" />

        {/* 👇 Open Graph Tags */}
        <meta property="og:title" content="XUV 700 - Landing Page" />
        <meta property="og:description" content="XUV 700 landing page created to learn about parallax scrolling and smooth scroll using lenis" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://xuv-700-landing-page.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* 👇 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
        <Sectiondata />
      </main>
    </>
  );
}
