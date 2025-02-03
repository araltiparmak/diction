import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Card, H4, Paragraph, Text, XStack, YStack } from 'tamagui';
import { router } from 'expo-router';
import { LinearGradient } from 'tamagui/linear-gradient';
import { Orator } from '../../hooks/useOrators';
import { Quote } from '@tamagui/lucide-icons';
import { useOratorsWithStore } from '@/stores/useOratorsStore';
import { getColorByIndex } from '@/utils/colorUtils';

export default function OratorsList() {
  const { orators } = useOratorsWithStore();

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '$backgroundStrong',
        }}
        contentContainerStyle={{
          paddingVertical: 16,
        }}
      >
        <YStack padding="$2" space="$3">
          {orators.map((orator, index) => (
            <OratorCard
              key={orator.id}
              orator={orator}
              color={getColorByIndex(index)}
            />
          ))}
        </YStack>
      </ScrollView>
    </>
  );
}

const OratorCard = ({ orator, color }: { orator: Orator; color: string }) => {
  const { setSelectedOrator } = useOratorsWithStore();

  const handlePress = (id: string) => {
    setSelectedOrator(orator);
    router.push({
      pathname: '/orators/OratorDetails',
      params: {
        subSegment: id,
        segment: 'orators',
        headerTitle: orator?.name,
      },
    });
  };

  return (
    <Card
      size="$4"
      margin="$2"
      elevation={4}
      pressStyle={{ scale: 0.97 }}
      animation="bouncy"
      onPress={() => handlePress(orator.id)}
      borderRadius="$6"
    >
      <LinearGradient
        borderRadius="$6"
        width="100%"
        height="100%"
        position="absolute"
        colors={[`${color}15`, 'transparent']}
        start={[0, 0]}
        end={[1, 1]}
      />

      <Card.Header
        padded
        backgroundColor="$backgroundTransparent"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
        opacity={0.9}
      >
        <XStack space="$4" alignItems="center">
          <Avatar circular size="$7" borderWidth={2} borderColor={color}>
            <Avatar.Image source={{ uri: orator.imageUrl }} />
            <Avatar.Fallback bc="$blue2" />
          </Avatar>
          <YStack space="$1" flex={1}>
            <H4 color="$color12" fontSize={20} fontWeight="bold">
              {orator.name}
            </H4>
            <Text
              color="$color10"
              fontSize={14}
              textTransform="uppercase"
              letterSpacing={0.5}
            >
              {orator.period}
            </Text>
          </YStack>
        </XStack>
      </Card.Header>

      <Card.Footer
        paddingHorizontal="$4"
        paddingTop="$2"
        paddingBottom="$4"
        backgroundColor="$backgroundTransparent"
      >
        <YStack space="$4">
          <Paragraph
            size="$4"
            numberOfLines={2}
            color="$color12"
            lineHeight={22}
            ellipsizeMode="tail"
            opacity={0.9}
          >
            {orator.description}
          </Paragraph>
          <XStack
            space="$3"
            alignItems="flex-start"
            backgroundColor="$background"
            padding="$4"
            borderRadius="$4"
            opacity={0.95}
          >
            <Quote size={20} color={color} />
            <Text
              color="$color11"
              italic
              numberOfLines={4}
              style={{ flex: 1 }}
              fontSize={15}
              lineHeight={24}
              fontWeight="500"
            >
              {orator.quote}
            </Text>
          </XStack>
        </YStack>
      </Card.Footer>
    </Card>
  );
};
