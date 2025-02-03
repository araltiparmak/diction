import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from '@/i18n';

export const useNavigationHeaderFix = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: t('back'),
    });
  }, []);
};
