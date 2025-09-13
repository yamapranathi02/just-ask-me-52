import { Button } from "@/components/ui/button";
import { Code, BookOpen, Zap, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-hero rounded-lg">
            <Code className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">CodeMentor AI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#tutorials" className="text-muted-foreground hover:text-foreground transition-colors">
            Tutorials
          </a>
          <a href="#exercises" className="text-muted-foreground hover:text-foreground transition-colors">
            Exercises
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};