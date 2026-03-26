import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const address = "Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline text-5xl font-bold text-primary">Get in touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or ready to book? We're here to help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto mb-20">
          {/* Left Column: Contact Details & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary px-2">Contact information</h3>
              
              <div className="space-y-4">
                <Card className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{address}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">+91 93074 11979</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">homelystaylodging@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Business hours</h4>
                      <p className="text-sm text-muted-foreground">Check-in: 12:00 PM | Check-out: 11:00 AM | Reception: 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-sm border border-border/50 bg-slate-200">
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-accent animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-primary text-xl">Interactive Map View</p>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">{address}</p>
                  </div>
                  <Button variant="outline" className="rounded-full px-8 bg-white" asChild>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank">
                      Open in Google Maps
                    </a>
                  </Button>
               </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">Send us a message</h3>
              <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly</p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold text-primary">Full name</Label>
                <Input id="name" placeholder="Enter your name" className="rounded-xl h-14 bg-background border-border/40 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-primary">Email address</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl h-14 bg-background border-border/40 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-primary">Phone number</Label>
                <Input id="phone" placeholder="10-digit number" className="rounded-xl h-14 bg-background border-border/40 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-semibold text-primary">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="rounded-xl min-h-[150px] bg-background border-border/40 focus:ring-accent" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-full font-bold text-lg transition-all hover:scale-[1.01] shadow-lg shadow-primary/10">
                Send message
              </Button>

              <div className="pt-4">
                <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Quick booking
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">For immediate booking assistance, contact us via WhatsApp or call us directly.</p>
                  <Button variant="default" className="w-full bg-[#D97706] hover:bg-[#B45309] text-white rounded-xl h-12" asChild>
                    <a href="https://wa.me/919307411979" target="_blank">Book via WhatsApp</a>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Landmarks and How to Reach Section */}
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] border border-border/50 p-10 md:p-16 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-primary">How to reach</h4>
              <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                <li>From Chhatrapati Sambhaji Nagar Railway Station: 18 km via NH-211</li>
                <li>From Aurangabad Airport: 24 km, approximately 35 minutes</li>
                <li>Easily accessible from MIDC Waluj industrial area via auto or taxi</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-primary">Nearby landmarks</h4>
              <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                <li>CEAT Road - 0.2 km</li>
                <li>MIDC Waluj Industrial Area - 1.5 km</li>
                <li>Local markets and restaurants - 0.8 km</li>
                <li>CEAT Tyres Factory - 0.5 km</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
