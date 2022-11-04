import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SendTalpFromClient from '../screens/SendTalpFromClient';
import Home from '../screens/Home';
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

      <Screen name='SendTalp' component={SendTalpFromClient} options={{ title: 'ارسال طلب' }} />
    </Navigator>
  )
}