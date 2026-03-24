import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-md">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-headline text-xl font-bold tracking-tight text-primary">
              HomelyStay <span className="text-accent">Suites</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-accent">About</Link>
            <Link href="#rooms" className="transition-colors hover:text-accent">Rooms</Link>
            <Link href="#amenities" className="transition-colors hover:text-accent">Amenities</Link>
            <Link href="#contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="https://wa.me/911234567890?text=I%20would%20like%20to%20inquire%20about%20a%20booking" target="_blank">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}