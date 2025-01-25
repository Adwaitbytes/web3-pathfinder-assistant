import { motion } from "framer-motion";

interface CircleProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export const CircleProgress = ({
  progress,
  size = 40,
  strokeWidth = 4,
}: CircleProgressProps) => {
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="text-muted stroke-current"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <motion.circle
          className="text-primary stroke-current"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeInOut" }}
          strokeDasharray={circumference}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
        {progress}%
      </div>
    </div>
  );
};