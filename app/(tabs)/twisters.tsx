import React from 'react';
import { ScrollView } from 'react-native';
import { View, XStack, YStack } from 'tamagui';
import Menu from '@/components/Menu';
import { useTwisters } from '@/hooks/useTwisters';

export default function Twisters() {
  const { segment, items } = useTwisters();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <YStack padding="$4" flex={1}>
        <View flex={1} justifyContent="center">
          <XStack flexWrap="wrap" justifyContent="center">
            <Menu items={items} segment={segment} />
          </XStack>
        </View>
      </YStack>
    </ScrollView>
  );
}
