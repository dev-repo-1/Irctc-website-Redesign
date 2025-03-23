
import { useInView, getAnimationClass } from '@/utils/animations';
import RouteCard from '../ui/RouteCard';
import { cn } from '@/lib/utils';

const popularRoutes = [
  {
    id: 1,
    from: 'New Delhi',
    to: 'Mumbai Central',
    trainNumber: '12952',
    trainName: 'Mumbai Rajdhani',
    departureTime: '16:25',
    arrivalTime: '08:15',
    duration: '15h 50m',
    date: 'Today',
    availability: 'Available',
    price: '₹1,855'
  },
  {
    id: 2,
    from: 'New Delhi',
    to: 'Howrah',
    trainNumber: '12301',
    trainName: 'Howrah Rajdhani',
    departureTime: '16:55',
    arrivalTime: '09:55',
    duration: '17h 00m',
    date: 'Tomorrow',
    availability: 'Available',
    price: '₹1,930'
  },
  {
    id: 3,
    from: 'New Delhi',
    to: 'Chennai Central',
    trainNumber: '12615',
    trainName: 'Grand Trunk Exp',
    departureTime: '18:20',
    arrivalTime: '19:40',
    duration: '25h 20m',
    date: 'Tue, 15 Jun',
    availability: 'WL (15)',
    price: '₹2,045'
  }
];

const PopularRoutes = () => {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: routesRef, isInView: routesInView } = useInView({ threshold: 0.05 });

  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          ref={titleRef}
          className={getAnimationClass(titleInView, 'animate-fade-in', '')}
        >
          <h2 className="text-3xl font-bold text-center mb-3">Popular Routes</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Discover the most traveled train routes across India with competitive prices and convenient schedules
          </p>
        </div>
        
        <div 
          ref={routesRef}
          className="grid gap-6"
        >
          {popularRoutes.map((route, index) => (
            <RouteCard
              key={route.id}
              {...route}
              className={cn(
                getAnimationClass(
                  routesInView, 
                  'animate-slide-in-bottom', 
                  `animate-stagger-${index + 1}`
                ),
                'opacity-0'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
