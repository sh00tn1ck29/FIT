import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { WhatYouGet } from "./components/WhatYouGet";
import { Pricing } from "./components/Pricing";
import { Results } from "./components/Results";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Results />
      <Benefits />
      <WhatYouGet />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}