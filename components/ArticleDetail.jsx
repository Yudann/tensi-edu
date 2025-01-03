// ArticleDetail.jsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ArticleDetail = ({ route }) => {
  const { article } = route.params;

  // Contoh konten panjang
  const longContent = `
    Olahraga adalah aktivitas yang sangat penting untuk menjaga kesehatan tubuh. 
    Dengan rutin berolahraga, kita dapat meningkatkan sirkulasi darah, memperbaiki metabolisme, 
    dan mengurangi risiko penyakit kronis seperti diabetes dan hipertensi.
    
    Tidak hanya itu, olahraga juga memberikan manfaat mental. Saat berolahraga, tubuh melepaskan endorfin 
    yang membuat kita merasa lebih bahagia dan rileks. Bahkan, olahraga ringan seperti berjalan kaki 
    selama 30 menit setiap hari dapat meningkatkan suasana hati secara signifikan.
    
    Penting juga untuk memilih jenis olahraga yang sesuai dengan kebutuhan dan kemampuan tubuh kita. 
    Mulai dari yoga, bersepeda, hingga berenang, semuanya memiliki manfaat yang berbeda.
    
    Jadi, yuk mulai jadikan olahraga sebagai bagian dari gaya hidup sehat kita! Jangan lupa, 
    kombinasikan olahraga dengan pola makan yang seimbang dan istirahat yang cukup untuk hasil yang optimal.
  `;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">{article.title}</Text>
      <Text className="text-base text-gray-700">{longContent}</Text>
    </ScrollView>
  );
};

export default ArticleDetail;
