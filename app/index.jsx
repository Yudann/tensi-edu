import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
import { useEffect } from 'react';

export default function Global() {
  const { loading, isLogged } = useGlobalContext();

  useEffect(() => {
    // Minta izin notifikasi
    (async () => {
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for notifications!');
          return;
        }
      } else {
        alert('Must use a physical device for Push Notifications');
      }
    })();
  }, []);

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <ImageBackground
      source={require('../assets/bg-main.jpg')}
      style={styles.background}
      imageStyle={styles.fixedImage}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.mainContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Your Personal Health Companion</Text>
              <Text style={styles.subtitle}>
                Stay Informed. Stay Healthy. Stay Happy.
              </Text>
              <CustomButton
                title="Start Your Journey"
                handlePress={() => router.push('/sign-in')}
              />
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  fixedImage: {
    resizeMode: 'cover',
  },
  safeAreaView: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85%',
    paddingHorizontal: 16,
  },
  logo: {
    width: 350,
    height: 350,
  },
  textContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: '#6b7280', // Sesuai dengan Tailwind warna secondary-200
    textAlign: 'center',
    marginBottom: 20,
  },
});
