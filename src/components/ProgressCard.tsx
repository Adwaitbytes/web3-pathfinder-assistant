import { motion } from "framer-motion";
import { CircleProgress } from "./CircleProgress";

interface ProgressCardProps {
  title: string;
  progress: number;
  description: string;
}

export const ProgressCard = ({ title, progress, description }: ProgressCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <CircleProgress progress={progress} />
      </div>
    </motion.div>
  );
};