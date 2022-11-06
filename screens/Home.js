import { View, Text, StyleSheet, TextInput, Image, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import axios from 'axios';
import {pathUrl} from '../Config/env' 



export default function Home() {
  const navigation = useNavigation();

  const [allJob, setAllJob] = useState()


  useEffect(() => {

    axios.get(`${pathUrl}/jobs/all`).then((response) => {

      setAllJob(response.data.data)
      
      console.log(allJob)

      setAllJob(response.data.data)

    }).catch((err)=>{
      console.log(err)
    })

  }, [setAllJob])

  return (

    <View style={styles.container}>
      {/* Start Search */}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          // onChangeText={}
          value={Text}
          placeholder="البحث عن المشكلة"
          keyboardType="text"
        />
        <View style={{ justifyContent: "center" }}>
          <AntDesign
            name="search1"
            style={{ fontSize: 30, color: "#ffb200" }}
          />
        </View>
      </View>

      {/* Start Box Posts */}

      <FlatList 
          data={allJob}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
              
            <View style={[styles.box, styles.shadowProp]}>
              
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <Image
                style={styles.tinyLogo}
                source={{
                  // uri: `${pathUrl}${item.clientData.img.slice(21)}`
                }}
              />
              <View style={{marginLeft:10}}>
                <Text
                  style={{
                    marginRight: 10,
                    paddingRight: 10,
                    borderRightWidth: 1,
                    borderRightColor: "#ffb200",
                    fontWeight: "bold",
                  }}
                >
                 {/* {item.clientData.firstName + " " + item.clientData.lastName}  */}
                </Text>
                <Text style={{ paddingRight: 10, color: "#999", fontSize: 10 }}>
                 {item.city}
                </Text>
              </View>
            </View>
            <AntDesign name="closecircle" style={styles.test} />
                  
            <Text style={{ paddingVertical:5,paddingHorizontal:10, fontSize:12 }}>
                  {item.title}
            </Text>      

            <Text style={{ padding: 10 }}>
                  {item.description}
            </Text>
    
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#EEE",
                  width: 80,
                  textAlign: "center",
                  borderRadius: 10,
                  fontSize:12
                }}
              >
               {item.category}
              </Text>
              <Button
                title='التفاصيل'
                color="#ffb200"
                style={{ borderRadius: 50 }}
                onPress={() => navigation.navigate("SendTalp", { one: item })}
              />
            </View>
          </View>


          )}

        
        />


      {/* End Box Posts */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    color: "#000",
  },
  box: {
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#000",

    position: "relative",
    marginTop: 10,
    padding: 15,
    elevation: 1,
    shadowColor: "#99999982",
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ffb200",
    padding: 10,
    textAlign: "center",
    width: "80%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  test: {
    fontSize: 20,
    position: "absolute",
    top: 20,
    right: 20,
  },
});

// Test Code

//   borderWidth:2,
//   borderStyle:'solid',
//   borderColor:'#000'
