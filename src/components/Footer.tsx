import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">CodeMentor AI</span>
            </div>
            <p className="text-muted-foreground">
              Empowering developers with AI-powered code learning and debugging assistance.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Code Analysis</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Error Detection</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Exercise Generation</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Interactive Tutorials</li>
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Beginner Tutorials</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Advanced Concepts</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Code Examples</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Best Practices</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Community</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CodeMentor AI. All rights reserved. Built with ❤️ for developers.</p>
        </div>
      </div>
    </footer>
  );
};