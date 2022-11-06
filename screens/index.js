import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Login from '../screens/Login';
import Messages from './Messages';
import RegisterationStack from '../navigation/RegisterationStack';
import MainTabs from '../navigation/HomeScreen'
import { getDataClient } from '../Redux/Slices/ClientReducer';
import { getDataSnai3y } from '../Redux/Slices/Snai3yReducer';
import { useState } from 'react';
import { useEffect } from 'react';
import IntuoialScreen from './IntouialScrean';

export default function Index() {

  const Stack = createStackNavigator()
  const dispatch = useDispatch()
  useEffect(() => {
    // AsyncStorage.clear()
  
    AsyncStorage.getItem('snai3yRole').then(res => 
      {
      if(res == "client")
      {
        AsyncStorage.getItem('id').then(result => dispatch(getDataClient(result)))
      }
      else 
      {
        AsyncStorage.getItem('id').then(result => dispatch(getDataSnai3y(result)))
      }
      // 
    }
    )


    // AsyncStorage.getItem('id').then(res => dispatch(getDataSnai3y(res)))
    
  }, [])
  // console.log(route)

  const recieverName = "Ahmed"

  return (
      <>

        <NavigationContainer>
            <Stack.Navigator initialRouteName={"startApp"}>
              <Stack.Screen name='startApp' component={IntuoialScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen name='login' component={Login}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen name='Home' component={MainTabs}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen name='register' component={RegisterationStack}
                options={{
                  headerShown: false,
                  headerBackVisible: false,
                }}
              />

            <Stack.Screen name='messages' component={Messages}
              // options={{
              //   // headerShown: false,
              //   // headerBackVisible: false,
              // }}
              options={{
                title: recieverName,
                headerStyle: {
                  backgroundColor: "#fbb150",
                  elevation: 15,
                  shadowColor: "#000"
                },
                headerTitleAlign: 'center',
                headerTintColor: '#000'
      
      
                }}
            />
            </Stack.Navigator>
          </NavigationContainer>
          
      </>
   )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
