import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const articles = {
  1: {
    title: 'Manfaat Olahraga',
    content: `
      Olahraga memberikan manfaat besar bagi kesehatan fisik dan mental. 
      Dengan berolahraga secara teratur, tubuh kita menjadi lebih bugar, 
      sirkulasi darah meningkat, dan kita merasa lebih berenergi.
    `,
  },
  2: {
    title: 'Pentingnya Pola Makan Sehat',
    content: `
      Pola makan yang sehat membantu menjaga energi tubuh sepanjang hari. 
      Mengkonsumsi makanan bergizi seperti buah, sayur, dan protein adalah kunci untuk tubuh yang sehat.
    `,
  },
  3: {
    title: 'Tips Hidup Seimbang',
    content: `
      Hidup seimbang adalah tentang mengatur waktu untuk bekerja, bersosialisasi, dan beristirahat. 
      Dengan hidup seimbang, kita bisa lebih produktif dan bahagia.
    `,
  },
};

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
      <View className="p-6 m-4 bg-white rounded-xl shadow-lg text-center">
        <Text className="text-2xl font-extrabold text-balck mb-4">
          {article.title}
        </Text>
        <Text className="text-base text-gray-700 leading-relaxed tracking-wide">
          {article.content.trim()}
        </Text>
      </View>
    </ScrollView>
  );
}
