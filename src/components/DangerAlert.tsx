import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

interface DangerAlertProps {
  children: ReactNode;
}

const DangerAlert = ({ children }: DangerAlertProps) => {
  return (
    <div className="relative overflow-hidden border border-destructive/50 bg-destructive/10 rounded-lg p-6 neon-border animate-fade-in">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="relative flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 animate-pulse" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-destructive uppercase tracking-wider font-mono">
            [ SYSTEM ALERT ]
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DangerAlert;
