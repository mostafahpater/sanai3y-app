import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChooseScreen from '../screens/Register/ChooseScreen'
import RegisterSnai3y from '../screens/Register/Sani3yRegister'
import RegisterClient from '../screens/Register/ClientRegister'
const {Navigator , Screen} = createStackNavigator()
const RegisterationStack = () => {
  return (
    
    <Navigator>
        <Screen 
            name='register'
            component={ChooseScreen}
        />
        <Screen 
            name='registerSnai3y'
            component={RegisterSnai3y}
        />
        <Screen 
            name='register'
            component={RegisterClient}
        />

    </Navigator>
  )
}

export default RegisterationStack

const styles = StyleSheet.create({})