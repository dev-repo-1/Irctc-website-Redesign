
import { Clock, Bell, Shield, Zap, Calendar, CreditCard } from 'lucide-react';
import { useInView, getAnimationClass } from '@/utils/animations';
import FeatureCard from '../ui/FeatureCard';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Get instant updates about your train status, delays, and platform changes.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Receive timely alerts about booking confirmations, cancellations, and refunds.'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Multiple secure payment options with instant booking confirmations.'
  },
  {
    icon: Zap,
    title: 'Fast Bookings',
    description: 'Book your tickets in seconds with our streamlined booking process.'
  },
  {
    icon: Calendar,
    title: 'Flexible Dates',
    description: 'View fare calendars to find the best prices across multiple dates.'
  },
  {
    icon: CreditCard,
    title: 'Instant Refunds',
    description: 'Cancel tickets easily and receive refunds directly to your original payment method.'
  }
];

const Features = () => {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: featuresRef, isInView: featuresInView } = useInView({ threshold: 0.05 });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-secondary/50 to-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          ref={titleRef}
          className={getAnimationClass(titleInView, 'animate-fade-in', '')}
        >
          <h2 className="text-3xl font-bold text-center mb-3">Why Choose Us</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Experience a modern approach to train travel with features designed to make your journey seamless
          </p>
        </div>
        
        <div 
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              className={cn(
                getAnimationClass(
                  featuresInView, 
                  'animate-scale-in', 
                  `animate-stagger-${(index % 3) + 1}`
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

export default Features;
