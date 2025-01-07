import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const existingHistory = await AsyncStorage.getItem(
          'bloodPressureHistory',
        );
        if (existingHistory) {
          setHistory(JSON.parse(existingHistory));
        }
      } catch (error) {
        console.error('Failed to load history:', error);
      }
    };

    loadHistory();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Riwayat Tekanan Darah</Text>
      {history.length > 0 ? (
        history.map((record, index) => (
          <View key={index} style={styles.recordContainer}>
            <Text style={styles.date}>{record.date}</Text>
            <Text
              style={styles.values}
            >{`${record.systolic}/${record.diastolic} mmHg`}</Text>
            <Text style={[styles.status, { color: record.color }]}>
              {record.status}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noHistory}>Belum ada riwayat tersimpan.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAEEEB',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  recordContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  values: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  noHistory: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HistoryPage;
