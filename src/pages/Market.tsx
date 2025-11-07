import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const items = [
  { id: 1, name: "Neural Dampener Mk.II", price: "₢ 12,000" },
  { id: 2, name: "Stealth Weave Armor", price: "₢ 28,500" },
  { id: 3, name: "Quantum Lockpick", price: "₢ 7,800" },
  { id: 4, name: "EMP Charge x3", price: "₢ 4,500" },
];

const Market = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-12">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <h1 className="font-display text-3xl">BLACK MARKET</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="border-border/50 bg-card/40 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-muted-foreground font-mono">{item.price}</div>
                <Button variant="outline">Acquire</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Market;
