import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { pathUrl } from "../Config/env";
import axios from "axios";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import Moment from "moment";
// import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
export default function AllSanai3y() {
  const [data, setData] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [search, setSearch] = useState("");
   const navigation = useNavigation()
  useEffect(() => {
    axios.get(`${pathUrl}/sanai3y/all`).then((res) => {
      setData([...res.data.Data]);
      setFilteredDataSource([...res.data.Data]);
    });
    // console.log("object");
  }, []);
  // console.log(data.length);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.firstName.toUpperCase()||item.lastName.toUpperCase()||item.address.toUpperCase()||item.skills.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  return (
    <View style={styles.cont}>
        <TextInput
          style={styles.search}
          placeholder="بحث"
          placeholderTextColor="#8b9cb5"
          keyboardType="default"
          value={search}
          onChangeText={(text) => searchFilterFunction(text)}
          returnKeyType="next"
        />
      <FlatList
        data={filteredDataSource}
        contentContainerStyle={{ paddingBottom: 60 }}
        renderItem={({ item }, index) => (
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Sanai3yShow", {data:item})}
          >
          <View key={index} style={styles.card}>
            <Image
              source={{
                uri:
                  "http://192.168.1.9" + item.img.split("http://localhost")[1],
              }}
              style={{ width: 170, height: 180, borderRadius: 5 }}
            />

            <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <Text
                style={styles.job}
              >{`${item.firstName} ${item.lastName}`}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="location-pin"
                  style={{ color: "#ffb200", margin: -6 }}
                  size={26}
                  color="black"
                  />
                <Text style={styles.description}> {item.address} </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name="clockcircle"
                  style={{ color: "#ffb200", fontSize: 16 }}
                  />
                <Text style={styles.description}>
                  {Moment(item.joinedDate).format("D MMM YYYY")}
                </Text>
              </View>
              <Text style={styles.description}>{item.gender} </Text>
              <Text
                style={[
                  styles.description,
                 styles.skills
                ]}
              >
                {item.skills}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
    color: "black",
    //   justifyContent:'center',
    // alignItems: "center",
    flexDirection: "column",
    marginRight: 20,
    marginLeft: 20,
  },
  search: {
    // flex: 1,
    color: "#000",  
    marginTop: 10,  
    marginBottom: 15,  
    padding:10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    // borderRadius: 5,
    borderColor: "#ffb200",
    elevation: 2,
  },
  card: {
    //   width: "50%",

    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "black",
    borderColor:"#99999982",
    borderWidth:1,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
    elevation: 6,
    marginTop: 15,
    marginBottom: 15,
    paddingRight: 15,
    padding:5,
  },
  description: {
    margin: 5,

    fontSize: 14,
    color: "#000",
  },
  skills:{
    // borderWidth: 1,
    borderRadius: 5,
    padding:2,
    paddingHorizontal:12,
    fontSize:14,
    color:"#fff",
    textAlign: "center",
    backgroundColor:"#ffb200"
  }
  ,
  job: {
    paddingTop:10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    // color: "#ffb200",
    // borderTopWidth:1,
  },
});
