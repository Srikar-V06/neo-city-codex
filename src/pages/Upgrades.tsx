import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const upgrades = [
  { id: 1, name: "Optic Enhancement", level: 2, max: 5, desc: "Improves low-light and thermal vision." },
  { id: 2, name: "Neural Accelerator", level: 1, max: 5, desc: "Reduces reaction latency." },
  { id: 3, name: "Dermal Plating", level: 3, max: 5, desc: "Increases physical resistance." },
];

const Upgrades = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-12 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <Wrench className="w-5 h-5 text-primary" />
          <h1 className="font-display text-3xl">AUGMENTATION LAB</h1>
        </div>
        <div className="space-y-6">
          {upgrades.map((u) => (
            <Card key={u.id} className="border-border/50 bg-card/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{u.name}</span>
                  <span className="text-sm font-mono text-muted-foreground">LVL {u.level}/{u.max}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground">{u.desc}</p>
                <Progress value={(u.level / u.max) * 100} />
                <Button variant="outline" size="sm" disabled>
                  Upgrade (Soon)
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Upgrades;
