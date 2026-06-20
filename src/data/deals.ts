export const trackRecordMetrics = [
  { value: '₹1,150+ Cr', label: 'Capital Evaluated', accent: 'gold' as const },
  { value: '8+', label: 'Transactions', accent: 'gold' as const },
  { value: '₹60–250 Cr', label: 'Typical Ticket', accent: 'gold' as const },
  { value: '12+', label: 'Sectors', accent: 'gold' as const },
];

export const sectors = [
  'Consumer',
  'Consumer Durables',
  'Technology',
  'Media',
  'Healthcare',
  'Pharma',
  'Manufacturing',
  'Industrials',
  'Steel',
  'Recycling',
  'Specialty Chemicals',
  'Renewable Energy',
  'EPC',
  'RCM',
];

export const transactionStructures = [
  'Growth Capital',
  'Equity-Substitute Structures',
  'Bridge Financing',
  'Rights Issue Support',
  'Acquisition Support',
  'Special Situations',
  'Commercial Underwriting',
  'Stake Consolidation',
];

export type DealGlimpse = {
  id: string;
  sector: string;
  thesis: string;
  description: string;
};

export const dealGlimpses: DealGlimpse[] = [
  {
    id: 'specialty-chemicals-bridge',
    sector: 'Specialty Chemicals',
    thesis: 'Bridge to Rights Issue',
    description:
      'Within the first six months of tenure, led financial analysis, commercial diligence, and investment committee preparation for a bridge-to-rights-issue transaction—articulating near-term liquidity requirements and a defined pathway to a subsequent capital raise.',
  },
  {
    id: 'healthcare-rcm',
    sector: 'Healthcare · RCM',
    thesis: 'Growth-Oriented Mandate',
    description:
      'Evaluated a healthcare services platform where underwriting conviction rested on addressable market, operating scalability, and management quality rather than security cover—requiring a growth-investor lens on sector dynamics and execution risk.',
  },
  {
    id: 'consumer-durables',
    sector: 'Consumer Durables',
    thesis: 'Equity-Substitute',
    description:
      'Assessed a consumer durables business attracting private equity interest, with analysis centred on industry tailwinds, competitive positioning, and credible exit pathways in parallel with financial modelling.',
  },
  {
    id: 'consumer-brands',
    sector: 'Consumer Brands',
    thesis: 'Brand-Led Growth',
    description:
      'Developed the investment view for a branded consumer company through channel diligence, management discussions, and modelling of distribution expansion and long-term enterprise value creation.',
  },
  {
    id: 'media',
    sector: 'Media',
    thesis: 'Business-Led Thesis',
    description:
      'Supported a media mandate where the investment case depended on audience growth, content strategy, and forward value potential rather than conventional asset-backed underwriting.',
  },
  {
    id: 'technology',
    sector: 'Technology',
    thesis: 'Platform Growth',
    description:
      'Led industry research, expert consultations, and management sessions to underwrite execution capability, competitive dynamics, and scalability within a technology-led business model.',
  },
  {
    id: 'manufacturing-epc',
    sector: 'Manufacturing · EPC',
    thesis: 'Industrial Mandate',
    description:
      'Supported diligence and investment committee preparation for an industrially oriented transaction—stress-testing execution risk, cash flow profiles, and downside scenarios within the broader sector context.',
  },
  {
    id: 'renewable-energy',
    sector: 'Renewable Energy',
    thesis: 'Sector Entry',
    description:
      'Contributed to sector mapping, commercial analysis, and structuring for a renewable energy opportunity—assessing policy tailwinds, offtake quality, and long-term project economics.',
  },
];

export const scopeSummary =
  'End-to-end involvement across industry research, financial modelling, management and expert discussions, commercial diligence, investment committee preparation, and execution—concentrated in growth-oriented and equity-substitute mandates rather than traditional asset-backed lending.';
