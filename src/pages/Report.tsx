import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import StepIndicator from "@/components/StepIndicator";

interface AnalysisResult {
  category: string;
  score: number;
  details: string;
  recommendation: string;
}

const Report = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [summary, setSummary] = useState({
    score: 0,
    issues: 0,
    improvements: 0,
  });

  useEffect(() => {
    // Simulate loading data from previous steps
    const setupData = sessionStorage.getItem("setupData");
    if (!setupData) {
      navigate("/setup");
      return;
    }

    // Mock analysis results
    const mockResults: AnalysisResult[] = [
      {
        category: "Performance",
        score: 78,
        details: "Found 3 performance bottlenecks in server configuration",
        recommendation: "Optimize server settings for improved response times",
      },
      {
        category: "Code Quality",
        score: 85,
        details: "Good code structure with some minor improvements needed",
        recommendation:
          "Implement consistent error handling throughout the application",
      },
      {
        category: "Security",
        score: 62,
        details: "Several potential security vulnerabilities detected",
        recommendation:
          "Update authentication flow and implement proper input validation",
      },
      {
        category: "Accessibility",
        score: 91,
        details: "Most components follow accessibility guidelines",
        recommendation: "Add missing aria labels to interactive elements",
      },
      {
        category: "Documentation",
        score: 45,
        details: "Insufficient documentation in key modules",
        recommendation: "Add comprehensive JSDoc comments to public APIs",
      },
    ];

    // Simulate API call delay
    setTimeout(() => {
      setResults(mockResults);
      setSummary({
        score: 72,
        issues: 8,
        improvements: 15,
      });
    }, 500);
  }, [navigate]);

  const handleStartOver = () => {
    sessionStorage.clear();
    navigate("/"); // Changed from '/setup' to '/' to navigate to the Index page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <StepIndicator currentStep={5} totalSteps={5} fixedAtTop={true} />
      </div>

      <div
        id="page-content"
        className="w-full flex flex-col items-center flex-1"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8 text-center mt-8">
            Analysis Report
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center mb-2">
                  {summary.score}/100
                </div>
                <Progress value={summary.score} className="h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Issues Found</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center">
                  {summary.issues}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center">
                  {summary.improvements}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Recommendation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {result.category}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              result.score > 70
                                ? "text-green-600"
                                : result.score > 50
                                ? "text-amber-600"
                                : "text-red-600"
                            }
                          >
                            {result.score}%
                          </span>
                          <Progress
                            value={result.score}
                            className={`h-2 w-16 ${
                              result.score > 70
                                ? "bg-green-100"
                                : result.score > 50
                                ? "bg-amber-100"
                                : "bg-red-100"
                            }`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>{result.details}</TableCell>
                      <TableCell>{result.recommendation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={handleStartOver}
              variant="outline"
              className="mr-4"
            >
              Start Over
            </Button>
            <Button>Export Report (PDF)</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
