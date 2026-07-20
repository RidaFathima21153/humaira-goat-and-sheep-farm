import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Mail } from 'lucide-react';

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_LINK = "https://wa.me/919876543210?text=" + encodeURIComponent("Hello Humaira Goat & Sheep Farm, I submitted a contact inquiry from your website.");
const MAPS_URL = "https://maps.app.goo.gl/HX2aG73nJd8pCFsb9";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Goats',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Redirect to WhatsApp with pre-filled message
      const text = `Hello Humaira Farm,\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-farm-paleBeige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-extrabold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            Contact <span className="text-gradient-green">Humaira Farm</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have questions about animal availability, weight, breeding pairs, or visiting schedule? We are ready to assist you anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-6 rounded-3xl glass-card border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-5 group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-farm-emerald text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-farm-accentGreen" />
              </div>
              <div>
                <span className="text-xs font-bold text-farm-brown uppercase tracking-wider">Phone Call</span>
                <h3 className="font-heading font-bold text-xl text-farm-darkGreen group-hover:text-farm-emerald transition-colors">
                  {PHONE_NUMBER}
                </h3>
                <p className="text-xs text-slate-500">Tap to call directly</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl glass-card border border-emerald-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-5 group block bg-emerald-50/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Instant Chat</span>
                <h3 className="font-heading font-bold text-xl text-emerald-900 group-hover:text-emerald-600 transition-colors">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-slate-500">Fast response within minutes</p>
              </div>
            </a>

            {/* Address Card */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl glass-card border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-5 group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-farm-darkGreen text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-farm-brown uppercase tracking-wider">Farm Location</span>
                <h3 className="font-heading font-bold text-lg text-farm-darkGreen group-hover:text-farm-emerald transition-colors">
                  Humaira Goat & Sheep Farm
                </h3>
                <p className="text-xs text-slate-500">Open 24 Hours • Click for Navigation</p>
              </div>
            </a>

            {/* Operational Info Card */}
            <div className="p-6 rounded-3xl bg-farm-darkGreen text-white shadow-xl space-y-3 relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-farm-accentGreen" />
                <h4 className="font-heading font-bold text-base text-white">Farm Operating Hours</h4>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Open 24 Hours / 7 Days a week. Visitors, family tours, and live weighing inspections welcomed.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-2xl">
            <h3 className="font-heading font-bold text-2xl text-farm-darkGreen mb-2">
              Send Us an Inquiry
            </h3>
            <p className="text-slate-600 text-sm mb-8">
              Fill out your requirements below and our farm manager will get back to you immediately.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-bold text-2xl text-emerald-900">Inquiry Sent Successfully!</h4>
                <p className="text-sm text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. Redirecting you to WhatsApp to connect with our farm representative...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohd Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-farm-emerald focus:ring-2 focus:ring-farm-emerald/20 transition text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-farm-emerald focus:ring-2 focus:ring-farm-emerald/20 transition text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Livestock Requirement *
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-farm-emerald focus:ring-2 focus:ring-farm-emerald/20 transition text-sm bg-white"
                  >
                    <option value="Goats">Goats (General)</option>
                    <option value="Sheep">Sheep</option>
                    <option value="Baby Goats (Kids)">Baby Goats (Kids)</option>
                    <option value="Male Goats (Bucks)">Male Goats (Bucks / Qurbani)</option>
                    <option value="Breeding Stock">Breeding Stock Pairs</option>
                    <option value="Bulk Order">Bulk Order / Commercial Farm Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about the quantity, weight preference, or preferred visit date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-farm-emerald focus:ring-2 focus:ring-farm-emerald/20 transition text-sm bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-farm-darkGreen hover:bg-farm-emerald text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5 text-farm-accentGreen" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
