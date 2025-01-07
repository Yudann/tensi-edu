import { Stack } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

const ScreenLayout = () => {
  return (
    <Stack>
      {/* Screen utama */}
      <Stack.Screen
        name="BloodPressure/index"
        options={{
          headerShown: true, // Header tetap ditampilkan
          title: 'Blood Pressure Tracker', // Title kustom untuk header
        }}
      />

      {/* Screen community */}
      <Stack.Screen
        name="community/index"
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Community',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                ←
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="articles/[id]"
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: 'black', padding: 10, fontWeight: 800 }}>
                ← Back
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="reminder/index"
        options={({ navigation }) => ({
          headerShown: true,
          title: '', // Kosongkan jika ingin tombol back lebih dominan
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('(tabs)')}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                ← Back
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="reminder/addReminder/index"
        options={({ navigation }) => ({
          headerShown: true,
          title: '', // Kosongkan jika ingin tombol back lebih dominan
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('reminder/index')}
            >
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                ← Back
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
};

export default ScreenLayout;
