import Link from 'next/link';
import { Home, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-md">
                <Home className="h-5 w-5 text-primary" />
              </div>
              <span className="font-headline text-xl font-bold tracking-tight">
                HomelyStay <span className="text-accent">Suites</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium lodging and boarding services focused on hygiene and comfort for travelers in Chhatrapati Sambhaji Nagar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#rooms" className="hover:text-accent transition-colors">Our Rooms</Link></li>
              <li><Link href="#amenities" className="hover:text-accent transition-colors">Amenities</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>+91 1234 567 890</li>
              <li>contact@homelystay.com</li>
              <li>Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar</li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Booking</h4>
            <p className="text-sm text-white/60 mb-6">We recommend booking 24 hours in advance via WhatsApp for instant confirmation.</p>
            <Link 
              href="https://wa.me/911234567890" 
              className="text-accent font-bold text-sm hover:underline"
              target="_blank"
            >
              Book via WhatsApp Now →
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} HomelyStay lodging and boarding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}