import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, View, ViewToken } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { getColorPairsByIndex } from '@/utils/colorUtils';

const { width } = Dimensions.get('window');

interface StoryPage {
  text: string;
  imageUrl: string;
}

export default function Details({ selectedItem }: { selectedItem: any }) {
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]) {
        setCurrentPage(viewableItems[0].index || 0);
      }
    },
  ).current;

  const renderItem = ({ item, index }: { item: StoryPage; index: number }) => {
    return (
      <View style={{ width, padding: 16 }}>
        <YStack flex={1} justifyContent="center" alignItems="center">
          {/* Content */}
          <Text
            color="$color12"
            fontSize={24}
            lineHeight={36}
            textAlign="center"
            marginTop="$2"
            style={{
              fontFamily: 'Forum',
            }}
          >
            {item.text}
          </Text>

          {item.imageUrl && (
            <YStack alignItems="center" marginTop="$4">
              <YStack
                width={120}
                height={120}
                borderRadius="$6"
                overflow="hidden"
                elevation={5}
                shadowColor="black"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.25}
                shadowRadius={8}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </YStack>
            </YStack>
          )}
        </YStack>
      </View>
    );
  };

  const flatListRef = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <YStack flex={1} backgroundColor="$background">
      <LinearGradient
        colors={[getColorPairsByIndex(currentPage).secondary, '#fff']}
        start={[0, 0]}
        end={[0, 0.3]}
        position="absolute"
        width="100%"
        height="100%"
      />

      <FlatList
        ref={flatListRef}
        data={selectedItem.pages}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        decelerationRate="fast"
        snapToInterval={width}
      />

      {/* Page Indicator */}
      <XStack
        position="absolute"
        bottom={60}
        width="100%"
        justifyContent="center"
        space="$2"
      >
        {selectedItem.pages.map((_, i) => (
          <YStack
            key={i}
            width={currentPage === i ? 20 : 6}
            height={6}
            borderRadius={3}
            backgroundColor={
              currentPage === i
                ? getColorPairsByIndex(currentPage).primary
                : '$gray8'
            }
          />
        ))}
      </XStack>

      <Text
        position="absolute"
        bottom="$4"
        width="100%"
        textAlign="center"
        color="$color10"
        fontSize={14}
      >
        Sayfayı kaydırın {currentPage + 1}/{selectedItem.pages.length}
      </Text>
    </YStack>
  );
}
