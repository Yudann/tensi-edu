import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export default function Reminder() {
  const router = useRouter();
  const [reminders, setReminders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

  // Fungsi untuk mengambil data dari AsyncStorage
  const loadReminders = async () => {
    try {
      const savedReminders = await AsyncStorage.getItem('reminders');
      if (savedReminders) {
        setReminders(JSON.parse(savedReminders));
      }
    } catch (error) {
      console.error('Failed to load reminders:', error);
    }
  };

  // Fungsi untuk menjadwalkan notifikasi
  const scheduleNotification = async (reminder) => {
    const trigger = new Date(reminder.time); // Pastikan format time sudah sesuai (Date string)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Reminder',
        body: reminder.description,
        sound: true,
      },
      trigger,
    });
  };

  // Fungsi untuk menghapus reminder berdasarkan ID
  const deleteReminder = async (id) => {
    try {
      const updatedReminders = reminders.filter(
        (reminder) => reminder.id !== id,
      );
      setReminders(updatedReminders);
      await AsyncStorage.setItem('reminders', JSON.stringify(updatedReminders));
      setModalVisible(false);
    } catch (error) {
      console.error('Failed to delete reminder:', error);
    }
  };

  // Fungsi untuk membuka modal konfirmasi
  const openDeleteModal = (reminder) => {
    setSelectedReminder(reminder);
    setModalVisible(true);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <View className="flex-1 justify-between bg-primary p-4">
      <Text className="text-xl font-bold text-black mb-4">Reminder</Text>

      {reminders.length === 0 ? (
        <Text className="text-black text-center mt-10">Belum ada reminder</Text>
      ) : (
        <FlatList
          data={reminders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="w-full bg-white p-4 rounded mb-3 flex-row justify-between items-center">
              <View>
                <Text className="text-lg font-bold">{item.time}</Text>
                <Text className="text-gray-700">{item.description}</Text>
              </View>
              <TouchableOpacity
                onPress={() => openDeleteModal(item)}
                className="bg-red-500 p-2 rounded"
              >
                <Text className="text-white font-bold">Hapus</Text>
              </TouchableOpacity>
            </View>
          )}
          className="w-full"
        />
      )}

      <TouchableOpacity
        onPress={() => router.push('/reminder/addReminder')}
        className="bg-secondary p-3 rounded items-center mt-4"
      >
        <Text className="text-white font-bold">Tambah Reminder</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-4/5">
            <Text className="text-lg font-bold text-center mb-4">
              Apakah Anda yakin ingin menghapus reminder ini?
            </Text>
            <Text className="text-gray-700 text-center mb-6">
              {selectedReminder?.time} - {selectedReminder?.description}
            </Text>
            <View className="flex-row justify-around">
              <TouchableOpacity
                onPress={() => deleteReminder(selectedReminder?.id)}
                className="bg-red-500 px-4 py-2 rounded"
              >
                <Text className="text-white font-bold">Ya, Hapus</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                <Text className="text-gray-800 font-bold">Tidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
