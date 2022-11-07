import { View, Text, StyleSheet, TextInput, Image, Button, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';
import { pathUrl } from '../Config/env'
import { set } from "lodash";
import NotFind from "../components/NotFind";
import dateformat, { masks } from "dateformat";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Home() {
  const navigation = useNavigation();
  const [allJob, setAllJob] = useState([])
  const [val, setVal] = useState('')

  useEffect(() => {

    axios.get(`${pathUrl}/jobs/all`).then((response) => {
      const res = response.data.data.filter((item) => {
        return item.status != "in progress"
      })
      setAllJob([...res])
      // console.log(allJob)
    }).catch((err) => {
      console.log(err)
    })
      // AsyncStorage.clear()
  }, [])
  useEffect(()=>{
    console.log(allJob)
  },[allJob])
  // console.log(val)
  function search(v) {

    let arr = allJob.filter((e) => {
      console.log(e.description)
      return e.description.includes(v)
    }
    )
    setAllJob([...arr])
  }


  useEffect(() => { }, [allJob])

  function delet(id) {
    setAllJob((prev) => prev.filter((item) => item._id != id));
  }

  // Start JSX
  return (
    <View style={styles.container}>
      {/* Start Search */}
      <View style={{ flexDirection: "row",borderBottomWidth:2,borderBottomColor:'#EEE'}}>
      <View style={{ justifyContent: "center" }}>
          <AntDesign
            name="search1"
            style={{ fontSize: 30, color: "#ffb200" }}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(val) => search(val)}
          value={Text}
          placeholder="البحث عن المشكلة"
          // keyboardType="text"
        />
      </View>

      {/* Start Box Posts */}

      {allJob.length > 0 && (
        <FlatList
          data={allJob}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View style={[styles.box, styles.shadowProp]}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ClientShow", { data: item })
                }
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${pathUrl}${item.clientData?.img.slice(21)}`,
                    }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        paddingRight: 10,
                        borderRightWidth: 1,
                        borderRightColor: "#ffb200",
                        fontWeight: "bold",
                      }}
                    >
                      {item.clientData?.firstName +
                        " " +
                        item.clientData?.lastName}
                    </Text>

                    <Text
                      style={{ fontSize: 10, textAlign: "left", color: "#777" }}
                    >
                      {dateformat(item?.hiredDate, " h:MM  TT")}
                    </Text>

                    {/* <Text style={{ paddingRight: 10, color: "#999", fontSize: 10 }}>
                    {item.city}
                  </Text> */}
                  </View>
                </View>
              </TouchableOpacity>
              
              <AntDesign
               name="closecircle"
                style={styles.test} 
                onPress={() => delet(item._id)}
                  
                />

              <Text
                style={{
                  paddingTop: 5,
                  paddingHorizontal: 10,
                  fontSize: 12,
                  color: "#444",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  paddingRight: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  borderBottomColor: "#EEE",
                }}
              >
                {item.description}
              </Text>

              <Text
                style={{
                  paddingRight: 10,
                  paddingBottom: 5,
                  color: "#111",
                  fontSize: 12,
                }}
              >
                <Text style={{ fontWeight: "bold" }}> العنوان : </Text>
                {item.city}
              </Text>

              <Text
                style={{
                  paddingRight: 15,
                  paddingBottom: 10,
                  color: "#111",
                  fontSize: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: "#EEE",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  عدد الطلبات المقدمة :{" "}
                </Text>

                <Text style={{}}>{item?.proposals.length}</Text>
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#EEE",
                    width: 80,
                    textAlign: "center",
                    borderRadius: 10,
                    fontSize: 12,
                  }}
                >
                  {item.category}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      backgroundColor: "#ffb200",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      navigation.navigate("SendTalp", { one: item })
                    }
                  >
                    التفاصيل
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      {/* End Box Posts */}
      {allJob.length == 0 && <NotFind data={"لاتوجد منشورات الان"} />}
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

    position: "relative",
    marginTop: 20,
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
    // color:'red',
    padding: 10,
    textAlign: "right",
    width: "88%",
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

