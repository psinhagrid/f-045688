
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const codeExamples = [
  {
    title: "Test 1",
    code: `# Python example for Test 1
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

# Calculate factorial of 5
result = factorial(5)
print(f"The factorial of 5 is {result}")
`
  },
  {
    title: "Test 2",
    code: `# Python example for Test 2
import random

def generate_random_list(size, min_val, max_val):
    return [random.randint(min_val, max_val) for _ in range(size)]
    
# Generate a list of 10 random numbers between 1 and 100
random_list = generate_random_list(10, 1, 100)
print(f"Random list: {random_list}")
`
  },
  {
    title: "Test 3",
    code: `# Python example for Test 3
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# Create a new person and print greeting
person = Person("Alice", 30)
print(person.greet())
`
  }
];

const CodeExamples = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/report");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto mb-10">
        <StepIndicator currentStep={3} totalSteps={4} />
      </div>
      
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center border-b pb-4">
          <CardTitle className="text-2xl">Code Examples</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {codeExamples.map((example, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {example.title}
                </AccordionTrigger>
                <AccordionContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">{example.code}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button onClick={handleContinue} size="lg">
            Continue to Report
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CodeExamples;
