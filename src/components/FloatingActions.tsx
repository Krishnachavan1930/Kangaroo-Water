'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/products';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${COMPANY_CONTACT.phoneClean}`}
        className="bg-[#1a2a6c] hover:bg-[#101f52] text-white p-3.5 rounded-full shadow-2xl border-2 border-white/20 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Call Kangaroo Water Purifiers"
        title="Call 92 71 98 9191"
      >
        <Phone className="w-5 h-5 text-[#f7941d] group-hover:animate-bounce" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl border-2 border-white/20 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Direct Inquiry"
      >
        <MessageCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
