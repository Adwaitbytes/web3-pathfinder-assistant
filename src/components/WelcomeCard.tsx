import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeCardProps {
  onGetStarted: () => void;
}

export const WelcomeCard = ({ onGetStarted }: WelcomeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card p-8 rounded-2xl shadow-lg backdrop-blur-sm max-w-xl w-full"
    >
      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
        Welcome to Web3
      </span>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">
        Your Journey into Web3 Starts Here
      </h1>
      <p className="text-muted-foreground mb-6 text-lg">
        Get personalized guidance, learn about wallets, and explore the world of
        cryptocurrency at your own pace.
      </p>
      <Button
        onClick={onGetStarted}
        className="group flex items-center gap-2 text-primary-foreground"
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};