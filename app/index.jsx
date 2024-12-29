import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function Global() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            style={{
              width: 350,
              height: 350,
            }}
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
  );
}
