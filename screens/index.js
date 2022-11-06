import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Store } from '../Redux/store';

import Login from '../screens/Login';
import Messages from './Messages';
import RegisterationStack from '../navigation/RegisterationStack';
import MainTabs from '../navigation/HomeScreen'
import { getDataClient } from '../Redux/Slices/ClientReducer';

export default function Index() {

  const Stack = createStackNavigator()
  let [route, setRoute] = React.useState('')
  const dispatch = useDispatch()
  React.useEffect(() => {
    // AsyncStorage.clear()
    AsyncStorage.getItem('token').then(res => {
      // console.log(res)
      if (res == null) {
        setRoute("login")
      }
      else {
        setRoute("Home")
      }
    })
    AsyncStorage.getItem('id').then(res => dispatch(getDataClient(res)))
    
  }, [])
  // console.log(route)

  const recieverName = "Ahmed"

  return (
    <Fragment>

        <NavigationContainer>
          <Stack.Navigator initialRouteName={route}>
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
    </Fragment>
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
