
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-muted transform -translate-y-1/2"></div>
        
        {/* Completed line */}
        <div 
          className="absolute left-0 h-1 bg-primary transform -translate-y-1/2 top-1/2 transition-all duration-500"
          style={{ width: `${(100 * (currentStep - 1)) / (totalSteps - 1)}%` }}
        ></div>
        
        {/* Step indicators */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full z-10 transition-all duration-300",
                isCompleted ? "bg-green-500" : 
                isCurrent ? "bg-primary" : "bg-muted border border-muted-foreground/20"
              )}
            >
              {isCompleted ? (
                <Check className="h-6 w-6 text-white" />
              ) : (
                <span className={cn(
                  "text-xl font-semibold",
                  isCurrent ? "text-white" : "text-muted-foreground"
                )}>
                  {stepNumber}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
