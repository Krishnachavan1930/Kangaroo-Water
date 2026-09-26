'use client';

import React from 'react';
import Image from 'next/image';
import { Coins, Smartphone, CreditCard, BarChart3, CheckCircle2, PhoneCall } from 'lucide-react';
import { VENDING_ATM_RATES } from '@/lib/products';

interface VendingAtmSectionProps {
  onOpenQuote: () => void;
}

export default function VendingAtmSection({ onOpenQuote }: VendingAtmSectionProps) {
  return (
    <section className="py-20 bg-slate-900 text-white relative" id="vending-machines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Employee-Free Passive Income Business
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Automatic Water Vending ATM Machines
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Deploy smart 24x7 water kiosks equipped with Coin validators, RFID Smart Cards, and UPI QR Code scanners with live GSM cloud monitoring.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 hover:border-[#f7941d] transition-all">
            <div className="w-12 h-12 bg-[#f7941d]/20 text-[#f7941d] rounded-xl flex items-center justify-center mb-4">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Multi-Payment Integration</h3>
            <p className="text-xs text-slate-300">
              Accepts Indian Coins (₹1, ₹2, ₹5, ₹10), Smart Cards, and direct UPI QR Code scanning via BHIM/GooglePay/PhonePe.
            </p>
          </div>

          <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 hover:border-[#00c6ff] transition-all">
            <div className="w-12 h-12 bg-[#00c6ff]/20 text-[#00c6ff] rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">GSM Cloud Telemetry</h3>
            <p className="text-xs text-slate-300">
              Remote mobile dashboard tracking total liters dispensed, daily revenue, water level alerts, and tank empty/full status.
            </p>
          </div>

          <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 hover:border-emerald-400 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Daily Automated Reports</h3>
            <p className="text-xs text-slate-300">
              Receive SMS &amp; email alerts every evening with daily sales revenue breakdowns and audit logs to prevent cash leakage.
            </p>
          </div>

          <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 hover:border-purple-400 transition-all">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Zero Staff Requirement</h3>
            <p className="text-xs text-slate-300">
              100% automated self-service operation for Gram Panchayats, railway stations, bus stands, and commercial market hubs.
            </p>
          </div>
        </div>

        {/* ATM Controller Rate Comparison Table Across Brands */}
        <div className="bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Water ATM Controller Rate Comparison Across Brands
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Comparing Kangaroo, Proton, Aster, Khyatee &amp; APDP controller specifications
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
              * Optional GSM Module: ₹8,000 Extra | CRI 0.5 HP Feed Pump: ₹3,500 Extra
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1a2a6c] text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Brand / Model</th>
                  <th className="py-4 px-6">Supported Payment Options</th>
                  <th className="py-4 px-6">Controller Unit Rate</th>
                  <th className="py-4 px-6">Key Built-in Features</th>
                  <th className="py-4 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-medium">
                {VENDING_ATM_RATES.map((atm, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-700/50 transition-colors ${
                      atm.isKangarooBrand ? 'bg-[#1a2a6c]/60 font-bold border-l-4 border-l-[#f7941d]' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-white flex items-center gap-2">
                      {atm.isKangarooBrand && <span className="text-xs text-[#f7941d]">⭐</span>}
                      <span>{atm.brand}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      <div className="flex flex-wrap gap-1">
                        {atm.supportedPayments.map((pm, pidx) => (
                          <span
                            key={pidx}
                            className="bg-slate-900 text-amber-300 text-[11px] px-2 py-0.5 rounded border border-slate-700"
                          >
                            {pm}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-400 font-bold text-base">{atm.controllerPrice}</td>
                    <td className="py-4 px-6 text-xs text-slate-300">
                      {atm.features.join(' • ')}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={onOpenQuote}
                        className="bg-[#f7941d] hover:bg-[#e07d08] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                      >
                        Inquire
                      </button>
                    </td>
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
