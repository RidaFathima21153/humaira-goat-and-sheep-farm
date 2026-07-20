import React from 'react';
import { Shield, Sparkles, CheckCircle2, HeartHandshake, Leaf, Home } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-farm-beige/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-farm-emerald/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Real Photos with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/shed-interior.png"
                alt="Humaira Farm Modern Elevated Livestock Shed Interior"
                className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 glass-card-dark rounded-2xl">
                <p className="font-heading font-bold text-base text-farm-accentGreen">Modern Elevated Shed Design</p>
                <p className="text-xs text-slate-200">Slatted wooden flooring ensures zero waste build-up and maximum hygiene.</p>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-10 -right-6 sm:right-4 z-20 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src="/images/playing-goats.png"
                alt="Active healthy goats in farm courtyard"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -left-6 z-20 bg-farm-darkGreen text-white p-5 rounded-2xl shadow-xl border border-farm-accentGreen/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-farm-emerald flex items-center justify-center font-extrabold text-2xl text-farm-accentGreen">
                100%
              </div>
              <div>
                <p className="font-bold text-sm leading-tight text-white">Pure & Ethical</p>
                <p className="text-xs text-farm-accentGreen">Farming Standards</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-farm-accentGreen" />
              <span>About Humaira Goat & Sheep Farm</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen leading-tight">
              Raised with <span className="text-gradient-green">Care, Quality</span> & Ethical Practices
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong>Humaira Goat & Sheep Farm</strong>, we take immense pride in setting a benchmark for modern livestock farming. Located in a tranquil, eco-friendly environment, our farm provides healthy, premium goats and sheep bred and nurtured under standard hygienic conditions.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our state-of-the-art elevated slatted wooden sheds prevent disease transmission and ensure dry, clean resting areas for all animals. With zero tolerance for synthetic growth chemicals, our livestock feeds on 100% natural green fodder, dry grass, and mineral supplements under constant veterinary supervision.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-farm-paleBeige border border-farm-beige">
                <CheckCircle2 className="w-5 h-5 text-farm-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-farm-darkGreen">Hygienic Elevated Sheds</h4>
                  <p className="text-xs text-slate-500">Preventive disease design with slotted airflow.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-farm-paleBeige border border-farm-beige">
                <Leaf className="w-5 h-5 text-farm-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-farm-darkGreen">Natural Organic Diet</h4>
                  <p className="text-xs text-slate-500">Corn silage, green fodder & balanced grains.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-farm-paleBeige border border-farm-beige">
                <Shield className="w-5 h-5 text-farm-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-farm-darkGreen">Veterinary Supervised</h4>
                  <p className="text-xs text-slate-500">Dewormed and vaccinated on schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-farm-paleBeige border border-farm-beige">
                <HeartHandshake className="w-5 h-5 text-farm-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-farm-darkGreen">Transparent Pricing</h4>
                  <p className="text-xs text-slate-500">Fair pricing with open farm inspection anytime.</p>
                </div>
              </div>
            </div>

            {/* Trust Quote Card */}
            <div className="p-5 rounded-2xl glass-card border border-farm-emerald/20 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-farm-brown">Our Commitment</p>
                <p className="text-sm font-semibold text-farm-darkGreen">"Customer satisfaction and animal health are the pillars of Humaira Farm."</p>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-farm-darkGreen hover:bg-farm-emerald text-white text-xs font-bold whitespace-nowrap transition"
              >
                Learn More
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
