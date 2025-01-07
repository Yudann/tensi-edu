import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import articles from './ArticlesData';

export default function ArticleDetail() {
  const { id } = useLocalSearchParams();
  const article = articles[id];

  if (!article) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Article not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.articleContainer}>
        <Image
          source={{
            uri: article.image || 'https://via.placeholder.com/400x200',
          }}
          style={styles.articleImage}
          resizeMode="cover"
        />
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleContent}>{article.content.trim()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#DAEEEB',
  },
  articleContainer: {
    padding: 24,
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  articleImage: {
    width: '100%',
    height: 192,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginBottom: 16,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  articleContent: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  notFoundText: {
    fontSize: 18,
    color: '#9CA3AF',
  },
});
