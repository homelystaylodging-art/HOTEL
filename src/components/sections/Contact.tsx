import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const address = "Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-accent tracking-[0.2em] uppercase">Contact & Location</h2>
          <h3 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Find us in the heart of Waluj MIDC</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-border/50">
              <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-center space-y-6">
                 <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-accent animate-bounce" />
                 </div>
                 <div className="space-y-2">
                   <p className="font-bold text-primary text-2xl">Our Location</p>
                   <p className="text-muted-foreground max-w-xs mx-auto">{address}</p>
                 </div>
                 <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-8" asChild>
                   <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank">
                     Open in Google Maps
                   </a>
                 </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-background border flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-bold text-primary">+91 1234 567 890</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-background border flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-bold text-primary">contact@homelystay.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border/50 rounded-[2.5rem] p-10 shadow-lg space-y-8">
            <div className="space-y-2 text-center">
              <h4 className="text-2xl font-bold text-primary">Quick Inquiry</h4>
              <p className="text-muted-foreground">Send us a message and we'll get back to you shortly.</p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold text-primary">Name</Label>
                <Input id="name" placeholder="Enter your full name" className="rounded-xl h-14 bg-white border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold text-primary">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" className="rounded-xl h-14 bg-white border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-bold text-primary">Phone</Label>
                <Input id="phone" placeholder="10-digit number" className="rounded-xl h-14 bg-white border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold text-primary">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="rounded-xl min-h-[120px] bg-white border-border/50" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-full font-bold text-lg shadow-xl shadow-primary/10 transition-all hover:scale-[1.02]">
                Contact via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}