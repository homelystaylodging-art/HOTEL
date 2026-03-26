import Link from 'next/link';
import { Home, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const address = "Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.";

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1 space-y-8">
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
              Your trusted partner for comfortable and hygienic stays in the heart of Waluj MIDC. Specifically tailored for corporate travelers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-8 tracking-wider uppercase text-white/50 text-sm">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="#about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#rooms" className="text-white/70 hover:text-white transition-colors">Our Rooms</Link></li>
              <li><Link href="#amenities" className="text-white/70 hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="#contact" className="text-white/70 hover:text-white transition-colors">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-8 tracking-wider uppercase text-white/50 text-sm">Contact Information</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">{address}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+91 1234 567 890</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">contact@homelystay.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-8 tracking-wider uppercase text-white/50 text-sm">Booking</h4>
            <div className="bg-white/5 p-8 rounded-[2rem] space-y-4">
              <p className="text-sm text-white/60 leading-relaxed">We recommend booking 24 hours in advance via WhatsApp for instant confirmation.</p>
              <Link 
                href="https://wa.me/911234567890" 
                className="inline-block w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl text-center shadow-lg transition-transform hover:scale-105"
                target="_blank"
              >
                Book via WhatsApp
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] uppercase font-bold tracking-widest">
          <p>© {new Date().getFullYear()} Homely Stay Lodging & Boarding. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}