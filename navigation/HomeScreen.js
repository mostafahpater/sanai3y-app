import { View, Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

// Import Screens
import Login from "../screens/Login";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import AllUser from "../screens/AllUser";
import HomeStack from "./HomeStack";
import ProfileClient from "../screens/ProfileClient";
import ProfileSnai3y from "../screens/ProfileSnai3y";
import AddJop from "../screens/AddJop";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataClient } from "../Redux/Slices/ClientReducer";
export default function MainTabs() {

  let [role , setRole] = useState('')
  const dispatch = useDispatch()
  AsyncStorage.getItem("snai3yRole").then(res =>{
    console.log(res);
    setRole(res)
  })
    console.log("index");
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
        {role == "client" && <Screen
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
        />}
        {/* End Add Jop Screen  */}

        {/* Start Profile Client  */}
        {role == "client" &&<Screen
          name="ProfileClient"
          component={ProfileClient}
          
          options={{
            tabBarShowLabel:false,
            headerTitle:"الصفحة الشخصية",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25
            },
            headerStyle:{
              backgroundColor:"#fbb150",
              elevation:15,
              shadowColor:"#000"
            },
            

            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                color={focused ? "#ffb200" : ""}
                size={25}
              />
            ),
          }}
        />}
        {/* End Profile Client  */}
        {/* Start Profile Client  */}
        {role == "sanai3y" && <Screen
          name="ProfileSnai3y"
          component={ProfileSnai3y}
          options={{
            tabBarShowLabel:false,
            headerTitle:"الصفحة الشخصية",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25
            },
            headerStyle:{
              backgroundColor:"#fbb150",
              elevation:15,
              shadowColor:"#000"
            },
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                color={focused ? "#ffb200" : ""}
                size={25}
              />
            ),
          }}
          

        />}
        {/* End Profile Screen  */}
        {/* End Profile Client  */}
        {/* Start Chat Screen  */}
        <Screen
          name="chat"
          component={Chat}
          // options={{
          //   tabBarShowLabel:false,
          //   tabBarIcon: ({ focused }) => (
          //     <Entypo
          //       name="chat"
          //       color={focused ? "#ffb200" : ""}
          //       size={25}
          //     />
          //   ),
          // }}
          options={{
            tabBarShowLabel:false,
            headerTitle:"المراسلات",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25
            },
            headerStyle:{
              backgroundColor:"#fbb150",
              elevation:15,
              shadowColor:"#000"
            },

            tabBarIcon: ({ focused }) => (
              <Entypo
                name="chat"
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
