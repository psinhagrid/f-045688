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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleStartAnalysis();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <section className="section-container text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60 animate-float"></div>
            <div
              className="absolute top-40 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-40 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 fade-in-view">
              Intelligent Project Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-view tracking-tight">
              Project Analysis Tool
            </h1>
            <p className="text-xl text-muted-foreground mb-8 fade-in-view max-w-2xl mx-auto">
              Analyze your project for performance, code quality, security, and
              more. Get actionable insights to improve your codebase.
            </p>
            <Button
              onClick={handleStartAnalysis}
              onKeyDown={handleKeyDown}
              size="lg"
              className="fade-in-view text-lg px-8 py-6 h-auto rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              tabIndex={0}
              aria-label="Start your project analysis"
            >
              Start Analysis
            </Button>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-view">
              {[
                {
                  title: "Code Quality",
                  description:
                    "Identify code smells, complexity issues, and technical debt",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  ),
                },
                {
                  title: "Performance",
                  description:
                    "Optimize slow code paths and improve runtime efficiency",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Security",
                  description:
                    "Detect vulnerabilities and security risks in your code",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1 duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
