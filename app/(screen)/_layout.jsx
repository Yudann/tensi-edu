import { Stack } from 'expo-router';

const ScreenLayout = () => {
  return (
    <Stack>
      {/* Screen utama */}
      <Stack.Screen
        name="BloodPressure/index"
        options={{
          headerShown: false,
        }}
      />

      {/* Screen community */}
      <Stack.Screen
        name="community/index"
        options={{
          headerShown: false, 
        }}
      />
    </Stack>
  );
};

export default ScreenLayout;
