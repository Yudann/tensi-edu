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
import { FaSave } from 'react-icons/fa';

const BloodPressure = () => {
  const { bloodPressure, setBloodPressure } = useBloodPressure();
  const [systolic, setSystolic] = useState(bloodPressure.systolic.toString());
  const [diastolic, setDiastolic] = useState(
    bloodPressure.diastolic.toString(),
  );
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');
  const [recommendations, setRecommendations] = useState({});

  const recommendationData = {
    Normal: {
      color: 'green',
      tips: [
        'Makan makanan sehat seperti sayur-sayuran dan buah-buahan setiap hari.',
        'Kurangi makanan yang terlalu asin atau berminyak.',
        'Lakukan olahraga ringan, seperti jalan kaki 30 menit sehari, lima kali seminggu.',
        'Istirahat yang cukup dengan tidur 7-8 jam setiap malam.',
        'Hindari stres. Luangkan waktu untuk melakukan hal yang menyenangkan atau meditasi.',
        'Lakukan pemeriksaan tekanan darah secara rutin.',
      ],
      foods: [
        { type: 'Sayur', items: ['Brokoli', 'Bayam', 'Wortel'] },
        { type: 'Buah', items: ['Apel', 'Jeruk', 'Kiwi'] },
        {
          type: 'Protein',
          items: ['Ikan salmon', 'Ayam tanpa kulit', 'Kacang-kacangan'],
        },
      ],
      complications: [
        'Risiko terkena hipertensi dan penyakit jantung di masa depan.',
      ],
    },
    Prahipertensi: {
      color: 'yellow',
      tips: [
        'Kurangi makanan yang asin, seperti keripik atau makanan kaleng.',
        'Batasi penggunaan garam dalam masakan.',
        'Mulailah makan makanan sehat seperti buah, sayur, dan biji-bijian.',
        'Lakukan olahraga seperti bersepeda, berenang, atau senam selama 30 menit, minimal 3 kali seminggu.',
        'Jangan merokok dan hindari alkohol.',
        'Catat tekanan darah Anda secara berkala untuk melihat apakah ada perubahan.',
      ],
      foods: [
        { type: 'Sayur', items: ['Timun', 'Seledri', 'Asparagus'] },
        { type: 'Buah', items: ['Pisang', 'Alpukat', 'Stroberi'] },
        { type: 'Protein', items: ['Ikan tuna', 'Tahu', 'Tempe'] },
      ],
      complications: ['Risiko naik menjadi hipertensi grade 1.'],
    },
    'Hipertensi Grade 1': {
      color: 'red',
      tips: [
        'Perbanyak makan sayur hijau dan buah-buahan segar setiap hari.',
        'Kurangi makanan berminyak, seperti gorengan, dan gantikan dengan makanan yang dipanggang atau direbus.',
        'Lakukan olahraga rutin, seperti jalan cepat atau jogging ringan.',
        'Batasi konsumsi alkohol dan hentikan kebiasaan merokok.',
        'Konsultasikan tekanan darah Anda ke dokter untuk pengobatan lebih lanjut.',
      ],
      foods: [
        { type: 'Sayur', items: ['Bayam', 'Kale', 'Brokoli'] },
        { type: 'Buah', items: ['Anggur', 'Delima', 'Blueberry'] },
        { type: 'Protein', items: ['Ikan sarden', 'Telur rebus', 'Dada ayam'] },
      ],
      complications: [
        'Risiko terkena penyakit jantung, stroke, atau gagal ginjal.',
      ],
    },
    'Hipertensi Grade 2': {
      color: 'orange',
      tips: [
        'Segera konsultasikan dengan dokter untuk pengobatan lebih lanjut.',
        'Ikuti pola makan rendah garam dan tinggi serat.',
        'Hindari stres dan lakukan teknik relaksasi seperti yoga atau meditasi.',
        'Minum obat antihipertensi sesuai resep dokter.',
        'Kurangi konsumsi makanan olahan dan pilih makanan alami.',
      ],
      foods: [
        { type: 'Sayur', items: ['Selada', 'Kol', 'Bayam'] },
        { type: 'Buah', items: ['Semangka', 'Pisang', 'Kiwi'] },
        { type: 'Protein', items: ['Ikan makarel', 'Kacang almond', 'Tahu'] },
      ],
      complications: ['Risiko tinggi terkena serangan jantung atau stroke.'],
    },
    'Hipertensi Akut': {
      color: 'darkred',
      tips: [
        'Segera cari bantuan medis darurat.',
        'Jangan menunda pengobatan untuk menghindari komplikasi yang fatal.',
        'Tetap tenang dan hindari aktivitas fisik yang berat.',
      ],
      foods: [],
      complications: [
        'Risiko kerusakan organ akut seperti otak, jantung, atau ginjal.',
      ],
    },
  };

  useEffect(() => {
    const systolicValue = parseInt(systolic);
    const diastolicValue = parseInt(diastolic);

    if (systolicValue <= 120 && diastolicValue <= 80) {
      setStatus('Normal');
      setColor(recommendationData.Normal.color);
      setRecommendations(recommendationData.Normal);
    } else if (
      systolicValue >= 120 &&
      systolicValue < 130 &&
      diastolicValue < 80
    ) {
      setStatus('Prahipertensi');
      setColor(recommendationData.Prahipertensi.color);
      setRecommendations(recommendationData.Prahipertensi);
    } else if (
      (systolicValue >= 130 && systolicValue < 140) ||
      (diastolicValue >= 80 && diastolicValue < 90)
    ) {
      setStatus('Hipertensi Grade 1');
      setColor(recommendationData['Hipertensi Grade 1'].color);
      setRecommendations(recommendationData['Hipertensi Grade 1']);
    } else if (
      (systolicValue >= 140 && systolicValue < 180) ||
      (diastolicValue >= 90 && diastolicValue < 120)
    ) {
      setStatus('Hipertensi Grade 2');
      setColor(recommendationData['Hipertensi Grade 2'].color);
      setRecommendations(recommendationData['Hipertensi Grade 2']);
    } else if (systolicValue >= 180 || diastolicValue >= 120) {
      setStatus('Hipertensi Akut');
      setColor(recommendationData['Hipertensi Akut'].color);
      setRecommendations(recommendationData['Hipertensi Akut']);
    }
  }, [systolic, diastolic]);

  const saveBloodPressure = () => {
    setBloodPressure({
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
    });
    alert('Blood pressure updated!');
    router.push('/Home');
  };

  return (
    <ScrollView className="flex-1 bg-primary p-6">
      <View className="justify-center items-center">
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
                  : 'border-red-600'
            }`}
          >
            <Text className="text-2xl font-bold" style={{ color }}>
              {bloodPressure.systolic}/{bloodPressure.diastolic}
            </Text>
          </View>
          <Text className={`text-lg font-bold mt-4`} style={{ color }}>
            {status}
          </Text>
        </View>

        {/* Input Section */}
        <View className="w-full mb-6">
          <Text className="text-base font-bold text-gray-700 mb-2">
            Sistolik
          </Text>
          <TextInput
            placeholder="120"
            keyboardType="numeric"
            value={systolic}
            onChangeText={setSystolic}
            className="border border-gray-300 rounded-lg p-2 text-center mb-4"
          />
          <Text className="text-base font-bold text-gray-700 mb-2">
            Diastolik
          </Text>
          <TextInput
            placeholder="80"
            keyboardType="numeric"
            value={diastolic}
            onChangeText={setDiastolic}
            className="border border-gray-300 rounded-lg p-2 text-center mb-4"
          />
          <TouchableOpacity
            onPress={saveBloodPressure}
            className="bg-blue-500 py-2 px-4 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Save</Text>
          </TouchableOpacity>
        </View>

        {/* Recommendations */}
        <View className="w-full bg-white p-4 rounded-lg shadow-md">
          <Text className="text-lg font-bold text-gray-700 mb-4">
            Rekomendasi Tindakan
          </Text>
          {recommendations.tips && (
            <View className="mb-4">
              {recommendations.tips.map((tip, index) => (
                <Text key={index} className="text-gray-600 mb-2">
                  - {tip}
                </Text>
              ))}
            </View>
          )}

          <Text className="text-lg font-bold text-gray-700 mb-4">
            Rekomendasi Makanan
          </Text>
          {recommendations.foods &&
            recommendations.foods.map((food, index) => (
              <View key={index} className="mb-4">
                <Text className="text-gray-600 font-bold">{food.type}:</Text>
                {food.items.map((item, idx) => (
                  <Text key={idx} className="text-gray-600">
                    - {item}
                  </Text>
                ))}
              </View>
            ))}

          <Text className="text-lg font-bold text-gray-700 mb-4">
            Komplikasi yang Dapat Dihindari
          </Text>
          {recommendations.complications &&
            recommendations.complications.map((complication, index) => (
              <Text key={index} className="text-gray-600 mb-2">
                - {complication}
              </Text>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default BloodPressure;
