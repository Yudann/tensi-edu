import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import articles from './ArticlesData';

export default function ArticleDetail() {
  const { id } = useLocalSearchParams(); // Mendapatkan parameter id
  const article = articles[id];

  if (!article) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-lg text-gray-500">Article not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-primary">
      <View className="p-6 m-4 bg-white rounded-xl shadow-lg">
        {/* Gambar Artikel */}
        <Image
          source={{
            uri: article.image || 'https://via.placeholder.com/400x200',
          }}
          className="w-full h-48 rounded-t-xl mb-4"
          resizeMode="cover"
        />
        {/* Judul Artikel */}
        <Text className="text-3xl font-bold text-gray-800 mb-4">
          {article.title}
        </Text>
        {/* Konten Artikel */}
        <Text className="text-base text-gray-700 leading-relaxed tracking-wide">
          {article.content.trim()}
        </Text>
      </View>
    </ScrollView>
  );
}
