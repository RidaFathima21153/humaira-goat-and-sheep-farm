import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Compass, ExternalLink, CheckCircle2 } from 'lucide-react';
import { MAPS_FARM_LINK, openFarmDirections } from '../utils/navigation';

export default function VisitOurFarm() {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-farm-skyBlue/10 text-farm-darkBlue text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 w-fit mx-auto">
            <Compass className="w-4 h-4 text-farm-accentBlue" />
            <span>Farm Location & Easy Directions</span>
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            Visit <span className="text-gradient-green">Our Farm</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We welcome visitors, families, commercial buyers, and livestock enthusiasts. Click below to start turn-by-turn navigation from your current location!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-farm-emerald text-white flex items-center justify-center font-bold shadow-md">
                  <MapPin className="w-6 h-6 text-farm-accentGreen" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-farm-darkGreen">Humaira Goat & Sheep Farm</h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Farm Visits Welcome
                  </span>
                </div>
              </div>

              {/* Status Pills */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-farm-paleBeige border border-farm-beige">
                  <Clock className="w-6 h-6 text-farm-emerald flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-farm-darkGreen">Open 24 Hours</h4>
                    <p className="text-xs text-slate-500">Gate open 7 days a week for direct animal inspection.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-farm-paleBeige border border-farm-beige">
                  <Navigation className="w-6 h-6 text-farm-accentBlue flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-farm-darkGreen">Instant Live Navigation</h4>
                    <p className="text-xs text-slate-500">One-click turn-by-turn directions from your current location.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-farm-paleBeige border border-farm-beige">
                  <ShieldCheck className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-farm-darkGreen">Sanitized Environment</h4>
                    <p className="text-xs text-slate-500">Biosecure entrance with footwear disinfections.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <button
                onClick={openFarmDirections}
                className="w-full py-4 px-6 rounded-2xl bg-farm-darkGreen hover:bg-farm-emerald text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Navigation className="w-5 h-5 text-farm-accentGreen group-hover:scale-125 transition-transform" />
                <span>Get Directions from My Location</span>
              </button>

              <a
                href={MAPS_FARM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-farm-skyBlue hover:bg-farm-darkBlue text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open Pin in Google Maps App</span>
              </a>
            </div>

          </div>

          {/* Right Map Frame Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border-4 border-white min-h-[380px] lg:min-h-[460px] relative">
            <iframe
              title="Humaira Goat & Sheep Farm Location Map"
              src="https://maps.google.com/maps?q=13.123,75.123&hl=en&z=14&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlaid Location Badge with Direct Directions Trigger */}
            <div
              onClick={openFarmDirections}
              className="absolute top-4 left-4 glass-card p-3.5 rounded-2xl shadow-xl border border-white/60 flex items-center space-x-3 cursor-pointer hover:bg-white transition"
              title="Click for turn-by-turn directions"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping"></div>
              <div>
                <span className="text-xs font-extrabold text-farm-darkGreen block">Humaira Farm Live Location</span>
                <span className="text-[10px] font-bold text-farm-accentBlue flex items-center gap-1">
                  <Navigation className="w-3 h-3" /> Tap for live directions ➔
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
