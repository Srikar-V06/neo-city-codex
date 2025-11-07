import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import cityLayers from "@/assets/city-layers.jpg";
import { Shield, Cpu, Zap, Users } from "lucide-react";

const Lore = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeline = [
    {
      year: "2045",
      title: "THE COLLAPSE",
      description: "Global economic systems failed. Mega-corporations seized control. Traditional governments dissolved into corporate territories. The old world ended.",
      icon: Shield,
    },
    {
      year: "2055",
      title: "NEURAL REVOLUTION",
      description: "Direct brain-computer interfaces became standard. The digital divide transformed into a neural divide. Those without augmentation became second-class citizens.",
      icon: Cpu,
    },
    {
      year: "2067",
      title: "SYNDICATE FORMATION",
      description: "Underground networks formed to challenge corporate tyranny. NEOCITY Syndicate emerged as the primary resistance force. A new kind of warfare began.",
      icon: Zap,
    },
    {
      year: "2077",
      title: "PRESENT DAY",
      description: "The war for freedom continues in the shadows. Every operative counts. Every mission matters. The future hangs in the balance.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Parallax Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="scan-line" />
        <div 
          ref={parallaxRef}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <img 
            src={cityLayers} 
            alt="City layers" 
            className="w-full h-[120vh] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <div className="inline-block border border-primary/50 px-4 py-2 text-xs font-medium text-primary tracking-widest neon-border">
              [ SYNDICATE ARCHIVES ]
            </div>
            
            <h1 className="font-display font-black text-7xl md:text-8xl tracking-tighter leading-none">
              <span className="text-foreground glitch-text" data-text="THE">THE</span>
              <br />
              <span className="text-primary neon-text">STORY</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              How the world fell. How we rose. The truth behind NEOCITY and the war that never ends.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-card/50">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative flex flex-col md:flex-row gap-8 group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` } as any}
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur-sm group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 neon-border">
                      <div className="text-center">
                        <Icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-display font-black text-2xl text-primary neon-text">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-display font-bold text-3xl tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Connecting line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lore Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-center mb-16 animate-fade-in">
            <span className="text-primary neon-text">KEY</span>{" "}
            <span className="text-foreground glitch-text" data-text="FACTIONS">FACTIONS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "THE SYNDICATE",
                description: "Freedom fighters operating in the shadows. Masters of infiltration, data extraction, and guerrilla tactics.",
                color: "primary",
              },
              {
                name: "MEGACORPS",
                description: "Corporate overlords controlling territories through advanced AI, surveillance, and private armies.",
                color: "destructive",
              },
              {
                name: "STREET RUNNERS",
                description: "Independent operators navigating between factions. Mercenaries, hackers, and information brokers.",
                color: "secondary",
              },
            ].map((faction, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in data-stream"
                style={{ animationDelay: `${index * 150}ms` } as any}
              >
                <div className="absolute inset-0 cyber-grid opacity-5" />
                <div className="relative space-y-4">
                  <h3 className="font-display font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">
                    {faction.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faction.description}
                  </p>
                </div>
              </div>
            ))}
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

export default Lore;
