import { Button, Text } from 'tamagui';
import React from 'react';
import { router } from 'expo-router';
import { getTamaguiColorByIndex } from '@/utils/colorUtils';

const Menu = ({ items, segment }: { items: any; segment: string }) => {
  const handlePress = (item) => {
    router.push({
      pathname: '../Exercise',
      params: {
        subSegment: item.id,
        segment,
        headerTitle: item.title,
      },
    });
  };

  if (!items) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => (
        <Button
          key={item.id}
          size={getSize(index)}
          backgroundColor={getTamaguiColorByIndex(index)}
          margin="$1"
          animation="bouncy"
          // animation="lazy"
          enterStyle={{ opacity: 0, scale: 0.9, y: 10 }}
          exitStyle={{ opacity: 0, scale: 0.9, y: 10 }}
          scale={0.9}
          hoverStyle={{ scale: 1 }}
          pressStyle={{ scale: 0.9 }}
          onPress={() => handlePress(item)}
        >
          <Text
            fontSize={
              getSize(index) === '$8' ? 28 : getSize(index) === '$7' ? 24 : 20
            }
            fontWeight="bold"
            color="$color"
          >
            {item.title}
          </Text>
        </Button>
      ))}
    </>
  );
};

const getSize = (index) => {
  const sizePattern = [
    '$8',
    '$7',
    '$8',
    '$6',
    '$7',
    '$6',
    '$7',
    '$8',
    '$6',
    '$8',
    '$7',
    '$6',
  ];
  return sizePattern[index % sizePattern.length];
};

export default Menu;
