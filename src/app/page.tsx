'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Contact />
      <Footer />
    </main>
  );
}
