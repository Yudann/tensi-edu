import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';

const videos = [
  {
    id: '1',
    title: 'Manfaat Olahraga untuk Kesehatan',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Tips Pola Makan Sehat',
    url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
  },
  {
    id: '3',
    title: 'Panduan Meditasi untuk Pemula',
    url: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
  },
  {
    id: '4',
    title: 'Olahraga Ringan di Rumah',
    url: 'https://www.youtube.com/watch?v=O1lUe7UOQCg',
  },
  {
    id: '5',
    title: 'Cara Menjaga Kesehatan Mental',
    url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
  },
  {
    id: '6',
    title: 'Pentingnya Tidur Berkualitas',
    url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
  },
  {
    id: '7',
    title: 'Langkah Hidup Sehat dengan Yoga',
    url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  },
  {
    id: '8',
    title: 'Manfaat Air Putih untuk Tubuh',
    url: 'https://www.youtube.com/watch?v=MG5V0ZxE9O4',
  },
  {
    id: '9',
    title: 'Keseimbangan Hidup dan Kerja',
    url: 'https://www.youtube.com/watch?v=Z0GFRcFm-aY',
  },
  {
    id: '10',
    title: 'Olahraga di Pagi Hari',
    url: 'https://www.youtube.com/watch?v=IcrbM1l_BoI',
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
});

export default Videos;
