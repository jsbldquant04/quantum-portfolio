"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import QuantumBackground from "@/components/QuantumBackground";
import FloatingEquations from "@/components/FloatingEquations";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-quantum-400 focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>

      <LoadingScreen onDone={() => setLoaded(true)} />

      <QuantumBackground />
      <FloatingEquations />
      <div className="vignette pointer-events-none fixed inset-0 -z-[4]" aria-hidden />

      <Navigation />

      <main
        className={`relative transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
