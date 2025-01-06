import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddReminder() {
  const router = useRouter();
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const saveReminder = async () => {
    if (time && description) {
      try {
        // Ambil data reminder yang sudah ada
        const existingReminders = await AsyncStorage.getItem('reminders');
        const reminders = existingReminders
          ? JSON.parse(existingReminders)
          : [];

        // Tambahkan reminder baru
        const newReminder = { id: Date.now(), time, description };
        reminders.push(newReminder);

        // Simpan kembali ke AsyncStorage
        await AsyncStorage.setItem('reminders', JSON.stringify(reminders));

        // Kembali ke halaman reminder
        router.push('/reminder');
      } catch (error) {
        console.error('Failed to save reminder:', error);
      }
    }
  };

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-xl font-bold text-black mb-4">Tambah Reminder</Text>

      {/* Input waktu */}
      <TextInput
        value={time}
        onChangeText={setTime}
        placeholder="Masukkan waktu (contoh: 16:00)"
        className="w-full bg-white p-3 rounded mb-2"
      />

      {/* Input deskripsi */}
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Masukkan deskripsi (contoh: Minum obat)"
        className="w-full bg-white p-3 rounded mb-2"
      />

      {/* Tombol simpan */}
      <TouchableOpacity
        onPress={saveReminder}
        className="bg-secondary p-3 rounded items-center"
      >
        <Text className="text-white font-bold">Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}
