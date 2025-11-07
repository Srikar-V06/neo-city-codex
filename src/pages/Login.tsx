import Navigation from "@/components/Navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Mail, Lock } from "lucide-react";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Min 6 characters"),
});

type FormValues = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    // Mock auth persistence
    localStorage.setItem("auth_token", btoa(`${data.email}:${Date.now()}`));
    toast.success("Login successful", { description: "Redirecting to safehouse..." });
    setTimeout(() => navigate("/safehouse"), 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="container mx-auto px-6 max-w-md w-full">
          <div className="space-y-8 p-8 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md holographic animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="font-display font-black text-4xl tracking-tighter">
                <span className="text-primary neon-text">LOGIN</span>
              </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs tracking-wider">
                  EMAIL
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@domain.com"
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary font-mono"
                    {...register("email")}
                  />
                </div>
                {errors.email && <p className="text-xs text-destructive font-mono">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-mono text-xs tracking-wider">
                  PASSWORD
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary font-mono"
                    {...register("password")}
                  />
                </div>
                {errors.password && <p className="text-xs text-destructive font-mono">{errors.password.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wider hover:scale-105 transition-all"
              >
                {isSubmitting ? "AUTHENTICATING..." : "ENTER NEOCITY"}
              </Button>

              <p className="text-xs text-center text-muted-foreground font-mono">
                No account? <Link to="/signup" className="text-primary hover:underline">Signup here</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
