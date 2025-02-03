import { useData } from './useData';

export const useTwisters = () => {
  const segment = 'twisters';
  const items = useData(segment, 'items');
  return { segment, items };
};
