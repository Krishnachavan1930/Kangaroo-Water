'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/gallery';

export default function ClientShowcase() {
  return (
    <section className="py-20 bg-white relative" id="client-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Trusted PAN India Reputation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-3 tracking-tight">
            Our Satisfied Commercial &amp; Government Clients
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Over 1500+ successful installations across police headquarters, gram panchayats, hospitals, colleges, and commercial bottling plants.
          </p>
        </div>

        {/* Logo / Project Grid with Grayscale to Color Hover */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#f7941d] hover:bg-white hover:shadow-xl transition-all duration-300 min-h-[140px]"
            >
              {/* Graphic Logo representation */}
              <div className="w-12 h-12 bg-[#1a2a6c] text-white rounded-xl flex items-center justify-center font-black text-lg mb-3 grayscale-hover group-hover:bg-[#f7941d]">
                {client.name.charAt(0)}
              </div>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#1a2a6c] transition-colors leading-tight">
                {client.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-semibold text-[#f7941d] uppercase">{client.type}</span>
                <span className="text-[10px] text-slate-400">• {client.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-banner callout */}
        <div className="mt-12 bg-gradient-to-r from-[#1a2a6c] to-[#0f172a] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-[#f7941d] uppercase tracking-wider">
              PAN India Installation Network
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Join Our List of 1500+ Satisfied Water Plant Owners!
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              We provide complete scratch-to-process engineering, water testing, and installation support.
            </p>
          </div>
          <a
            href="tel:9271989191"
            className="bg-[#f7941d] hover:bg-[#e07d08] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg whitespace-nowrap transition-colors"
          >
            Call 92 71 98 9191
          </a>
        </div>
      </div>
    </section>
  );
}
