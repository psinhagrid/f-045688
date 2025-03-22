
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white"
        aria-hidden="true"
      />
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-3xl opacity-50"
        aria-hidden="true"
      />
      
      <div
        ref={heroRef}
        className="section-container relative z-10 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-1000"
      >
        <span className="inline-block mb-6 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary/90 bg-primary/10 rounded-full">
          Introducing
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6">
          <span className="block">Beautiful design meets</span>
          <span className="block">perfect functionality</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10">
          Create experiences that are intuitive, elegant, and beautifully simple.
          Because the most powerful ideas don't need complexity to make an impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="h-12 px-8 text-white bg-primary hover:bg-primary/90 rounded-full transition-all hover:shadow-lg active:scale-[0.98]">
            Get Started
          </button>
          <button className="h-12 px-8 text-foreground border border-border hover:border-foreground/30 rounded-full transition-all hover:shadow-sm active:scale-[0.98]">
            Learn More
          </button>
        </div>

        <div className="mt-24 animate-float">
          <div className="relative flex justify-center">
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden glass-panel p-2">
              <div className="w-full h-full bg-foreground/5 rounded overflow-hidden">
                <div className="h-6 bg-foreground/10 flex items-center px-3 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                  <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                  <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary rounded-2xl shadow-lg transform rotate-12"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#features" 
          className="flex flex-col items-center text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
        >
          <span className="mb-2">Scroll down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
