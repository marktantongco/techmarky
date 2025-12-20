"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />
      <Logos />
      <Features />
      <Portfolio />
      <Carousel />
      <ContactForm />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
