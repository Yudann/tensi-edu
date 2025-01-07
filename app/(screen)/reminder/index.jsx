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
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reminder() {
  const router = useRouter();
  const [reminders, setReminders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

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

  const scheduleNotification = async (reminder) => {
    const trigger = new Date(reminder.time);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Reminder',
        body: reminder.description,
        sound: true,
      },
      trigger,
    });
  };

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

  const openDeleteModal = (reminder) => {
    setSelectedReminder(reminder);
    setModalVisible(true);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#DAEEEB',
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
          marginBottom: 16,
        }}
      >
        Reminder
      </Text>

      {reminders.length === 0 ? (
        <Text style={{ color: '#000', textAlign: 'center', marginTop: 40 }}>
          Belum ada reminder
        </Text>
      ) : (
        <FlatList
          data={reminders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width: '100%',
                backgroundColor: '#fff',
                padding: 16,
                borderRadius: 8,
                marginBottom: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.time}
                </Text>
                <Text style={{ color: '#555' }}>{item.description}</Text>
              </View>
              <TouchableOpacity
                onPress={() => openDeleteModal(item)}
                style={{ backgroundColor: '#f44', padding: 8, borderRadius: 4 }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Hapus</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        onPress={() => router.push('/reminder/addReminder')}
        style={{
          backgroundColor: '#007BFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Tambah Reminder
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 24,
              borderRadius: 8,
              width: '80%',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 16,
              }}
            >
              Apakah Anda yakin ingin menghapus reminder ini?
            </Text>
            <Text
              style={{ color: '#555', textAlign: 'center', marginBottom: 24 }}
            >
              {selectedReminder?.time} - {selectedReminder?.description}
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <TouchableOpacity
                onPress={() => deleteReminder(selectedReminder?.id)}
                style={{
                  backgroundColor: '#f44',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                  Ya, Hapus
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: '#ddd',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: '#333', fontWeight: 'bold' }}>Tidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
