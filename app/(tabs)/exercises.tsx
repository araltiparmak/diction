import { ScrollView, View } from 'react-native';
import React from 'react';
import { XStack, YStack } from 'tamagui';
import { useExercises } from '../../hooks/useExercises';
import Menu from '@/components/Menu';

export default function Exercises() {
  const { segment, items } = useExercises();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <YStack padding="$4" minHeight="100%">
        <View flex={1} justifyContent="center">
          <XStack flexWrap="wrap" justifyContent="center">
            <Menu items={items} segment={segment} />
          </XStack>
        </View>
      </YStack>
    </ScrollView>
  );
}
