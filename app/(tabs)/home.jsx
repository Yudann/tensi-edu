import React from 'react';
import { View, Text } from 'react-native';
import { FaBell, FaChalkboardTeacher, FaUser, FaUsers } from 'react-icons/fa';
import { Link } from 'expo-router';
import { useBloodPressure } from '../../context/BloodPressureContext'; // Import useBloodPressure
import { ScrollView } from 'react-native-web';

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
    <ScrollView className="flex-1 bg-primary p-4">
      {/* Header Section */}
      <View className="flex-row justify-between items-center p-4 rounded-lg mb-4">
        <View className="flex flex-row items-center justify-center">
          <FaUser
            size={50}
            color="black"
            className="mr-4 rounded-full border border-white p-2"
          />
          <View>
            <Text className="text-xl font-bold text-black">
              {GetGreeting()}
            </Text>
            <Text className="text-sm text-gray-600">
              How do you feel today?
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <FaBell size={24} color="black" className="mr-4" />
        </View>
      </View>

      {/* Blood Pressure Section */}
      <Link href="/BloodPressure" className="w-full">
        <View className="bg-sky-200 rounded-xl p-6 items-center mb-4 w-full">
          <View
            className={`w-28 h-28 rounded-full justify-center items-center border-8 ${
              color === 'green'
                ? 'border-green-600'
                : color === 'yellow'
                  ? 'border-yellow-600'
                  : color === 'red'
                    ? 'border-red-600'
                    : color === 'pink'
                      ? 'border-pink-600'
                      : 'border-blue-500'
            }`}
          >
            <Text
              className={`text-2xl font-bold ${
                color === 'green' ? 'text-green-600' : ''
              } ${color === 'yellow' ? 'text-yellow-600' : ''} ${
                color === 'red' ? 'text-red-600' : ''
              } ${color === 'pink' ? 'text-pink-600' : ''}`}
            >
              {bloodPressure.systolic}/{bloodPressure.diastolic}
            </Text>
          </View>

          <View className="flex-row items-center mt-4">
            {/* Menampilkan status berdasarkan logika */}
            <Text
              className={`text-lg font-bold ${color === 'green' ? 'text-green-600' : ''} 
                               ${color === 'yellow' ? 'text-yellow-600' : ''} 
                               ${color === 'orange' ? 'text-orange-600' : ''} 
                               ${color === 'red' ? 'text-red-600' : ''} 
                               ${color === 'darkred' ? 'text-darkred' : ''}`}
            >
              {status}
            </Text>
          </View>
        </View>
      </Link>

      {/* Main Features */}
      <View className="flex-row justify-between mb-4">
        <Link href="/videos" className="w-[48%]">
          <View className="bg-white rounded-xl p-4 w-full items-center shadow cursor-pointer">
            <FaChalkboardTeacher color="#FF5722" size={48} />
            <Text className="text-sm font-bold text-gray-700 text-center mt-2">
              Content Education
            </Text>
          </View>
        </Link>
        <Link href="/community" className="w-[48%]">
          <View className="bg-white rounded-xl p-4 w-full items-center shadow cursor-pointer">
            <FaUsers color="#03A9F4" size={48} />
            <Text className="text-sm font-bold text-gray-700 text-center mt-2">
              Support Community
            </Text>
          </View>
        </Link>
      </View>

      {/* Reminder Section */}
      <Link href="/reminder" className="w-full">
        <View className="bg-yellow-200 rounded-xl p-6 w-full items-center cursor-pointer">
          <FaBell color="black" size={48} />
          <Text className="text-lg font-bold text-orange-600 mb-2">
            Reminder
          </Text>
        </View>
      </Link>
    </ScrollView>
  );
};

export default Home;
