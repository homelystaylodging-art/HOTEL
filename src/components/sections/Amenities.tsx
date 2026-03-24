import { Wifi, ThermometerSun, ParkingCircle, Zap, ShieldCheck, Coffee } from 'lucide-react';

const amenities = [
  { icon: ThermometerSun, title: '24/7 Hot Water', desc: 'Solar & electric heating always available.' },
  { icon: Wifi, title: 'Free High-Speed Wi-Fi', desc: 'Stay connected with reliable internet.' },
  { icon: ParkingCircle, title: 'Secure Parking', desc: 'Ample space for cars and corporate buses.' },
  { icon: Zap, title: 'Power Backup', desc: 'Continuous power supply for your convenience.' },
  { icon: ShieldCheck, title: 'CCTV Security', desc: 'Round-the-clock surveillance for safety.' },
  { icon: Coffee, title: 'Dining Area', desc: 'On-site kitchen for fresh breakfast & tea.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Thoughtful Amenities</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            We provide everything you need for a smooth and productive stay in the industrial hub.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <item.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}