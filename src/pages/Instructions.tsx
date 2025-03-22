
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { CheckCircle2 } from "lucide-react";

const instructionPoints = [
  "This program will analyze your project structure and identify potential improvements.",
  "The analysis will not modify any files without your explicit permission.",
  "Results will be presented as recommendations that you can review and implement.",
  "Performance analysis may take a few minutes depending on project size.",
  "All data is processed locally and never leaves your machine.",
  "You can export the final report to PDF for future reference.",
  "The tool will highlight best practices and optimization opportunities.",
  "Code quality metrics will be based on industry standards.",
  "Security vulnerabilities will be flagged according to OWASP guidelines.",
  "You can run this tool periodically to track your project's improvements."
];

const Instructions = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/report");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto mb-10">
        <StepIndicator currentStep={3} totalSteps={3} />
      </div>
      
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center border-b pb-4">
          <CardTitle className="text-2xl">Instructions & Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {instructionPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button onClick={handleAccept} size="lg">
            Accept & Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Instructions;
