import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, ShieldCheck, Clock, Navigation, User } from 'lucide-react';
import { MAPS_FARM_LINK, openFarmDirections } from '../utils/navigation';

const PHONE_NUMBER = "+91 98452 73714";
const RAW_PHONE = "919845273714";
const WHATSAPP_LINK = `https://wa.me/${RAW_PHONE}?text=` + encodeURIComponent("Hello Syed Zulfikhar (Humaira Goat & Sheep Farm), I would like to inquire about your goats and sheep.");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Animals', href: '#animals' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Farm', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-farm-darkGreen text-white text-xs py-2 px-4 shadow-sm z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-farm-accentGreen font-medium">
              <Clock className="w-3.5 h-3.5" /> Open 24 Hours / 7 Days
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <User className="w-3.5 h-3.5 text-yellow-400" /> Owner: Syed Zulfikhar
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`tel:${RAW_PHONE}`} className="hover:text-farm-accentGreen transition flex items-center gap-1 font-medium">
              <Phone className="w-3 h-3" /> Call: {PHONE_NUMBER}
            </a>
            <button
              onClick={openFarmDirections}
              className="hover:text-farm-skyBlue transition flex items-center gap-1 text-farm-paleBeige font-medium cursor-pointer"
            >
              <Navigation className="w-3 h-3 text-farm-skyBlue animate-pulse" /> Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-farm-darkGreen to-farm-emerald flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-300 border border-farm-accentGreen/30">
              H
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-farm-darkGreen tracking-tight block leading-tight">
                Humaira
              </span>
              <span className="text-xs font-semibold tracking-wider text-farm-brown uppercase block">
                Goat & Sheep Farm
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-farm-darkGreen hover:bg-farm-emerald/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={openFarmDirections}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-farm-skyBlue hover:text-white transition-all shadow-sm flex items-center gap-1.5"
              title="Get turn-by-turn directions from your current location"
            >
              <Navigation className="w-3.5 h-3.5 text-farm-darkBlue" />
              <span>Directions</span>
            </button>
            <a
              href={`tel:${RAW_PHONE}`}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-farm-darkGreen border border-farm-emerald/30 hover:bg-farm-emerald hover:text-white transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-emerald-600/30 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-slate-200 mt-2 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-farm-emerald hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
              <a
                href={`tel:${RAW_PHONE}`}
                className="py-2.5 px-4 rounded-xl text-center font-semibold text-farm-darkGreen bg-slate-100 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl text-center font-semibold text-white bg-emerald-600 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
