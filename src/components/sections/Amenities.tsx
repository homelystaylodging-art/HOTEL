import { Wifi, ThermometerSun, ParkingCircle, Clock } from 'lucide-react';

const highlights = [
  { 
    icon: ThermometerSun, 
    title: '24/7 Hot Water', 
    desc: 'Solar & electric heating available round the clock for your convenience.' 
  },
  { 
    icon: Wifi, 
    title: 'Free High-Speed Wi-Fi', 
    desc: 'Dedicated high-speed connectivity perfect for your corporate workflow.' 
  },
  { 
    icon: ParkingCircle, 
    title: 'Secure Parking', 
    desc: 'Spacious and safe parking areas for personal vehicles and corporate buses.' 
  },
];

export default function Highlights() {
  return (
    <section id="amenities" className="py-20 bg-background relative -mt-10 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}