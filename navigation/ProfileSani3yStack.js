import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileSnai3y from '../screens/ProfileSnai3y'
import WorksForm from '../screens/WorksForm'
import Works from '../screens/Works'
import { FontAwesome } from '@expo/vector-icons'

const ProfileSani3yStack = () => {
    const { Navigator , Screen} = createStackNavigator()
  return (
    <Navigator>
        <Screen 
            name='ProfileSnai3y'
            component={ProfileSnai3y}
            options={{
                headerTitle:"الصفحة الشخصية",
                headerTitleAlign:"center",
                headerRight:()=>{
                    // <FontAwesome name='user' size={25} color="red" style={{color:"#000" , fontSize:24}}/>
                        <Text style={{color:"#000",fontSize:24}}>hello</Text>
                }
            }}
        />
        <Screen 
            name='ShowWorks'
            component={Works}
            options={{
                headerShown:true,
                headerTitle:"معرض الاعمال",
                headerStyle: {
                    backgroundColor: "#fbb150",
                    elevation: 15,
                    shadowColor: "#000"
                  },
            }}
        />
        <Screen 
            name='AddWorks'
            component={WorksForm}
            options={{
                headerShown:true,
                headerTitle:"اضافة عمل جديد",
                headerStyle: {
                    backgroundColor: "#fbb150",
                    elevation: 15,
                    shadowColor: "#000"
                  },
            }}
        />
    </Navigator>
  )
}

export default ProfileSani3yStack