import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import penthouseBg from "@/assets/penthouse-bg.jpg";
import { Activity, TrendingUp, Award, Clock, Zap, Target, Shield, Users } from "lucide-react";

const Safehouse = () => {
  const stats = [
    { label: "Missions Completed", value: "127", icon: Target, color: "text-primary" },
    { label: "Credits Earned", value: "₢ 2.4M", icon: Zap, color: "text-secondary" },
    { label: "Success Rate", value: "98.4%", icon: TrendingUp, color: "text-accent" },
    { label: "Active Hours", value: "1,247h", icon: Clock, color: "text-primary" },
  ];

  const recentMissions = [
    { name: "DATA HEIST", status: "completed", reward: "₢ 15,000", date: "2 days ago" },
    { name: "VP EXTRACTION", status: "completed", reward: "₢ 22,000", date: "5 days ago" },
    { name: "STREET SWEEP", status: "completed", reward: "₢ 8,500", date: "1 week ago" },
  ];

  const achievements = [
    { name: "Ghost Operative", description: "Complete 100 missions undetected", icon: Shield },
    { name: "Elite Hacker", description: "Break 50 corporate security systems", icon: Activity },
    { name: "Team Player", description: "Complete 25 co-op missions", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 z-0">
          <img 
            src={penthouseBg} 
            alt="Penthouse view" 
            className="w-full h-full object-cover opacity-20 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl space-y-6 animate-slide-in-left">
            <div className="inline-block border border-primary/50 px-4 py-2 text-xs font-medium text-primary tracking-widest neon-border">
              [ MEMBER SAFEHOUSE ]
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-lg border-2 border-primary/30 bg-primary/10 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="font-display font-black text-5xl md:text-6xl tracking-tighter">
                  <span className="text-foreground glitch-text" data-text="AGENT">AGENT</span>{" "}
                  <span className="text-primary neon-text">CIPHER</span>
                </h1>
                <p className="text-muted-foreground font-mono text-sm">ID: NEO-2077-ALPHA</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Badge variant="outline" className="border-primary/50 text-primary font-mono neon-border">
                ELITE OPERATIVE
              </Badge>
              <Badge variant="outline" className="border-secondary/50 text-secondary font-mono">
                LVL 47
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="relative group p-6 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` } as any}
                >
                  <div className="absolute inset-0 cyber-grid opacity-5" />
                  <div className="relative space-y-2">
                    <Icon className={`w-5 h-5 ${stat.color} animate-pulse`} />
                    <div className="font-display font-black text-3xl">{stat.value}</div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 relative">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="container relative mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Recent Missions */}
            <Card className="border-border/50 bg-card/40 backdrop-blur-md holographic animate-fade-in">
              <div className="absolute inset-0 cyber-grid opacity-5" />
              <CardHeader className="relative">
                <CardTitle className="font-display text-2xl tracking-tight flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  RECENT MISSIONS
                </CardTitle>
                <CardDescription>Your latest completed operations</CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {recentMissions.map((mission, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-background/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="space-y-1">
                      <p className="font-display font-bold text-sm group-hover:text-primary transition-colors">
                        {mission.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">{mission.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-primary">{mission.reward}</p>
                      <Badge variant="outline" className="border-secondary/50 text-secondary text-xs">
                        ✓ {mission.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 font-display tracking-wider"
                >
                  VIEW ALL MISSIONS
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-border/50 bg-card/40 backdrop-blur-md holographic animate-fade-in [animation-delay:200ms]">
              <div className="absolute inset-0 cyber-grid opacity-5" />
              <CardHeader className="relative">
                <CardTitle className="font-display text-2xl tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  ACHIEVEMENTS
                </CardTitle>
                <CardDescription>Your earned accolades</CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-border/30 bg-background/50 hover:border-accent/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-accent/30 bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-display font-bold text-sm group-hover:text-accent transition-colors">
                          {achievement.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
                <Button 
                  variant="outline"
                  className="w-full border-accent/30 hover:bg-accent/10 font-display tracking-wider"
                >
                  VIEW ALL ACHIEVEMENTS
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl tracking-tight mb-6 animate-fade-in">
              QUICK <span className="text-primary neon-text">ACTIONS</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "New Mission", icon: Target },
                { label: "Upgrade Gear", icon: Shield },
                { label: "Team Chat", icon: Users },
                { label: "Market", icon: Zap },
              ].map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-24 border-border/50 hover:border-primary/50 hover:bg-primary/10 font-display tracking-wider group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` } as any}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>{action.label}</span>
                    </div>
                  </Button>
                );
              })}
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

export default Safehouse;
