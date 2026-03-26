import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xl font-bold tracking-tight text-primary leading-none">
                Homely Stay
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Lodging & Boarding
              </span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="#rooms" className="transition-colors hover:text-primary">Rooms</Link>
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg">
              <Link href="https://wa.me/911234567890?text=I%20would%20like%20to%20inquire%20about%20a%20booking" target="_blank">
                Book via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}