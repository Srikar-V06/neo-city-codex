import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface BountyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string;
  location: string;
  reward: string;
  timeLeft: string;
  status: "active" | "urgent" | "completed";
}

const BountyCard = ({ target, location, reward, timeLeft, status, className, ...props }: BountyCardProps) => {
  const statusConfig = {
    active: { color: "text-secondary", bgColor: "bg-secondary/20", label: "ACTIVE" },
    urgent: { color: "text-destructive", bgColor: "bg-destructive/20", label: "URGENT" },
    completed: { color: "text-muted-foreground", bgColor: "bg-muted/20", label: "COMPLETED" },
  };

  const config = statusConfig[status];

  return (
    <Card className={cn(
      "group relative overflow-hidden border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2",
      className
    )} {...props}>
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
      
      <CardContent className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {target}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Target size={14} />
              {location}
            </p>
          </div>
          <Badge variant="outline" className={cn("border-0", config.bgColor, config.color, "font-mono text-xs")}>
            {config.label}
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-2 text-primary">
            <Zap size={16} className="animate-pulse" />
            <span className="font-display font-bold text-lg">{reward}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={14} />
            <span className="text-xs font-mono">{timeLeft}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BountyCard;
