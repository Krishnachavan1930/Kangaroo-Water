'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Building } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: '1000 LPH RO Plant',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Failed to submit form.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Get In Touch With Our Engineering Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a2a6c] mt-3">
            Contact Kangaroo Water Purifiers
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our Chhatrapati Sambhajinagar HQ or branch offices in Buldhana &amp; Chikhli, or request a callback below.
          </p>
        </div>

        {/* 2-Column: Form & Branch Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-bold text-[#1a2a6c] mb-2">Send Us an Inquiry</h2>
            <p className="text-xs text-slate-500 mb-6">Fill out your details to receive an official price quote within 15 minutes.</p>

            {submitted ? (
              <div className="text-center py-10 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Thank you, <span className="font-bold">{formData.name}</span>. Our engineering sales team will call you at <span className="font-bold">{formData.phone}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-bold text-[#1a2a6c] underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="bg-rose-50 text-rose-700 text-xs p-3 rounded-lg border border-rose-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9271989191"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chh. Sambhajinagar"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Product</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none bg-white"
                  >
                    <option value="ECO 1000 LPH RO (₹1,35,000)">ECO 1000 LPH RO (₹1,35,000)</option>
                    <option value="Premium Semi-Auto RO (₹1,55,000)">Premium Semi-Auto RO (₹1,55,000)</option>
                    <option value="NXT Premium Fully Auto RO (₹1,75,000)">NXT Premium Fully Auto RO (₹1,75,000)</option>
                    <option value="NXT Premium RMS + UV (₹2,15,000)">NXT Premium RMS + UV (₹2,15,000)</option>
                    <option value="SS Vessels NXT + UV (₹2,49,000)">SS Vessels NXT + UV (₹2,49,000)</option>
                    <option value="Water Softener Plant">Water Softener Plant</option>
                    <option value="Water Chiller Unit">Water Chiller Unit</option>
                    <option value="Automatic Water Vending ATM">Automatic Water Vending ATM</option>
                    <option value="STP & ETP Plant">STP &amp; ETP Plant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Requirements / Raw Water Source</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about water TDS, capacity requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a2a6c] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#f7941d] hover:bg-[#e07d08] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Inquiry Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Branch Offices & Contact Cards */}
          <div className="space-y-6">
            
            {/* HQ Card */}
            <div className="bg-[#1a2a6c] text-white p-6 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-[#f7941d] rounded-xl text-white">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#f7941d] uppercase tracking-wider block">Headquarters</span>
                  <h3 className="text-lg font-bold">Chhatrapati Sambhajinagar Office</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 pl-11 leading-relaxed">
                {COMPANY_CONTACT.hqAddress.line1}, {COMPANY_CONTACT.hqAddress.line2}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-semibold pl-11">
                <a href={`tel:${COMPANY_CONTACT.phoneClean}`} className="text-[#f7941d] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 92 71 98 9191
                </a>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>

            {/* Buldhana Branch Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-sky-100 text-sky-700 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#f7941d] uppercase tracking-wider block">Branch Office</span>
                  <h3 className="text-base font-bold text-[#1a2a6c]">{COMPANY_CONTACT.branches[0].name}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 pl-10">
                {COMPANY_CONTACT.branches[0].address}
              </p>
            </div>

            {/* Chikhli Branch Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-sky-100 text-sky-700 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#f7941d] uppercase tracking-wider block">Branch Office</span>
                  <h3 className="text-base font-bold text-[#1a2a6c]">{COMPANY_CONTACT.branches[1].name}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 pl-10">
                {COMPANY_CONTACT.branches[1].address}
              </p>
            </div>

          </div>

        </div>

        {/* Embedded Map */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="text-xs font-bold text-[#1a2a6c] uppercase tracking-wider mb-3 px-2">
            📍 Chhatrapati Sambhajinagar HQ Location Map
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-100 relative">
            <iframe
              title="Kangaroo Water Purifiers HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123456789!2d75.3789!3d19.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzM1LjQiTiA3NcKwMjInNDQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
