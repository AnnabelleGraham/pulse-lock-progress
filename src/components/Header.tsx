import { Button } from "@/components/ui/button";
import { Lock, Activity } from "lucide-react";
import fitlockLogo from "@/assets/fitlock-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={fitlockLogo} alt="FitLock Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold glow-cyan">FitLock</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-foreground/80 hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#workouts" className="text-foreground/80 hover:text-primary transition-colors">
            Workouts
          </a>
          <a href="#stats" className="text-foreground/80 hover:text-primary transition-colors">
            Stats
          </a>
        </nav>
        
        <Button variant="neon" size="sm" className="gap-2">
          <Lock className="h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
