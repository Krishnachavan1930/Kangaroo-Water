'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, Building2, MapPin, Cpu, Settings, Users, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';
import { QuoteModalContext } from '@/components/ClientLayoutWrapper';
import AchievementsCounter from '@/components/AchievementsCounter';
import ClientShowcase from '@/components/ClientShowcase';

export default function AboutPage() {
  const { openQuoteModal } = useContext(QuoteModalContext);

  return (
    <div className="w-full bg-slate-50">
      {/* Page Header Banner */}
      <section className="bg-[#1a2a6c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                19 Years of Engineering Legacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 tracking-tight">
                About Kangaroo Water Purifiers
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
                Solution-Driven, Custom-Engineered Water Treatment Systems — Not Just Off-the-Shelf Machines.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
              <span className="text-3xl font-black text-[#f7941d]">19+</span>
              <span className="block text-xs font-bold text-slate-200">Years Industry Trust</span>
              <span className="text-[10px] text-slate-400">Headquartered in Chh. Sambhajinagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Infrastructure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Our Corporate Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a2a6c] leading-tight">
                Engineering Custom Pure Water Solutions Since 2007
              </h2>

              <p>
                Based in <strong className="text-slate-900">Chhatrapati Sambhajinagar (Aurangabad), Maharashtra</strong>, Kangaroo Water Purifiers Pvt. Ltd. was founded with a singular vision: to replace generic, cookie-cutter water purifiers with custom-built industrial and commercial purification plants designed around specific source water chemistry.
              </p>

              <p>
                Whether tackling high Silica levels in well water, severe hardness in borewell supplies, or bacteria contamination in municipal water, our senior engineering team designs bespoke systems that guarantee high permeate recovery and low operating costs.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-bold text-[#1a2a6c] text-base">Our Core Values &amp; Promise:</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <span><strong>100% Genuine Components:</strong> We exclusively use CRI / Lubi pumps, SS 304/316 pressure tubes, and premium high-rejection membranes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <span><strong>Smart Automation:</strong> Astero NXT RMS cloud remote monitoring with real-time mobile notifications.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <span><strong>Rapid Local Technician Network:</strong> Direct branch presence in Buldhana and Chikhli for zero-downtime service.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <Image
                  src="/images/hero/hero-industrial.svg"
                  alt="Kangaroo Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>

              {/* HQ Badge Overlay */}
              <div className="mt-6 bg-[#1a2a6c] text-white p-6 rounded-2xl shadow-xl flex items-start gap-4 border border-white/10">
                <MapPin className="w-6 h-6 text-[#f7941d] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Head Office &amp; Assembly Unit</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {COMPANY_CONTACT.hqAddress.line1}, {COMPANY_CONTACT.hqAddress.line2}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a2a6c] bg-slate-100 px-3 py-1 rounded-full">
            Global Compliance Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a6c] mt-2">
            Quality Certifications &amp; Accreditations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {COMPANY_CONTACT.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-[#f7941d] hover:shadow-lg transition-all"
              >
                <ShieldCheck className="w-8 h-8 text-[#f7941d] mx-auto mb-3" />
                <h3 className="font-bold text-[#1a2a6c] text-sm">{cert.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <AchievementsCounter />

      {/* Client Showcase */}
      <ClientShowcase />

      {/* CTA Button */}
      <section className="py-16 text-center">
        <button
          onClick={() => openQuoteModal('About Us Consultation')}
          className="bg-[#f7941d] hover:bg-[#e07d08] text-white font-bold px-8 py-4 rounded-full shadow-2xl transition-all text-base inline-flex items-center gap-2"
        >
          <PhoneCall className="w-5 h-5" />
          <span>Connect With Our Engineering Team</span>
        </button>
      </section>
    </div>
  );
}
