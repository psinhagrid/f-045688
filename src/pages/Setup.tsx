
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import StepIndicator from "@/components/StepIndicator";
import { toast } from "sonner";

const Setup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    localHostPort: "",
    projectDirectory: "",
    username: "",
    password: "",
    userRequest: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form - only mandatory fields
    if (!formData.localHostPort || !formData.projectDirectory) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Store form data in sessionStorage for later use
    sessionStorage.setItem('setupData', JSON.stringify(formData));
    
    // Navigate to loading page
    navigate("/loading");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto mb-10">
        <StepIndicator currentStep={1} totalSteps={3} />
      </div>
      
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Setup Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="localHostPort" className="text-sm font-medium">
                Local Host Port <span className="text-destructive">*</span>
              </label>
              <Input
                id="localHostPort"
                name="localHostPort"
                placeholder="e.g., 3000"
                value={formData.localHostPort}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="projectDirectory" className="text-sm font-medium">
                Project Directory <span className="text-destructive">*</span>
              </label>
              <Input
                id="projectDirectory"
                name="projectDirectory"
                placeholder="e.g., /user/projects/myapp"
                value={formData.projectDirectory}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username for Test Application
              </label>
              <Input
                id="username"
                name="username"
                placeholder="Enter test username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password for Test Application
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter test password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="userRequest" className="text-sm font-medium">
                User Request
              </label>
              <Input
                id="userRequest"
                name="userRequest"
                placeholder="Enter your request (optional)"
                value={formData.userRequest}
                onChange={handleChange}
              />
            </div>
            
            <Button type="submit" className="w-full mt-6">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Setup;
