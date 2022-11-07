import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SendTalpFromClient from '../screens/SendTalpFromClient';
import Home from '../screens/Home';
import ShowClient from '../screens/ShowClient';
import ShowSanai3y from '../screens/ShowSanai3y';
import WorksForm from '../screens/WorksForm';
const { Navigator, Screen } = createStackNavigator();
export default function HomeStack() {
  return (

    <Navigator>
      <Screen
        name='HomePost'
        component={Home}
        options={{
          
          title: 'المنشورات',
          headerStyle: {
            backgroundColor: "#fbb150",
            elevation: 15,
            shadowColor: "#000"
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000'

        }} />

      <Screen name='SendTalp' component={SendTalpFromClient}
        options={
          {
            headerTitle: "الطلب",
            // headerTitleAlign:"left",
            // headerBackTitleStyle:{
            //   textAlign:"right",
            //   justifyContent:"flex-end"
            // }
          }
        }
      />

      {/* Show Client */}
      <Screen name='ClientShow' component={ShowClient}
        options={
          {
            // headerShown:false
            headerTitle: "عميل",
            // headerTitleAlign:"left",
            // headerBackTitleStyle:{
            //   textAlign:"right",
            //   justifyContent:"flex-end"
            // }
          }
        }
      />
       <Screen name='Sanai3yShow' component={ShowSanai3y}
        options={
          {
            // headerShown:false
            headerTitle: "صنايعى",
            // headerTitleAlign:"left",
            // headerBackTitleStyle:{
            //   textAlign:"right",
            //   justifyContent:"flex-end"
            // }
          }
        }
        
      />
        <Screen name='AddWorks' component={WorksForm}
        options={
          {
            // headerShown:false
            headerTitle: "اضافة الى معرض الاعمال",
            // headerTitleAlign:"left",
            // headerBackTitleStyle:{
            //   textAlign:"right",
            //   justifyContent:"flex-end"
            // }
          }
        }
        />
    </Navigator>
  )
}