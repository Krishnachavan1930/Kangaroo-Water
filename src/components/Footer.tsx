'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONTACT, PRODUCT_CATEGORIES } from '@/lib/products';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Company Blurb + Certifications */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.svg"
                  alt="Kangaroo Water Purifiers"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white leading-none block">KANGAROO</span>
                <span className="font-serif italic text-xs font-bold text-[#f7941d]">water purifiers</span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Based in Chhatrapati Sambhajinagar, Kangaroo Water Purifiers Pvt. Ltd. brings 19 years of deep engineering expertise to deliver custom industrial RO plants, water softeners, chillers, and automated water ATMs across PAN India.
            </p>

            <div className="mt-6 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                ISO &amp; Quality Accreditations
              </span>
              <div className="flex flex-wrap gap-2">
                {COMPANY_CONTACT.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded border border-white/10"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Products Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#f7941d] uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Products Lineup
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="hover:text-[#f7941d] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#f7941d] transition-colors" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products#spares"
                  className="hover:text-[#f7941d] transition-colors flex items-center justify-between group"
                >
                  <span>RO Spares &amp; Spare Components</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#f7941d] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Branch Offices */}
          <div>
            <h4 className="text-sm font-bold text-[#f7941d] uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Corporate &amp; Branch Network
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              
              {/* HQ */}
              <div>
                <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#f7941d]" />
                  <span>{COMPANY_CONTACT.hqAddress.title}:</span>
                </div>
                <p className="text-slate-400 pl-5 leading-tight">
                  {COMPANY_CONTACT.hqAddress.line1}, {COMPANY_CONTACT.hqAddress.line2}
                </p>
              </div>

              {/* Buldhana Branch */}
              <div>
                <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#00c6ff]" />
                  <span>{COMPANY_CONTACT.branches[0].name}:</span>
                </div>
                <p className="text-slate-400 pl-5 leading-tight">
                  {COMPANY_CONTACT.branches[0].address}
                </p>
              </div>

              {/* Chikhli Branch */}
              <div>
                <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#00c6ff]" />
                  <span>{COMPANY_CONTACT.branches[1].name}:</span>
                </div>
                <p className="text-slate-400 pl-5 leading-tight">
                  {COMPANY_CONTACT.branches[1].address}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneClean}`}
                  className="flex items-center gap-2 hover:text-[#f7941d] transition-colors font-bold text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f7941d]" />
                  <span>Phone: {COMPANY_CONTACT.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-[#f7941d] transition-colors text-slate-300"
                >
                  <Mail className="w-3.5 h-3.5 text-[#f7941d]" />
                  <span>Email: {COMPANY_CONTACT.email}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Col 4: Useful Pages & Social Icons */}
          <div>
            <h4 className="text-sm font-bold text-[#f7941d] uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Company Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium mb-6">
              <li>
                <Link href="/" className="hover:text-[#f7941d] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f7941d] transition-colors">
                  About Us (19 Years Story)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#f7941d] transition-colors">
                  Product Catalog &amp; Specs
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-[#f7941d] transition-colors">
                  Applications &amp; Sectors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#f7941d] transition-colors">
                  Installation Gallery (PAN India)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f7941d] transition-colors">
                  Contact &amp; Map Location
                </Link>
              </li>
            </ul>

            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Follow Us Online
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f7941d] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f7941d] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f7941d] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kangaroo Water Purifiers Pvt. Ltd. All Rights Reserved.</p>
          <p className="text-[11px]">
            Chhatrapati Sambhajinagar HQ • Buldhana Branch • Chikhli Branch
          </p>
        </div>
      </div>
    </footer>
  );
}
