import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Lightbulb,
  Code,
  Brain
} from "lucide-react";

const sampleCode = `function calculateFactorial(n) {
    if (n = 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(5));`;

const analysisResults = {
  errors: [
    { line: 2, type: "error", message: "Assignment operator '=' should be comparison '===' or '=='" },
  ],
  suggestions: [
    { line: 2, type: "suggestion", message: "Use strict equality (===) for better type safety" },
    { line: 1, type: "suggestion", message: "Add input validation for negative numbers" },
  ],
  explanation: "This function calculates the factorial of a number using recursion. However, there's a bug on line 2 where assignment (=) is used instead of comparison (===)."
};

export const CodeAnalysisDemo = () => {
  const [code, setCode] = useState(sampleCode);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Code Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste your code below and watch our AI analyze it in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Input */}
          <Card className="border border-code-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Your Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono text-sm min-h-[300px] bg-code-bg border-code-border"
                placeholder="Paste your code here..."
              />
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  {code.split('\n').length} lines, {code.length} characters
                </div>
                <Button 
                  variant="hero" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Analyze Code
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card className="border border-code-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showResults ? (
                <div className="space-y-6">
                  {/* Errors */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <XCircle className="h-4 w-4 text-error mr-2" />
                      Errors Found
                    </h4>
                    {analysisResults.errors.map((error, index) => (
                      <div key={index} className="bg-error/10 border border-error/20 rounded-lg p-3 mb-2">
                        <div className="flex items-start space-x-2">
                          <Badge variant="destructive" className="text-xs">
                            Line {error.line}
                          </Badge>
                          <span className="text-sm text-foreground">{error.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Suggestions */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Lightbulb className="h-4 w-4 text-warning mr-2" />
                      Suggestions
                    </h4>
                    {analysisResults.suggestions.map((suggestion, index) => (
                      <div key={index} className="bg-warning/10 border border-warning/20 rounded-lg p-3 mb-2">
                        <div className="flex items-start space-x-2">
                          <Badge variant="outline" className="text-xs">
                            Line {suggestion.line}
                          </Badge>
                          <span className="text-sm text-foreground">{suggestion.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explanation */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Code Explanation
                    </h4>
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                      <p className="text-sm text-foreground">{analysisResults.explanation}</p>
                    </div>
                  </div>

                  <Button variant="success" className="w-full">
                    Generate Learning Exercises
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                  <div className="text-center">
                    <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Analyze Code" to see AI insights</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};