import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useBloodPressure } from '../../../context/BloodPressureContext';
import { router } from 'expo-router';
import recommendationData from './BloodPressureData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BloodPressure = () => {
  const { bloodPressure, setBloodPressure } = useBloodPressure();
  const [systolic, setSystolic] = useState(bloodPressure.systolic.toString());
  const [diastolic, setDiastolic] = useState(
    bloodPressure.diastolic.toString(),
  );
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');
  const [recommendations, setRecommendations] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const systolicValue = parseInt(systolic);
    const diastolicValue = parseInt(diastolic);

    if (systolicValue <= 120 && diastolicValue <= 80) {
      updateStatus('Normal');
    } else if (
      systolicValue >= 120 &&
      systolicValue < 130 &&
      diastolicValue < 80
    ) {
      updateStatus('Prahipertensi');
    } else if (
      (systolicValue >= 130 && systolicValue < 140) ||
      (diastolicValue >= 80 && diastolicValue < 90)
    ) {
      updateStatus('Hipertensi Grade 1');
    } else if (
      (systolicValue >= 140 && systolicValue < 180) ||
      (diastolicValue >= 90 && diastolicValue < 120)
    ) {
      updateStatus('Hipertensi Grade 2');
    } else if (systolicValue >= 180 || diastolicValue >= 120) {
      updateStatus('Hipertensi Akut');
    }
  }, [systolic, diastolic]);

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
    const recommendation = recommendationData[newStatus];
    setColor(recommendation.color);
    setRecommendations(recommendation);
  };

  const saveBloodPressure = async () => {
    const newRecord = {
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
      status,
      date: new Date().toLocaleString(),
    };

    // Simpan ke state lokal
    setBloodPressure({
      systolic: newRecord.systolic,
      diastolic: newRecord.diastolic,
    });

    // Tambahkan ke history dan simpan di AsyncStorage
    const existingHistory = await AsyncStorage.getItem('bloodPressureHistory');
    const history = existingHistory ? JSON.parse(existingHistory) : [];
    history.push(newRecord);

    await AsyncStorage.setItem('bloodPressureHistory', JSON.stringify(history));

    alert('Blood pressure updated and saved to history!');
    router.push('/BloodPressure/history');
  };

  const seeHistory = () => {
    router.push('/BloodPressure/history');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#DAEEEB', padding: 16 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
          Catatan Terbaru
        </Text>
        <View
          style={{
            backgroundColor: '#b3d9ff',
            borderRadius: 20,
            padding: 16,
            alignItems: 'center',
            marginBottom: 16,
            width: '100%',
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 8,
              borderColor: color,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color }}>
              {bloodPressure.systolic}/{bloodPressure.diastolic}
            </Text>
          </View>
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, color }}
          >
            {status}
          </Text>
        </View>

        <View style={{ width: '100%', marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
            Sistolik
          </Text>
          <TextInput
            placeholder="120"
            keyboardType="numeric"
            value={systolic}
            onChangeText={setSystolic}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              padding: 8,
              textAlign: 'center',
              marginBottom: 16,
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
            Diastolik
          </Text>
          <TextInput
            placeholder="80"
            keyboardType="numeric"
            value={diastolic}
            onChangeText={setDiastolic}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              padding: 8,
              textAlign: 'center',
              marginBottom: 16,
            }}
          />
          <TouchableOpacity
            onPress={saveBloodPressure}
            style={{
              backgroundColor: '#007bff',
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
            >
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={seeHistory}
            style={{
              backgroundColor: '#007bff',
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
            >
              My Blood Pressure History
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Rekomendasi Tindakan
          </Text>
          {recommendations.tips &&
            recommendations.tips.map((tip, index) => (
              <Text key={index} style={{ marginBottom: 8 }}>
                {`- ${tip}`}
              </Text>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default BloodPressure;
