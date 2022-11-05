import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChooseScreen from '../screens/Register/ChooseScreen'
import RegisterSnai3y from '../screens/Register/Sani3yRegister'
import RegisterClient from '../screens/Register/ClientRegister'
const RegisterationStack = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (

    <Navigator>
      <Screen
        name='registerChoose'
        component={ChooseScreen}
        options={
          {
            tabBarShowLabel: false,
            headerTitle: "التسجيل",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25
            },
            headerStyle: {
              backgroundColor: "#fbb150",
              elevation: 15,
              shadowColor: "#000"
            },
          }
        }
      />
      <Screen
        name='registerSnai3y'
        component={RegisterSnai3y}
        options={
          {
            tabBarShowLabel: false,
            headerTitle: "التسجيل كحرفي",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25
            },
            headerStyle: {
              backgroundColor: "#fbb150",
              elevation: 15,
              shadowColor: "#000"
            },
          }
        }
      />
      <Screen
        name='registerClient'
        component={RegisterClient}
        options={
          {
            tabBarShowLabel: false,
            headerTitle: "التسجيل كعميل",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25
            },
            headerStyle: {
              backgroundColor: "#fbb150",
              elevation: 15,
              shadowColor: "#000"
            },
          }
        }
      />

    </Navigator>
  )
}

export default RegisterationStack
