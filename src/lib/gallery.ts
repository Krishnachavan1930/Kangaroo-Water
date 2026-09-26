export interface GalleryItem {
  id: string;
  title: string;
  category: 'Industrial RO' | 'Commercial Setup' | 'Government Project' | 'Water ATM' | 'Chillers & Softeners';
  location: string;
  capacity: string;
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '10,000 LPH Industrial RO Plant',
    category: 'Industrial RO',
    location: 'Chhatrapati Sambhajinagar MIDC',
    capacity: '10,000 LPH',
    image: '/images/real_gallery/install-1.jpg',
    description: 'Heavy duty stainless steel vessel RO plant with automatic backwash and remote monitoring for manufacturing facility.',
  },
  {
    id: 'gal-2',
    title: 'Buldhana District Police Headquarters RO System',
    category: 'Government Project',
    location: 'Buldhana',
    capacity: '2,000 LPH + Chiller',
    image: '/images/real_gallery/install-2.jpg',
    description: 'Complete drinking water installation with online 3.0 Tr chiller serving police headquarters staff and visitors.',
  },
  {
    id: 'gal-3',
    title: 'Smart Water ATM Kiosk Installation',
    category: 'Water ATM',
    location: 'Gram Panchayat Kiosk, Jalna',
    capacity: '1,000 LPH + ATM Kiosk',
    image: '/images/real_gallery/install-3.jpg',
    description: 'Coin, Smart Card & UPI enabled automatic dispensing unit providing 24x7 clean water to rural village residents.',
  },
  {
    id: 'gal-4',
    title: '20L Water Jar Packaging Plant',
    category: 'Commercial Setup',
    location: 'Chikhli MIDC',
    capacity: '5,000 LPH Commercial RO',
    image: '/images/real_gallery/install-4.jpg',
    description: 'Turnkey commercial water plant setup for commercial jar distribution entrepreneur with high recovery membranes.',
  },
  {
    id: 'gal-5',
    title: 'Educational Institute 2000 LPH Purifier',
    category: 'Industrial RO',
    location: 'Engineering College, Chh. Sambhajinagar',
    capacity: '2,000 LPH RO + UV',
    image: '/images/real_gallery/install-5.jpg',
    description: 'Multi-stage RO purifier with UV sterilization system serving 1,500+ students and faculty members daily.',
  },
  {
    id: 'gal-6',
    title: '5.0 Tr Heavy Industrial Chiller Setup',
    category: 'Chillers & Softeners',
    location: 'Beverage Processing Plant',
    capacity: '5.0 Tr Online Chiller',
    image: '/images/real_gallery/install-6.jpg',
    description: 'Copeland compressor powered online water chiller integrated with 3000 LPH RO plant.',
  },
  {
    id: 'gal-7',
    title: 'Hospital Central Pure Water System',
    category: 'Government Project',
    location: 'Civil Hospital Complex',
    capacity: '1,000 LPH SS Vessel NXT+UV',
    image: '/images/real_gallery/install-7.jpg',
    description: 'Ultra-pure operator-free SS vessel RO plant with dual UV deactivators for medical grade water.',
  },
  {
    id: 'gal-8',
    title: 'Resort & Water Park Softening Plant',
    category: 'Chillers & Softeners',
    location: 'Shegaon Resort',
    capacity: '15,000 LPH Softener',
    image: '/images/real_gallery/install-8.jpg',
    description: 'Fully automatic ion-exchange water softener preventing scale buildup across swimming pools & boiler utilities.',
  },
  {
    id: 'gal-9',
    title: 'Gram Panchayat Kiosk Pure Water Unit',
    category: 'Government Project',
    location: 'Buldhana Rural Kiosk',
    capacity: '1,000 LPH RO Kiosk',
    image: '/images/real_gallery/install-9.jpg',
    description: 'Turnkey solar-compatible drinking water kiosk for village community clean water access.',
  },
  {
    id: 'gal-10',
    title: 'Commercial Bottling & Filling Station',
    category: 'Commercial Setup',
    location: 'Waluj MIDC',
    capacity: '3,000 LPH RO Unit',
    image: '/images/real_gallery/install-10.jpg',
    description: 'High recovery automated reverse osmosis plant with mineral dosing and UV disinfection.',
  },
  {
    id: 'gal-11',
    title: 'Heavy Duty Boiler Feed Softener Plant',
    category: 'Chillers & Softeners',
    location: 'Chh. Sambhajinagar Textile Unit',
    capacity: '10,000 LPH Softener',
    image: '/images/real_gallery/install-11.jpg',
    description: 'Automatic multi-port valve controlled softener protecting industrial steam boilers from hardness scale.',
  },
  {
    id: 'gal-12',
    title: 'Multi-Tap School Pure Water Kiosk',
    category: 'Industrial RO',
    location: 'High School Campus, Chikhli',
    capacity: '1,000 LPH RO + Chiller',
    image: '/images/real_gallery/install-12.jpg',
    description: 'Safe drinking water installation with multi-tap chilled water dispensing manifold for students.',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Buldhana Police Dept', type: 'Government', location: 'Buldhana' },
  { name: 'Gram Panchayat Kiosks', type: 'Govt Infrastructure', location: 'PAN Maharashtra' },
  { name: 'Civil Hospital', type: 'Healthcare', location: 'Chh. Sambhajinagar' },
  { name: 'Apex Engineering College', type: 'Institutional', location: 'Chh. Sambhajinagar' },
  { name: 'Marathwada Beverage Corp', type: 'Industrial', location: 'Waluj MIDC' },
  { name: 'Grand Horizon Resort', type: 'Hospitality', location: 'Chikhli' },
  { name: 'Pure Jal Jar Bottlers', type: 'Commercial Bottler', location: 'Buldhana' },
  { name: 'Greenfield Housing Society', type: 'Residential', location: 'Chh. Sambhajinagar' },
];
