import React, { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            {/*<MySafeAreaView>*/}
            {/*  <Stack*/}
            {/*    screenOptions={{*/}
            {/*      headerShown: false*/}
            {/*    }}*/}
            {/*  ></Stack>*/}
            {/*</MySafeAreaView>*/}
            <Tabs>
              <Tabs.Screen
                name="index"
                options={{
                  title: "Home",
                  tabBarIcon(props) {
                    return (
                      <MaterialCommunityIcons
                        name="home"
                        {...props}
                      />
                    );
                  }
                }}
              />

              <Tabs.Screen
                name="twisters"
                options={{
                  title: "Twisters",
                  tabBarIcon(props) {
                    return (
                      <MaterialCommunityIcons
                        name="home"
                        {...props}
                      />
                    );
                  }
                }}
              />

              <Tabs.Screen
                name="exercises"
                options={{
                  title: "Exercises",
                  tabBarIcon(props) {
                    return (
                      <MaterialCommunityIcons
                        name="home"
                        {...props}
                      />
                    );
                  }
                }}
              />

              <Tabs.Screen
                name="settings"
                options={{
                  title: "Settings",
                  tabBarIcon(props) {
                    return (
                      <MaterialCommunityIcons
                        name="home"
                        {...props}
                      />
                    );
                  }
                }}
              />

              <Tabs.Screen
                name="exercise/[exercise]"
                options={{
                  href: null
                }}
              />
            </Tabs>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
