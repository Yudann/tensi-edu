import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const Community = () => {
  // Fungsi untuk membuka tautan grup WhatsApp
  const openWhatsAppGroup = () => {
    const url = 'https://chat.whatsapp.com/KaAH1TW0orS4UP2UOXeXM0';
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open WhatsApp group:', err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Card dengan ikon */}
      <View style={styles.card}>
        <Icon name="users" style={styles.icon} size={150} color="black" />
        <Text style={styles.cardTitle}>Connect with us</Text>

        {/* Tombol Join dan Ask Question */}
        <View style={styles.buttonGroup}>
          {/* Tombol Join */}
          <TouchableOpacity style={styles.button} onPress={openWhatsAppGroup}>
            <Text style={styles.buttonText}>Join</Text>
          </TouchableOpacity>

          {/* Tombol Ask Question */}
          <TouchableOpacity style={styles.button} onPress={openWhatsAppGroup}>
            <Text style={styles.buttonText}>Question</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section bawah */}
      <View style={styles.bottomSection}>
        {/* Card Group */}
        <TouchableOpacity style={styles.cardSmall} onPress={openWhatsAppGroup}>
          <Icon
            name="users"
            style={styles.iconSmall}
            size={50}
            color="#00B5D8"
          />
          <Text style={styles.cardText}>Group</Text>
        </TouchableOpacity>

        {/* Card Post Question */}
        <TouchableOpacity style={styles.cardSmall} onPress={openWhatsAppGroup}>
          <Icon
            name="question"
            style={styles.iconSmall}
            size={50}
            color="#00B5D8"
          />
          <Text style={styles.cardText}>Post Question</Text>
        </TouchableOpacity>

        {/* Card Discussion */}
        <TouchableOpacity style={styles.cardSmall} onPress={openWhatsAppGroup}>
          <Icon
            name="comments"
            style={styles.iconSmall}
            size={50}
            color="#00B5D8"
          />
          <Text style={styles.cardText}>Discussion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DAEEEB', // warna 'bg-primary'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    width: '100%',
    backgroundColor: '#75d3c8', // warna 'bg-main-green'
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 32,
  },
  icon: {
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: '#2C7A7B', // warna 'border-secondary'
  },
  cardTitle: {
    fontSize: 18,
    color: '#000',
    marginTop: 16,
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 32,
  },
  button: {
    backgroundColor: '#2C7A7B', // warna 'bg-secondary'
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 130,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
  cardSmall: {
    flex: 1,
    height: 150,
    backgroundColor: '#75d3c8', // warna 'bg-main-green'
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSmall: {
    color: '#00B5D8', // warna 'fill-primary'
  },
  cardText: {
    color: '#000',
    marginTop: 8,
    fontWeight: '600',
  },
});

export default Community;
