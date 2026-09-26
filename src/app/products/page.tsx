'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PhoneCall, CheckCircle2, Droplets, Sparkles, Snowflake, Coins, Factory } from 'lucide-react';
import { PRODUCT_CATEGORIES, RO_MODELS } from '@/lib/products';
import { QuoteModalContext } from '@/components/ClientLayoutWrapper';
import ProductSpecPricingCards from '@/components/ProductSpecPricingCards';
import ChillersTable from '@/components/ChillersTable';
import VendingAtmSection from '@/components/VendingAtmSection';

export default function ProductsPage() {
  const { openQuoteModal } = useContext(QuoteModalContext);

  return (
    <div className="w-full bg-slate-50">
      {/* Page Header */}
      <section className="bg-[#1a2a6c] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Complete Product Catalog &amp; Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 tracking-tight">
            Industrial &amp; Commercial Water Purifiers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto">
            From 100 LPH to 20,000 LPH RO plants, water softeners, chillers &amp; automated water vending ATMs. Share one single source of truth for specifications and pricing.
          </p>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2a6c]">
              Product Category Directory
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Click any category to jump directly to specifications and pricing sheets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#f7941d] shadow-sm hover:shadow-xl transition-all group"
              >
                <h3 className="font-bold text-[#1a2a6c] group-hover:text-[#f7941d] text-lg transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {cat.shortDesc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#f7941d]">
                  <span>Explore Lineup</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RO Machinery Pricing Cards (5 Models) */}
      <div id="ro-plants">
        <ProductSpecPricingCards onOpenQuoteWithModel={(modelName) => openQuoteModal(modelName)} />
      </div>

      {/* Chillers Section */}
      <div id="chillers">
        <ChillersTable onOpenQuote={() => openQuoteModal('Water Chiller')} />
      </div>

      {/* Vending Machines ATM Section */}
      <div id="vending-machines">
        <VendingAtmSection onOpenQuote={() => openQuoteModal('Water ATM Vending Machine')} />
      </div>

      {/* Spares Section */}
      <section className="py-16 bg-white border-t border-slate-200" id="spares">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold text-[#f7941d] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                Genuine OEM Parts &amp; Spares
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Kangaroo Original RO Spares &amp; Membrane Media
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                We supply CRI/Lubi raw water pumps, 4040/8040 membranes, 13x54 FRP/SS vessels, 20" jumbo bowls, Astero NXT RMS control panels, digital dosing pumps, and Dr. Kangaroo anti-scalant chemical.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal('RO Spares & Components Inquiry')}
              className="bg-[#f7941d] hover:bg-[#e07d08] text-white font-bold px-7 py-3.5 rounded-full shadow-xl transition-all whitespace-nowrap"
            >
              Order Spares &amp; Media
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
