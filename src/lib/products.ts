export interface ProductModel {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  tagline: string;
  capacity: string;
  price: number;
  formattedPrice: string;
  gstNote: string;
  popular?: boolean;
  category: 'RO Plants' | 'Water Softeners' | 'UF Units' | 'STP & ETP Plants' | 'Chillers' | 'Water Vending Machines' | 'Spares';
  description: string;
  image: string;
  keySpecs: {
    rawWaterPump: string;
    highPressurePump: string;
    vessels: string;
    membranes: string;
    controlPanel: string;
    dosingSystem: string;
    filtrationMedia?: string;
    uvDisinfection?: string;
    automation?: string;
    skid?: string;
    gauges?: string;
    specialFeatures?: string[];
  };
  fullSpecsList: { label: string; value: string }[];
}

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface ROUtilityUseCase {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  venues: string[];
  description: string;
  highlight: string;
}

export interface ChillerPricing {
  capacity: string;
  tr: string;
  warranty1YrPrice: string;
  warranty2YrPrice: string;
  type: 'Online / Offline';
  bestFor: string;
}

export interface VendingAtmBrandRate {
  brand: string;
  controllerPrice: string;
  supportedPayments: string[];
  features: string[];
  isKangarooBrand?: boolean;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'ro-plants',
    title: 'RO Plants (Reverse Osmosis)',
    slug: 'ro-plants',
    shortDesc: 'Custom industrial & commercial RO plants from 100 LPH to 20,000 LPH with advanced membrane automation.',
    fullDesc: 'Engineered for high TDS removal, silica filtration, and continuous duty operations across factories, hospitals, commercial complexes, and institutions.',
    image: '/images/real_products/ro-plant.jpg',
    iconName: 'Droplets',
    features: ['High Recovery Rates', 'Automatic Membrane Flushing', 'SS/FRP Vessel Options', 'Remote Monitoring Available'],
  },
  {
    id: 'water-softeners',
    title: 'Water Softeners',
    slug: 'water-softeners',
    shortDesc: 'High-efficiency ion exchange water softening plants to eliminate hardness and scale buildup.',
    fullDesc: 'Protects expensive industrial boilers, HVAC chillers, hotels, laundry operations, and residential societies from hard water scale.',
    image: '/images/real_products/water-softener.jpg',
    iconName: 'Sparkles',
    features: ['Automatic Regeneration', 'High-Grade Resin Media', 'Zero Scale Guarantee', 'Low Salt Consumption'],
  },
  {
    id: 'uf-units',
    title: 'UF Units (Ultrafiltration)',
    slug: 'uf-units',
    shortDesc: 'Advanced hollow-fiber membrane filtration delivering crystal-clear bacteria-free water.',
    fullDesc: 'Removes suspended solids, colloids, microorganisms, and turbidity without chemical additives, serving as perfect RO pretreatment.',
    image: '/images/real_products/uf-unit.jpg',
    iconName: 'ShieldCheck',
    features: ['0.01 Micron Filtration', 'Low Energy Operation', 'Backwash Automation', 'Pre-RO Polish'],
  },
  {
    id: 'stp-etp',
    title: 'STP & ETP Plants',
    slug: 'stp-etp',
    shortDesc: 'Turnkey Sewage and Effluent Treatment Plants for zero liquid discharge & eco compliance.',
    fullDesc: 'Custom-designed biological MBBR/SBR systems for hotels, real estate projects, textile mills, chemical plants, and municipal authorities.',
    image: '/images/real_products/stp-etp.jpg',
    iconName: 'Factory',
    features: ['MBBR & MBR Tech', 'PCB Compliant Discharge', 'Low Sludge Generation', 'Automated Aeration'],
  },
  {
    id: 'chillers',
    title: 'Water Chillers (Online & Offline)',
    slug: 'chillers',
    shortDesc: 'Heavy-duty industrial water chillers from 1.5 Tr to 5.0+ Tr with 1 & 2-year warranty options.',
    fullDesc: 'Delivers chilled drinking water for large institutions, factories, function halls, and commercial water pouch/jar plants.',
    image: '/images/real_products/water-chiller.jpg',
    iconName: 'Snowflake',
    features: ['SS 304 Cooling Tanks', 'Copeland/Emerson Compressors', 'Digital Temp Controller', 'Eco-Friendly Refrigerant'],
  },
  {
    id: 'vending-atm',
    title: 'Automatic Water Vending Machines (ATM)',
    slug: 'vending-machines',
    shortDesc: 'Smart Coin, Card & UPI enabled water ATMs for passive income and public water schemes.',
    fullDesc: 'Employee-free automatic dispensing units with real-time GSM cloud reporting, coin validator, smart card reader, and UPI QR scanner.',
    image: '/images/real_products/water-atm.jpg',
    iconName: 'Coins',
    features: ['Multi-Payment Support', 'GSM Remote Dashboard', '0.5 HP Feed Pump Compatible', 'Anti-Vandal SS Body'],
  },
  {
    id: 'institutional-solutions',
    title: 'Institutional Solutions',
    slug: 'institutional-solutions',
    shortDesc: 'Tailored safe drinking water systems for schools, colleges, banks, labs & government buildings.',
    fullDesc: 'Robust multi-stage purification with integrated UV bacterial deactivation and high flow rates built for high daily volume.',
    image: '/images/real_products/institutional.jpg',
    iconName: 'Building2',
    features: ['Multi-Tap Dispensing', 'UV Deactivator Protection', 'Heavy Duty SS Skids', 'Tamper-Proof Controls'],
  },
  {
    id: 'commercial-solutions',
    title: 'Commercial Solutions',
    slug: 'commercial-solutions',
    shortDesc: 'High-capacity plants for 20L Jar delivery, hotels, resorts, function halls & food processing.',
    fullDesc: 'Turnkey RO setups optimized for low cost per liter, long membrane life, and maximum uptime for commercial water entrepreneurs.',
    image: '/images/real_products/commercial.jpg',
    iconName: 'Building',
    features: ['Fast Jar Filling System', 'Mineral Dosing Ready', 'High Flow Rate', 'Heavy Duty Continuous Run'],
  },
];

export const RO_MODELS: ProductModel[] = [
  {
    id: 'eco-1000-lph',
    slug: 'eco-1000-lph',
    name: 'Kangaroo Water ECO 1000 LPH',
    badge: 'Best Value Entry',
    tagline: 'Economical yet high-performance 1000 Litres Per Hour RO Plant for budget-conscious enterprises.',
    capacity: '1000 LPH (Litres Per Hour)',
    price: 135000,
    formattedPrice: '₹1,35,000',
    gstNote: '+18% GST Extra',
    category: 'RO Plants',
    description: 'The Kangaroo Water ECO 1000 LPH is engineered for reliable performance with essential industrial-grade components. Ideal for small institutions, schools, and offices looking for cost-effective pure water.',
    image: '/images/real_products/ro-eco-1000.jpg',
    keySpecs: {
      rawWaterPump: 'CRI / Lubi / Equivalent 2.15/16',
      highPressurePump: 'CRI / Lubi / Axeon / Equivalent Heavy Duty',
      vessels: 'FRP 13x54 Industrial Vessels (2 nos)',
      membranes: '4040 Premium Membranes (4 nos)',
      controlPanel: 'Standard Digital Control Panel with voltage & flow display',
      dosingSystem: 'Infinity / Proton / Neo Dosing Pump',
      filtrationMedia: 'Activated Carbon 600/900 IV + Silica Sand Media',
      skid: 'Heavy duty powder-coated MS Skid',
    },
    fullSpecsList: [
      { label: 'Plant Capacity', value: '1000 Litres Per Hour (LPH)' },
      { label: 'Raw Water Pump', value: 'CRI / Lubi / Equivalent 2.15/16' },
      { label: 'High Pressure Pump', value: 'CRI / Lubi / Axeon / Equivalent' },
      { label: 'RO Vessels', value: 'FRP 13x54 Vessels (Qty 2 Nos)' },
      { label: 'RO Membranes', value: '4040 Premium Series (Qty 4 Nos)' },
      { label: 'Micron Filter', value: '20" Jumbo Bowl with Dotted PP Filter' },
      { label: 'Dosing Pump', value: 'Neo / Infinity / Proton / Equivalent' },
      { label: 'Carbon Grade', value: '600 / 900 IV Activated Carbon' },
      { label: 'Structure', value: 'Heavy Duty Powder Coated Mounting Skid' },
      { label: 'Warranty', value: '1 Year Manufacturer Warranty' },
    ],
  },
  {
    id: 'premium-semi-auto',
    slug: 'premium-semi-auto',
    name: 'Kangaroo Water Premium Semi-Auto',
    badge: 'Popular Choice',
    popular: true,
    tagline: 'Upgraded semi-automatic 1000 LPH RO unit featuring CRI Royal pump & SS pressure tubes.',
    capacity: '1000 LPH (Litres Per Hour)',
    price: 155000,
    formattedPrice: '₹1,55,000',
    gstNote: '+18% GST Extra',
    category: 'RO Plants',
    description: 'The Premium Semi-Auto model adds high-spec components including 1 HP CRI Royal 100 Raw Water Pump, SS 4080 pressure tubes, and 20" Virgin Jumbo Bowls for enhanced purity and durability.',
    image: '/images/real_products/ro-premium-semi.jpg',
    keySpecs: {
      rawWaterPump: '1 HP CRI Royal 100 RWP',
      highPressurePump: 'CRI / Lubi / Axeon / Equivalent',
      vessels: 'FRP 13x54 Vessels (2 nos) with 600/900 IV Carbon',
      membranes: '4040 Premium Series (4 nos)',
      controlPanel: 'Simply Aster Digital Control Panel (1 no)',
      dosingSystem: 'Neo / Infinity / Proton Dosing System',
      filtrationMedia: 'Carbon 600/900 IV + Multi-layer Sand Media',
      skid: 'Sturdy Steel Mounting Skid',
      gauges: 'Dual Vertical Pressure Gauges & Rotameter',
    },
    fullSpecsList: [
      { label: 'Plant Capacity', value: '1000 Litres Per Hour (LPH)' },
      { label: 'Raw Water Pump', value: '1 HP CRI Royal 100 RWP' },
      { label: 'High Pressure Pump', value: 'CRI / Lubi / Axeon / Equivalent' },
      { label: 'RO Vessels', value: 'FRP 13x54 Vessels (Qty 2 Nos)' },
      { label: 'Pressure Tubes', value: 'Stainless Steel SS 4080 (Qty 2 Nos)' },
      { label: 'RO Membranes', value: '4040 Premium Series (Qty 4 Nos)' },
      { label: 'Pre-Filter', value: '20" Virgin Jumbo Bowl (Double O-ring, White)' },
      { label: 'Control Panel', value: 'Simply Aster Digital Control Panel' },
      { label: 'Carbon Media', value: 'Carbon 600/900 IV for enhanced taste' },
      { label: 'Dosing Unit', value: 'Neo / Infinity Dosing Pump' },
    ],
  },
  {
    id: 'nxt-premium-fully-auto',
    slug: 'nxt-premium-fully-auto',
    name: 'Kangaroo Water NXT Premium Fully Automatic',
    badge: 'Automated Favorite',
    tagline: 'Fully automatic RO plant with Auto Multiport Valves & membrane auto-flushing logic.',
    capacity: '1000 LPH (Litres Per Hour)',
    price: 175000,
    formattedPrice: '₹1,75,000',
    gstNote: '+18% GST Extra (Optional UV +₹10,000)',
    category: 'RO Plants',
    description: 'Features 25 NB Auto Multi-Port Valves for hands-free auto backwash, rinse, and service cycle. Eliminates manual valve operation and protects membranes from fouling.',
    image: '/images/real_products/ro-nxt-auto.jpg',
    keySpecs: {
      rawWaterPump: '1 HP CRI Royal 100 RWP',
      highPressurePump: 'CRI / Lubi / Axeon / Equivalent',
      vessels: 'FRP 13x54 Vessels (2 nos) + Auto Multi Port Valve 25 NB (Qty 2)',
      membranes: '4040 Premium Series (4 nos)',
      controlPanel: 'Aster NXT Fully Automatic Controller with Auto Flushing',
      dosingSystem: 'Neo Digital Dosing Pump + 100L Dosing Tank + Anti Scalant 5L',
      uvDisinfection: 'Optional Heavy-Duty UV System (+₹10,000)',
      automation: 'Auto Backwash / Rinse / Service & Auto Flushing of Membrane',
    },
    fullSpecsList: [
      { label: 'Plant Capacity', value: '1000 Litres Per Hour (LPH)' },
      { label: 'Raw Water Pump', value: '1 HP CRI Royal 100 RWP' },
      { label: 'High Pressure Pump', value: 'CRI / Lubi / Axeon / Equivalent' },
      { label: 'Valves', value: 'Auto Multi Port Valve 25 NB (Auto Backwash/Rinse)' },
      { label: 'FRP Vessels', value: 'FRP 13x54 Vessels (Qty 2 Nos)' },
      { label: 'Pressure Tubes', value: 'Stainless Steel SS 4080 (Qty 2 Nos)' },
      { label: 'Membranes', value: '4040 Premium Series (Qty 4 Nos)' },
      { label: 'Dosing Package', value: 'Neo Digital Dosing + 100L Tank + Anti-Scalant 5L' },
      { label: 'UV Option', value: 'Optional UV (+₹10,000) for bacterial removal' },
      { label: 'Flushing', value: 'Automated Membrane Flushing System' },
    ],
  },
  {
    id: 'nxt-premium-rms-uv',
    slug: 'nxt-premium-rms-uv',
    name: 'Kangaroo Water NXT Premium RMS + UV',
    badge: 'IoT Connected & Best Seller',
    popular: true,
    tagline: 'Remote Mobile Monitoring (RMS), integrated UV deactivator, silica glass media & instant phone alerts.',
    capacity: '1000 LPH (Litres Per Hour)',
    price: 215000,
    formattedPrice: '₹2,15,000',
    gstNote: '+18% GST Extra',
    category: 'RO Plants',
    description: 'State-of-the-art RMS plant with Astero NXT RMS smart controller. Get mobile alerts for power fluctuations, dry run, operating hours, TDS, and remote ON/OFF control with zero manual operator needed.',
    image: '/images/real_products/ro-nxt-rms.jpg',
    keySpecs: {
      rawWaterPump: '1 HP CRI Royal 100 RWP',
      highPressurePump: 'CRI / Lubi / Axeon / Equivalent',
      vessels: 'FRP 13x54 (2 nos) + Auto Multi Port Valve 25 NB (Qty 2)',
      membranes: '4040 Premium Series (4 nos)',
      controlPanel: 'Astero NXT RMS with Mobile App Alerts, Voltage & Amp Display, Remote ON/OFF',
      dosingSystem: 'Neo Digital Dosing Pump + 100L Tank + Anti-Scalant 5L (Dr. Kangaroo)',
      filtrationMedia: 'Glass Media (Silica 0.5-0.8mm & 1-2mm) + Carbon 900/1100 IV',
      uvDisinfection: 'Ultra Violet Unit included for bacterial deactivation',
      gauges: 'Vertical Pressure Gauges 7kg (2 nos) & 21kg (2 nos) + Rota Meter 1200/2400',
      specialFeatures: ['All Alerts on Mobile', 'Tank Empty & Full Alerts', 'Operator-Free Machine', 'Red/Green Fault Backlight'],
    },
    fullSpecsList: [
      { label: 'Plant Capacity', value: '1000 Litres Per Hour (LPH)' },
      { label: 'Remote Monitoring', value: 'Astero NXT RMS - Cloud & Mobile App Enabled' },
      { label: 'Mobile Alerts', value: 'Tank Full/Empty, Dry Run, Voltage, AMP, Fault Alerts' },
      { label: 'UV System', value: 'Heavy Duty UV Deactivator Included (Best for Hospitals/Schools)' },
      { label: 'Filtration Media', value: 'Glass Media (Silica 0.5-0.8mm & 1-2mm) for surface/well water' },
      { label: 'Carbon Media', value: 'High IV Carbon 900/1100 IV for sweet taste' },
      { label: 'Pre-Filtration', value: '20" Virgin Jumbo Bowl + 20" Dotted Jumbo PP (Qty 4)' },
      { label: 'Safety Protection', value: 'Low Pressure Switch, Air Release Vent 1", Brass NRV' },
      { label: 'Washing Point', value: 'Separate Membrane Washing Point + 3/4" SS AC Flushing Valve' },
      { label: 'Operation Mode', value: '100% Operator-Free Automation' },
    ],
  },
  {
    id: 'ss-vessels-nxt-uv',
    slug: 'ss-vessels-nxt-uv',
    name: 'Kangaroo Water SS Vessels NXT + UV',
    badge: 'Flagship Stainless Steel',
    tagline: '100% Food-Grade Stainless Steel 13x54 Vessels, Operator-Free Automation & Heavy UV.',
    capacity: '1000 LPH (Litres Per Hour)',
    price: 249000,
    formattedPrice: '₹2,49,000',
    gstNote: '+18% GST Extra',
    category: 'RO Plants',
    description: 'The ultimate flagship RO plant built with premium Food-Grade Stainless Steel 13"x54" Vessels, CRI TS 100 pump, fine sand media, 20" SS Jumbo Bowl, and complete operator-free automated intelligence.',
    image: '/images/real_products/ro-ss-vessels.jpg',
    keySpecs: {
      rawWaterPump: '1 HP CRI TS 100 Raw Water Pump',
      highPressurePump: 'CRI / Lubi / Axeon / Equivalent Heavy Duty',
      vessels: '100% Stainless Steel Vessels 13"x54" (Qty 2 nos)',
      membranes: '4040 Premium Series (Qty 4 nos)',
      controlPanel: 'Aster NXT Advanced Controller with Tank Alerts & Red/Green Backlight',
      dosingSystem: 'Neo Digital Dosing Pump + 100L Tank + Anti-Scalant 5L',
      filtrationMedia: 'Fine Sand Media (6"+12, 3*6 & 16*32) + Carbon 900/1100 IV',
      uvDisinfection: 'Integrated Heavy-Duty UV System for complete sterilization',
      specialFeatures: ['20" Stainless Steel Jumbo Bowl', 'SS 4080 Pressure Tubes', 'Auto Multiport Valve 25 NB', 'Operator-Free Machine'],
    },
    fullSpecsList: [
      { label: 'Plant Capacity', value: '1000 Litres Per Hour (LPH)' },
      { label: 'Vessel Material', value: '100% Stainless Steel 13"x54" (Qty 2 Nos)' },
      { label: 'Raw Water Pump', value: '1 HP CRI TS 100 Raw Water Pump' },
      { label: 'High Pressure Pump', value: 'CRI / Lubi / Axeon / Equivalent' },
      { label: 'Pre-Filter Housing', value: '20" Stainless Steel Jumbo Bowl (Qty 1) + 20" Dotted PP (Qty 2)' },
      { label: 'Sand Filtration', value: '6"+12, 3*6 & 16*32 Fine Sand Media' },
      { label: 'Carbon Media', value: 'Carbon 900/1100 IV for supreme clarity & taste' },
      { label: 'UV Sterilizer', value: 'Integrated Stainless Steel Ultra Violet Unit' },
      { label: 'Pressure Tubes', value: 'Stainless Steel 4080 (Qty 2 Nos)' },
      { label: 'Flow Meters', value: 'Dual Rota Meter 1200/2400 (Qty 2 Nos)' },
      { label: 'Valves & Air Vent', value: 'Air Release Vent 1", SS AC Membrane Flush, TDS Adjustment Valve' },
      { label: 'Automation', value: 'Operator-Free Machine with Tank Full/Empty Alerts' },
    ],
  },
];

export const RO_UTILITY_USE_CASES: ROUtilityUseCase[] = [
  {
    id: 'institutional',
    title: 'Institutional Use',
    subtitle: 'High-volume pure drinking water for public, academic & corporate facilities.',
    icon: 'Building2',
    description: 'Designed for daily continuous consumption, heavy peak hours, and strict hygiene compliance in institutional settings.',
    highlight: 'Includes UV deactivator & multi-stage filtration for student & employee wellness.',
    venues: [
      'Banks', 'Colleges & Universities', 'Schools & Coaching Hubs', 'Corporate Offices',
      'Shopping Malls', 'Auditoriums & Lawns', 'Club Houses', 'Residential Complexes & Apartments',
      'Society Buildings', 'Function Halls & Marriage Lawns', 'Farms & Nurseries',
      'Laboratories', 'Factories & Industrial Units', 'Training Centres', 'NGOs & Ashrams'
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Use (Business Purpose)',
    subtitle: 'Revenue-generating commercial setups with low cost per liter.',
    icon: 'Briefcase',
    description: 'High-throughput continuous-run plants engineered for commercial water bottle jar supply, hospitality, and food preparation.',
    highlight: 'Optimized energy consumption & fast filling manifolds for maximum profitability.',
    venues: [
      '20L Water Jar Delivery Businesses', 'Hotels & Fine Dining', 'Restaurants & Cafes',
      'Lodges & Boarding Houses', 'Resorts & Water Parks', 'Catering Services',
      'Food Processing Facilities', 'Beverage Bottling Plants'
    ],
  },
  {
    id: 'passive-income',
    title: 'Passive Income Use',
    subtitle: 'Automatic Water Dispensing Units — Employee-Free & Low Investment Business.',
    icon: 'Coins',
    description: 'Turnkey 24/7 Water ATM business requiring zero manual staff. Accepts Coins, Smart Cards, and UPI QR code payments with remote GSM cloud management.',
    highlight: 'High ROI business opportunity for entrepreneurs, Gram Panchayats, and commercial venues.',
    venues: [
      'Bus Stands & Railway Stations', 'Gram Panchayat Public Kiosks', 'Market Places & Chows',
      'Hospital Waiting Zones', 'College Campuses', 'Residential Township Entrances'
    ],
  },
];

export const NECESSARY_UNITS_TABLE = [
  {
    businessType: 'Institutional Use (Schools/Colleges/Offices)',
    purificationUnit: 'Mandatory (1000 LPH RO)',
    rawWaterStorage: 'Required (5,000 - 10,000 L)',
    treatedWaterStorage: 'Required (2,000 - 5,000 L)',
    chillingUnit: 'Optional / Recommended',
    autoDispensing: 'Optional',
  },
  {
    businessType: 'Commercial (Water Jar Delivery Business)',
    purificationUnit: 'Mandatory (1000–5000 LPH RO)',
    rawWaterStorage: 'Mandatory (10,000 L+)',
    treatedWaterStorage: 'Mandatory (5,000 L+)',
    chillingUnit: 'Optional (Summer Peak Demand)',
    autoDispensing: 'Optional',
  },
  {
    businessType: 'Hotels, Lodges & Fine Dining',
    purificationUnit: 'Mandatory RO + Softener',
    rawWaterStorage: 'Mandatory',
    treatedWaterStorage: 'Mandatory',
    chillingUnit: 'Mandatory (Online Chiller)',
    autoDispensing: 'Optional',
  },
  {
    businessType: 'Passive Income Water ATM Business',
    purificationUnit: 'Mandatory 500-1000 LPH RO',
    rawWaterStorage: 'Required (2,000 L)',
    treatedWaterStorage: 'Required (1,000 L Insulated)',
    chillingUnit: 'Recommended (Online Chiller)',
    autoDispensing: 'Mandatory (Coin + Card + UPI ATM)',
  },
  {
    businessType: 'Hospitals & Medical Laboratories',
    purificationUnit: 'Mandatory (RO + UV + UF)',
    rawWaterStorage: 'Mandatory SS Tanks',
    treatedWaterStorage: 'Mandatory Food-Grade SS',
    chillingUnit: 'Optional',
    autoDispensing: 'Optional Touchless Kiosk',
  },
];

export const CHILLER_PRICING_DATA: ChillerPricing[] = [
  {
    capacity: '1.5 Tr (Tonnage Rating)',
    tr: '1.5 Tr',
    warranty1YrPrice: '₹50,000',
    warranty2YrPrice: '₹55,000',
    type: 'Online / Offline',
    bestFor: 'Small offices, schools up to 300 students, small clinics',
  },
  {
    capacity: '2.0 Tr (Tonnage Rating)',
    tr: '2.0 Tr',
    warranty1YrPrice: '₹60,000',
    warranty2YrPrice: '₹65,000',
    type: 'Online / Offline',
    bestFor: 'Medium offices, restaurants, coaching centers',
  },
  {
    capacity: '2.5 Tr (Tonnage Rating)',
    tr: '2.5 Tr',
    warranty1YrPrice: '₹65,000',
    warranty2YrPrice: '₹70,000',
    type: 'Online / Offline',
    bestFor: 'Colleges, function halls up to 500 guests',
  },
  {
    capacity: '3.0 Tr (Tonnage Rating)',
    tr: '3.0 Tr',
    warranty1YrPrice: '₹75,000',
    warranty2YrPrice: '₹80,000',
    type: 'Online / Offline',
    bestFor: 'Commercial complexes, medium factories, marriage lawns',
  },
  {
    capacity: '3.5 Tr / 4.0 Tr',
    tr: '3.5 / 4.0 Tr',
    warranty1YrPrice: '₹85,000',
    warranty2YrPrice: '₹90,000',
    type: 'Online / Offline',
    bestFor: 'Large industrial canteens, hospitals, corporate hubs',
  },
  {
    capacity: '5.0 Tr Heavy Industrial',
    tr: '5.0 Tr',
    warranty1YrPrice: '₹1,35,000',
    warranty2YrPrice: '₹1,40,000',
    type: 'Online / Offline',
    bestFor: 'Large water bottling plants, high capacity jar suppliers',
  },
  {
    capacity: '5.0 Tr Plus Extra Heavy Duty',
    tr: '5.0+ Tr',
    warranty1YrPrice: '₹1,55,000',
    warranty2YrPrice: '₹1,60,000',
    type: 'Online / Offline',
    bestFor: 'Extreme ambient temperature industrial setups & multi-tank chilling',
  },
];

export const VENDING_ATM_RATES: VendingAtmBrandRate[] = [
  {
    brand: 'Kangaroo Water ATM (Coin + UPI + Card)',
    controllerPrice: '₹40,000',
    supportedPayments: ['Coin Validator', 'UPI QR Code Scanner', 'RFID Smart Card'],
    features: ['Integrated Water ATM Cabinet', 'GSM Cloud Telemetry Ready', 'Multi-coin acceptance', 'Digital Dispense Screen'],
    isKangarooBrand: true,
  },
  {
    brand: 'Proton Water ATM Controller',
    controllerPrice: '₹20,000',
    supportedPayments: ['Coin / Card'],
    features: ['Basic Pulse Count', 'Standard LCD Screen', 'Single Valve Control'],
  },
  {
    brand: 'Aster Water ATM Controller',
    controllerPrice: '₹25,000',
    supportedPayments: ['Coin / Card / Mobile option'],
    features: ['Digital Display', 'Flow Meter Feedback', 'Auto Cutoff'],
  },
  {
    brand: 'Khyatee Water ATM Controller',
    controllerPrice: '₹25,000',
    supportedPayments: ['Coin / RFID Card'],
    features: ['Rugged Casing', 'Volume Calibration', 'Power Backup Support'],
  },
  {
    brand: 'APDP Water ATM Controller',
    controllerPrice: '₹20,000',
    supportedPayments: ['Coin Validator'],
    features: ['Compact PCB Unit', 'Simple LED Display', 'Low Maintenance'],
  },
];

export const COMPANY_CONTACT = {
  phone: '92 71 98 9191',
  phoneClean: '+919271989191',
  whatsapp: '919271989191',
  email: 'info@kangaroowater.in',
  website: 'www.kangaroowater.in',
  experienceYears: '19+',
  installations: '1500+',
  hqAddress: {
    title: 'Head Office & Manufacturing Unit',
    line1: 'A23/A47, Bizz Tower, Chikhalthana MIDC',
    line2: 'Chhatrapati Sambhajinagar (Aurangabad) - 431006',
    state: 'Maharashtra, India',
  },
  branches: [
    {
      city: 'Buldhana',
      name: 'Buldhana Branch Office',
      address: 'Aman Plaza, Opp Golande Lawns, Chikhli Road, Buldana - 443001',
      phone: '92 71 98 9191',
    },
    {
      city: 'Chikhli',
      name: 'Chikhli Branch Office',
      address: '139/2, Near Adarsh School, Sambhaji Nagar, Chikhli - 443201',
      phone: '92 71 98 9191',
    },
  ],
  certifications: [
    { name: 'ISO 9001:2015', desc: 'Quality Management Certified System' },
    { name: 'ISO 14001', desc: 'Environmental Management Certified' },
    { name: 'CE Certified', desc: 'European Standard Safety Compliance' },
    { name: 'NSF Standard', desc: 'Water Purity & Component Compliance' },
    { name: 'GAAFS Accredited', desc: 'Global Accreditation Forum Standards' },
  ],
};
