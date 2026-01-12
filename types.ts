
export interface Book {
  id: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
  status?: 'available' | 'coming-soon';
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface EducatorFeature {
  title: string;
  description: string;
  icon: string;
}

export interface LoreItem {
  title: string;
  content: string;
  type: 'character' | 'magic' | 'realm';
  icon: string;
}
