"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SeparateLine from "./components/SeparateLine";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

export default function Home() {
  useEffect(() => {
    const initApp = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");

      const toggleMenu = () => {
        mobileMenu?.classList.toggle("hidden");
        mobileMenu?.classList.toggle("flex");
        hamburgerBtn?.classList.toggle("toggle-btn");
      };

      if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", toggleMenu);
        mobileMenu.addEventListener("click", toggleMenu);
      }

      return () => {
        if (hamburgerBtn && mobileMenu) {
          hamburgerBtn.removeEventListener("click", toggleMenu);
          mobileMenu.removeEventListener("click", toggleMenu);
        }
      };
    };

    initApp();
  }, []);
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto">
        <Hero />
        <SeparateLine />
        <Rockets />
        <SeparateLine />
        <Testimonials />
        <SeparateLine />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
