import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, MapPin, Building2 } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-hallway');

  if (!aboutImage) return null;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                Your Trusted Lodging Partner in Waluj
              </h2>
              <div className="h-1.5 w-20 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HomelyStay Suites is strategically located near <strong>CEAT Road</strong> in the heart of Waluj MIDC. We specialize in providing a clean, safe, and welcoming environment specifically tailored for the needs of corporate professionals and budget-conscious travelers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-background border">
                <ShieldCheck className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Strict Hygiene</h3>
                  <p className="text-sm text-muted-foreground">Premium protocols for a safe stay.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-background border">
                <MapPin className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Prime Location</h3>
                  <p className="text-sm text-muted-foreground">Easy access to industrial hubs.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-background border">
                <Building2 className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Corporate Focus</h3>
                  <p className="text-sm text-muted-foreground">Amenities for professional needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}