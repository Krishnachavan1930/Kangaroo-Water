'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/lib/products';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Kangaroo Water Purifiers Pvt Ltd"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a2a6c] group-hover:text-[#f7941d] transition-colors leading-none">
              KANGAROO
            </span>
            <span className="font-serif italic font-bold text-xs sm:text-sm text-[#f7941d] leading-tight">
              water purifiers
            </span>
          </div>
        </Link>

        {/* Desktop Nav Center */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/' ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/about' ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
            }`}
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors ${
                pathname.startsWith('/products') ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 z-50 animate-fade-in">
                <div className="px-4 py-1.5 border-b border-slate-100 text-[11px] font-bold text-[#1a2a6c] uppercase tracking-wider">
                  Product Categories
                </div>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products#${cat.slug}`}
                    className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#f7941d] transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
                <Link
                  key="spares"
                  href="/products#spares"
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#f7941d] transition-colors"
                >
                  Spares &amp; Components
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/applications"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/applications' ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
            }`}
          >
            Applications
          </Link>

          <Link
            href="/gallery"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/gallery' ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/contact' ? 'text-[#f7941d]' : 'text-slate-700 hover:text-[#1a2a6c]'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="bg-[#f7941d] hover:bg-[#e07d08] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#1a2a6c] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#f7941d]"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#f7941d]"
          >
            About Us
          </Link>
          <div>
            <div className="py-2 text-base font-semibold text-slate-800 border-b border-slate-100 flex items-center justify-between">
              <span>Products</span>
            </div>
            <div className="pl-4 py-2 space-y-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products#${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-medium text-slate-600 hover:text-[#f7941d]"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/applications"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#f7941d]"
          >
            Applications
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#f7941d]"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#f7941d]"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#f7941d] hover:bg-[#e07d08] text-white py-3 rounded-xl font-bold text-center shadow"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
