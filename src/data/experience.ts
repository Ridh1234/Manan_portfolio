export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: 'True North',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Investment Analyst',
        period: 'Sept 2025 – Present',
        bullets: [
          'Lead diligence, financial modelling, and investment committee preparation across growth-capital and equity-substitute mandates within a lean, high-volume platform',
          'Conduct commercial work spanning sector research, expert consultations, management evaluation, and conviction-building on long-term business prospects',
          'Underwrite opportunities where investment thesis is driven by business growth, industry dynamics, and enterprise value creation rather than collateral alone',
        ],
      },
      {
        title: 'Associate Trainee',
        period: 'Apr 2024 – Aug 2025',
        bullets: [
          'Joined the private credit platform of a 25-year-old investment firm with private-equity heritage; assumed end-to-end process responsibility from an early stage',
          'Within the first six months, independently led substantial portions of analysis, diligence, and IC preparation for a bridge-to-rights-issue transaction under senior supervision',
          'Executed across healthcare, technology, consumer, manufacturing, EPC, specialty chemicals, renewable energy, and media—developing cross-sector perspective on business models, competition, and value creation',
        ],
      },
    ],
  },
  {
    company: 'KPMG · BSR & Co. LLP',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Article Trainee · Statutory Audit',
        period: '2022 – 2024',
        bullets: [
          'Completed approximately 1.5 years in statutory audit across listed and private companies, with emphasis on accounting standards, financial statements, and business operations',
          'Served engagements across manufacturing, FMCG, and chemical sectors; recognised with the Kudos Award (2023) for exceptional client service',
          'Built institutional-grade analytical discipline that informs current work in investment evaluation and commercial underwriting',
        ],
      },
    ],
  },
];
