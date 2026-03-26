import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, MapPin, Building2, Star } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-hallway');

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            {/* Decorative floaters */}
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl shadow-xl z-20 hidden sm:block">
              <Star className="h-10 w-10 text-white fill-white" />
              <p className="text-white font-bold mt-2">Top Rated Stays</p>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full -z-10 blur-2xl"></div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-accent tracking-[0.2em] uppercase">About Homely Stay</h2>
              <h3 className="font-headline text-4xl sm:text-5xl font-bold text-primary leading-tight">
                Your Trusted Lodging Partner in Waluj Industrial Area
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Homely Stay, we understand the needs of our corporate travelers and business professionals. Our lodging facility is designed to provide a comfortable, hygienic, and convenient stay in the heart of Waluj MIDC. We maintain the highest standards of cleanliness and hygiene, ensuring your safety and comfort.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-5">
                <div className="bg-muted p-4 rounded-2xl shrink-0">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Hygiene Standards</h4>
                  <p className="text-sm text-muted-foreground mt-1">We adhere to the highest cleanliness standards for your safety.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-muted p-4 rounded-2xl shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Strategic Location</h4>
                  <p className="text-sm text-muted-foreground mt-1">Located in Waluj MIDC, perfect for business travelers.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-muted p-4 rounded-2xl shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Reliable Service</h4>
                  <p className="text-sm text-muted-foreground mt-1">24/7 support and assistance to ensure a comfortable stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}