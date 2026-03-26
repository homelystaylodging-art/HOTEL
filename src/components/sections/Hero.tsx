import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-exterior');
  const whatsappNumber = "919307411979";

  return (
    <section className="relative min-h-[700px] w-full flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full">
              <span className="text-sm font-bold text-accent tracking-wide uppercase">Industrial Hub Stays</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-primary">
              Comfortable & <span className="text-accent">Hygienic</span> Stay Near Waluj MIDC
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience hygiene, comfort, and convenience at Homely Stay. Strategically located near CEAT Road for corporate professionals and company workers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href={`https://wa.me/${whatsappNumber}?text=Booking Inquiry`} target="_blank">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-primary border-primary/20 hover:bg-muted text-lg px-10 py-7 rounded-full font-semibold transition-all"
                asChild
              >
                <a href="#rooms">
                  View Rooms
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
