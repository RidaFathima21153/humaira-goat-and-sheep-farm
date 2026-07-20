import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_LINK = "https://wa.me/919876543210?text=" + encodeURIComponent("Hello Humaira Goat & Sheep Farm, I am contacting you directly from your website.");

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-farm-emerald shadow-xl transition-all duration-300 flex items-center justify-center border border-white/20 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-farm-accentGreen" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-farm-darkGreen text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-farm-accentGreen/50 group"
        aria-label="Call Humaira Farm"
      >
        <Phone className="w-6 h-6 text-farm-accentGreen group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button with Pulse Effect */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 text-white shadow-2xl animate-pulse-glow hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white stroke-emerald-500 group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
}
