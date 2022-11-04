import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

// Import Screens
import Login from "../screens/Login";
import { FontAwesome } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import AllUser from "../screens/AllUser";
import HomeStack from "./HomeStack";
import ProfileClient from "../screens/ProfileClient";
import ProfileSnai3y from "../screens/ProfileSnai3y";
export default function MainTabs() {
  return (
    <Navigator>
      {/* Start Home Sceen  */}
      <Screen
        name="HomeScreen"
        component={HomeStack}
        options={{

          headerShown: false,
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
      {/* Start Profile Client  */}
      <Screen
        name="ProfileClient"
        component={ProfileClient}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
              عميل
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
      {/* End Profile Client  */}
      {/* Start Profile Client  */}
      <Screen
        name="ProfileSnai3y"
        component={ProfileSnai3y}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#000" : "#555" }}>
              صنايعي
            </Text>
          )
        }}

      />
      {/* End Profile Screen  */}
      {/* End Profile Client  */}
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
