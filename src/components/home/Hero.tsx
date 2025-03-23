
import { useInView, getAnimationClass } from '@/utils/animations';
import BookingForm from '../shared/BookingForm';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: subtitleRef, isInView: subtitleInView } = useInView({ threshold: 0.1 });
  const { ref: formRef, isInView: formInView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/5"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h1 
            ref={titleRef}
            className={getAnimationClass(titleInView, 'animate-fade-in', '')}
          >
            <span className="block text-4xl md:text-5xl font-bold mb-4">
              Travel Across India
            </span>
            <span className="block text-4xl md:text-5xl font-bold bg-gradient-blue bg-clip-text text-transparent">
              With Ease & Comfort
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={cn(
              "mt-6 text-lg text-muted-foreground leading-relaxed",
              getAnimationClass(subtitleInView, 'animate-fade-in', 'animate-stagger-1')
            )}
          >
            Book train tickets effortlessly with our redesigned platform. 
            Experience seamless journeys across India with real-time updates 
            and personalized recommendations.
          </p>
          
          <div className="hidden md:flex mt-8 space-x-4 items-center">
            <div className={cn(
              "flex -space-x-2",
              getAnimationClass(subtitleInView, 'animate-fade-in', 'animate-stagger-2')
            )}>
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-card"
                  style={{ 
                    backgroundImage: `url(https://randomuser.me/api/portraits/men/${20 + i}.jpg)`,
                    backgroundSize: 'cover'
                  }}
                ></div>
              ))}
            </div>
            <p className={cn(
              "text-sm text-muted-foreground",
              getAnimationClass(subtitleInView, 'animate-fade-in', 'animate-stagger-3')
            )}>
              Trusted by 10M+ travelers
            </p>
          </div>
        </div>
        
        <div 
          ref={formRef} 
          className={getAnimationClass(formInView, 'animate-slide-in-right', '')}
        >
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
