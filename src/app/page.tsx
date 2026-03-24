import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Rooms from '@/components/sections/Rooms';
import Amenities from '@/components/sections/Amenities';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ai/ChatAssistant';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Contact />
      <Footer />
      <ChatAssistant />
    </main>
  );
}