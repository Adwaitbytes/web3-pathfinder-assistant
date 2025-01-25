import { useState } from "react";
import { WelcomeCard } from "@/components/WelcomeCard";
import { ProgressCard } from "@/components/ProgressCard";
import { motion } from "framer-motion";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const modules = [
    {
      title: "Wallet Basics",
      progress: 0,
      description: "Learn about cryptocurrency wallets and how to set them up safely.",
    },
    {
      title: "Security Fundamentals",
      progress: 0,
      description: "Master the essentials of keeping your digital assets secure.",
    },
    {
      title: "DeFi Introduction",
      progress: 0,
      description: "Understand the basics of decentralized finance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-6">
      <div className="max-w-7xl mx-auto">
        {!showDashboard ? (
          <div className="h-screen flex items-center justify-center">
            <WelcomeCard onGetStarted={() => setShowDashboard(true)} />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Your Learning Journey</h2>
              <p className="text-muted-foreground">
                Track your progress and continue learning at your own pace.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <ProgressCard key={module.title} {...module} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;