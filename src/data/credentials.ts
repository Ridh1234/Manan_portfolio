export interface Credential {
  id: string;
  title: string;
  institution: string;
  year: string;
  detail: string;
}

export const credentials: Credential[] = [
  {
    id: 'ca-final',
    title: 'CA Final',
    institution: 'Institute of Chartered Accountants of India',
    year: '2025',
    detail: 'Passed with distinction',
  },
  {
    id: 'bcom',
    title: 'B.Com',
    institution: 'H.R. College, Mumbai',
    year: '2024',
    detail: 'Grade A',
  },
  {
    id: 'ca-inter',
    title: 'CA Intermediate',
    institution: 'Institute of Chartered Accountants of India',
    year: '2022',
    detail: 'Completed',
  },
];

export const achievements = [
  'CA Final - Distinction',
  'CA (AIR 34)',
  'Kudos Award at KPMG (2023)',
  'District-level Volleyball and Table Tennis',
];
