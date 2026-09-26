'use client';

import React from 'react';
import Image from 'next/image';
import { Snowflake, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { CHILLER_PRICING_DATA } from '@/lib/products';

interface ChillersTableProps {
  onOpenQuote: () => void;
}

export default function ChillersTable({ onOpenQuote }: ChillersTableProps) {
  return (
    <section className="py-20 bg-white relative" id="chillers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00c6ff] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Industrial Cooling Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-3 tracking-tight">
            Online &amp; Offline Water Chillers Pricing Matrix
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Heavy-duty industrial water chillers built with SS 304 food-grade cooling tanks and Copeland compressors. Compare sizes and warranty options below.
          </p>
        </div>

        {/* 2-Column Info & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
          <div className="lg:col-span-2 bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#00c6ff]/20 text-[#00c6ff] rounded-xl">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Online vs Offline Chiller Engineering</h3>
                <p className="text-xs text-slate-300">Designed for schools, bottling plants &amp; commercial setups</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-[#00c6ff] mb-1">Online Chillers</h4>
                <p className="leading-relaxed">
                  Cools water continuously in-line as it flows from the RO unit directly to taps/dispensers. Instant cold water output without buffer storage.
                </p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-[#f7941d] mb-1">Offline Chillers</h4>
                <p className="leading-relaxed">
                  Cools water inside an insulated stainless steel storage tank (200L to 2,000L). Best for high peak hourly demand surges like school break times.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-64 lg:h-full min-h-[220px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg">
            <Image
              src="/images/products/water-chiller.svg"
              alt="Kangaroo Industrial Water Chiller"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a6c]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-[#f7941d] uppercase">Heavy Duty Performance</span>
              <p className="text-sm font-bold mt-0.5">1.5 Tr to 5.0+ Tr Available</p>
            </div>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#1a2a6c] text-white uppercase text-[11px] font-bold tracking-wider">
              <tr>
                <th className="py-4 px-6">Chiller Capacity (Tonnage)</th>
                <th className="py-4 px-4">System Type</th>
                <th className="py-4 px-6">1-Year Warranty Price</th>
                <th className="py-4 px-6">2-Year Warranty Price</th>
                <th className="py-4 px-6">Best Application Venues</th>
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {CHILLER_PRICING_DATA.map((chiller, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#1a2a6c]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00c6ff]"></span>
                      <span>{chiller.capacity}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-600">{chiller.type}</td>
                  <td className="py-4 px-6 font-bold text-slate-900 text-base">{chiller.warranty1YrPrice}</td>
                  <td className="py-4 px-6 font-extrabold text-[#f7941d] text-base">{chiller.warranty2YrPrice}</td>
                  <td className="py-4 px-6 text-xs text-slate-600 max-w-xs">{chiller.bestFor}</td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={onOpenQuote}
                      className="bg-[#1a2a6c] hover:bg-[#f7941d] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                    >
                      Enquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
