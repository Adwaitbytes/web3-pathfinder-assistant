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
    `,
  },
  {
    id: 2,
    title: "Cryptocurrency Basics",
    description: "Understanding digital currencies and tokens",
    content: `
      <h2>What is Cryptocurrency?</h2>
      <p>Cryptocurrencies are digital assets designed to work as a medium of exchange.</p>
    `,
  },
  {
    id: 3,
    title: "Wallet Security",
    description: "Learn how to secure your digital assets",
    content: `
      <h2>Crypto Wallet Security</h2>
      <p>Protecting your digital assets is crucial in the Web3 space.</p>
    `,
  },
  {
    id: 4,
    title: "Smart Contracts",
    description: "Understanding automated, self-executing contracts",
    content: `
      <h2>Smart Contracts Explained</h2>
      <p>Smart contracts are self-executing contracts with terms directly written into code.</p>
    `,
  },
  {
    id: 5,
    title: "DeFi Fundamentals",
    description: "Introduction to Decentralized Finance",
    content: `
      <h2>What is DeFi?</h2>
      <p>DeFi refers to financial services using smart contracts on blockchains.</p>
    `,
  },
  {
    id: 6,
    title: "NFTs Explained",
    description: "Understanding Non-Fungible Tokens",
    content: `
      <h2>NFT Basics</h2>
      <p>NFTs are unique digital assets that represent ownership of specific items.</p>
    `,
  },
  {
    id: 7,
    title: "Web3 Architecture",
    description: "Technical overview of Web3 infrastructure",
    content: `
      <h2>Web3 Stack</h2>
      <p>Learn about the technical components that make Web3 applications possible.</p>
    `,
  },
  {
    id: 8,
    title: "Consensus Mechanisms",
    description: "Understanding PoW and PoS",
    content: `
      <h2>Blockchain Consensus</h2>
      <p>Explore different methods for achieving agreement in decentralized networks.</p>
    `,
  },
  {
    id: 9,
    title: "Tokenomics",
    description: "Token Economics and Design",
    content: `
      <h2>Token Economics</h2>
      <p>Understanding the economic models behind cryptocurrency tokens.</p>
    `,
  },
  {
    id: 10,
    title: "DAOs",
    description: "Decentralized Autonomous Organizations",
    content: `
      <h2>DAO Fundamentals</h2>
      <p>Learn about community-led organizations on the blockchain.</p>
    `,
  },
  {
    id: 11,
    title: "Crypto Trading",
    description: "Basic trading concepts and strategies",
    content: `
      <h2>Trading Fundamentals</h2>
      <p>Understanding cryptocurrency markets and trading basics.</p>
    `,
  },
  {
    id: 12,
    title: "Layer 2 Solutions",
    description: "Scaling blockchain networks",
    content: `
      <h2>Scaling Solutions</h2>
      <p>Learn about different approaches to blockchain scaling.</p>
    `,
  },
  {
    id: 13,
    title: "Crypto Security",
    description: "Advanced security practices",
    content: `
      <h2>Security Best Practices</h2>
      <p>Protecting your assets with advanced security measures.</p>
    `,
  },
  {
    id: 14,
    title: "Web3 Development",
    description: "Building on blockchain",
    content: `
      <h2>Development Basics</h2>
      <p>Introduction to Web3 development tools and frameworks.</p>
    `,
  },
  {
    id: 15,
    title: "Crypto Regulations",
    description: "Legal aspects of cryptocurrency",
    content: `
      <h2>Regulatory Landscape</h2>
      <p>Understanding the legal framework around cryptocurrencies.</p>
    `,
  }
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