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
import YoutubePlayer from 'react-native-youtube-iframe';
import { SafeAreaView } from 'react-native-safe-area-context';
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

const getYouTubeId = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const Videos = () => {
  const handleRedirect = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Koleksi Video Kesehatan</Text>
        {videos.map((video) => (
          <View key={video.id} style={styles.card}>
            {/* Gunakan YoutubePlayer untuk semua platform */}
            <YoutubePlayer
              height={200}
              videoId={getYouTubeId(video.url)}
              play={false}
            />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAEEEB',
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginVertical: 0,
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
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 8,
  },
});

export default Videos;
