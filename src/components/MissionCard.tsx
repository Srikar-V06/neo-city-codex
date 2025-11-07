import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MissionCardProps {
  title: string;
  description: string;
  difficulty: "low" | "medium" | "high";
  reward: string;
  className?: string;
}

const MissionCard = ({ title, description, difficulty, reward, className }: MissionCardProps) => {
  const difficultyConfig = {
    low: { color: "text-secondary", icon: CheckCircle, label: "LOW RISK" },
    medium: { color: "text-accent", icon: AlertCircle, label: "MEDIUM RISK" },
    high: { color: "text-destructive", icon: XCircle, label: "HIGH RISK" },
  };

  const config = difficultyConfig[difficulty];
  const Icon = config.icon;

  return (
    <Card className={cn("group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 data-stream", className)}>
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="border-primary/50 text-primary font-mono text-xs neon-border">
            {reward}
          </Badge>
          <div className={cn("flex items-center gap-1", config.color)}>
            <Icon size={16} />
            <span className="text-xs font-mono">{config.label}</span>
          </div>
        </div>
        
        <CardTitle className="font-display text-xl tracking-tight group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <Button 
          variant="outline" 
          className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary font-display tracking-wider group-hover:scale-105 transition-all"
        >
          ACCEPT MISSION
        </Button>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
