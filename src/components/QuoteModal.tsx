'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building2, Droplets } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct = '1000 LPH RO Plant' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: defaultProduct,
    capacity: '1000 LPH',
    useCase: 'Institutional / School',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

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
        setErrorMsg(data.error || 'Failed to submit quote request. Please call us directly.');
      }
    } catch {
      setErrorMsg('Network error. Please try again or call 92 71 98 9191.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 relative">
        {/* Header */}
        <div className="bg-[#1a2a6c] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#f7941d] text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              Fast Quote Inquiry
            </span>
            <span className="text-xs text-slate-300">19 Years Purity Guarantee</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Request Official Price Quote</h3>
          <p className="text-sm text-slate-200 mt-1">
            Get customized engineering specifications &amp; pricing within 15 minutes.
          </p>
        </div>

        {/* Form or Success State */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Inquiry Received!</h4>
              <p className="text-slate-600 mt-2 text-sm max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our senior technical team at Chhatrapati Sambhajinagar HQ will contact you shortly at <span className="font-semibold">{formData.phone}</span>.
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200">
                Need urgent assistance? Call us directly at{' '}
                <a href={`tel:${COMPANY_CONTACT.phoneClean}`} className="text-[#1a2a6c] font-bold underline">
                  92 71 98 9191
                </a>
              </div>
              <button
                onClick={onClose}
                className="mt-6 bg-[#1a2a6c] hover:bg-[#101f52] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Close Window
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
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none"
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
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City / Installation Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sambhajinagar / Buldhana"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Product Requirement</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none bg-white"
                  >
                    <option value="ECO 1000 LPH RO (₹1,35,000)">ECO 1000 LPH RO (₹1,35,000)</option>
                    <option value="Premium Semi-Auto RO (₹1,55,000)">Premium Semi-Auto RO (₹1,55,000)</option>
                    <option value="NXT Premium Fully Auto RO (₹1,75,000)">NXT Premium Fully Auto RO (₹1,75,000)</option>
                    <option value="NXT Premium RMS + UV (₹2,15,000)">NXT Premium RMS + UV (₹2,15,000)</option>
                    <option value="SS Vessels NXT + UV (₹2,49,000)">SS Vessels NXT + UV (₹2,49,000)</option>
                    <option value="Water Softener Plant">Water Softener Plant</option>
                    <option value="Water Chiller (1.5 to 5.0 Tr)">Water Chiller (1.5 to 5.0 Tr)</option>
                    <option value="Automatic Water Vending ATM">Automatic Water Vending ATM</option>
                    <option value="STP & ETP Plant">STP &amp; ETP Plant</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Use Case</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none bg-white"
                  >
                    <option value="Institutional / School / College">Institutional / School / College</option>
                    <option value="Commercial 20L Jar Business">Commercial 20L Jar Business</option>
                    <option value="Hotel / Restaurant / Lodge">Hotel / Restaurant / Lodge</option>
                    <option value="Passive Income Water ATM Kiosk">Passive Income Water ATM Kiosk</option>
                    <option value="Hospital / Laboratory">Hospital / Laboratory</option>
                    <option value="Industrial Manufacturing">Industrial Manufacturing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Requirements / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Tell us raw water source (TDS), capacity requirement, or special needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a2a6c] focus:border-transparent outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#f7941d] hover:bg-[#e07d08] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base"
              >
                {isSubmitting ? (
                  <span>Processing Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Get Instant Price Quote</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
