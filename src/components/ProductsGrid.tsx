'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Droplets, Sparkles, ShieldCheck, Factory, Snowflake, Coins, Building2, Building } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/lib/products';

const ICON_MAP: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-6 h-6 text-[#00c6ff]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#f7941d]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  Factory: <Factory className="w-6 h-6 text-[#f7941d]" />,
  Snowflake: <Snowflake className="w-6 h-6 text-[#00c6ff]" />,
  Coins: <Coins className="w-6 h-6 text-[#f7941d]" />,
  Building2: <Building2 className="w-6 h-6 text-[#1a2a6c]" />,
  Building: <Building className="w-6 h-6 text-[#1a2a6c]" />,
};

interface ProductsGridProps {
  onOpenQuote?: () => void;
}

export default function ProductsGrid({ onOpenQuote }: ProductsGridProps) {
  return (
    <section className="py-20 bg-slate-50 relative" id="our-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Engineered Water Treatment Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-3 tracking-tight">
            Our Advanced Product Lineup
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Custom engineered systems built in Chhatrapati Sambhajinagar to eliminate water hardness, silica, contamination, and industrial waste.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow">
                    {ICON_MAP[cat.iconName] || <Droplets className="w-6 h-6 text-[#1a2a6c]" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2a6c] group-hover:text-[#f7941d] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-4 space-y-1.5">
                    {cat.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f7941d]"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <Link
                  href={`/products#${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a2a6c] hover:text-[#f7941d] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {onOpenQuote && (
                  <button
                    onClick={onOpenQuote}
                    className="text-[11px] font-semibold text-[#f7941d] hover:underline"
                  >
                    Get Quote
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
