import { Card, YStack, XStack, Text } from 'tamagui';
import { ChevronRight } from '@tamagui/lucide-icons';
import { ReactNode } from 'react';

type ExerciseCardProps = {
  icon?: ReactNode;
  title: string;
  backgroundColor: string;
  iconColor: string;
  onPress: () => void;
  size?: string;
};

export const ActionCard = ({
  icon,
  title,
  backgroundColor,
  iconColor,
  onPress,
  size = '$7',
}: ExerciseCardProps) => (
  <Card
    size={size}
    backgroundColor={backgroundColor}
    onPress={onPress}
    pressStyle={{ scale: 0.98 }}
    animation="quick"
  >
    <XStack padding="$4" space="$4" alignItems="center">
      {icon}

      <YStack flex={1}>
        <Text fontWeight="bold" fontSize="$5">
          {title}
        </Text>
      </YStack>
      <ChevronRight size={24} color={iconColor} />
    </XStack>
  </Card>
);
