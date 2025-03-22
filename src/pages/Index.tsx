
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Project Analyzer | Setup Your Project Analysis";
    
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

  const handleStartAnalysis = () => {
    navigate("/setup");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        <section className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-view">
              Project Analysis Tool
            </h1>
            <p className="text-xl text-muted-foreground mb-8 fade-in-view">
              Analyze your project for performance, code quality, security, and more.
              Get actionable insights to improve your codebase.
            </p>
            <Button 
              onClick={handleStartAnalysis}
              size="lg" 
              className="fade-in-view text-lg px-8 py-6 h-auto"
            >
              Start Analysis
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
