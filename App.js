import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Login from './screens/Login';
import Works from './screens/Works';
import { NavigationContainer  } from "@react-navigation/native"
import MainTabs from './navigation';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterationStack from './navigation/RegisterationStack';
import WorksForm from './screens/WorksForm';
import Messages from './screens/Messages';

export default function App() {
  const Stack = createStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name='Home' component={MainTabs} 
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name='register' component={RegisterationStack} 
          options={{
            headerShown:true,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name='login' component={Login} 
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name='messages' component={Messages}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
