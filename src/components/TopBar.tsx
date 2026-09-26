'use client';

import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-[#1a2a6c] text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${COMPANY_CONTACT.phoneClean}`}
            className="flex items-center gap-2 hover:text-[#f7941d] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#f7941d]" />
            <span className="font-semibold tracking-wide">{COMPANY_CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_CONTACT.email}`}
            className="flex items-center gap-2 hover:text-[#f7941d] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#f7941d]" />
            <span>{COMPANY_CONTACT.email}</span>
          </a>
        </div>

        {/* Right: Badge & Social Icons */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-[11px] bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200">
            Chhatrapati Sambhajinagar HQ • ISO 9001:2015
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7941d] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7941d] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7941d] transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded text-[11px] font-semibold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
