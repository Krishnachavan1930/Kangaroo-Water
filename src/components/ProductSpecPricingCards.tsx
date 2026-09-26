'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Zap, PhoneCall, Smartphone, Sparkles, Award } from 'lucide-react';
import { RO_MODELS, ProductModel } from '@/lib/products';

interface ProductSpecPricingCardsProps {
  onOpenQuoteWithModel: (modelName: string) => void;
}

export default function ProductSpecPricingCards({ onOpenQuoteWithModel }: ProductSpecPricingCardsProps) {
  return (
    <section className="py-20 bg-slate-50 relative" id="pricing-models">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Transparent Pricing &amp; Factory Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-3 tracking-tight">
            1000 LPH RO Machinery Pricing &amp; Spec Sheets
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Choose from economical entry-level units to cloud-connected, operator-free SS vessel flagship RO plants with full manufacturer warranty.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RO_MODELS.map((model: ProductModel) => (
            <div
              key={model.id}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between relative ${
                model.popular
                  ? 'border-[#f7941d] shadow-2xl ring-2 ring-[#f7941d]/40 scale-[1.02] z-10'
                  : 'border-slate-200 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {model.popular && (
                <div className="bg-[#f7941d] text-white text-xs font-black uppercase tracking-widest text-center py-1.5 px-4 shadow">
                  ⭐ Most Popular Choice
                </div>
              )}

              <div>
                {/* Image Header */}
                <div className="relative h-52 w-full bg-slate-900">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
                  
                  {model.badge && !model.popular && (
                    <div className="absolute top-4 left-4 bg-white/95 text-[#1a2a6c] text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {model.badge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold text-[#00c6ff] uppercase tracking-wider block">
                      {model.capacity}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {model.name}
                    </h3>
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="p-6 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-black text-[#1a2a6c]">
                        {model.formattedPrice}
                      </span>
                      <span className="text-xs text-rose-600 font-bold ml-2">
                        {model.gstNote}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {model.tagline}
                  </p>
                </div>

                {/* Key Spec Bullets */}
                <div className="p-6 space-y-3 text-xs text-slate-700">
                  <div className="font-bold text-[#1a2a6c] uppercase tracking-wider text-[11px] mb-1">
                    Technical Specifications:
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Raw Water Pump: </span>
                      <span>{model.keySpecs.rawWaterPump}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">High Pressure Pump: </span>
                      <span>{model.keySpecs.highPressurePump}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Vessels: </span>
                      <span>{model.keySpecs.vessels}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Membranes: </span>
                      <span>{model.keySpecs.membranes}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Control Panel: </span>
                      <span>{model.keySpecs.controlPanel}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7941d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Dosing System: </span>
                      <span>{model.keySpecs.dosingSystem}</span>
                    </div>
                  </div>

                  {model.keySpecs.uvDisinfection && (
                    <div className="flex items-start gap-2 bg-sky-50 p-2 rounded-lg text-sky-900 border border-sky-200">
                      <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">UV Deactivator: </span>
                        <span>{model.keySpecs.uvDisinfection}</span>
                      </div>
                    </div>
                  )}

                  {model.keySpecs.specialFeatures && (
                    <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 mt-2 space-y-1">
                      <div className="font-bold text-amber-900 text-[11px] flex items-center gap-1">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Smart Automation Highlights:</span>
                      </div>
                      {model.keySpecs.specialFeatures.map((sf, idx) => (
                        <div key={idx} className="text-[11px] text-amber-800 flex items-center gap-1">
                          <span>•</span>
                          <span>{sf}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-3">
                <button
                  onClick={() => onOpenQuoteWithModel(model.name)}
                  className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                    model.popular
                      ? 'bg-[#f7941d] hover:bg-[#e07d08] text-white'
                      : 'bg-[#1a2a6c] hover:bg-[#101f52] text-white'
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Official Quote</span>
                </button>

                <Link
                  href={`/products/${model.slug}`}
                  className="block text-center text-xs font-semibold text-slate-600 hover:text-[#f7941d] py-1 transition-colors"
                >
                  View Full Technical Spec Sheet →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
