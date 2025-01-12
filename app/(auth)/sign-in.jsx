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
  ImageBackground,
} from 'react-native';

import { images } from '../../constants';
import { CustomButton, FormField } from '../../components';

export default function Login() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const submitDummy = () => {
    if (form.username === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      router.replace('/home');
      Alert.alert('Success', 'Login successful!');
    }, 1000); // Simulasi loading
  };

  return (
    <ImageBackground
      source={require('../../assets/bg-main.jpg')}
      style={styles.background}
      imageStyle={styles.fixedImage}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.backgroundContainer}>
            <View style={styles.content}>
              <Image
                source={images.logo} // Pastikan logo juga ada di folder images
                resizeMode="contain"
                style={styles.logo}
              />

              <Text style={styles.title}>Log in to Tensi Edu</Text>

              <FormField
                title="Username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles={styles.input}
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles={styles.input}
              />

              <CustomButton
                title="Sign In"
                handlePress={submitDummy}
                containerStyles={styles.button}
                isLoading={isSubmitting}
              />

              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <Link href="/sign-up" style={styles.signupLink}>
                  Signup
                </Link>
              </View>
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
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
  },
  input: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    marginTop: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#7D7D7D',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6F61',
    marginLeft: 5,
  },
});
