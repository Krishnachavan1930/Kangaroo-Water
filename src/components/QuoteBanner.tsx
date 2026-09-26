'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

interface QuoteBannerProps {
  onOpenQuote: () => void;
}

export default function QuoteBanner({ onOpenQuote }: QuoteBannerProps) {
  return (
    <section className="py-16 bg-[#1a2a6c] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7941d]/15 rounded-full blur-3xl -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Mascot Image */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 bg-[#1a2a6c] rounded-2xl overflow-hidden border-2 border-[#f7941d] shadow-lg">
            <Image
              src="/images/mascot.svg"
              alt="Kangaroo Water Purifiers Mascot"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Info */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Need Engineering Consultation?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 leading-tight">
              Get Free Water Testing &amp; Custom Plant Quotation Today!
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Talk directly to our senior water engineers at Chhatrapati Sambhajinagar HQ. We will design a system tailored to your raw water TDS and daily output requirements.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00c6ff]" /> ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00c6ff]" /> 19 Years Industry Trust
              </span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_CONTACT.phoneClean}`}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call: 92 71 98 9191</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-[#f7941d] hover:bg-[#e07d08] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span>Enquire Online</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
