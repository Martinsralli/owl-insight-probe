import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, FileText, Eye, Users, Zap } from "lucide-react";
import owlLogo from "@/assets/owl-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={owlLogo} alt="Profiler" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-foreground">Profiler</h1>
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            OSINT AI Platform
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={owlLogo} 
                alt="Profiler AI" 
                className="h-24 w-24 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Advanced <span className="text-owl-primary">OSINT Intelligence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Profiler is an expert AI agent designed to help you gather and analyze publicly available information ethically and efficiently. Perfect for due diligence, security analysis, journalism, and investigative research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button variant="owl" size="lg" className="text-lg px-8 py-3">
              Proceed to Platform
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-owl-primary" />
              <span>Ethical Use Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-owl-primary" />
              <span>Public Data Sources</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-owl-primary" />
              <span>Structured Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Platform Capabilities</h3>
            <p className="text-muted-foreground text-lg">Comprehensive OSINT research powered by advanced AI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <Search className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">Multi-Source Search</h4>
              </div>
              <p className="text-muted-foreground">
                Search across Google, Bing, LinkedIn, social media platforms, news articles, and business directories for comprehensive data gathering.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <Users className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">Identity Analysis</h4>
              </div>
              <p className="text-muted-foreground">
                Build comprehensive profiles including social media presence, career history, business affiliations, and behavioral patterns.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <FileText className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">Professional Reports</h4>
              </div>
              <p className="text-muted-foreground">
                Generate clean, structured PDF reports with executive summaries, confidence levels, and source verification.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <Shield className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">Ethical Framework</h4>
              </div>
              <p className="text-muted-foreground">
                Built-in ethical guidelines ensuring responsible use for legitimate purposes like due diligence and security analysis.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <Zap className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">AI-Powered Insights</h4>
              </div>
              <p className="text-muted-foreground">
                Advanced pattern recognition to identify recurring themes, anomalies, and key behavioral insights with confidence scoring.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-owl-accent/20 rounded-lg">
                  <Eye className="h-6 w-6 text-owl-primary" />
                </div>
                <h4 className="text-lg font-semibold">Source Verification</h4>
              </div>
              <p className="text-muted-foreground">
                Every piece of information is tagged with source URLs and confidence levels for complete transparency and verification.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Investigation?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Join professionals worldwide who trust Profiler for their OSINT research needs. 
              Create an account or log in to access the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="owl" size="lg" className="text-lg px-10 py-4">
                Create Account
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={owlLogo} alt="Profiler" className="h-8 w-8" />
              <span className="text-sm text-muted-foreground">
                © 2024 Profiler. Professional OSINT Intelligence Platform.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Ethical Guidelines</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Ethical Disclaimer Banner */}
      <div className="fixed bottom-4 right-4 max-w-sm">
        <Card className="p-4 bg-card/95 backdrop-blur-sm border shadow-elegant">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-owl-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Ethical Use Reminder</p>
              <p className="text-xs text-muted-foreground">
                This platform is designed for legitimate research purposes only. Misuse for harassment or stalking is strictly prohibited.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;