
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabs = [
    {
      title: "Stunning Design",
      description: "Simplicity is the ultimate sophistication. Every element has a purpose, with no unnecessary decoration or complexity.",
      features: [
        "Minimalist UI components",
        "Consistent visual language",
        "Perfect typography balance",
        "Thoughtful color palette"
      ]
    },
    {
      title: "Intuitive Experience",
      description: "An interface that feels like an extension of thought. Interactions that are natural, predictable, and satisfying.",
      features: [
        "Contextual interface elements",
        "Gesture-based navigation",
        "Responsive feedback",
        "Adaptive to user behavior"
      ]
    },
    {
      title: "Incredible Performance",
      description: "Speed is a feature. Every interaction is instantaneous, creating a feeling of direct manipulation.",
      features: [
        "Optimized rendering",
        "Efficient data handling",
        "Smooth animations",
        "Low memory footprint"
      ]
    }
  ];

  return (
    <section id="products" className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary/90 bg-primary/10 rounded-full">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crafted with precision
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our products are designed with meticulous attention to detail, 
            creating experiences that are both beautiful and functional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all",
                    activeTab === index 
                      ? "bg-primary text-white shadow-lg" 
                      : "hover:bg-white/80 hover:shadow-sm"
                  )}
                >
                  <h3 className="text-lg font-medium">{tab.title}</h3>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-2xl font-medium mb-4">
                {tabs[activeTab].title}
              </h4>
              <p className="text-foreground/70 mb-6">
                {tabs[activeTab].description}
              </p>
              
              <ul className="space-y-3">
                {tabs[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                      </svg>
                    </div>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 h-10 px-6 font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all hover:shadow-lg active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative">
              <div 
                className={cn(
                  "glass-panel p-4 rounded-2xl w-full max-w-2xl transition-all duration-700",
                  activeTab === 0 && "rotate-0 scale-100",
                  activeTab === 1 && "-rotate-2 scale-95",
                  activeTab === 2 && "rotate-2 scale-90"
                )}
              >
                <div className="h-8 flex items-center px-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                  </div>
                </div>
                
                <div className="aspect-video w-full bg-foreground/5 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white to-blue-100 flex items-center justify-center">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-primary/90 rounded-xl rotate-45 animate-pulse-subtle"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 6C7.58172 6 4 9.58172 4 14V22H20V14C20 9.58172 16.4183 6 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className={cn(
                  "absolute -z-10 w-40 h-40 rounded-full bg-blue-100 top-10 -right-10 transition-all duration-700",
                  activeTab === 0 && "scale-100 opacity-100",
                  activeTab === 1 && "scale-125 opacity-50",
                  activeTab === 2 && "scale-75 opacity-25"
                )}
              ></div>
              <div 
                className={cn(
                  "absolute -z-10 w-24 h-24 rounded-lg bg-blue-200/50 -bottom-4 -left-6 transition-all duration-700",
                  activeTab === 0 && "rotate-0 scale-100 opacity-50",
                  activeTab === 1 && "rotate-45 scale-125 opacity-75",
                  activeTab === 2 && "-rotate-45 scale-75 opacity-25"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
