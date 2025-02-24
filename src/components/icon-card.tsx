import { Card, CardContent } from "@/components/ui/card";

interface IconCardProps {
  icon: { name: string; Icon: React.ComponentType<any>; setName: string };
  onClick: () => void;
}

export default function IconCard({ icon, onClick }: IconCardProps) {
  return (
    <Card
      className="flex flex-col items-center justify-center p-4 hover:bg-accent transition-colors cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-0 flex flex-col items-center gap-1">
        <div className="w-8 h-8 flex items-center justify-center">
          <icon.Icon color={"var(--foreground)"} />
        </div>
        <p className="text-xs text-center truncate w-full text-muted-foreground">
          {icon.name}
        </p>
        {/* <p className="text-xs text-center text-muted-foreground">
          {icon.setName}
        </p> */}
      </CardContent>
    </Card>
  );
}
