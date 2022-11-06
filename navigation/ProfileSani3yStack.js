import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileSnai3y from '../screens/ProfileSnai3y'
import works from '../screens/Works'
import WorksForm from '../screens/WorksForm'

const ProfileSani3yStack = () => {
    const { Navigator , Screen} = createStackNavigator()
  return (
    <Navigator>
        <Screen 
            name='ProfileSnai3y'
            component={ProfileSnai3y}
        />
        <Screen 
            name='ShowWorks'
            component={works}
        />
        <Screen 
            name='AddWorks'
            component={WorksForm}
        />
    </Navigator>
  )
}

export default ProfileSani3yStack