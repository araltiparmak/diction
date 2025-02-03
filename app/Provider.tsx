import { useColorScheme } from 'react-native';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { config } from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
