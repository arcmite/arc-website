import { withBase } from 'vitepress'

export type ShowcaseItemType = 'PPFilter' | 'Car Mod' | 'Track Mod' | 'Tool';

export interface ShowcaseLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ShowcaseItem {
  type: ShowcaseItemType;
  title: string;
  author: string;
  image: string;
  screenshotAuthor?: string;
  tags: string[];
  description: string;
  links: ShowcaseLink[];
}

export const items: ShowcaseItem[] = [
  {
    type: 'PPFilter',
    title: 'C13 Aegis',
    author: 'C13Automotive',
    image: withBase('/images/showcase/zaentyt_aegis.png'),
    screenshotAuthor: 'zaentyt',
    tags: ['Realistic', 'Cinematic', 'Paid'],
    description: 'A versatile and highly popular filter known for its realistic lighting and balanced, cinematic look.',
    links: [
      { label: 'Get on Patreon', url: 'https://www.patreon.com/C13Automotive', primary: true },
      { label: 'Creator Profile', url: '#' }
    ]
  },
  {
    type: 'Car Mod',
    title: 'Porsche 924 "The Yamainu"',
    author: 'yamainu',
    image: withBase('/images/showcase/loading_2025.png'),
    screenshotAuthor: '𝔃𝖆𝖓†',
    tags: ['Street', 'JDM', 'High Quality'],
    description: 'An exceptionally detailed street-tuned Porsche 924, famous for its quality and driving feel.',
    links: [
      { label: 'Download', url: '#', primary: true },
      { label: 'YouTube', url: '#' }
    ]
  },
  {
    type: 'Track Mod',
    title: 'Shutoko Revival Project',
    author: 'SRP Team',
    image: withBase('/images/showcase/lexus_srp.png'),
    screenshotAuthor: 'lint0',
    tags: ['Freeroam', 'Online', 'Wangan', 'Free'],
    description: 'A massive, stunningly accurate recreation of the Tokyo Metropolitan Expressway for online cruising.',
    links: [
      { label: 'Visit Website', url: 'https://shutokorevivalproject.com/', primary: true },
      { label: 'Discord', url: '#' }
    ]
  },

  // more in the same format here
];