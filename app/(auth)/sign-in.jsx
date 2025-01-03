import { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';

import { images } from '../../constants';
import { CustomButton, FormField } from '../../components';
import { getCurrentUser, signIn } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import { ImageBackground } from 'react-native-web';

export default function Login() {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submitDummy = () => {
    router.replace('/home');
    Alert.alert('Success', 'User signed in successfully');
    alert('sign in sukses');
  };

  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert('Success', 'User signed in successfully');
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/bg-main.jpg')} // Path ke background Anda
      style={styles.background}
      imageStyle={styles.fixedImage}
    >
      <SafeAreaView className="h-full">
        <ScrollView>
          <View
            className="w-full flex justify-center h-full px-4 my-6"
            style={{
              minHeight: Dimensions.get('window').height - 100,
            }}
          >
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[115px] h-[34px] self-center"
            />

            <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
              Log in to Tensi Edu
            </Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />

            <CustomButton
              title="Sign In"
              handlePress={submitDummy}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-500 font-pregular">
                Don't have an account?
              </Text>
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary"
              >
                Signup
              </Link>
            </View>
          </View>
        </ScrollView>
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
    resizeMode: 'cover', // Pastikan gambar mengisi layar dengan baik
  },
});
