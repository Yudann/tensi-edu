import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useBloodPressure } from '../../../context/BloodPressureContext';
import { router } from 'expo-router';
import { FaSave } from 'react-icons/fa';

const BloodPressure = () => {
  const { bloodPressure, setBloodPressure } = useBloodPressure(); // Mendapatkan context
  const [systolic, setSystolic] = useState(bloodPressure.systolic.toString());
  const [diastolic, setDiastolic] = useState(
    bloodPressure.diastolic.toString(),
  );
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');

  // Fungsi untuk menentukan status dan warna berdasarkan tekanan darah
  useEffect(() => {
    const systolicValue = parseInt(systolic);
    const diastolicValue = parseInt(diastolic);

    if (systolicValue <= 120 && diastolicValue <= 80) {
      setStatus('Normal');
      setColor('green');
    } else if (
      systolicValue >= 120 &&
      systolicValue < 130 &&
      diastolicValue < 80
    ) {
      setStatus('Prahipertensi');
      setColor('yellow');
    } else if (
      (systolicValue >= 130 && systolicValue < 140) ||
      (diastolicValue >= 80 && diastolicValue < 90)
    ) {
      setStatus('Hipertensi 1');
      setColor('red');
    } else if (systolicValue >= 140 || diastolicValue >= 90) {
      setStatus('Hipertensi 2');
      setColor('pink');
    }
  }, [systolic, diastolic]);

  const saveBloodPressure = () => {
    setBloodPressure({
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
    });
    alert('Blood pressure updated!');
    router.push('/home');
  };

  return (
    <View className="flex-1 justify-center items-center bg-cyan-50 px-6">
      {/* Judul */}
      <Text className="text-lg font-bold text-gray-700 mb-4">
        Catatan Terbaru
      </Text>
      <View className={`bg-sky-200 rounded-xl p-6 items-center mb-4 w-full`}>
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
            className={`text-2xl font-bold ${color === 'green' ? 'text-green-600' : ''} 
                               ${color === 'yellow' ? 'text-yellow-600' : ''} 
                               ${color === 'red' ? 'text-red-600' : ''} 
                               ${color === 'pink' ? 'text-pink-600' : ''}`}
          >
            {bloodPressure.systolic}/{bloodPressure.diastolic}{' '}
            {/* Display blood pressure */}
          </Text>
        </View>
        <View className="flex-row items-center mt-4">
          {/* Menampilkan status berdasarkan logika */}
          <Text
            className={`text-lg font-bold ${color === 'green' ? 'text-green-600' : ''} 
                               ${color === 'yellow' ? 'text-yellow-600' : ''} 
                               ${color === 'red' ? 'text-red-600' : ''} 
                               ${color === 'pink' ? 'text-pink-600' : ''}`}
          >
            {status}
          </Text>
        </View>
      </View>
      {/* Input dan Gauge untuk Sistolik */}
      <View className="w-full mb-6">
        <Text className="text-base font-bold text-gray-700 mb-2">Sistolik</Text>
        <View className="flex flex-row items-center space-x-2">
          <TextInput
            placeholder="120"
            keyboardType="numeric"
            value={systolic}
            onChangeText={setSystolic}
            className="flex-1 border border-gray-300 rounded-lg p-2 text-center"
          />
          <TouchableOpacity
            onPress={saveBloodPressure}
            className="bg-blue-500 py-2 px-4 rounded-lg flex flex-row items-center justify-center"
          >
            <FaSave className="text-white mr-2" />
            <Text className="text-white font-bold">Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Input dan Gauge untuk Diastolik */}
      <View className="w-full mb-6">
        <Text className="text-base font-bold text-gray-700 mb-2">
          Diastolik
        </Text>
        <View className="flex flex-row items-center space-x-2">
          <TextInput
            placeholder="80"
            keyboardType="numeric"
            value={diastolic}
            onChangeText={setDiastolic}
            className="flex-1 border border-gray-300 rounded-lg p-2 text-center"
          />
          <TouchableOpacity
            onPress={saveBloodPressure}
            className="bg-blue-500 py-2 px-4 rounded-lg flex flex-row items-center justify-center"
          >
            <FaSave className="text-white mr-2" />
            <Text className="text-white font-bold">Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Keterangan Warna */}
      <View className="w-full">
        <Text className="text-base font-bold text-gray-700 mb-2">
          Keterangan:
        </Text>
        <View className="flex flex-row items-center space-x-4">
          <View className="flex items-center">
            <View className="w-4 h-4 bg-green-600 rounded-full mb-1" />
            <Text className="text-xs text-gray-600">Normal</Text>
          </View>
          <View className="flex items-center">
            <View className="w-4 h-4 bg-yellow-500 rounded-full mb-1" />
            <Text className="text-xs text-gray-600">Prahipertensi</Text>
          </View>
          <View className="flex items-center">
            <View className="w-4 h-4 bg-red-600 rounded-full mb-1" />
            <Text className="text-xs text-gray-600">Hipertensi 1</Text>
          </View>
          <View className="flex items-center">
            <View className="w-4 h-4 bg-pink-600 rounded-full mb-1" />
            <Text className="text-xs text-gray-600">Hipertensi 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BloodPressure;
