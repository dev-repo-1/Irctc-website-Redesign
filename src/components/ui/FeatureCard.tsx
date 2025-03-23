
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "glass rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group",
      className
    )}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
