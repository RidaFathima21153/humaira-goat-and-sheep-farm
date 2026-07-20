import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import OurAnimals from './components/OurAnimals';
import FarmGallery from './components/FarmGallery';
import FarmFacilities from './components/FarmFacilities';
import CustomerReviews from './components/CustomerReviews';
import VisitOurFarm from './components/VisitOurFarm';
import ContactUs from './components/ContactUs';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-farm-paleBeige text-slate-800 font-sans selection:bg-farm-emerald selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <OurAnimals />
        <FarmGallery />
        <FarmFacilities />
        <CustomerReviews />
        <VisitOurFarm />
        <ContactUs />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
