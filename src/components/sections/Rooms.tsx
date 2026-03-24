import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, Sparkles } from 'lucide-react';

const roomTypes = [
  {
    id: 'std',
    name: 'Standard AC/Non-AC Room',
    description: 'Perfect for solo travelers or short business trips. Equipped with all essential amenities for a comfortable rest.',
    imageId: 'room-standard',
    features: ['Queen Size Bed', 'Free Wi-Fi', 'Daily Cleaning', 'Work Desk']
  },
  {
    id: 'prem',
    name: 'Premium Executive Suite',
    description: 'Spacious rooms with modern interiors and extra lounge area for corporate guests who need more space.',
    imageId: 'room-premium',
    features: ['King Size Bed', 'Air Conditioning', 'Flat-screen TV', 'Mini Fridge']
  }
];

export default function Rooms() {
  const bathroomImg = PlaceHolderImages.find(img => img.id === 'bathroom-clean');

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">Our Accommodations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our selection of well-maintained rooms designed to provide a restful experience after a busy day.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {roomTypes.map((room) => {
          const roomImg = PlaceHolderImages.find(img => img.id === room.imageId);
          if (!roomImg) return null;

          return (
            <div key={room.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border/50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={roomImg.imageUrl}
                  alt={roomImg.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={roomImg.imageHint}
                />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">{room.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {room.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-primary/80">
                      <Check className="h-4 w-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-6 border-t">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-accent border-accent hover:bg-accent/10">
                        <Sparkles className="mr-2 h-4 w-4" />
                        View Bathroom
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Hygiene Excellence</DialogTitle>
                      </DialogHeader>
                      {bathroomImg && (
                        <div className="relative aspect-square sm:aspect-video rounded-lg overflow-hidden mt-4">
                          <Image
                            src={bathroomImg.imageUrl}
                            alt={bathroomImg.description}
                            fill
                            className="object-cover"
                            data-ai-hint={bathroomImg.imageHint}
                          />
                        </div>
                      )}
                      <p className="mt-4 text-sm text-muted-foreground text-center">
                        Every bathroom is deep-cleaned daily to ensure maximum hygiene for our guests.
                      </p>
                    </DialogContent>
                  </Dialog>
                  <Button className="bg-accent hover:bg-accent/90">Book Now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}