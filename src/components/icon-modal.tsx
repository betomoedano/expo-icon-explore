import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface IconModalProps {
  icon: { name: string; Icon: React.ComponentType<any>; setName: string };
  onClose: () => void;
}

export default function IconModal({ icon, onClose }: IconModalProps) {
  const [copied, setCopied] = useState(false);

  const codeString = `import { ${icon.name} } from '${icon.setName}'

<${icon.name} />`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{icon.name}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center my-4">
          <icon.Icon className="w-16 h-16" />
        </div>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{codeString}</code>
        </pre>
        <Button onClick={copyToClipboard} className="mt-4">
          {copied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}