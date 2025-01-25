import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LearningModuleProps {
  title: string;
  description: string;
  content: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export const LearningModule = ({
  title,
  description,
  content,
  onComplete,
  isCompleted,
}: LearningModuleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleComplete = () => {
    onComplete();
    toast({
      title: "Module Completed!",
      description: "Great job! Keep learning and exploring Web3.",
    });
  };

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setIsOpen(true)}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{title}</CardTitle>
            {isCompleted && <CheckCircle className="text-green-500 h-6 w-6" />}
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 prose prose-sm">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          {!isCompleted && (
            <Button onClick={handleComplete} className="mt-4">
              Mark as Completed
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};