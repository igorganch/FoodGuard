import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import WelcomeScreen from './welcome';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showWelcome, setShowWelcome] = useState(true); 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); 
    return () => clearTimeout(timer);


  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {showWelcome ? (
        <WelcomeScreen />
      ) : ( 
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       
      </Stack>
      )}
     
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
