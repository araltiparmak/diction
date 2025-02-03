import { useData } from './useData';

export const useExercises = () => {
  const segment = 'exercises';
  const items = useData(segment, 'items');
  return { segment, items };
};
