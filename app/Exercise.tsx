import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useData } from '@/hooks/useData';
import { Item } from '@/types/types';
import Details from '@/components/Details';

export const WHERE_I_LEFT_KEY: string = 'whereILeft';

export default function Exercise() {
  const { segment, subSegment } = useLocalSearchParams();

  const [_, setWhereILeft] = useState();
  const data = useData(segment, 'items');

  useEffect(() => {
    getWhereILeftMethod();
  }, []);

  const getWhereILeftMethod = async (): Promise<any> => {
    const whereILeft = await AsyncStorage.getItem(WHERE_I_LEFT_KEY);
    setWhereILeft(whereILeft);
    return whereILeft;
  };

  const whereILeftMethod = async (item: any, index: number): Promise<void> => {
    try {
      await AsyncStorage.setItem(
        WHERE_I_LEFT_KEY,
        JSON.stringify({
          segment: segment,
          subSegment: subSegment,
          id: item.id,
        }),
      );
    } catch (error) {
      console.error('Error setting whereILeft', error);
    }
  };

  const exercises = data.filter((item: Item) => item.id === subSegment);
  const pages = exercises[0]?.pages;

  if (!pages) {
    return <Text>loading...</Text>;
  }

  if (!getWhereILeftMethod() && pages) {
    whereILeftMethod(pages[0], 0);
  }

  const exercise = exercises[0];

  if (!exercise) return null;

  return (
    <View style={styles.container}>
      <Details selectedItem={exercise} />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  child: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    marginTop: 60,
    fontSize: 24,
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'space-evenly',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  indexText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
});
