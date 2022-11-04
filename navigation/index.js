import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

// Import Screens
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import { FontAwesome } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import AllUser from "../screens/AllUser";
import HomeStack from "./HomeStack";
export default function MainTabs() {
  return (
    <Navigator>
      {/* Start Home Sceen  */}
      <Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
        
          headerShown:false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
              الصفحة الرئيسية
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#ffb200",
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              color={focused ? "#ffb200" : ""}
              size={30}
            />
          ),
        }}
      />
      {/* End Home Screen  */}
      {/* Start User Screen  */}
      <Screen
        name="Users"
        component={AllUser}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
              الحرفين
            </Text>
          ),

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="users"
              color={focused ? "#ffb200" : ""}
              size={30}
            />
          ),
        }}
      />
      {/* End User Screen  */}
      {/* Start Profile Screen  */}
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
                الصفحة الشخصية
            </Text>
          ),

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "#ffb200" : ""}
              size={30}
            />
          ),
        }}
      />
      {/* End Profile Screen  */}
      {/* Start Chat Screen  */}
      <Screen
        name="chat"
        component={Chat}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
              الرسائل
            </Text>
          ),

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "#ffb200" : ""}
              size={30}
            />
          ),
        }}
      />
      {/* End Chat Screen  */}

    </Navigator>
  );
}
