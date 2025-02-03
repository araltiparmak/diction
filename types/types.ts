export type Language = 'tr' | 'en';

export type Item = {
  id: string;
  title: string;
  image?: string;
  color?: string;
  pages: Page[];
};

type Page = {
  text: string;
  note?: string;
};

export type Segment = 'twisters' | 'orators' | 'exercises' | 'translations';
