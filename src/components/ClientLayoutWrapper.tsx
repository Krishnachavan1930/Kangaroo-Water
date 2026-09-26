'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import FloatingActions from '@/components/FloatingActions';

export const QuoteModalContext = React.createContext<{
  openQuoteModal: (productName?: string) => void;
}>({
  openQuoteModal: () => {},
});

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('1000 LPH RO Plant');

  const openQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setIsQuoteOpen(true);
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <TopBar />
          <Navbar onOpenQuote={() => openQuoteModal()} />
          <main>{children}</main>
        </div>
        <Footer />
        <FloatingActions />
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          defaultProduct={selectedProduct}
        />
      </div>
    </QuoteModalContext.Provider>
  );
}
