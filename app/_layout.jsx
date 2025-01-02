import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { ImageBackground, StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/bg-main.jpg')} // Path ke background
        style={styles.background}
        imageStyle={styles.fixedImage}
      />

      {/* Konten Aplikasi */}
      <GlobalProvider>
        <BloodPressureProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: 'transparent' }, // Header transparan
              headerTintColor: 'white', // Warna teks header
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Membuat elemen berada di atas background
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Pastikan background berada di bawah elemen lainnya
  },
  fixedImage: {
    resizeMode: 'cover', // Mengisi layar tanpa distorsi
  },
});

export default RootLayout;
