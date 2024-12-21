import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 flex items-center justify-center">
      <Text className="text-blue-400">Haloo cok</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        goto profile heheh
      </Link>
    </View>
  );
}
