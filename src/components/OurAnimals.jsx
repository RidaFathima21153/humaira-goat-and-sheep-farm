import React from 'react';
import { MessageCircle, CheckCircle, ArrowUpRight } from 'lucide-react';

const WHATSAPP_BASE = "https://wa.me/919876543210?text=";

export default function OurAnimals() {
  const animals = [
    {
      title: 'Baby Goats (Kids)',
      tag: 'Most Popular',
      image: '/images/baby-goats.png',
      description: 'Healthy, playful, and adorable young kids raised on high-nutrient mother milk and fresh green grass. Ideal for hand rearing and home farms.',
      features: ['Age: 2 - 5 Months', 'Vaccinated & Active', 'Playful Temperament'],
      query: 'Hello Humaira Farm, I am interested in inquiring about Baby Goats (Kids).'
    },
    {
      title: 'Male Goats (Bucks)',
      tag: 'Breeding & Festival',
      image: '/images/male-goat.png',
      description: 'Robust, heavy-weight male goats with magnificent build and strong genetics. Perfect for breeding stud duty and Qurbani requirements.',
      features: ['Strong Horns & Frame', 'High Meat Yield', 'Certified Breeder Stud'],
      query: 'Hello Humaira Farm, I am interested in inquiring about Male Goats (Bucks).'
    },
    {
      title: 'Playful & Active Goats',
      tag: 'Courtyard Raised',
      image: '/images/playing-goats.png',
      description: 'Energetic goats given daily exercise in open farm fields for superior muscle growth and natural immune strength.',
      features: ['Daily Open Yard Exercise', 'High Immunity', 'Naturally Fed'],
      query: 'Hello Humaira Farm, I am interested in inquiring about your active courtyard Goats.'
    },
    {
      title: 'Premium Sheep Breeds',
      tag: 'High Growth Rate',
      image: '/images/shed-interior.png',
      description: 'Clean, well-groomed sheep housed in elevated hygienic sheds. Raised on balanced grains for soft wool coat and optimal weight.',
      features: ['Dense Coat & Build', 'Quiet Temperament', 'Elevated Shed Raised'],
      query: 'Hello Humaira Farm, I am interested in inquiring about Premium Sheep.'
    },
    {
      title: 'Female Goats (Does)',
      tag: 'High Milk & Breeding',
      image: '/images/male-goat.png',
      description: 'Healthy female goats with excellent milking capacity and strong maternal instinct. Prime choice for starting a commercial goat unit.',
      features: ['Proven Milking Line', 'Regular Kidding History', 'High Fertility'],
      query: 'Hello Humaira Farm, I am interested in inquiring about Female Goats (Does).'
    },
    {
      title: 'Breeding Stock Units',
      tag: 'Farm Starter Pairs',
      image: '/images/hero-entrance.png',
      description: 'Specially selected male and female breeding pairs curated for farmers looking to establish high-yield goat and sheep breeding units.',
      features: ['Genetically Screened', 'Vaccination Record Included', 'Farm Setup Guidance'],
      query: 'Hello Humaira Farm, I am interested in inquiring about Breeding Stock Pairs.'
    },
  ];

  return (
    <section id="animals" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-extrabold uppercase tracking-widest">
              Our Livestock Collection
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen mt-3">
              Explore Our <span className="text-gradient-green">Animals</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base">
            Every animal at Humaira Farm is individually monitored, vaccinated, and raised in elevated hygienic sheds to guarantee prime health and quality.
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between border border-slate-200"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-farm-darkGreen text-xs font-bold shadow-md">
                  {animal.tag}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-heading font-bold text-2xl text-white">
                  {animal.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {animal.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-2">
                  {animal.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-farm-emerald flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Enquire Button */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(animal.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-2xl bg-farm-darkGreen hover:bg-farm-emerald text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
