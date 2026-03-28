'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wifi, 
  ThermometerSun, 
  ParkingCircle, 
  Tv, 
  ShieldCheck, 
  Wind, 
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const roomTypes = [
  {
    id: 'ac',
    name: 'AC Room',
    price: '1,800',
    description: 'Spacious air-conditioned rooms with modern amenities designed for maximum comfort. Perfect for corporate travelers who need a peaceful environment to rest and work.',
    imageId: 'room-standard',
    features: ['Free Wi-Fi', '24/7 Hot Water', 'Secure Parking', 'Air Conditioning', 'Television', 'Secure Lock'],
    isPremium: true
  },
  {
    id: 'non-ac',
    name: 'Non-AC Room',
    price: '1,500',
    description: 'Comfortable and well-ventilated rooms offering excellent value for budget-conscious travelers. Equipped with all essential amenities for a pleasant stay.',
    imageId: 'room-premium',
    features: ['Free Wi-Fi', '24/7 Hot Water', 'Secure Parking', 'Television', 'Secure Lock'],
    isPremium: false
  }
];

const detailedAmenities = [
  { icon: Wifi, title: 'Free Wi-Fi', desc: 'High-speed internet connectivity in all rooms' },
  { icon: ThermometerSun, title: '24/7 Hot Water', desc: 'Round-the-clock hot water supply' },
  { icon: ParkingCircle, title: 'Secure Parking', desc: 'Safe parking facility for your vehicles' },
  { icon: Wind, title: 'Air Conditioning', desc: 'Climate control in AC rooms' },
  { icon: Tv, title: 'Television', desc: 'Cable TV in all rooms' },
  { icon: ShieldCheck, title: 'Secure Premises', desc: '24/7 security and monitoring' },
];

const pricingData = [
  { type: 'AC Room', daily: '₹1,800', weekly: '₹11,500', monthly: '₹45,000' },
  { type: 'Non-AC Room', daily: '₹1,500', weekly: '₹9,500', monthly: '₹38,000' },
];

export default function Rooms() {
  const bathroomImg = PlaceHolderImages.find(img => img.id === 'bathroom-clean');
  const exteriorImg = PlaceHolderImages.find(img => img.id === 'hero-exterior');
  const whatsappNumber = "919307411979";

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h2 className="font-headline text-5xl font-bold text-primary mb-4">Our rooms</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Choose from our range of comfortable rooms designed for your convenience
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mb-32">
        {roomTypes.map((room) => {
          const roomImg = PlaceHolderImages.find(img => img.id === room.imageId);
          return (
            <div 
              key={room.id} 
              className={`bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl border-2 ${room.isPremium ? 'border-primary' : 'border-transparent'}`}
            >
              <div className="relative aspect-video bg-muted">
                {roomImg ? (
                  <Image
                    src={roomImg.imageUrl}
                    alt={roomImg.description}
                    fill
                    className="object-cover"
                    data-ai-hint={roomImg.imageHint}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground italic bg-muted">
                    Room Photo
                  </div>
                )}
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary">{room.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[80px]">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map(f => (
                    <Badge key={f} variant="secondary" className="bg-muted text-primary/70 font-medium px-3 py-1">
                      {f === 'Air Conditioning' ? <Wind className="w-3 h-3 mr-1" /> : null}
                      {f}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-primary">₹{room.price} <span className="text-sm font-normal text-muted-foreground">per 24 hours</span></p>
                </div>
                <Button className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold h-12 rounded-xl" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank">Book via WhatsApp</a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-muted/30 py-24 mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-headline text-3xl font-bold text-primary mb-16">Property showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] bg-muted">
                {bathroomImg ? (
                  <Image src={bathroomImg.imageUrl} alt="Modern Bathroom" fill className="object-cover" data-ai-hint="modern hotel bathroom" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground italic bg-muted">Bathroom</div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-primary mb-2">Modern Bathrooms</h4>
                <p className="text-muted-foreground text-sm">Immaculately clean and hygienic bathrooms equipped with modern fixtures, premium tiling, and 24/7 hot water supply for your comfort.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] bg-muted">
                {exteriorImg ? (
                  <Image src={exteriorImg.imageUrl} alt="Exterior View" fill className="object-cover" data-ai-hint="hotel front exterior" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground italic bg-muted">Exterior</div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-primary mb-2">Comfortable Common Area</h4>
                <p className="text-muted-foreground text-sm">A relaxing lounge space designed for our guests to unwind, read, or casually network in a peaceful and aesthetically pleasing environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-center font-headline text-3xl font-bold text-primary mb-16">Amenities breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {detailedAmenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border shadow-sm p-10">
          <h2 className="text-center font-headline text-2xl font-bold text-primary mb-10">Pricing table</h2>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b">
                <TableHead className="font-bold text-primary py-4">Room type</TableHead>
                <TableHead className="font-bold text-primary py-4">Price per 24 hours</TableHead>
                <TableHead className="font-bold text-primary py-4">Weekly rate</TableHead>
                <TableHead className="font-bold text-primary py-4">Monthly rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row) => (
                <TableRow key={row.type} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium text-primary py-6">{row.type}</TableCell>
                  <TableCell className="text-primary py-6">{row.daily}</TableCell>
                  <TableCell className="text-primary py-6">{row.weekly}</TableCell>
                  <TableCell className="text-primary py-6">{row.monthly}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="mt-8 text-center text-xs text-muted-foreground">Special rates available for long-term stays. Contact us for more details.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-muted/50 rounded-3xl p-16 text-center space-y-8">
          <h2 className="font-headline text-3xl font-bold text-primary">Ready to book?</h2>
          <p className="text-muted-foreground text-lg">Contact us via WhatsApp to check availability and make a reservation</p>
          <Button size="lg" className="bg-[#D97706] hover:bg-[#B45309] text-white px-10 h-14 text-lg font-bold rounded-xl" asChild>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank">Book via WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
