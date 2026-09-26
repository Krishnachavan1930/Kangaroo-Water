'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Briefcase, Hospital, Hotel, Home, Factory, Landmark, FlaskConical } from 'lucide-react';

const APPLICATION_INDUSTRIES = [
  { name: 'Institutional', desc: 'Schools, Colleges & Universities', icon: Building2 },
  { name: 'Commercial', desc: '20L Water Jar Bottling Plants', icon: Briefcase },
  { name: 'Hospitals', desc: 'Medical Centers & Laboratories', icon: Hospital },
  { name: 'Hotels & Resorts', desc: 'Restaurants & Hospitality', icon: Hotel },
  { name: 'Housing Societies', desc: 'Apartment Complexes & Townships', icon: Home },
  { name: 'Industries', desc: 'Factories, Boilers & Cooling Towers', icon: Factory },
  { name: 'Government & Gram Panchayat', desc: 'Public Kiosks & Rural Water', icon: Landmark },
  { name: 'Laboratories', desc: 'Ultra-Pure Deionized Systems', icon: FlaskConical },
];

export default function ApplicationsStrip() {
  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a2a6c] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            Proven Sector Deployment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a6c] mt-2 tracking-tight">
            Application Industries We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Engineered purification systems active across diverse commercial, industrial, and public sectors.
          </p>
        </div>

        {/* Grid Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {APPLICATION_INDUSTRIES.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <Link
                key={idx}
                href="/applications"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#f7941d] shadow-sm hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-[#f7941d] text-[#1a2a6c] group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-3">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold text-[#1a2a6c] group-hover:text-[#f7941d] transition-colors leading-tight">
                  {ind.name}
                </h3>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight line-clamp-2">
                  {ind.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
