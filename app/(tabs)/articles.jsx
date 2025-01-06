import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import articles from '../(screen)/articles/ArticlesData';

export default function Articles() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      {Object.entries(articles).map(([id, article]) => (
        <TouchableOpacity
          key={id}
          className="w-full h-20 bg-blue-300 flex-row items-center justify-between px-6 rounded-xl mb-4"
          onPress={() => router.push(`/articles/${id}`)}
        >
          <Text className="font-bold text-lg">{article.title}</Text>
          <Text>→</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
