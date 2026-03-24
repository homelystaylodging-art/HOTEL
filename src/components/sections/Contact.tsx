import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const address = "Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                For inquiries, corporate bookings, or general assistance, reach out to our team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-lg border">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Our Address</h4>
                  <p className="text-sm text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-lg border">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-lg border">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-sm text-muted-foreground">contact@homelystay.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-lg border">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Check-in / Check-out</h4>
                  <p className="text-sm text-muted-foreground">Check-in: 12:00 PM | Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white" asChild>
                <a href="https://wa.me/911234567890" target="_blank">Book Now via WhatsApp</a>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-inner bg-muted group border">
            {/* Visual placeholder for Map */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-center space-y-4">
               <MapPin className="h-12 w-12 text-accent/50 group-hover:scale-110 transition-transform" />
               <p className="font-bold text-primary text-lg">Interactive Map View</p>
               <p className="text-muted-foreground max-w-xs">{address}</p>
               <Button variant="outline" asChild>
                 <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank">
                   Open in Google Maps
                 </a>
               </Button>
            </div>
            {/* Real Map Integration would normally go here using Vis.GL but requires API Key */}
          </div>
        </div>
      </div>
    </section>
  );
}