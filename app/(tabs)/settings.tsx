import { YStack, Text, XStack, Sheet } from 'tamagui';
import { ChevronRight, Globe, Check } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { useSettings } from '@/hooks/useSettings';
import { Pressable } from 'react-native';
import { useTranslation } from '@/i18n';

export default function Settings() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useSettings();
  const { t } = useTranslation();

  const languages = {
    tr: 'Türkçe',
    en: 'English',
  };

  return (
    <YStack flex={1} backgroundColor="$background" padding="$8" space="$4">
      s
      <YStack space="$4">
        <Pressable onPress={() => setOpen(true)}>
          <XStack
            backgroundColor="$background2"
            padding="$4"
            borderRadius="$4"
            justifyContent="space-between"
            alignItems="center"
          >
            <XStack space="$3" alignItems="center">
              <Globe size={24} color="$color12" />
              <Text fontSize={16} color="$color12">
                {t('settings.language')}
              </Text>
            </XStack>
            <XStack space="$2" alignItems="center">
              <Text fontSize={16} color="$color10">
                {languages[language]}
              </Text>
              <ChevronRight size={20} color="$color10" />
            </XStack>
          </XStack>
        </Pressable>
      </YStack>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[30]}
        position={0}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <YStack space="$4">
            <Text fontSize={20} fontFamily="$heading" color="$color12">
              Dil Seçimi
            </Text>
            {Object.entries(languages).map(([key, value]) => (
              <Pressable
                key={key}
                onPress={() => {
                  setLanguage(key as 'tr' | 'en');
                  setOpen(false);
                }}
              >
                <XStack
                  backgroundColor="$background2"
                  padding="$4"
                  borderRadius="$4"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={16} color="$color12">
                    {value}
                  </Text>
                  {key === language && <Check size={20} color="$color12" />}
                </XStack>
              </Pressable>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </YStack>
  );
}
