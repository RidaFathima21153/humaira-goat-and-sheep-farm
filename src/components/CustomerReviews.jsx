import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Mohd Rizwan',
      location: 'Local Customer',
      rating: 5,
      date: '2 weeks ago',
      review: 'I bought 4 breeding goats from Humaira Goat & Sheep Farm. The elevated shed hygiene is unbelievable. Animals were energetic, healthy, and vaccinated. Highly recommended!',
      verified: true,
      initials: 'MR',
      bg: 'bg-emerald-600'
    },
    {
      name: 'Tariq Hussain',
      location: 'Bulk Festival Buyer',
      rating: 5,
      date: '1 month ago',
      review: 'Ordered bulk sheep for Eid. Humaira Farm provided transparent weigh-in, excellent customer service, and timely transport assistance. Direct farm pricing saved us a lot of money.',
      verified: true,
      initials: 'TH',
      bg: 'bg-blue-600'
    },
    {
      name: 'Zaid Khan',
      location: 'Goat Breeder',
      rating: 5,
      date: '2 months ago',
      review: 'Visiting the farm in person was a pleasure. The blue elevated walkways and hygienic feeding troughs show how professional their management is. Great breeding buck stock!',
      verified: true,
      initials: 'ZK',
      bg: 'bg-amber-600'
    },
    {
      name: 'Dr. Sameer Patel',
      location: 'Veterinary Consultant',
      rating: 5,
      date: '3 months ago',
      review: 'As a vet, I inspect many farms. Humaira Farm stands out for its high biosecurity standards, zero dampness in slatted flooring, and clean organic diet. Excellent animal welfare.',
      verified: true,
      initials: 'SP',
      bg: 'bg-teal-600'
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-farm-paleBeige via-white to-farm-paleBeige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-700 text-xs font-extrabold uppercase tracking-widest flex items-center gap-1 w-fit mx-auto">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>5.0 Rated by Buyers</span>
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            Customer <span className="text-gradient-green">Reviews</span> & Feedback
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from buyers, breeders, and farm visitors about their experience with Humaira Goat & Sheep Farm.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="max-w-2xl mx-auto mb-14 p-6 glass-card rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-200">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-extrabold font-heading text-farm-darkGreen">5.0</div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">Based on 120+ Verified Farm Reviews</p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/HX2aG73nJd8pCFsb9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 shadow-sm transition flex items-center gap-2"
          >
            <span className="text-blue-600 font-bold">G</span> View Google Map Reviews
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200 -z-0" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars & date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-100 relative z-10">
                <div className={`w-12 h-12 rounded-full ${item.bg} text-white font-bold flex items-center justify-center shadow-md`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-farm-darkGreen flex items-center gap-1.5">
                    <span>{item.name}</span>
                    {item.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                    )}
                  </h4>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
