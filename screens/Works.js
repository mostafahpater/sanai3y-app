import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { pathUrl } from '../Config/env';
import axios from "axios";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import NotFind from "../components/NotFind";
import AsyncStorage from "@react-native-async-storage/async-storage";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function Works() {
  const navigation = useNavigation();
  const [data, setData] = useState([])
  const [token, setToken] = useState('')
  // console.log(data);
  // console.log(token);
  useEffect(() => {


  }, [])
  useEffect(() => {
    AsyncStorage.getItem('token').then((res) => {
      axios.get(`${pathUrl}/sanai3y/workstores`, { headers: { authorization: res } }).then((res) => {
        // console.log(res.data);
        setData(res.data.Data)
      }).catch((erorr) => {
        console.log("erorr");
        console.log(erorr);

      })
    })

  }, [token])

  // console.log(data);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    AsyncStorage.getItem('token').then((res) => {
      axios.get(`${pathUrl}/sanai3y/workstores`, { headers: { authorization: res } }).then((res) => {
        // console.log(res.data);
        setData(res.data.Data)
      }).catch((erorr) => {
        console.log("erorr");
        console.log(erorr);

      })
    })
  }, []);

  return (

    <View>

      <View style={styles.cont}>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AddWorks')}>
            <Text style={styles.buttonTextStyle}
            >اضافة عمل</Text>
          </TouchableOpacity>

        </View>
        {data.length > 0 && <FlatList
          contentContainerStyle={{ paddingBottom: 200 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          data={data}
          // keyExtractor={({ item }) => item}
          renderItem={({ item }, index) => (

            <View key={index} style={styles.card}>

              <Image
                source={{
                  uri: `${pathUrl}${item.img?.slice(21)}`,
                }}
                style={{ height: 200, borderRadius: 6 }}
              />

              <Text style={styles.job}>{item.title}</Text>
              <Text style={styles.description}>{item.description} </Text>
              {/* <TouchableOpacity style={styles.buttonDelete}>
                <Text style={styles.buttonTextStyle}> حذف</Text>
              </TouchableOpacity> */}
            </View>

          )}
        />}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >

          {data.length == 0 && <NotFind data={"لايوجد منشورات"} />}
        </ScrollView>


      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  cont: {
    // flex:1,
    color: "black",
    flexDirection: "column",
    marginLeft: 28,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderColor: "#99999982",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
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
    elevation: 5,
    //  flex:2,
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
});
