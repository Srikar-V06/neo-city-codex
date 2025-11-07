import Navigation from "@/components/Navigation";
import BountyCard from "@/components/BountyCard";
import DangerAlert from "@/components/DangerAlert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import bountyBg from "@/assets/bounties-bg.jpg";
import { Search, Filter, TrendingUp } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";

const Bounties = () => {
  // Master bounty list (mock). In real app, fetch via React Query
  const allBounties = useMemo(
    () => [
      { target: "CIPHER GHOST", location: "Sector 7 - Data Nexus", reward: "₢ 45,000", timeLeft: "2h 15m", status: "urgent" as const },
      { target: "VIPER SYNDICATE", location: "Lower District", reward: "₢ 28,500", timeLeft: "8h 30m", status: "active" as const },
      { target: "NEURAL PHANTOM", location: "Corporate Tower", reward: "₢ 67,000", timeLeft: "1h 45m", status: "urgent" as const },
      { target: "SHADOW BROKER", location: "Black Market Hub", reward: "₢ 52,000", timeLeft: "12h 00m", status: "active" as const },
      { target: "TECH CARTEL", location: "Industrial Zone", reward: "₢ 38,900", timeLeft: "6h 20m", status: "active" as const },
      { target: "VOID RUNNER", location: "Neon Alley", reward: "₢ 41,500", timeLeft: "4h 55m", status: "active" as const },
      { target: "CRIMSON LOTUS", location: "Sector 3 - BioLabs", reward: "₢ 58,700", timeLeft: "9h 10m", status: "active" as const },
      { target: "DATAVORE", location: "SubNet 12", reward: "₢ 33,200", timeLeft: "7h 05m", status: "active" as const },
      { target: "WRAITH KING", location: "Corporate Tower", reward: "₢ 72,000", timeLeft: "3h 20m", status: "urgent" as const },
      { target: "ECHO FOX", location: "Neon Alley", reward: "₢ 27,800", timeLeft: "10h 40m", status: "active" as const },
      { target: "ION SERAPH", location: "SkyPort", reward: "₢ 63,500", timeLeft: "5h 00m", status: "active" as const },
      { target: "BLACK ICE", location: "Sector 9 - Data Node", reward: "₢ 49,900", timeLeft: "6h 45m", status: "active" as const },
    ],
    [],
  );

  const [visibleCount, setVisibleCount] = useState(6);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allBounties;
    return allBounties.filter((b) =>
      [b.target, b.location, b.status].some((field) => field.toLowerCase().includes(q)),
    );
  }, [allBounties, query]);

  const visibleBounties = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 z-0">
          <img 
            src={bountyBg} 
            alt="City rooftop view" 
            className="w-full h-full object-cover opacity-30 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl space-y-6 animate-slide-in-left">
            <div className="inline-block border border-primary/50 px-4 py-2 text-xs font-medium text-primary tracking-widest neon-border">
              [ BOUNTY BOARD ]
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-7xl tracking-tighter">
              <span className="text-primary neon-text">ACTIVE</span>{" "}
              <span className="text-foreground glitch-text" data-text="BOUNTIES">BOUNTIES</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              High-value targets available across all sectors. Time-sensitive operations with premium rewards. 
              Choose wisely, act fast.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-secondary">
                <TrendingUp className="w-5 h-5 animate-pulse" />
                <span className="font-display font-bold text-2xl">47</span>
                <span className="text-sm text-muted-foreground">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="SEARCH TARGETS..." 
                className="pl-10 bg-background/50 border-border/50 font-mono text-sm"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(6); // reset pagination on new search
                }}
              />
            </div>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10 font-display tracking-wider gap-2">
              <Filter size={16} />
              FILTER
            </Button>
          </div>
        </div>
      </section>

      {/* Bounties Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="container relative mx-auto px-6">
          <DangerAlert>
            Corporate security AI has been upgraded. All operatives advised to update neural dampeners 
            before engaging high-value targets. New biometric scanners detected in Sector 7.
          </DangerAlert>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {visibleBounties.map((bounty, index) => (
              <BountyCard
                key={index}
                {...bounty}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` } as CSSProperties}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg"
              onClick={() => setVisibleCount((c) => Math.min(c + 6, filtered.length))}
              disabled={!canLoadMore}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-display font-bold tracking-wider hover:scale-105 transition-all hover:shadow-xl hover:shadow-primary/50"
            >
              {canLoadMore ? "LOAD MORE BOUNTIES" : "NO MORE RESULTS"}
            </Button>
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

export default Bounties;
