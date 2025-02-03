import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useOratorsWithStore } from '@/stores/useOratorsStore';
import ScrollableText from '@/components/ScrollableText';

export default function OratorDetails() {
  const { selectedOrator } = useOratorsWithStore();

  const [fontsLoaded] = useFonts({
    Forum: require('../../assets/fonts/Forum-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  if (!selectedOrator) return null;

  return <ScrollableText text={selectedOrator.pages[0].text} />;
}
