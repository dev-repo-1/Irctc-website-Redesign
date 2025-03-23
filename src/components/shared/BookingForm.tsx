
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, ArrowRight, Train } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';

const BookingForm = ({ className }: { className?: string }) => {
  const [date, setDate] = useState<Date>();
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for trains with:', { fromStation, toStation, date });
    // Here you would implement actual search functionality
  };

  return (
    <div className={cn('glass rounded-2xl p-6 sm:p-8 border-accent/10 shadow-md', className)}>
      <h2 className="text-lg sm:text-xl font-semibold mb-6 flex items-center">
        <Train className="w-5 h-5 mr-2 text-accent" />
        Book Your Journey
      </h2>
      
      <form onSubmit={handleSearch} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="from" className="text-sm font-medium text-muted-foreground">
              From
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="from"
                placeholder="Departure Station"
                className="pl-9 bg-white/50"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="to" className="text-sm font-medium text-muted-foreground">
              To
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="to"
                placeholder="Arrival Station"
                className="pl-9 bg-white/50"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium text-muted-foreground">
            Travel Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white/50",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select departure date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className="p-3"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <Button type="submit" className="w-full group bg-gradient-purple hover:opacity-90">
          <span>Search Trains</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
