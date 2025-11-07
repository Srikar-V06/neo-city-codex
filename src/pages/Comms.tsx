import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MessageSquare } from "lucide-react";

const Comms = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; me?: boolean }>>([
    { id: 1, text: "[SYS] Secure channel established." },
    { id: 2, text: "Ops brief at 2300 hours. Bring dampeners.", me: true },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: Date.now(), text, me: true }]);
    setInput("");
    // mock reply
    setTimeout(() => setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Acknowledged." }]), 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-6 pt-28 pb-12 max-w-3xl">
        <Card className="border-border/50 bg-card/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              TEAM COMMS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[50vh] overflow-y-auto space-y-3 p-4 rounded-md bg-background/40 border border-border/30">
              {messages.map((m) => (
                <div key={m.id} className={`text-sm ${m.me ? "text-right" : "text-left"}`}>
                  <span className={`inline-block px-3 py-2 rounded ${m.me ? "bg-primary/20" : "bg-card/60"}`}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
              <Button onClick={send}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Comms;
