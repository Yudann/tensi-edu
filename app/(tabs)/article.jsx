import { View, Text } from 'react-native';
import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const Article = () => {
  return (
    <View className="flex flex-1 p-4 justify-start items-center bg-primary gap-4">
      <View className="w-full h-[100px] bg-sky-200 flex-row items-center justify-between px-6 rounded-xl">
        <Text className="font-bold">Article 1</Text>
        <SlArrowRight color="black" size={20} />
      </View>
      <View className="w-full h-[100px] bg-sky-200 flex-row items-center justify-between px-6 rounded-xl">
        <Text className="font-bold">Article 2</Text>
        <SlArrowRight color="black" size={20} />
      </View>
      <View className="w-full h-[100px] bg-sky-200 flex-row items-center justify-between px-6 rounded-xl">
        <Text className="font-bold">Article 3</Text>
        <SlArrowRight color="black" size={20} />
      </View>
    </View>
  );
};

export default Article;
