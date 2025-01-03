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
        name="article/[id]"
        options={{
          headerShown: true,
          title: 'Back',
        }}
      />
    </Stack>
  );
};

export default ScreenLayout;
