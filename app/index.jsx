import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 flex items-center justify-center">
      <Text className="text-3xl font-pblack">Tensi-Edu App</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }}>
        Home
      </Link>
    </View>
  );
}
