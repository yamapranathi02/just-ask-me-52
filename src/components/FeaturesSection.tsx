import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Bug, 
  BookOpen, 
  Target, 
  Code2, 
  Lightbulb,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import codeAnalysisImage from "@/assets/code-analysis.jpg";

const features = [
  {
    icon: Brain,
    title: "Code Analysis & Explanation",
    description: "Advanced AI analyzes your code structure, logic, and provides detailed explanations of how your code works.",
    benefits: ["Real-time code understanding", "Pattern recognition", "Best practices suggestions"],
    color: "text-primary"
  },
  {
    icon: Bug,
    title: "Automated Error Detection",
    description: "Intelligent debugging that spots errors before you run your code and provides actionable solutions.",
    benefits: ["Smart error prediction", "Fix recommendations", "Learning from mistakes"],
    color: "text-error"
  },
  {
    icon: Target,
    title: "Exercise Generation",
    description: "Personalized programming challenges based on your skill level and learning progress.",
    benefits: ["Adaptive difficulty", "Custom scenarios", "Progress tracking"],
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Step-by-step guided learning with hands-on coding exercises and immediate feedback.",
    benefits: ["Visual learning paths", "Instant feedback", "Practical examples"],
    color: "text-secondary"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Learning Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to enhance your programming journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              See It In Action
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experience real-time code analysis and debugging with our interactive demo. 
              Paste your code and watch as our AI provides instant insights and improvements.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="text-foreground">Live syntax analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="text-foreground">Smart suggestions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bug className="h-5 w-5 text-primary" />
                <span className="text-foreground">Instant bug detection</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Try Demo Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-code rounded-2xl transform rotate-3"></div>
            <img 
              src={codeAnalysisImage} 
              alt="Code Analysis Interface" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-code border border-code-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};