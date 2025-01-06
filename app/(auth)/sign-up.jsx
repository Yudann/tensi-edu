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

export default function Signup() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const submit = async () => {
    if (form.username === '' || form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setSubmitting(true);

    try {
      // Asumsikan createUser adalah fungsi untuk register pengguna
      const result = await createUser(form.email, form.password, form.username);
      // Set user di context
      setUser(result);
      setIsLogged(true);

      router.replace('/Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.backgroundContainer}>
          <Image
            source={require('../../assets/bg-main.jpg')} // Pastikan path gambar benar
            style={styles.backgroundImage}
          />

          <View style={styles.content}>
            <Image
              source={images.logo} // Pastikan logo juga ada di folder images
              resizeMode="contain"
              style={styles.logo}
            />

            <Text style={styles.title}>Sign Up to Tensi Edu</Text>

            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles={styles.input}
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.input}
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.input}
            />

            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Have an account already?</Text>
              <Link href="/sign-in" style={styles.signupLink}>
                Login
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    width: 250, // Ukuran logo diperbaiki
    height: 250, // Ukuran logo diperbaiki
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
