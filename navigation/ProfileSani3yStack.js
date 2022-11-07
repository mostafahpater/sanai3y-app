import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileSnai3y from '../screens/ProfileSnai3y'
import WorksForm from '../screens/WorksForm'
import Works from '../screens/Works'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const ProfileSani3yStack = () => {
    const { Navigator , Screen} = createStackNavigator()
    function test() {

        AsyncStorage.clear();
        DevSettings.reload()  
      
      }
  return (
    <Navigator>
        <Screen 
            name='ProfileSnai3y'
            component={ProfileSnai3y}
            options={{
                headerTitle:"الصفحة الشخصية",
                headerTitleAlign:"center",
                headerLeft: () => (
                    <TouchableOpacity>
                      <AntDesign name="login" style={{paddingRight:20, fontSize:20}} 
                      onPress={() => test()}
                      
                      />
                    </TouchableOpacity>
                    ),
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