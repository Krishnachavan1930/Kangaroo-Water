'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, Building, CheckCircle2, ThumbsUp } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

export default function AchievementsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [countInstallations, setCountInstallations] = useState(0);
  const [countYears, setCountYears] = useState(0);
  const [countBranches, setCountBranches] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Counter animation logic
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountInstallations(Math.floor(progress * 1500));
      setCountYears(Math.floor(progress * 19));
      setCountBranches(Math.floor(progress * 2));

      if (currentStep >= steps) {
        setCountInstallations(1500);
        setCountYears(19);
        setCountBranches(2);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#1a2a6c] text-white relative overflow-hidden">
      {/* Subtle BG pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1330] via-[#1a2a6c] to-[#101f52]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#f7941d_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Stat 1 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f7941d] transition-all">
            <div className="w-12 h-12 bg-[#f7941d] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {countInstallations}+
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 mt-2 uppercase tracking-wider">
              Successful Installations
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Across PAN India &amp; Maharashtra</p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f7941d] transition-all">
            <div className="w-12 h-12 bg-[#00c6ff] text-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {countYears}+
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 mt-2 uppercase tracking-wider">
              Years of Expertise
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Deep Engineering Tradition</p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f7941d] transition-all">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {countBranches}
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 mt-2 uppercase tracking-wider">
              Branch Offices
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Buldhana &amp; Chikhli Network</p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f7941d] transition-all">
            <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              99.8%
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 mt-2 uppercase tracking-wider">
              Client Satisfaction
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Reliable SLA &amp; Service Commitment</p>
          </div>

        </div>
      </div>
    </section>
  );
}
