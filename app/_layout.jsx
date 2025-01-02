import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import 'react-native-url-polyfill/auto';
import { SplashScreen, Stack } from 'expo-router';
import GlobalProvider from '../context/GlobalProvider';
import BloodPressureProvider from '../context/BloodPressureContext'; // Import provider

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <BloodPressureProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(screen)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="search/[query]"
            options={{ headerShown: false }}
          />
        </Stack>
      </BloodPressureProvider>
    </GlobalProvider>
  );
};

export default RootLayout;
