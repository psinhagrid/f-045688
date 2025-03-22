import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StepIndicator from "@/components/StepIndicator";
import { Card, CardContent } from "@/components/ui/card";

const loadingMessages = [
  "Analyzing project structure...",
  "Identifying code patterns...",
  "Running security checks...",
  "Evaluating code quality...",
  "Generating optimization suggestions...",
  "Preparing final report...",
];

const Loading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/instructions");
          }, 1500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <StepIndicator currentStep={2} totalSteps={4} fixedAtTop={true} />
      </div>

      <div
        id="page-content"
        className="w-full flex flex-col items-center justify-center flex-1"
      >
        <Card className="w-full max-w-md mx-auto shadow-lg mt-8">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-8">
              <Loader2 className="h-16 w-16 text-primary animate-spin" />
            </div>

            <h2 className="text-2xl font-semibold mb-6">Processing</h2>
            <p className="text-muted-foreground mb-6">
              {loadingMessages[messageIndex]}
            </p>

            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Loading;
