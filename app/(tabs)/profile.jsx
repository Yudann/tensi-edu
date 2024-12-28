import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Link href="/">Back home</Link>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
