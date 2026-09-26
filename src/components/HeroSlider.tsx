'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';

interface HeroSliderProps {
  onOpenQuote: () => void;
}

const SLIDES = [
  {
    id: 'homepage-banner-slide',
    tag: '19 Years of Expertise',
    headline: 'Commercial & Domestic RO Water Purifiers',
    subheadline: 'Engineered for Purity, High TDS Removal & Long Membrane Life',
    description: 'Custom capacity plants from 100 LPH to 20,000 LPH with automatic flushing and heavy-duty CRI/Lubi pumps.',
    ctaPrimary: 'Explore RO Models',
    ctaLink: '/products#ro-plants',
    bgImage: '/images/homepage-banner.png',
    badge: 'Chhatrapati Sambhajinagar HQ',
  },
  {
    id: 'industrial-plants',
    tag: 'Custom Engineered Systems',
    headline: 'Turnkey Industrial Water Treatment Plants',
    subheadline: 'We Do Not Just Sell Machines — We Engineer Tailored Solutions',
    description: 'Robust stainless steel & FRP vessel systems designed to handle demanding raw water quality challenges across factories & utilities.',
    ctaPrimary: 'Request Plant Design',
    ctaLink: '/contact',
    bgImage: '/images/real_products/ro-plant.jpg',
    badge: 'ISO 9001:2015 & ISO 14001',
  },
  {
    id: 'water-chillers',
    tag: 'Industrial Cooling Tech',
    headline: 'Heavy-Duty Online & Offline Water Chillers',
    subheadline: 'From 1.5 Tr to 5.0+ Tr with 1 & 2-Year Full Warranty Options',
    description: 'Stainless steel 304 cooling tanks paired with Copeland compressors for schools, function halls, and bottling plants.',
    ctaPrimary: 'View Chiller Rates',
    ctaLink: '/products#chillers',
    bgImage: '/images/real_products/water-chiller.jpg',
    badge: 'Copeland Compressor Powered',
  },
  {
    id: 'vending-atm',
    tag: 'Employee-Free Passive Income',
    headline: 'Smart Automatic Water Vending ATM Machines',
    subheadline: 'Coin, Smart Card & UPI QR Enabled Dispensing Kiosks',
    description: 'Start a lucrative low-investment water business with 24x7 GSM mobile cloud telemetry and daily revenue reports.',
    ctaPrimary: 'Discover ATM Business',
    ctaLink: '/products#vending-machines',
    bgImage: '/images/real_products/water-atm.jpg',
    badge: 'GSM Cloud Telemetry',
  },
  {
    id: 'stp-etp',
    tag: 'Zero Liquid Discharge',
    headline: 'Turnkey STP & ETP Treatment Systems',
    subheadline: 'Sewage & Effluent Treatment for Sustainable Waste Management',
    description: 'MBBR & MBR membrane technologies ensuring 100% PCB environmental compliance for hotels, housing & industries.',
    ctaPrimary: 'Get STP Specs',
    ctaLink: '/products#stp-etp',
    bgImage: '/images/real_products/stp-etp.jpg',
    badge: 'PCB Compliant Systems',
  },
];

export default function HeroSlider({ onOpenQuote }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a1128] text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Slide Item */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Graphic Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.bgImage}
                alt={slide.headline}
                fill
                className="object-cover object-center opacity-70"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent"></div>
            </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
              <div className="max-w-2xl">
                {/* 19 Years Badge Overlay */}
                <div className="inline-flex items-center gap-2 bg-[#f7941d] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-xl border border-white/20">
                  <Award className="w-4 h-4" />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-md">
                  {slide.headline}
                </h1>

                <h2 className="text-lg sm:text-xl font-bold text-[#00c6ff] mb-4">
                  {slide.subheadline}
                </h2>

                <p className="text-sm sm:text-base text-slate-200 mb-8 leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="bg-[#f7941d] hover:bg-[#e07d08] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenQuote}
                    className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all flex items-center gap-2 shadow-lg"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#00c6ff]" />
                    <span>Get Instant Price Quote</span>
                  </button>
                </div>

                {/* Certification / Location Pill */}
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-black/60 px-3.5 py-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{slide.badge}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/50 hover:bg-[#f7941d] text-white border border-white/20 transition-all shadow-xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/50 hover:bg-[#f7941d] text-white border border-white/20 transition-all shadow-xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'w-8 bg-[#f7941d]' : 'w-2.5 bg-white/40 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
