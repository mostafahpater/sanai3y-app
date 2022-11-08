import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { pathUrl } from '../Config/env';
import axios from "axios";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import NotFind from "../components/NotFind";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Works() {
  const navigation = useNavigation();
  const [data, setData] = useState([])
  const [token, setToken] = useState('')
  // console.log(data);
  // console.log(token);
  useEffect(()=>{
    AsyncStorage.getItem('token').then((res) => setToken(res))

  },[])
  useEffect(() => {
    // console.log("object");x`
   
    axios.get(`${pathUrl}/sanai3y/workstores`,{headers:{authorization:token}}).then((res) => {
      // console.log(res.data);
      console.log("true");
       setData(res.data.Data)
    }).catch((erorr) => {
      console.log("erorr");
      console.log(erorr);
   
  }, 100);
  }, [token])

  // console.log(data);


  return (

    <View>

      <View style={styles.cont}>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AddWorks')}>
            <Text style={styles.buttonTextStyle}
            >اضافة عمل</Text>
          </TouchableOpacity>

        </View>
        {data.length > 0 && <FlatList
         contentContainerStyle={{ paddingBottom: 120 }}
          data={data}
          // keyExtractor={({ item }) => item}
          renderItem={({ item }, index) => (

            <View key={index} style={styles.card}>

              <Image
                source={{
                  uri: `${pathUrl}${item.img?.slice(21)}`,
                }}
                style={{ height: 200,borderRadius:6 }}
              />

              <Text style={styles.job}>{item.title}</Text>
              <Text style={styles.description}>{item.description} </Text>
              {/* <TouchableOpacity style={styles.buttonDelete}>
                <Text style={styles.buttonTextStyle}> حذف</Text>
              </TouchableOpacity> */}
            </View>

          )}
        />}

        {data.length == 0 &&<NotFind data={"لا توجد اعمال"}/>}

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
    marginLeft: 20
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderColor:"#99999982",
    borderWidth:1,
    borderRadius: 10,
    marginHorizontal:5,
    justifyContent:"center",
    flexDirection: "column",
    elevation: 6,
    marginTop: 15,
    marginBottom: 15,
    
  },
  description: {
    padding: 15,
    fontSize: 16,
    color: "#000",
    // backgroundColor:"#D4D4D4"

  },
  job: {
    padding: 10,
    // borderBottomWidth:1,
    // borderColor:"#99999982",
    elevation:5,
  //  flex:2,
    fontSize: 18,
    color:"#000",
    fontWeight:"bold",
    fontWeight: "700",
    backgroundColor: "#FFC133",
    // borderBottomColor:"#ffb200",
    // borderBottomWidth:1,
    // width:,
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
    width: 100,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
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
    width: 100,
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
    fontWeight:"bold",
  },
});
