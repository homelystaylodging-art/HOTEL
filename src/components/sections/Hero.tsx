import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-exterior');

  if (!heroImage) return null;

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover brightness-[0.7]"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-headline text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-3xl mx-auto">
            Comfortable & Hygienic Stay Near Waluj MIDC
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Your home away from home in the industrial hub of Chhatrapati Sambhaji Nagar. Affordable luxury for corporate & budget travelers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <a href="https://wa.me/911234567890?text=Booking Inquiry" target="_blank">
                <MessageSquare className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/40 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              asChild
            >
              <a href="#rooms">View Our Rooms</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}