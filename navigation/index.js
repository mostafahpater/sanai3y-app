import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

// Import Screens
import Login from "../screens/Login";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import AllUser from "../screens/AllUser";
import HomeStack from "./HomeStack";
import ProfileClient from "../screens/ProfileClient";
import ProfileSnai3y from "../screens/ProfileSnai3y";
import AddJop from "../screens/AddJop";
export default function MainTabs() {
  return (
    <Navigator>
      {/* Start Home Sceen  */}
      <Screen
        name="HomeScreen"
        component={HomeStack}
        options={{

          headerShown: false,
          tabBarShowLabel:false,
          headerStyle: {
            backgroundColor: "#ffb200",
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              color={focused ? "#ffb200" : ""}
              size={25}
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
          tabBarShowLabel:false,

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="users"
              color={focused ? "#ffb200" : ""}
              size={25}
            />
          ),
        }}
      />
      {/* End User Screen  */}

      {/* Start Add Jop Screen  */}
      <Screen
        name="اضف مشكلتك"
        component={AddJop}
        options={{
          tabBarShowLabel:false,
          headerStyle: {
            backgroundColor: "#ffb20069",
          },
          headerTitleAlign:'center',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle"
              color={focused ? "#ffb200" : ""}
              size={25}
            />
          ),
        }}
      />
      {/* End Add Jop Screen  */}

      {/* Start Profile Client  */}
      <Screen
        name="ProfileClient"
        component={ProfileClient}
        options={{
          tabBarShowLabel:false,

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "#ffb200" : ""}
              size={25}
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
          tabBarShowLabel:false,

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "#ffb200" : ""}
              size={25}
            />
          ),
        }}
        

      />
      {/* End Profile Screen  */}
      {/* End Profile Client  */}
      {/* Start Chat Screen  */}
      <Screen
        name="chat"
        component={Chat}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "#ffb200" : ""}
              size={25}
            />
          ),
        }}
      />
      {/* End Chat Screen  */}

    </Navigator>
  );
}
