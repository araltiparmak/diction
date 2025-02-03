import React from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from 'tamagui';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'tamagui/linear-gradient';
import { getColorPairsByIndex } from '@/utils/colorUtils';

interface ScrollableTextProps {
  text: string;
}

export default function ScrollableText({ text }: ScrollableTextProps) {
  const paragraphs = text.split('\n').filter((p) => p.trim() !== '');

  const renderItem = ({ item }: { item: string }) => (
    <Text
      color="$color12"
      fontSize={20}
      lineHeight={32}
      textAlign="center"
      marginVertical={8}
      style={{
        fontFamily: 'Nunito_400Regular',
      }}
    >
      {item}
    </Text>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <LinearGradient
        colors={[getColorPairsByIndex(0).secondary, '#fff']}
        start={[0, 0]}
        end={[0, 0.3]}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <FlashList
        data={paragraphs}
        renderItem={renderItem}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}
