export type SkillItem = {
  id: string;
  label: string;
  hue: number;
};

export type ToolItem = {
  id: string;
  label: string;
  logo: string;
  /** Official brand color for tile tint */
  brandColor: string;
};

export const coreCompetencies: SkillItem[] = [
  { id: 'industry-research', label: 'Industry & Sector Research', hue: 205 },
  { id: 'modelling', label: 'Financial Modelling', hue: 285 },
  { id: 'commercial', label: 'Commercial Diligence', hue: 55 },
  { id: 'management', label: 'Management & Expert Discussions', hue: 165 },
  { id: 'ic-memo', label: 'Investment Committee Memos', hue: 25 },
  { id: 'business-eval', label: 'Business Evaluation & Underwriting', hue: 250 },
];

export const tools: ToolItem[] = [
  { id: 'capiq', label: 'CapIQ', logo: '/brands/capiq.png', brandColor: '#D6001C' },
  { id: 'private-circle', label: 'Private Circle', logo: '/brands/private-circle.png', brandColor: '#1B3A6B' },
  { id: 'screener', label: 'Screener', logo: '/brands/screener.png', brandColor: '#2B4C7E' },
  { id: 'saverisk', label: 'Saverisk', logo: '/brands/saverisk.png', brandColor: '#E85D4C' },
  { id: 'excel', label: 'Excel / VBA', logo: '/brands/excel.svg', brandColor: '#217346' },
  { id: 'powerpoint', label: 'PowerPoint', logo: '/brands/powerpoint.svg', brandColor: '#D24726' },
];

export function skillAccent(hue: number): Record<string, string> {
  return {
    '--skill-accent': `oklch(0.74 0.14 ${hue})`,
  };
}

export function toolTileStyle(brandColor: string): Record<string, string> {
  return {
    '--tool-brand': brandColor,
    '--tool-brand-soft': `color-mix(in srgb, ${brandColor} 14%, white)`,
  };
}
