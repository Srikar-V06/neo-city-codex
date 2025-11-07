import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import terminalBg from "@/assets/terminal-bg.jpg";
import { User, Mail, Shield, Code } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const JoinSyndicate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! The Syndicate will contact you soon.", {
      description: "Check your secure channel for confirmation.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 z-0">
          <img 
            src={terminalBg} 
            alt="Terminal with city view" 
            className="w-full h-full object-cover opacity-20 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 pb-16">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left side - Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block border border-primary/50 px-4 py-2 text-xs font-medium text-primary tracking-widest neon-border">
                [ RECRUITMENT TERMINAL ]
              </div>
              
              <h1 className="font-display font-black text-6xl md:text-7xl tracking-tighter leading-none">
                <span className="text-primary neon-text">JOIN</span>
                <br />
                <span className="text-foreground glitch-text" data-text="THE FIGHT">THE FIGHT</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Syndicate is always searching for skilled operatives. Whether you're a hacker, 
                infiltrator, or tactical specialist, there's a place for you in the resistance.
              </p>

              <div className="space-y-6 pt-8">
                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">CUTTING-EDGE TECH</h3>
                    <p className="text-sm text-muted-foreground">Access to military-grade equipment and neural augmentations</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-secondary/30 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">ELITE TRAINING</h3>
                    <p className="text-sm text-muted-foreground">Learn from the best operatives in NEOCITY</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-accent/30 bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">GLOBAL NETWORK</h3>
                    <p className="text-sm text-muted-foreground">Connect with operatives across all sectors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="animate-slide-in-right">
              <div className="relative p-8 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md holographic">
                <div className="absolute inset-0 cyber-grid opacity-5" />
                
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-mono text-sm uppercase tracking-wider">
                      Operative Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="name"
                        placeholder="Enter your codename"
                        className="pl-10 bg-background/50 border-border/50 focus:border-primary font-mono"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-mono text-sm uppercase tracking-wider">
                      Secure Channel
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@encrypted.channel"
                        className="pl-10 bg-background/50 border-border/50 focus:border-primary font-mono"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-foreground font-mono text-sm uppercase tracking-wider">
                      Specialization
                    </Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary font-mono">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hacker">Hacker / Data Specialist</SelectItem>
                        <SelectItem value="infiltrator">Infiltrator / Scout</SelectItem>
                        <SelectItem value="combat">Combat Operative</SelectItem>
                        <SelectItem value="medic">Field Medic</SelectItem>
                        <SelectItem value="tech">Tech Specialist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground font-mono text-sm uppercase tracking-wider">
                      Experience / Skills
                    </Label>
                    <Textarea 
                      id="experience"
                      placeholder="Describe your relevant experience, skills, and why you want to join the Syndicate..."
                      className="min-h-32 bg-background/50 border-border/50 focus:border-primary font-mono resize-none"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wider hover:scale-105 transition-all hover:shadow-xl hover:shadow-primary/50"
                  >
                    SUBMIT APPLICATION
                  </Button>

                  <p className="text-xs text-center text-muted-foreground font-mono">
                    All applications are encrypted and reviewed within 48 hours
                  </p>
                </form>
              </div>
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

export default JoinSyndicate;
