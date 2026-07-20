import React from 'react';
import { Heart, Sparkles, ShieldCheck, Tag, ShoppingBag, Award, Clock, Feather } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Heart,
      title: 'Healthy Livestock',
      description: 'Regular health checks, complete vaccinations, and active exercise outdoor grounds ensure peak animal vitality.',
      color: 'from-emerald-500 to-teal-700',
      badge: '100% Healthy'
    },
    {
      icon: Sparkles,
      title: 'Hygienic Farm',
      description: 'Elevated wooden slotted platforms keep animals dry, clean, and free from ground-borne infections.',
      color: 'from-sky-500 to-blue-700',
      badge: 'Clean Elevated Sheds'
    },
    {
      icon: Feather,
      title: 'Premium Breeds',
      description: 'Carefully selected top genetic goat and sheep breeds bred for superior weight gain, milk, and breeding strength.',
      color: 'from-amber-600 to-orange-700',
      badge: 'High Genetics'
    },
    {
      icon: ShieldCheck,
      title: 'Ethical Farming',
      description: 'Cruelty-free environment with room to roam, clean drinking water, and gentle handling at all times.',
      color: 'from-green-600 to-emerald-800',
      badge: 'Ethical & Natural'
    },
    {
      icon: Tag,
      title: 'Affordable Prices',
      description: 'Direct farm rates with zero middlemen fees. Best value for money guaranteed for retail and bulk buyers.',
      color: 'from-purple-600 to-indigo-800',
      badge: 'Best Market Rates'
    },
    {
      icon: ShoppingBag,
      title: 'Bulk Orders Available',
      description: 'Equipped to handle large bulk orders for Qurbani, Eid, weddings, and commercial breeding farm supply.',
      color: 'from-rose-500 to-pink-700',
      badge: 'Festival & Retail'
    },
    {
      icon: Award,
      title: 'Trusted Seller',
      description: 'Built on honesty, transparent weigh-ins, and hundreds of satisfied repeat buyers across the region.',
      color: 'from-yellow-500 to-amber-700',
      badge: 'Top Rated'
    },
    {
      icon: Clock,
      title: 'Open 24 Hours',
      description: 'Visit our farm anytime at your convenience. Our staff is on site 24/7 to welcome you and assist.',
      color: 'from-cyan-500 to-teal-700',
      badge: '24/7 Gate Open'
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-farm-paleBeige via-white to-farm-paleBeige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-extrabold uppercase tracking-widest">
            Why Choose Humaira Farm
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            The Preferred Choice for <span className="text-gradient-green">Quality Livestock</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Discover why customers across the region trust Humaira Goat & Sheep Farm for their livestock, breeding stock, and festival requirements.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-glass-hover group relative overflow-hidden flex flex-col justify-between border border-slate-200/80"
              >
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-farm-accentGreen/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-farm-emerald group-hover:text-white transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-farm-darkGreen mb-3 group-hover:text-farm-emerald transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-farm-emerald flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
