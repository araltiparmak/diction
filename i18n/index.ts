import { useSettings } from '../hooks/useSettings';

const translations = {
  tr: {
    back: 'Geri',
    home: {
      title: 'Ana Sayfa',
      todaysExercise: 'Günün Egzersizleri',
      todaysTwister: 'Günün Tekerlemeleri',
      favoriteExercises: 'Favori Egzersizler',
      favoriteTwisters: 'Favori Tekerlemeler',
      favorites: 'Favoriler',
      continue: 'Kaldığın yerden devam et',
    },
    exercises: {
      title: 'Egzersizler',
    },
    twisters: {
      title: 'Tekerlemeler',
    },
    orators: {
      title: 'Hatip',
    },
    settings: {
      title: 'Ayarlar',
      language: 'Dil',
      theme: 'Tema',
      darkTheme: 'Koyu Tema',
    },
    common: {
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
      save: 'Kaydet',
      cancel: 'İptal',
    },
  },
  en: {
    back: 'Back',
    home: {
      title: 'Home',
      todaysExercise: 'Daily Exercises',
      todaysTwister: 'Daily Twisters',
      favoriteExercises: 'Favorite Exercises',
      favoriteTwisters: 'Favorite Twisters',
      favorites: 'Favorites',
      continue: 'Pick up where you left off',
    },
    exercises: {
      title: 'Exercises',
    },
    twisters: {
      title: 'Twisters',
    },
    orators: {
      title: 'Orators',
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      theme: 'Theme',
      darkTheme: 'Dark Theme',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
    },
    // Other translations...
  },
  de: {
    home: {
      continue: 'Weitermachen',
    },
  },
};

export function useTranslation() {
  const { language } = useSettings();

  const t = (key: string) => {
    const keys = key.split('.');
    let current: any = translations[language];

    for (const k of keys) {
      if (current[k] === undefined) {
        return key;
      }
      current = current[k];
    }

    return current;
  };

  return { t, language };
}
