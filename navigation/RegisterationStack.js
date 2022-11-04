import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChooseScreen from '../screens/Register/ChooseScreen'
import RegisterSnai3y from '../screens/Register/Sani3yRegister'
import RegisterClient from '../screens/Register/ClientRegister'
const RegisterationStack = () => {
  const {Navigator , Screen} = createStackNavigator()
  return (
    
    <Navigator>
        <Screen 
            name='registerChoose'
            component={ChooseScreen}
            options={
              {
                headerShown:false
              }
            }
        />
        <Screen 
            name='registerSnai3y'
            component={RegisterSnai3y}
            options={
              {
                headerShown:false
              }
            }
        />
        <Screen 
            name='registerClient'
            component={RegisterClient}
            options={
              {
                headerShown:false
              }
            }
        />

    </Navigator>
  )
}

export default RegisterationStack
