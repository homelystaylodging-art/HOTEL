import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, Sparkles, ShowerHead } from 'lucide-react';

const roomTypes = [
  {
    id: 'ac',
    name: 'AC Room',
    price: '1,800',
    description: 'Spacious and well-ventilated rooms with modern amenities for maximum comfort during your stay.',
    imageId: 'room-standard',
    features: ['Free Wi-Fi', '24/7 Hot Water', 'Daily Cleaning']
  },
  {
    id: 'non-ac',
    name: 'Non-AC Room',
    price: '1,500',
    description: 'Comfortable and well-ventilated rooms offering great value for budget-conscious travelers.',
    imageId: 'room-premium',
    features: ['Free Wi-Fi', '24/7 Hot Water', 'Daily Cleaning']
  }
];

export default function Rooms() {
  const bathroomImg = PlaceHolderImages.find(img => img.id === 'bathroom-clean');

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold text-accent tracking-[0.2em] uppercase">Accommodations</h2>
        <h3 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Our Rooms</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Choose from our comfortable AC and Non-AC rooms, all equipped with essential amenities.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {roomTypes.map((room) => {
          const roomImg = PlaceHolderImages.find(img => img.id === room.imageId);

          return (
            <div key={room.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
              <div className="relative aspect-video overflow-hidden">
                {roomImg && (
                  <Image
                    src={roomImg.imageUrl}
                    alt={roomImg.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint={roomImg.imageHint}
                  />
                )}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <p className="text-primary font-bold">₹{room.price} <span className="text-xs text-muted-foreground">/ 24 Hours</span></p>
                  </div>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="font-headline text-3xl font-bold text-primary">{room.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map(f => (
                    <div key={f} className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-xs font-semibold text-primary">
                      <Check className="h-3 w-3 text-accent" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t flex flex-col sm:flex-row items-center gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full rounded-full border-accent text-accent hover:bg-accent/10">
                        <ShowerHead className="mr-2 h-4 w-4" />
                        Hygiene Check
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl rounded-[2rem]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Hygiene Excellence</DialogTitle>
                      </DialogHeader>
                      {bathroomImg && (
                        <div className="relative aspect-video rounded-3xl overflow-hidden mt-4 shadow-inner">
                          <Image
                            src={bathroomImg.imageUrl}
                            alt={bathroomImg.description}
                            fill
                            className="object-cover"
                            data-ai-hint={bathroomImg.imageHint}
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2 mt-6 p-4 bg-accent/5 rounded-2xl">
                        <Sparkles className="h-5 w-5 text-accent" />
                        <p className="text-primary font-medium">Daily deep-cleaning protocols maintained.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg shadow-primary/20" asChild>
                    <a href="https://wa.me/911234567890" target="_blank">Book via WhatsApp</a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 text-center">
        <Button variant="ghost" className="text-primary font-bold hover:bg-transparent hover:text-accent">
          View all rooms →
        </Button>
      </div>
    </section>
  );
}