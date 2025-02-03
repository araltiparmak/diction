import { H1, View, YStack } from 'tamagui';
import { ScrollView } from 'react-native';

import React, { useCallback, useState } from 'react';

import { Dumbbell, History, Languages } from '@tamagui/lucide-icons';
import { router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from '@/i18n';
import { useExercises } from '@/hooks/useExercises';
import { useTwisters } from '@/hooks/useTwisters';
import { ActionCard } from '@/app/home/ActionCard';
import { WHERE_I_LEFT_KEY } from '@/app/Exercise';

export default function HomePage() {
  const [whereILeft, setWhereILeft] = useState();
  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      whereILeftMethod();
      return () => {
        // console.log('Route unfocused');
      };
    }, []),
  );

  const whereILeftMethod = async () => {
    const whereILeft = await AsyncStorage.getItem(WHERE_I_LEFT_KEY);

    setWhereILeft(whereILeft);
    return whereILeft;
  };

  const handlePressWhereILeft = () => {
    const { segment, subSegment } = JSON.parse(whereILeft);

    router.push({
      pathname: '/Exercise',
      params: { subSegment, segment },
    });
  };

  const { items: exerciseItems } = useExercises();
  const { items: twisterItems } = useTwisters();

  const handlePress = (segment, subSegment) => {
    router.push({
      pathname: '/Exercise',
      params: { subSegment, segment },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <YStack padding="$5" space="$6">
          <H1
            color="white"
            fontSize={32}
            fontWeight="bold"
            textAlign="center"
            textShadowColor="rgba(0,0,0,0.15)"
            textShadowOffset={{ width: 1, height: 1 }}
            textShadowRadius={3}
          ></H1>

          <ActionCard
            icon={<History size={24} color="#4CAF50" />}
            title={t('home.continue')}
            backgroundColor="$green4"
            iconColor="#4CAF50"
            onPress={() => handlePressWhereILeft()}
          />
          <ActionCard
            icon={<Languages size={24} color="#1E88E5" />}
            title={t('home.todaysTwister')}
            backgroundColor="$blue3"
            iconColor="#1E88E5"
            onPress={() => handlePress('twisters', getTodaysId(twisterItems))}
          />

          <ActionCard
            icon={<Dumbbell size={24} color="#FFA000" />}
            title={t('home.todaysExercise')}
            backgroundColor="$yellow3"
            iconColor="#FFA000"
            onPress={() => handlePress('exercises', getTodaysId(exerciseItems))}
          />
        </YStack>
      </ScrollView>
    </View>
  );
}

const getTodaysId = (items) => {
  const day = new Date().getDay();
  return items.map((item) => item.id)[day % (items.length - 1)];
};
