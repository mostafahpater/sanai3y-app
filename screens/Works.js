import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { pathUrl } from '../Config/env';
import axios from "axios";
import { NavigationContainer,useNavigation  } from '@react-navigation/native';

export default function works() {
    const navigation = useNavigation();
    const [data , setData]= useState([])
    useEffect(  () => {
        
      
             axios.get(`${pathUrl}/jobs/all`).then((res)=>{
               return setData(res.data.data)
            }).catch((erorr)=>{
                console.log("erorr");
                console.log(erorr);
            })
        },[])
        
        // console.log(data);
           
    
  return (
       
    <View>
     
      <View style={styles.cont}>
      <View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}
          onPress={() => navigation.navigate("worksform")}
          >اضافة عمل</Text>
        </TouchableOpacity>

      </View>
      <FlatList
      data={data}
      keyExtractor={({item},index) => item}
      renderItem={({item},index) => (
        
        <View key={index} style={styles.card}>
            
        <Image
          source={{
              uri: "https://img.freepik.com/free-photo/smiling-construction-engineer-posing-with-arms-crossed-isolated-grey-background_1258-80415.jpg?w=740&t=st=1667583337~exp=1667583937~hmac=43e9ea21b5a5af7cddfd61356faf51be3f4305e6ed3138bc7003d1289da37dfe",
          }}
          style={{ width: "100%", height: 200 }}
          />
     
         <Text style={styles.job}>{item.title}</Text>
         <Text style={styles.description}>{item.description} </Text>
         <TouchableOpacity style={styles.buttonDelete}>
           <Text style={styles.buttonTextStyle}> حذف</Text>
         </TouchableOpacity>
       </View>
     
  )}
      />
       
   
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  cont: {
   
    color: "black",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    // marginRight:15,
    marginLeft:20
  },
  card: {
    width: "90%",
    backgroundColor: "gainsboro",
    borderRadius: 10,
    
    flexDirection: "column",
    elevation: 6,
    marginTop:15,
    marginBottom:15,
  },
  description: {
    padding: 10,
    fontSize:16,
    color:"#000"

  },
  job:{
    padding: 10,
    fontSize:18,
    fontWeight:"700",
    color:"#ffb200",
    // borderTopWidth:1,
  },
  buttonStyle: {
    backgroundColor: "#ffb200",
    // borderWidth: 0,
    color: "#FFFFFF",
    // borderColor: '#000',
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    width:100,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 50,
    marginBottom: 10,
    elevation: 5,
  },
  buttonDelete: {
    backgroundColor: "red",
    // borderWidth: 0,
    color: "#FFFFFF",
    // borderColor: '#000',
    alignItems: "center",
    borderRadius: 5,
    width:100,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 10,
    elevation: 5,
  },
  buttonTextStyle: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
  },
});
