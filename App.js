import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Login from './screens/Login';
import { NavigationContainer } from "@react-navigation/native"
import MainTabs from './navigation';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterationStack from './navigation/RegisterationStack';
import Messages from './screens/Messages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Store } from './Redux/Store';
export default function App() {

  const Stack = createStackNavigator()
  let [route, setRoute] = React.useState('')
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

  }, [])
  // console.log(route)
  return (
    <Fragment>

      <Provider store={Store}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName={route}>
            <Stack.Screen name='Home' component={MainTabs}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name='login' component={Login}
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

            <Stack.Screen name='messages' component={Messages} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Fragment>

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
