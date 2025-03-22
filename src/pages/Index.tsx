
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Essence | Beautiful Design Meets Perfect Functionality";
    
    // Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with the fade-in-view class
    document.querySelectorAll(".fade-in-view").forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(".fade-in-view").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;
