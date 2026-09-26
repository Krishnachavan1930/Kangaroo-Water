'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Send, Sparkles, Smartphone } from 'lucide-react';
import { RO_MODELS, ProductModel } from '@/lib/products';
import { QuoteModalContext } from '@/components/ClientLayoutWrapper';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { openQuoteModal } = useContext(QuoteModalContext);

  const model = RO_MODELS.find((m) => m.slug === slug);

  if (!model) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-[#1a2a6c]">Product Model Not Found</h1>
        <p className="text-slate-600 mt-2">The requested RO plant model could not be found in our catalog.</p>
        <Link
          href="/products"
          className="mt-6 bg-[#f7941d] text-white px-6 py-2.5 rounded-full font-bold text-sm"
        >
          Return to Products Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1a2a6c] hover:text-[#f7941d] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Directory</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Box */}
            <div className="relative min-h-[350px] lg:min-h-[450px] bg-slate-900">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {model.badge && (
                <div className="absolute top-6 left-6 bg-[#f7941d] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {model.badge}
                </div>
              )}
            </div>

            {/* Right Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#00c6ff] uppercase tracking-wider bg-slate-900 px-3 py-1 rounded-full">
                  {model.capacity}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#1a2a6c] mt-3 leading-tight">
                  {model.name}
                </h1>
                <p className="text-sm text-slate-600 mt-2 font-medium">
                  {model.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-black text-[#1a2a6c]">
                      {model.formattedPrice}
                    </span>
                    <span className="text-xs text-rose-600 font-bold ml-2">
                      {model.gstNote}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Factory Direct Price
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                  {model.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => openQuoteModal(model.name)}
                  className="w-full sm:w-auto bg-[#f7941d] hover:bg-[#e07d08] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all flex-1"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Official Price Quote</span>
                </button>
                <a
                  href="tel:9271989191"
                  className="w-full sm:w-auto bg-[#1a2a6c] hover:bg-[#101f52] text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#f7941d]" />
                  <span>Call 92 71 98 9191</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Spec Sheet Table */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl mb-12">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2a6c]">
                Comprehensive Technical Specification Sheet
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Exact component mapping for model {model.name}
              </p>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
              ISO 9001:2015 Approved
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1a2a6c] text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Specification Parameter</th>
                  <th className="py-4 px-6">Configured Engineering Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {model.fullSpecsList.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                    <td className="py-3.5 px-6 font-bold text-[#1a2a6c] w-1/3">{spec.label}</td>
                    <td className="py-3.5 px-6 text-slate-800 font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
