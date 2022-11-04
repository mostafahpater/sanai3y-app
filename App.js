import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Login from './screens/Login';
import Slider from './screens/Slider';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      />
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
