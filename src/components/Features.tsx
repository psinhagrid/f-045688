
import { useEffect, useRef } from "react";

type FeatureProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
};

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={featureRef}
      className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 7L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 17L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Intuitive Design",
      description: "Beautiful interfaces that feel natural and straightforward, with a focus on the user's needs and goals."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Lightning Fast",
      description: "Optimized performance that responds instantly to user interactions, creating a seamless experience."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Global Reach",
      description: "Designed for everyone, everywhere. Multilingual support with regional optimizations built in."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 7V17L12 21L20 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Modular Building",
      description: "Flexible components that work together seamlessly, allowing for endless customization possibilities."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 8H16C14.8954 8 14 7.10457 14 6V4.5C14 3.39543 14.8954 2.5 16 2.5H17.5C18.6046 2.5 19.5 3.39543 19.5 4.5V6C19.5 7.10457 18.6046 8 17.5 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8H6.5C5.39543 8 4.5 7.10457 4.5 6V4.5C4.5 3.39543 5.39543 2.5 6.5 2.5H8C9.10457 2.5 10 3.39543 10 4.5V6C10 7.10457 9.10457 8 8 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Smart Automation",
      description: "Intelligent systems that learn from user behavior to provide personalized experiences."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15.1019C19.165 15.9794 18.7652 16.8074 18.2 17.5C17.9 17.9 17.75 18.4 17.75 19C17.75 19.5527 17.5527 20.0747 17.25 20.5C16.75 21.2 15.75 21.5 14.94 21.38C14.3519 21.2706 13.7593 21.165 13.1681 21.0632C12.3887 20.9047 11.6069 20.9047 10.8264 21.0632C10.2342 21.165 9.6416 21.2706 9.05 21.38C8.25 21.5 7.25 21.2 6.76 20.5C6.43188 20.0771 6.25 19.5454 6.25 19C6.25 18.4 6.09 17.9 5.8 17.5C5.23558 16.8079 4.83521 15.9802 4.6 15.1031C4.40407 14.2538 4.40407 13.3662 4.6 12.5169C4.83481 11.6392 5.23451 10.8111 5.8 10.1187C6.09 9.7187 6.25 9.21875 6.25 8.68743C6.25 8.10626 6.4125 7.57493 6.76 7.18743C7.25 6.48743 8.25 6.18743 9.05 6.30618C9.64232 6.42515 10.2389 6.53072 10.8339 6.62493C11.6102 6.78493 12.3898 6.78493 13.1661 6.62493C13.7611 6.53072 14.3577 6.42515 14.95 6.30618C15.75 6.18743 16.75 6.48743 17.24 7.18743C17.5875 7.57493 17.75 8.10626 17.75 8.68743C17.75 9.21875 17.91 9.7187 18.2 10.1187C18.7652 10.8112 19.165 11.6392 19.4 12.5169C19.5932 13.3658 19.5932 14.253 19.4 15.1019Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secure by Design",
      description: "Built with privacy and security at its core, protecting data at every step of the user journey."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary/90 bg-primary/10 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed with purpose
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Every detail has been carefully considered to create a product that's not just beautiful, but genuinely useful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
