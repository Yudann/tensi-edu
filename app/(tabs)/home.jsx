import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Ganti pustaka ikon
import { Link } from 'expo-router';
import { useBloodPressure } from '../../context/BloodPressureContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const GetGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

// Fungsi untuk menentukan status tekanan darah
const GetBloodPressureStatus = (systolic, diastolic) => {
  if (systolic <= 120 && diastolic <= 80) {
    return { status: 'Normal', color: 'green' };
  } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return { status: 'Prahypertensi', color: 'yellow' };
  } else if (
    (systolic >= 130 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    return { status: 'Hipertensi Grade 1', color: 'orange' };
  } else if (systolic >= 140 || diastolic >= 90) {
    return { status: 'Hipertensi Grade 2', color: 'red' };
  } else if (systolic > 180 || diastolic > 120) {
    return { status: 'Hipertensi Akut', color: 'darkred' };
  }
};

const Home = () => {
  const { bloodPressure } = useBloodPressure();

  const { status, color } = GetBloodPressureStatus(
    bloodPressure.systolic,
    bloodPressure.diastolic,
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DAEEEB' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#DAEEEB', padding: 16 }}>
        {/* Header Section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            backgroundColor: '#fff',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome
              name="user-circle"
              size={40}
              color="black"
              style={{ marginRight: 16 }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                {GetGreeting()}
              </Text>
              <Text style={{ fontSize: 14, color: '#666' }}>
                How do you feel today?
              </Text>
            </View>
          </View>
          <MaterialIcons name="notifications" size={24} color="black" />
        </View>

        {/* Blood Pressure Section */}
        <Link href="/BloodPressure">
          <View
            style={{
              backgroundColor: '#E0F7FA',
              borderRadius: 16,
              padding: 24,
              alignItems: 'center',
              marginBottom: 16,
              width: '100%',
            }}
          >
            <View
              style={{
                width: 112,
                height: 112,
                borderRadius: 56,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 8,
                borderColor:
                  color === 'green'
                    ? '#4CAF50'
                    : color === 'yellow'
                      ? '#FFEB3B'
                      : color === 'red'
                        ? '#F44336'
                        : '#2196F3',
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color:
                    color === 'green'
                      ? '#4CAF50'
                      : color === 'yellow'
                        ? '#FFEB3B'
                        : color === 'red'
                          ? '#F44336'
                          : '#000',
                }}
              >
                {bloodPressure.systolic}/{bloodPressure.diastolic}
              </Text>
            </View>

            <Text
              style={{
                marginTop: 16,
                fontSize: 18,
                fontWeight: 'bold',
                color:
                  color === 'green'
                    ? '#4CAF50'
                    : color === 'yellow'
                      ? '#FFEB3B'
                      : color === 'orange'
                        ? '#FF9800'
                        : color === 'red'
                          ? '#F44336'
                          : '#000',
              }}
            >
              {status}
            </Text>
          </View>
        </Link>

        {/* Main Features */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            marginTop: 16,
          }}
        >
          <Link href="/videos" style={{ width: '48%' }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                width: '100%',
              }}
            >
              <FontAwesome name="video-camera" size={48} color="#FF5722" />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#555',
                  textAlign: 'center',
                  marginTop: 8,
                }}
              >
                Content Education
              </Text>
            </View>
          </Link>
          <Link href="/community" style={{ width: '48%' }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                width: '100%',
              }}
            >
              <FontAwesome name="users" size={48} color="#03A9F4" />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#555',
                  textAlign: 'center',
                  marginTop: 8,
                }}
              >
                Support Community
              </Text>
            </View>
          </Link>
        </View>

        {/* Reminder Section */}
        <Link href="/reminder">
          <View
            style={{
              backgroundColor: '#FFF9C4',
              borderRadius: 16,
              padding: 24,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <MaterialIcons name="notifications" size={48} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FB8C00',
                marginTop: 8,
              }}
            >
              Reminder
            </Text>
          </View>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
