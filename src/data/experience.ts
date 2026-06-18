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
    company: 'True North Co. · Private Credit Fund',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Investment Analyst',
        period: 'Sept 2025 – Present',
        bullets: [
          'Lead and execute structured credit transactions of ₹60–250 Cr across mid-market India',
          'Cover deal origination, financial diligence, credit structuring, and documentation',
          'Manage post-investment monitoring and portfolio reporting',
        ],
      },
      {
        title: 'Industrial Trainee',
        period: 'Apr 2024 – Aug 2025',
        bullets: [
          'Supported execution across private credit, growth equity, and special situations',
          'Built financial models and prepared investment committee memos',
        ],
      },
    ],
  },
  {
    company: 'KPMG · BSR & Co. LLP',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Article Trainee · Audit & Assurance',
        period: '2022 – 2024',
        bullets: [
          'Statutory audit engagements across manufacturing, FMCG, and chemical sectors',
          'Received Kudos Award (2023) for exceptional client service',
        ],
      },
    ],
  },
];
