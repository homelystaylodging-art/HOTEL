import Link from 'next/link';
import { Home, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const address = "Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.";
  const whatsappNumber = "919307411979";

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-bold tracking-tight text-white leading-none">
                  Homely Stay
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  Lodging & Boarding
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your trusted partner for comfortable and hygienic stays in the heart of Waluj MIDC. Tailored for corporate and industrial travelers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg tracking-wider uppercase text-white/50 text-sm">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">{address}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+91 93074 11979</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">homelystaylodging@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg tracking-wider uppercase text-white/50 text-sm">Quick Links</h4>
            <ul className="space-y-3 font-medium text-sm text-white/60">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#rooms" className="hover:text-white transition-colors">Our Rooms</Link></li>
              <li><Link href="#amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal/Copyright placeholder */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg tracking-wider uppercase text-white/50 text-sm">Location</h4>
            <p className="text-sm text-white/60">Located in the industrial hub of Chhatrapati Sambhaji Nagar, offering convenient access to local businesses.</p>
            <Link 
              href={`https://wa.me/${whatsappNumber}`} 
              className="inline-block w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl text-center shadow-lg transition-transform hover:scale-105"
              target="_blank"
            >
              Book via WhatsApp
            </Link>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] uppercase font-bold tracking-widest">
          <p>© {new Date().getFullYear()} Homely Stay Lodging & Boarding. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
