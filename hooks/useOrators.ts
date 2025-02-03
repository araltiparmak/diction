import { useData } from './useData';

export type Orator = {
  id: string;
  name: string;
  period: string;
  description: string;
  imageUrl: string;
  quote: string;
};

export const useOrators = (): Orator[] => {
  const segment = 'orators';
  return useData(segment, 'items') as Orator[];
};
