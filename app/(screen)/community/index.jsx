import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { FaComments, FaQuestion, FaUsers } from 'react-icons/fa';

const Community = () => {
  // Fungsi untuk membuka tautan WhatsApp
  const openWhatsApp = (message) => {
    const phoneNumber = '628123456789'; // Ganti dengan nomor WhatsApp tujuan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open WhatsApp:', err),
    );
  };

  return (
    <View className="flex flex-1 p-4 justify-between items-center bg-primary gap-4">
      {/* Card dengan ikon */}
      <View className="flex items-center justify-center rounded-3xl w-[80%] bg-main-green shadow-md h-fit py-8">
        <FaUsers
          className="rounded-full border-4 border-secondary"
          color="black"
          size={150}
        />
        <Text className="text-xl text-black mt-4 font-semibold">
          Connect with us
        </Text>
        {/* Tombol Join dan Ask Question */}
        <View className="w-full flex flex-row justify-center gap-4 mt-8">
          {/* Tombol Join */}
          <TouchableOpacity
            className="bg-secondary py-3 px-6 rounded-lg w-[130px] flex items-center"
            onPress={() => openWhatsApp('I want to join the community!')}
          >
            <Text className="text-white text-lg font-bold">Join</Text>
          </TouchableOpacity>

          {/* Tombol Ask Question */}
          <TouchableOpacity
            className="bg-secondary py-3 px-6 rounded-lg w-[130px] flex items-center"
            onPress={() =>
              openWhatsApp('I have a question about the community.')
            }
          >
            <Text className="text-white text-lg font-bold ">Question</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section bawah */}
      <View className="p-4 w-full flex flex-row items-start justify-between gap-4 mt-8">
        {/* Card Group */}
        <TouchableOpacity
          className="flex-1 h-[150px] bg-main-green shadow-md rounded-xl items-center justify-center"
          onPress={() => openWhatsApp('Tell me about groups in the community.')}
        >
          <FaUsers className="fill-primary" size={50} />
          <Text className="text-black mt-2 font-semibold">Group</Text>
        </TouchableOpacity>

        {/* Card Post Question */}
        <TouchableOpacity
          className="flex-1 h-[150px] bg-main-green shadow-md rounded-xl items-center justify-center"
          onPress={() =>
            openWhatsApp('I want to post a question in the community.')
          }
        >
          <FaQuestion className="fill-primary" size={50} />
          <Text className="text-black mt-2 font-semibold">Post Question</Text>
        </TouchableOpacity>

        {/* Card Discussion */}
        <TouchableOpacity
          className="flex-1 h-[150px] bg-main-green shadow-md rounded-xl items-center justify-center"
          onPress={() =>
            openWhatsApp('I want to join a discussion in the community.')
          }
        >
          <FaComments className="fill-primary" size={50} />
          <Text className="text-black mt-2 font-semibold">Discussion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Community;
