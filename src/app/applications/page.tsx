'use client';

import React, { useContext } from 'react';
import { QuoteModalContext } from '@/components/ClientLayoutWrapper';
import ROUtilitiesSection from '@/components/ROUtilitiesSection';
import ApplicationsStrip from '@/components/ApplicationsStrip';
import QuoteBanner from '@/components/QuoteBanner';

export default function ApplicationsPage() {
  const { openQuoteModal } = useContext(QuoteModalContext);

  return (
    <div className="w-full bg-slate-50">
      {/* Header Banner */}
      <section className="bg-[#1a2a6c] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Sector Solutions &amp; Venues
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 tracking-tight">
            RO Machinery Utility Applications
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto">
            From Institutional drinking water to Commercial jar bottling businesses and Passive Income Water ATMs.
          </p>
        </div>
      </section>

      {/* Main Utilities & Comparison Table */}
      <ROUtilitiesSection />

      {/* Icon Strip */}
      <ApplicationsStrip />

      {/* Banner */}
      <QuoteBanner onOpenQuote={() => openQuoteModal('Applications Page Inquiry')} />
    </div>
  );
}
