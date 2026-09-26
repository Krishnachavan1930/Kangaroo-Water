'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mascot & Plant Illustration */}
          <div className="relative">
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-[#1a2a6c]">
              <Image
                src="/images/mascot.svg"
                alt="Dr Kangaroo Mascot - Kangaroo Water Purifiers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a6c] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#f7941d] text-white flex items-center justify-center font-black text-xl shadow-lg flex-shrink-0">
                  19+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a6c]">Years of Industry Excellence</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Based in Chhatrapati Sambhajinagar, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Decorative BG element */}
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#f7941d]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Column: Company Story & Certifications */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-4 tracking-tight leading-tight">
              Solution-Driven, Custom-Engineered Systems — Not Just Machines.
            </h2>

            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Welcome to <strong className="text-slate-900">Kangaroo Water Purifiers Pvt. Ltd.</strong>, your trusted partner in advanced industrial and commercial water purification. Headquartered at <span className="font-semibold text-slate-800">Bizz Tower, Chikhalthana MIDC, Chhatrapati Sambhajinagar</span>, we bring over 19 years of deep engineering expertise to solve complex raw water challenges across India.
            </p>

            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Driven by innovation and smart automation, every RO plant, softener, chiller, and water ATM we build is custom-designed for your specific water chemistry — guaranteeing high recovery, minimal downtime, and long-term durability.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f7941d] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a6c]">Tailored Engineering</h4>
                  <p className="text-xs text-slate-500">Customized according to raw water TDS &amp; daily volume needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f7941d] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a6c]">Top-Tier Spares</h4>
                  <p className="text-xs text-slate-500">Exclusively using CRI/Lubi pumps, SS pressure tubes &amp; premium media.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f7941d] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a6c]">Smart Automation</h4>
                  <p className="text-xs text-slate-500">Astero NXT RMS remote mobile alerts &amp; dry run protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f7941d] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a6c]">Worry-Free Service</h4>
                  <p className="text-xs text-slate-500">Branch offices in Buldhana &amp; Chikhli for rapid technician dispatch.</p>
                </div>
              </div>
            </div>

            {/* Certification Badges Row */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Quality &amp; Safety Certifications
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {COMPANY_CONTACT.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-slate-100 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 px-3 py-1.5 rounded-lg text-xs font-bold text-[#1a2a6c] transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#f7941d]" />
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Know More Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1a2a6c] hover:bg-[#101f52] text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#f7941d]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
