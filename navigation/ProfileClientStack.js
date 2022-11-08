import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TalpatSendingWithSanai3y from "../screens/TalpatSendingWithSanai3y";
import ProfileClient from "../screens/ProfileClient";
import EditeJobsWithClient from "../screens/EditeJobsWithClient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { DevSettings, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileClientStack = () => {
  const { Navigator, Screen } = createStackNavigator();

function test() {

  AsyncStorage.clear();
  DevSettings.reload()  

}


  return (
    <Navigator>
      <Screen
        name="profileClient"
        component={ProfileClient}
        options={{
          headerLeft: () => (
          <TouchableOpacity>
            <AntDesign name="login" style={{paddingRight:20, fontSize:20}} 
            onPress={() => test()}
            
            />
          </TouchableOpacity>
          ),
          headerTitle: "الصفحة الشخصية",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
          },
          headerStyle: {
            backgroundColor: "#fbb150",
            elevation: 15,
            shadowColor: "#000",
          },
        }}
      />
      <Screen
        name="talpatSending"
        component={TalpatSendingWithSanai3y}
        options={{
          headerTitle: "الطلبات المقدمة",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
          },
          headerStyle: {
            backgroundColor: "#fbb150",
            elevation: 15,
            shadowColor: "#000",
          },
        }}
      />
      <Screen
        name="editeJobs"
        component={EditeJobsWithClient}
        options={{
          headerTitle:'تعديل المنشور',
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
          },
          headerStyle: {
            backgroundColor: "#fbb150",
            elevation: 15,
            shadowColor: "#000",
          },
        }}
      />
    </Navigator>
  );
};

export default ProfileClientStack;
