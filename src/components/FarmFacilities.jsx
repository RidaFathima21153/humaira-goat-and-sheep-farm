import React from 'react';
import { Building2, UtensilsCrossed, Droplets, Wind, Stethoscope, UserCheck } from 'lucide-react';

export default function FarmFacilities() {
  const facilities = [
    {
      icon: Building2,
      title: 'Spacious Livestock Shed',
      description: 'Elevated wooden slatted floor shed designed with blue heavy-duty iron structural framing, preventing moisture accumulation and disease vectors.',
      highlight: 'Elevated Slatted Flooring'
    },
    {
      icon: UtensilsCrossed,
      title: 'Hygienic Feeding Area',
      description: 'Custom raised stainless steel and blue trough feeders ensuring feed stays clean, uncontaminated, and accessible to all livestock.',
      highlight: 'Clean Feeding Troughs'
    },
    {
      icon: Droplets,
      title: 'Clean Water Supply',
      description: 'Continuous fresh running drinking water system with automatic nipple and bucket refill lines kept clean and chlorinated.',
      highlight: 'Filtered Fresh Water'
    },
    {
      icon: Wind,
      title: 'Proper Ventilation',
      description: 'High-ceiling open mesh roof structure allowing natural cross-breeze airflow, keeping ambient temperatures cool and odor-free.',
      highlight: 'Natural Cross Breeze'
    },
    {
      icon: Stethoscope,
      title: 'Healthy Animal Care',
      description: 'Strict preventive healthcare protocol, routine deworming, vitamin supplements, and emergency veterinarian visit readiness.',
      highlight: 'Medical & Vaccine Records'
    },
    {
      icon: UserCheck,
      title: 'Professional Management',
      description: 'Experienced farm supervisors living on site 24/7, providing individualized animal care, nutrition monitoring, and buyer assistance.',
      highlight: '24/7 On-site Staff'
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-extrabold uppercase tracking-widest">
            Infrastructure & Care
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            Modern Farm <span className="text-gradient-green">Facilities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Designed for superior livestock comfort, biosecurity, and hygiene. See how our infrastructure keeps our goats and sheep healthy and active.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-farm-paleBeige border border-slate-200/80 hover:bg-white hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-farm-darkGreen to-farm-emerald flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-8 h-8 text-farm-accentGreen" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-farm-darkGreen mb-3 group-hover:text-farm-emerald transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-farm-emerald uppercase tracking-wider">
                    {item.highlight}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-farm-accentGreen animate-ping"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
