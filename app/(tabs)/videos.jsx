import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
  Image,
} from 'react-native';
import { images } from '../../constants';

const videos = [
  {
    id: '1',
    title: 'Edukasi Pencegahan Hipertensi',
    url: 'https://www.youtube.com/watch?v=FpMsKPIp634',
  },
  {
    id: '2',
    title: 'Mencegah Hipertensi Sejak Dini',
    url: 'https://www.youtube.com/watch?v=qs2c7P-15jY',
  },
  {
    id: '3',
    title: 'Faktor Risiko Hipertensi dan Cara Mencegahnya',
    url: 'https://www.youtube.com/watch?v=kHY8paJcJo4',
  },
  {
    id: '4',
    title: 'Pencegahan dan Pengendalian Hipertensi',
    url: 'https://www.youtube.com/watch?v=2JVUMyO0Fg4',
  },
  {
    id: '5',
    title: 'Edukasi Hipertensi',
    url: 'https://www.youtube.com/watch?v=kHY8paJcJo4',
  },
  {
    id: '6',
    title: 'Hipertensi Si Pembunuh Senyap',
    url: 'https://www.youtube.com/watch?v=RBfBhZfHHGo',
  },
];

const Videos = () => {
  const handleRedirect = (url) => {
    if (Platform.OS !== 'web') {
      Linking.openURL(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Koleksi Video Kesehatan</Text>
      {videos.map((video) => (
        <View key={video.id} style={styles.card}>
          {/* Gunakan iframe untuk platform web */}
          {Platform.OS === 'web' ? (
            <iframe
              width="100%"
              height="200"
              src={`${video.url.replace('watch?v=', 'embed/')}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            // Tampilkan placeholder di platform non-web
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>{video.title}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => handleRedirect(video.url)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Tonton di YouTube</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.posterSection}>
        <Text style={styles.sectionTitle}>Poster Edukasi</Text>
        <View style={styles.posterContainer}>
          <Image source={images.poster1} style={styles.posterImage} />
          <Image source={images.poster2} style={styles.posterImage} />
          <Image source={images.poster3} style={styles.posterImage} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAEEEB',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  placeholder: {
    backgroundColor: '#ccc',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  placeholderText: {
    color: '#555',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  posterSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  posterContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: 'auto',
    marginBottom: 10,
  },
  posterImage: {
    width: '100%',
    height: 'auto', // Lebar 30% dari kontainer
    aspectRatio: 1, // Menjaga rasio 1:1 (lebar = tinggi)
    borderRadius: 8,
  },
});

export default Videos;
