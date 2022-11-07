import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TalpatSendingWithSanai3y from "../screens/TalpatSendingWithSanai3y";
import ProfileClient from "../screens/ProfileClient";
import EditeJobsWithClient from "../screens/EditeJobsWithClient";

const ProfileClientStack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="profileClient"
        component={ProfileClient}
        options={{
          headerLeft: false,
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
