'use client';

import React, { useContext } from 'react';
import { QuoteModalContext } from '@/components/ClientLayoutWrapper';
import HeroSlider from '@/components/HeroSlider';
import ProductsGrid from '@/components/ProductsGrid';
import AboutPreview from '@/components/AboutPreview';
import ROUtilitiesSection from '@/components/ROUtilitiesSection';
import ProductSpecPricingCards from '@/components/ProductSpecPricingCards';
import ChillersTable from '@/components/ChillersTable';
import VendingAtmSection from '@/components/VendingAtmSection';
import ApplicationsStrip from '@/components/ApplicationsStrip';
import AchievementsCounter from '@/components/AchievementsCounter';
import ClientShowcase from '@/components/ClientShowcase';
import QuoteBanner from '@/components/QuoteBanner';

export default function HomePage() {
  const { openQuoteModal } = useContext(QuoteModalContext);

  return (
    <div className="w-full">
      {/* 3. Hero Slider */}
      <HeroSlider onOpenQuote={() => openQuoteModal()} />

      {/* 4. Our Products Grid (8 cards) */}
      <ProductsGrid onOpenQuote={() => openQuoteModal()} />

      {/* 5. About Section (2-column) */}
      <AboutPreview />

      {/* 6. Types of RO Machinery Utilities & Comparison Table */}
      <ROUtilitiesSection />

      {/* 7. Product Spec + Pricing Cards (5 models) */}
      <ProductSpecPricingCards onOpenQuoteWithModel={(modelName) => openQuoteModal(modelName)} />

      {/* 8. Chillers Section (Online vs Offline Table) */}
      <ChillersTable onOpenQuote={() => openQuoteModal('Water Chiller Unit')} />

      {/* 9. Vending Machines / Water ATM Section */}
      <VendingAtmSection onOpenQuote={() => openQuoteModal('Automatic Water Vending ATM')} />

      {/* 10. Application Industries Icon Strip */}
      <ApplicationsStrip />

      {/* 11. Achievements Counter Band */}
      <AchievementsCounter />

      {/* 12. Client Showcase */}
      <ClientShowcase />

      {/* 13. Request a Quote CTA Banner */}
      <QuoteBanner onOpenQuote={() => openQuoteModal()} />
    </div>
  );
}
