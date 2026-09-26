import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'Kangaroo Water Purifiers Pvt. Ltd. | Industrial & Commercial RO Plants',
  description:
    '19 Years of Water Treatment Expertise in Chhatrapati Sambhajinagar. Manufacturers of Industrial RO Plants (100–20,000 LPH), Water Softeners, UF Units, Online/Offline Chillers & Automatic Water Vending ATMs.',
  keywords: [
    'Kangaroo Water Purifiers',
    'RO Plant Chhatrapati Sambhajinagar',
    'Industrial RO Plant Manufacturer Maharashtra',
    'Water Softener Plant Sambhajinagar',
    'Water Chiller Buldhana',
    'Water Vending ATM Machine',
    'STP ETP Plant Chikhli',
    '1000 LPH RO Plant Price',
  ],
  authors: [{ name: 'Kangaroo Water Purifiers Pvt. Ltd.' }],
  openGraph: {
    title: 'Kangaroo Water Purifiers Pvt. Ltd.',
    description: '19 Years of Expertise in Custom Engineered RO Plants, Softeners & Chillers.',
    url: 'https://www.kangaroowater.in',
    siteName: 'Kangaroo Water Purifiers',
    images: [
      {
        url: '/images/hero/hero-ro.svg',
        width: 1200,
        height: 630,
        alt: 'Kangaroo Water Purifiers Pvt Ltd',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#f7941d] selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
