import React from 'react';
import { Phone, MessageCircle, MapPin, Navigation, ShieldCheck, Heart, User } from 'lucide-react';

const MAPS_URL = "https://maps.app.goo.gl/HX2aG73nJd8pCFsb9";
const PHONE_NUMBER = "+91 98452 73714";
const RAW_PHONE = "919845273714";
const WHATSAPP_LINK = `https://wa.me/${RAW_PHONE}?text=` + encodeURIComponent("Hello Syed Zulfikhar (Humaira Goat & Sheep Farm), I am inquiring from your website footer.");

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Animals', href: '#animals' },
    { name: 'Farm Gallery', href: '#gallery' },
    { name: 'Farm Facilities', href: '#facilities' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Visit Our Farm', href: '#location' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const categories = [
    'Baby Goats (Kids)',
    'Male Goats (Bucks)',
    'Female Goats (Does)',
    'Premium Sheep',
    'Breeding Pairs',
    'Bulk Qurbani Orders',
  ];

  return (
    <footer className="bg-farm-darkGreen text-white pt-20 pb-10 relative overflow-hidden border-t-4 border-farm-accentGreen">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-farm-emerald/20 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-farm-emerald to-farm-accentGreen flex items-center justify-center text-farm-darkGreen font-heading font-extrabold text-2xl shadow-lg">
                H
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight block">
                  Humaira
                </span>
                <span className="text-xs font-semibold tracking-wider text-farm-accentGreen uppercase block">
                  Goat & Sheep Farm
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Healthy goats and sheep raised with care, quality & trust. Owned and managed by <strong>Syed Zulfikhar</strong> with modern elevated slatted wooden shed infrastructure, 100% natural organic feed, and 24/7 care.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`tel:${RAW_PHONE}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-farm-emerald flex items-center justify-center text-white transition"
                aria-label="Call Syed Zulfikhar"
                title="Call Syed Zulfikhar (+91 98452 73714)"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition"
                aria-label="WhatsApp Syed Zulfikhar"
                title="WhatsApp Syed Zulfikhar (+91 98452 73714)"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-farm-skyBlue flex items-center justify-center text-white transition"
                aria-label="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-lg text-farm-accentGreen uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-farm-accentGreen transition flex items-center gap-2">
                    <span className="text-farm-accentGreen text-xs">▸</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Livestock Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-lg text-farm-accentGreen uppercase tracking-wider text-xs">
              Our Livestock
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {categories.map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-farm-accentGreen text-xs">✓</span>
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-lg text-farm-accentGreen uppercase tracking-wider text-xs">
              Contact & Owner Details
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Owner / Director</span>
                  <span className="font-bold text-white">Syed Zulfikhar</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-farm-accentGreen flex-shrink-0" />
                <a href={`tel:${RAW_PHONE}`} className="hover:text-white transition">
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  WhatsApp: {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Farm Location</span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-farm-skyBlue underline hover:text-white transition">
                    Google Maps Directions ➔
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-farm-accentGreen text-xs font-bold">
                  Open 24 Hours / 7 Days
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Humaira Goat & Sheep Farm • Managed by Syed Zulfikhar. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Built with care for healthy livestock & community trust</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
