import { View, Text , StyleSheet,Image} from 'react-native'
import React from 'react'

export default function ProfileSnai3y() {
  return (
    <View style={styles.parent}>
      <View style={styles.image}>
        <Image source={require('../assets/CoverProfile.jpg')} 
        style={{width:"100%",resizeMode:"contain",backfaceVisibility:"visible", backgroundColor:"#ffff0"}} 
        />
        <View style={styles.imgProfile}>
            <Image source={require('../assets/ProfileImage.jpg')}
              style={{width:140,height:140 , borderRadius:5}}
            />
        </View>
        <View style={styles.userName}>
            <Text style={{textAlign:"center",fontSize:25}}>اسم الصنايعي</Text>

        </View>
      </View>

      <View style={styles.parentList}>
        <View>
          <Text>رقم الصنايعي</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  image:{
    position:"relative",
    justifyContent:"center",
    alignItems:"center",
    width:'100%',
    height:180,
    
  },
  imgProfile:{
    position:"absolute",
    bottom:-80,
  },
  userName:{
    justifyContent:"center",
    alignItems:"center",
    bottom:-115,
    position:"absolute"
  },
  parentList:{
    flex:1
  }
})
