import { useState } from "react";
import { WelcomeCard } from "@/components/WelcomeCard";
import { ProgressCard } from "@/components/ProgressCard";
import { LearningModule } from "@/components/LearningModule";
import { ChatAssistant } from "@/components/ChatAssistant";
import { motion } from "framer-motion";

const learningModules = [
  {
    id: 1,
    title: "Blockchain Fundamentals",
    description: "Learn the basic concepts of blockchain technology",
    content: `
      <h2>Introduction to Blockchain</h2>
      <p>A blockchain is a distributed database that maintains a continuously growing list of records called blocks.</p>
      <h3>Key Concepts:</h3>
      <ul>
        <li>Decentralization</li>
        <li>Immutability</li>
        <li>Transparency</li>
      </ul>
      <h3>How Blockchain Works</h3>
      <p>Each block contains a timestamp and a link to the previous block, forming a chain of information...</p>
    `,
  },
  {
    id: 2,
    title: "Cryptocurrency Basics",
    description: "Understanding digital currencies and tokens",
    content: `
      <h2>What is Cryptocurrency?</h2>
      <p>Cryptocurrencies are digital or virtual currencies that use cryptography for security...</p>
      <h3>Types of Cryptocurrencies:</h3>
      <ul>
        <li>Bitcoin (BTC)</li>
        <li>Ethereum (ETH)</li>
        <li>Other Altcoins</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Wallet Security",
    description: "Learn how to secure your digital assets",
    content: `
      <h2>Crypto Wallet Security</h2>
      <p>Protecting your digital assets is crucial in the Web3 space...</p>
      <h3>Best Practices:</h3>
      <ul>
        <li>Use Hardware Wallets</li>
        <li>Backup Your Seed Phrase</li>
        <li>Enable 2FA</li>
      </ul>
    `,
  },
];

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const progress = (completedModules.length / learningModules.length) * 100;

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
            
            <div className="mb-8">
              <ProgressCard
                title="Overall Progress"
                progress={progress}
                description={`${completedModules.length} of ${learningModules.length} modules completed`}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {learningModules.map((module) => (
                <LearningModule
                  key={module.id}
                  title={module.title}
                  description={module.description}
                  content={module.content}
                  onComplete={() => handleModuleComplete(module.id)}
                  isCompleted={completedModules.includes(module.id)}
                />
              ))}
            </div>

            <div className="mt-12">
              <ChatAssistant />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;