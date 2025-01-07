import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import articles from '../(screen)/articles/ArticlesData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Articles() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {Object.entries(articles).map(([id, article]) => (
          <TouchableOpacity
            key={id}
            style={styles.articleCard}
            onPress={() => router.push(`/articles/${id}`)}
          >
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAEEEB', // Warna putih untuk latar belakang
    padding: 10,
    height: '100%', // Sama dengan Tailwind `p-4`
  },
  articleCard: {
    width: '100%', // Sama dengan Tailwind `w-full`
    height: 80, // Sama dengan Tailwind `h-20`
    backgroundColor: '#93C5FD', // Warna biru muda (bg-blue-300)
    flexDirection: 'row', // Sama dengan Tailwind `flex-row`
    alignItems: 'center', // Sama dengan Tailwind `items-center`
    justifyContent: 'space-between', // Sama dengan Tailwind `justify-between`
    paddingHorizontal: 24, // Sama dengan Tailwind `px-6`
    borderRadius: 16, // Sama dengan Tailwind `rounded-xl`
    marginBottom: 16, // Sama dengan Tailwind `mb-4`
  },
  articleTitle: {
    fontWeight: 'bold', // Sama dengan Tailwind `font-bold`
    fontSize: 18, // Sama dengan Tailwind `text-lg`
  },
  arrow: {
    fontSize: 18, // Ukuran panah
  },
});
