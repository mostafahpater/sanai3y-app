import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailsJobFromHome from '../screens/DetailsJobFromHome';
import SendTalpFromClient from '../screens/SendTalpFromClient';
import Home from '../screens/Home';
const {Navigator, Screen} = createStackNavigator();
export default function HomeStack() {
  return (

    <Navigator>
        <Screen
         name='HomePost'
          component={Home} 
          options={{
             title:'المنشورات',
             headerStyle:{backgroundColor:'#ffb20069'},
             headerTitleAlign:'center',
             headerTintColor:'#000'
             
             
             }} />
        <Screen name='Ditails' component={DetailsJobFromHome} options={{title:'التفاصيل'}} />
        <Screen name='SendTalp' component={SendTalpFromClient} options={{title:'ارسال طلب'}}   />
    </Navigator>
  )
}