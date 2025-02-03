import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSettings } from '@/hooks/useSettings';
import { Segment } from '@/types/types';
import { fetchData } from '@/api/DBService';

export const useData = (segment: Segment, subSegment: 'item' | null): any => {
  const { language } = useSettings();

  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchData(language, segment, subSegment).then((fetchedData: any) => {
        setData(fetchedData);
      });
    }, [language, segment, subSegment]),
  );

  return data;
};
