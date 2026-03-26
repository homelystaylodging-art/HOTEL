
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, MapPin, Building2, Clock, Users, Heart, Award } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Hygiene first',
    desc: 'We maintain the highest standards of cleanliness with regular sanitization and quality checks.'
  },
  {
    icon: Building2,
    title: 'Strategic location',
    desc: 'Conveniently located in MIDC Waluj industrial hub for easy access to business centers.'
  },
  {
    icon: Clock,
    title: '24/7 support',
    desc: 'Round-the-clock assistance to ensure your comfort and address any concerns.'
  },
  {
    icon: Users,
    title: 'Corporate friendly',
    desc: 'Designed specifically for business travelers with work-friendly amenities.'
  },
  {
    icon: Heart,
    title: 'Comfort focused',
    desc: 'Every detail is crafted to provide a home-like comfortable environment.'
  },
  {
    icon: Award,
    title: 'Quality service',
    desc: 'Committed to delivering exceptional service and memorable experiences.'
  }
];

export default function About() {
  const hallwayImage = PlaceHolderImages.find(img => img.id === 'about-hallway');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline text-5xl font-bold text-primary">About Homely</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner for comfortable lodging in Chhatrapati Sambhaji Nagar
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-border/50 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-primary">Our story</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Homely was established with a clear vision: to provide corporate travelers and business professionals with a reliable, comfortable, and hygienic lodging option in the MIDC Waluj industrial area of Chhatrapati Sambhaji Nagar.
                </p>
                <p>
                  We understand that when you're away from home for work, you need more than just a place to sleep. You need a space where you can rest, recharge, and prepare for the next day's challenges. That's exactly what we offer at Homely.
                </p>
                <p>
                  Our facility is strategically located near major industrial units, making it convenient for business travelers while maintaining a peaceful environment. We've carefully designed our rooms and services to meet the specific needs of corporate guests who value cleanliness, comfort, and reliability.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
              {hallwayImage && (
                <Image
                  src={hallwayImage.imageUrl}
                  alt="Interior Hallway and Seating"
                  fill
                  className="object-cover"
                  data-ai-hint="hotel interior hallway"
                />
              )}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
          <h3 className="text-center font-headline text-3xl font-bold text-primary mb-16">Our values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <value.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Homely Stats */}
        <div className="bg-white rounded-[2.5rem] p-16 shadow-sm border border-border/50 text-center max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-4">Why choose Homely?</h3>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            We're not just a lodging facility - we're your home away from home. Our commitment to hygiene, comfort, and service excellence sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-accent">100%</p>
              <p className="font-bold text-primary uppercase tracking-wider text-sm">Hygiene standards</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-accent">24/7</p>
              <p className="font-bold text-primary uppercase tracking-wider text-sm">Support available</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-accent">500+</p>
              <p className="font-bold text-primary uppercase tracking-wider text-sm">Happy guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
