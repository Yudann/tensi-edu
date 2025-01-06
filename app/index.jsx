import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ImageBackground, StyleSheet } from 'react-native';
import './global.css';
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
      <SafeAreaView className="bg-transparent h-full">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              style={{ width: 350, height: 350 }}
              resizeMode="contain"
            />
            <View className="relative">
              <Text className="text-3xl text-black font-bold text-center">
                Your Personal Health Companion
              </Text>
              <Text className="text-secondary-200 text-center text-xl mb-5">
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
});
