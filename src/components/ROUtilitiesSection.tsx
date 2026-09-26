'use client';

import React, { useState } from 'react';
import { Building2, Briefcase, Coins, Check, HelpCircle } from 'lucide-react';
import { RO_UTILITY_USE_CASES, NECESSARY_UNITS_TABLE } from '@/lib/products';

export default function ROUtilitiesSection() {
  const [activeTab, setActiveTab] = useState('institutional');

  const activeUseCase = RO_UTILITY_USE_CASES.find((uc) => uc.id === activeTab) || RO_UTILITY_USE_CASES[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative" id="machinery-utilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Tailored Applications &amp; Venues
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Types of RO Machinery Utilities
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Select your enterprise category below to view suitable application venues and essential equipment unit requirements.
          </p>
        </div>

        {/* 3 Use-Case Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {RO_UTILITY_USE_CASES.map((uc) => {
            const isActive = uc.id === activeTab;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-[#f7941d] text-white shadow-xl shadow-orange-500/20 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {uc.id === 'institutional' && <Building2 className="w-4 h-4" />}
                {uc.id === 'commercial' && <Briefcase className="w-4 h-4" />}
                {uc.id === 'passive-income' && <Coins className="w-4 h-4" />}
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Content Box */}
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 mb-16 backdrop-blur-md shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-700 pb-6 mb-8">
              <div>
                <span className="text-xs font-bold text-[#00c6ff] uppercase tracking-wider">
                  Target Market &amp; Purpose
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeUseCase.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {activeUseCase.subtitle}
                </p>
              </div>
              <div className="bg-[#1a2a6c] px-4 py-2.5 rounded-2xl border border-white/10 text-xs text-amber-300 font-semibold max-w-xs">
                💡 {activeUseCase.highlight}
              </div>
            </div>

            {/* Venues Grid */}
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
              Applicable Venues &amp; Deployment Sites:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {activeUseCase.venues.map((venue, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 hover:bg-[#1a2a6c] border border-slate-700/80 hover:border-orange-500 p-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f7941d]"></span>
                  <span>{venue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Necessary Units Comparison Table */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Necessary Units Comparison Matrix
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Required vs optional water plant sub-systems per enterprise type
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-700 shadow-xl bg-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1a2a6c] text-white uppercase text-[11px] font-bold tracking-wider border-b border-slate-700">
                <tr>
                  <th className="py-4 px-6">Business / Sector Type</th>
                  <th className="py-4 px-4 text-center">Purification Unit</th>
                  <th className="py-4 px-4 text-center">Raw Water Storage</th>
                  <th className="py-4 px-4 text-center">Treated Water Storage</th>
                  <th className="py-4 px-4 text-center">Chilling Unit</th>
                  <th className="py-4 px-4 text-center">Auto Dispensing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-medium">
                {NECESSARY_UNITS_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-700/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f7941d]"></span>
                      <span>{row.businessType}</span>
                    </td>
                    <td className="py-4 px-4 text-center text-emerald-400 font-semibold">{row.purificationUnit}</td>
                    <td className="py-4 px-4 text-center text-slate-200">{row.rawWaterStorage}</td>
                    <td className="py-4 px-4 text-center text-slate-200">{row.treatedWaterStorage}</td>
                    <td className="py-4 px-4 text-center text-amber-300">{row.chillingUnit}</td>
                    <td className="py-4 px-4 text-center text-slate-300">{row.autoDispensing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
