import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const articles = [
  { id: '1', title: 'Manfaat Olahraga' },
  { id: '2', title: 'Pentingnya Pola Makan Sehat' },
  { id: '3', title: 'Tips Hidup Seimbang' },
];

export default function Articles() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      {articles.map((article) => (
        <TouchableOpacity
          key={article.id}
          className="w-full h-20 bg-blue-300 flex-row items-center justify-between px-6 rounded-xl mb-4"
          onPress={() => router.push(`/article/${article.id}`)}
        >
          <Text className="font-bold text-lg">{article.title}</Text>
          <Text>→</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
