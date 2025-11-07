import Navigation from "@/components/Navigation";
import MissionCard from "@/components/MissionCard";
import DangerAlert from "@/components/DangerAlert";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import character from "@/assets/character.jpg";
import { ChevronRight, Zap, Database, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Cyberpunk cityscape" 
            className="w-full h-full object-cover opacity-40 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block border border-primary/50 px-4 py-2 text-xs font-medium text-primary tracking-widest animate-fade-in neon-border">
                [ ROGUE GAME ]
              </div>
              
              <div className="space-y-4">
                <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter animate-fade-in">
                  <span className="text-foreground glitch-text" data-text="NEO">NEO</span>
                  <span className="text-primary neon-text">CITY</span>
                </h1>
                <p className="text-xl font-medium tracking-wide text-secondary animate-glow">
                  LVL UP
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                In the neon-lit streets of NEOCITY, survival means choosing the right mission. 
                Hack corporate databases, sweep the streets clean, or extract high-value targets. 
                The Syndicate needs operatives like you.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-delay">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wider group hover:scale-105 transition-all hover:shadow-xl hover:shadow-primary/50"
                >
                  START MISSION
                  <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 font-display tracking-wider hover:scale-105 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                  VIEW ARCHIVE
                </Button>
              </div>

              <div className="flex gap-8 pt-4 animate-fade-in-delay">
                <div className="space-y-1 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-secondary animate-pulse" />
                    <span className="text-2xl font-display font-bold text-foreground">2.5K</span>
                  </div>
                  <p className="text-xs text-muted-foreground">ACTIVE AGENTS</p>
                </div>
                <div className="space-y-1 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-2xl font-display font-bold text-foreground">156</span>
                  </div>
                  <p className="text-xs text-muted-foreground">MISSIONS COMPLETED</p>
                </div>
                <div className="space-y-1 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent animate-pulse" />
                    <span className="text-2xl font-display font-bold text-foreground">8</span>
                  </div>
                  <p className="text-xs text-muted-foreground">SYNDICATES</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <img 
                src={character} 
                alt="Cyberpunk operative" 
                className="relative w-full h-auto rounded-lg border-2 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section id="missions" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              AVAILABLE <span className="text-primary neon-text glitch-text" data-text="MISSIONS">MISSIONS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Choose your path carefully. Each mission carries its own risks and rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <MissionCard
              title="DATA HEIST"
              description="Infiltrate enemy territory and retrieve the prototype schematics. Best option before it gets wiped."
              difficulty="high"
              reward="15,000 CR"
              className="animate-fade-in"
            />
            <MissionCard
              title="STREET SWEEP"
              description="A precision strike to clear corporate assets from sector 7. Set, land a message. Own the sector. No witnesses."
              difficulty="medium"
              reward="8,500 CR"
              className="animate-fade-in [animation-delay:200ms]"
            />
            <MissionCard
              title="VP EXTRACTION"
              description="A precision op to extract a high-value asset from their penthouse in the blockchain tower. Expect resistance."
              difficulty="high"
              reward="22,000 CR"
              className="animate-fade-in [animation-delay:400ms]"
            />
          </div>

          <DangerAlert>
            System alert: Corporate security has increased surveillance in all sectors. 
            Neural dampeners recommended for all field operations. Stay sharp.
          </DangerAlert>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="scan-line" />
        <div className="container relative mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3 hover:scale-110 transition-transform cursor-pointer animate-fade-in">
              <div className="font-display font-black text-5xl text-primary neon-text">98.7%</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Success Rate</p>
            </div>
            <div className="space-y-3 hover:scale-110 transition-transform cursor-pointer animate-fade-in [animation-delay:200ms]">
              <div className="font-display font-black text-5xl text-secondary animate-glow">24/7</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Operations Active</p>
            </div>
            <div className="space-y-3 hover:scale-110 transition-transform cursor-pointer animate-fade-in [animation-delay:400ms]">
              <div className="font-display font-black text-5xl text-accent">₢ 2.8M</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Credits Paid</p>
            </div>
            <div className="space-y-3 hover:scale-110 transition-transform cursor-pointer animate-fade-in [animation-delay:600ms]">
              <div className="font-display font-black text-5xl text-primary neon-text glitch-text" data-text="Zero">Zero</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Traces Left</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-medium">
              © 2077 NEOCITY SYNDICATE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110">
                PRIVACY PROTOCOL
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110">
                TERMS OF SERVICE
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
