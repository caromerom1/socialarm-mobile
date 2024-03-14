import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: "pages",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 5000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      onPrimaryContainer: "black",
      primary: "#006B3C",
      primaryContainer: "#006B3C",
      secondaryContainer: "#D1D1D1",
      surface: "#C8EABB",
      surfaceVariant: "#E7E7E7",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard/index" options={{ headerShown: false }} />
        <Stack.Screen name="register/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register/confirmation"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="event/create" options={{ headerShown: false }} />
        <Stack.Screen name="event/detail" options={{ headerShown: false }} />
        <Stack.Screen
          name="delete/confirmation"
          options={{ headerShown: false }}
        />
      </Stack>
    </PaperProvider>
  );
}
