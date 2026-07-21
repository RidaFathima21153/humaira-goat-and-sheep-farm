import React from 'react';
import { Phone, MessageCircle, Navigation, ShieldCheck, Clock, Award, ChevronDown, User } from 'lucide-react';
import { openFarmDirections } from '../utils/navigation';

const PHONE_NUMBER = "+91 98452 73714";
const RAW_PHONE = "919845273714";
const WHATSAPP_LINK = `https://wa.me/${RAW_PHONE}?text=` + encodeURIComponent("Hello Syed Zulfikhar (Humaira Goat & Sheep Farm), I want to inquire about visiting your farm and purchasing healthy livestock.");

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-entrance.png"
          alt="Humaira Goat & Sheep Farm Entrance with Blue Walkway"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000 hover:scale-100"
        />
        {/* Multi-stage Gradient Overlay for visual elegance & high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-farm-darkGreen/90 via-transparent to-slate-950/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 text-white space-y-8">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/20 text-farm-accentGreen text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
              <Award className="w-4 h-4 text-farm-skyBlue" />
              <span>Managed by Syed Zulfikhar • Certified Farm</span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-tight text-white tracking-tight drop-shadow-md">
              Humaira Goat <span className="text-farm-accentGreen">&</span> Sheep Farm
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow">
              Healthy Goats & Sheep Raised with Care, Quality & Trust.
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Founded and managed by <strong>Syed Zulfikhar</strong>. Experience our modern elevated livestock facility featuring hygienic wooden slatted flooring, clean running water, and 100% organic natural feed.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${RAW_PHONE}`}
                className="px-7 py-4 rounded-2xl bg-white text-farm-darkGreen font-bold text-base shadow-xl hover:bg-farm-beige hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-farm-emerald group-hover:rotate-12 transition-transform" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={openFarmDirections}
                className="px-7 py-4 rounded-2xl glass-pill text-white font-bold text-base hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-white/30 cursor-pointer group"
                title="Click to launch live GPS turn-by-turn directions from your location"
              >
                <Navigation className="w-5 h-5 text-farm-skyBlue animate-pulse group-hover:scale-125 transition-transform" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-farm-accentGreen flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-farm-skyBlue flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Hygienic Shed</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Owner Managed</span>
              </div>
            </div>

          </div>

          {/* Right Floating Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-card-dark p-7 rounded-3xl text-white shadow-2xl space-y-6 relative overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-farm-accentGreen/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-farm-emerald flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🐐
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Syed Zulfikhar</h3>
                  <p className="text-xs text-farm-accentGreen">Owner & Farm Director</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Direct Contact</span>
                  <span className="font-semibold text-farm-accentGreen">{PHONE_NUMBER}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Environment</span>
                  <span className="font-semibold text-farm-skyBlue">Elevated Slatted Shed</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Feed Type</span>
                  <span className="font-semibold text-farm-accentGreen">100% Organic Green & Dry</span>
                </div>
              </div>

              <button
                onClick={openFarmDirections}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-farm-emerald to-farm-darkGreen hover:from-farm-accentGreen hover:to-farm-emerald text-white text-center font-bold text-sm rounded-xl block transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-farm-skyBlue" />
                <span>Navigate from My Location ➔</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition flex flex-col items-center gap-1 text-xs">
          <span>Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-farm-accentGreen" />
        </a>
      </div>
    </section>
  );
}
