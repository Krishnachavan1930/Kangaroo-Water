'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/gallery';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Industrial RO', 'Government Project', 'Water ATM', 'Commercial Setup', 'Chillers & Softeners'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#f7941d] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Real Installation Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2a6c] mt-3">
            PAN India Project Gallery
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Explore 1500+ successful installations across Maharashtra &amp; PAN India including Buldhana Police HQ, Gram Panchayats &amp; Commercial Plants.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-[#1a2a6c] text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-[#f7941d] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-[#1a2a6c] text-base leading-snug group-hover:text-[#f7941d] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mt-1">
                    <span>📍 {item.location}</span>
                    <span>• {item.capacity}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
