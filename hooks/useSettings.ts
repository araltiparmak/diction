import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Language = 'tr' | 'en';

interface SettingsState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'tr',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
