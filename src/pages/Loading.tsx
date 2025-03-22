
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StepIndicator from "@/components/StepIndicator";

const loadingMessages = [
  "Initializing system...",
  "Connecting to local server...",
  "Verifying credentials...",
  "Loading project data...",
  "Preparing environment...",
  "Almost there..."
];

const Loading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            navigate("/instructions");
          }, 500);
          return 100;
        }
        
        // Update message based on progress
        if (prev > 0 && prev % 16 === 0) {
          setMessageIndex(prev => (prev + 1) % loadingMessages.length);
        }
        
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto mb-10">
        <StepIndicator currentStep={2} totalSteps={4} />
      </div>
      
      <div className="w-full max-w-md mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Loader2 className="h-16 w-16 text-primary animate-spin" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Processing</h2>
        <p className="text-muted-foreground mb-6">{loadingMessages[messageIndex]}</p>
        
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default Loading;
