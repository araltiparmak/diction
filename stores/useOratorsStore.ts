import { create } from 'zustand';
import { useOrators } from '@/hooks/useOrators';

export type Orator = {
  id: string;
  name: string;
  period: string;
  description: string;
  imageUrl: string;
  quote: string;
  pages: {
    text: string;
    imageUrl?: string;
  }[];
};

interface OratorsState {
  selectedOrator: Orator | null;
}

interface OratorsActions {
  setSelectedOrator: (orator: Orator) => void;
  clearSelectedOrator: () => void;
}

const useOratorsStore = create<OratorsState & OratorsActions>((set) => ({
  selectedOrator: null,
  setSelectedOrator: (orator) => set({ selectedOrator: orator }),
  clearSelectedOrator: () => set({ selectedOrator: null }),
}));

export const useOratorsWithStore = () => {
  const orators = useOrators();
  const { selectedOrator, setSelectedOrator, clearSelectedOrator } =
    useOratorsStore();

  return {
    orators,
    selectedOrator,
    setSelectedOrator,
    clearSelectedOrator,
    hasSelectedOrator: selectedOrator !== null,
  };
};
