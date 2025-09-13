import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CodeAnalysisDemo } from "@/components/CodeAnalysisDemo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CodeAnalysisDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
