/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BridalShowcase from './components/BridalShowcase';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import SpecialOffers from './components/SpecialOffers';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import AppointmentModal from './components/AppointmentModal';
import AiChatbot from './components/AiChatbot';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-[#4A3E3D] selection:bg-[#E8C5C8]/40 selection:text-[#5A2D35] overflow-x-hidden font-sans">
      {/* Luxury Loading Splash Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <BridalShowcase onOpenBooking={handleOpenBooking} />
        <Gallery onOpenBooking={handleOpenBooking} />
        <Team onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Pricing onOpenBooking={handleOpenBooking} />
        <SpecialOffers onOpenBooking={handleOpenBooking} />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Triggers & AI Chatbot */}
      <FloatingControls onOpenBooking={handleOpenBooking} />
      <AiChatbot onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
      />
    </div>
  );
}
