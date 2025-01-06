import { Stack } from 'expo-router';

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
        options={{
          headerShown: true, // Header tetap ditampilkan
          title: 'Community', // Title kustom untuk header
        }}
      />
      <Stack.Screen
        name="articles/[id]"
        options={{
          headerShown: true,
          title: 'Back',
        }}
      />
      <Stack.Screen
        name="reminder/index"
        options={{
          headerShown: true,
          title: 'Reminder',
        }}
      />
    </Stack>
  );
};

export default ScreenLayout;
