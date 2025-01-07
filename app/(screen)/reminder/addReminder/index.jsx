import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddReminder() {
  const router = useRouter();
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const saveReminder = async () => {
    if (time && description) {
      try {
        const existingReminders = await AsyncStorage.getItem('reminders');
        const reminders = existingReminders
          ? JSON.parse(existingReminders)
          : [];

        const newReminder = { id: Date.now(), time, description };
        reminders.push(newReminder);

        await AsyncStorage.setItem('reminders', JSON.stringify(reminders));
        router.push('/reminder');
      } catch (error) {
        console.error('Failed to save reminder:', error);
      }
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#DAEEEB', paddingHorizontal: 16 }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
          marginBottom: 16,
        }}
      >
        Tambah Reminder
      </Text>

      <TextInput
        value={time}
        onChangeText={setTime}
        placeholderTextColor="#888"
        placeholder="Masukkan waktu (contoh: 16:00)"
        style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
          color: '#000',
        }}
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#888"
        placeholder="Masukkan deskripsi (contoh: Minum obat)"
        style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
          color: '#000',
        }}
      />

      <TouchableOpacity
        onPress={saveReminder}
        style={{
          backgroundColor: '#007BFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Simpan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
