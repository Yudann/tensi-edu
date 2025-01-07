import { StatusBar } from 'expo-status-bar';
import { router, Tabs } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { icons } from '../../constants';
import LogoutModal from '../../components/LogoutModal'; // Import modal yang sudah dibuat

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 100,
        height: 'auto',
        gap: 2,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: color,
        }}
      />
      <Text style={{ color: color, fontSize: 12 }}>{name}</Text>
    </View>
  );
};

const TabLayout = () => {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    // Log out logic
    router.push('/');
    setLogoutModalVisible(false); // Close the modal after logout
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#9abddc',
          tabBarInactiveTintColor: '#0d0d0d',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            height: 100,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            paddingTop: 20,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="articles"
          options={{
            title: 'Articles',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Articles"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="videos"
          options={{
            title: 'Videos',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.play}
                color={color}
                name="Videos"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="logout"
          options={{
            title: 'Log Out',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.logout} // Ganti dengan icon logout yang sesuai
                color={color}
                name="Log Out"
                focused={focused}
              />
            ),
            tabBarButton: () => (
              <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
                <TabIcon
                  icon={icons.logout} // Ganti dengan icon logout yang sesuai
                  color="#0d0d0d"
                  name="Log Out"
                  focused={false}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isVisible={isLogoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        onLogout={handleLogout}
      />

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
