
import { ArrowRight, Clock, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface RouteCardProps {
  from: string;
  to: string;
  trainNumber: string;
  trainName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  date: string;
  availability: string;
  price: string;
  className?: string;
}

const RouteCard = ({
  from,
  to,
  trainNumber,
  trainName,
  departureTime,
  arrivalTime,
  duration,
  date,
  availability,
  price,
  className
}: RouteCardProps) => {
  return (
    <div className={cn(
      "glass rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md border border-white/30",
      className
    )}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
        {/* Train info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{trainNumber}</p>
              <h3 className="font-semibold text-lg">{trainName}</h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Price from</p>
              <p className="font-semibold text-lg text-accent">{price}</p>
            </div>
          </div>
          
          {/* Route & Time */}
          <div className="flex items-center space-x-2 mt-4">
            <div className="text-right">
              <p className="font-medium">{departureTime}</p>
              <p className="text-sm text-muted-foreground">{from}</p>
            </div>
            
            <div className="flex-1 relative px-2 h-0.5 mx-2 bg-gray-200">
              <div className="absolute -top-2 left-0 w-full flex justify-center">
                <p className="text-xs text-muted-foreground bg-white px-2">{duration}</p>
              </div>
              <div className="absolute -top-2 left-0">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              <div className="absolute -top-2 right-0">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
            </div>
            
            <div>
              <p className="font-medium">{arrivalTime}</p>
              <p className="text-sm text-muted-foreground">{to}</p>
            </div>
          </div>
        </div>
        
        {/* Info & CTA */}
        <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:min-w-48">
          <div className="flex gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{availability}</span>
            </div>
          </div>
          
          <Button className="w-full group bg-gradient-purple hover:opacity-90">
            <span>Book Now</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
