import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { get } from "lodash";
import { AntDesign } from "@expo/vector-icons";

export default function SendTalpFromClient() {
  const { params } = useRoute();
  const id = get(params, "test");
  console.log(id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Start Box Posts */}
        <View style={[styles.box, styles.shadowProp]}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft:10}}>
          <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png",
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
                عبدالحاقظ
              </Text>
              <Text style={{ paddingRight: 10, color: "#999", fontSize: 10 }}>
                اسوان
              </Text>
            </View>

          </View>
          <Image
            style={styles.tinyLogotest}
            source={{
              uri: "https://media.lactualite.com/2019/12/361ba8f8-istock-1084346110-1200x675.jpg",
            }}
          />

          <Text
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }}
          >
            بالعربية تغطية بالصور والفيديو لأهم أخبار العالم والدول العربية
            والخليج والشرق الأوسط، مع موضوعات حصرية بينها سياسة واقتصاد وصحة
            ورياضة وسياحة ..
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          ></View>
        </View>
        {/* End Box Posts */}
        <View style={{ alignItems: "center" }}>
          <TextInput
            multiline={true}
            numberOfLines={2}
            placeholder={"ازاي تقدر تحل المشكلة"}
            style={{
              padding: 10,
              height: 100,
              width: "90%",
              textAlignVertical: "top",
              backgroundColor: "#eeeeee6e",
              // elevation: 1,
              borderRadius: 5,
              marginTop: 50,
              borderWidth:2,
              borderColor:'#eee'
            }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: "50%",
              marginTop: 10,
              backgroundColor: "#ffb200",
              borderRadius: 10,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#ffb200",
                color: "#000",
                width: "100%",
                fontSize: 18,
                padding:6,
                borderRadius: 10,
              }}
            >
              ارسال الطلب
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#FFF",
    paddingRight: 10,
    paddingLeft: 10,
    margin: 0,
    paddingTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tinyLogotest: {
    width: "100%",
    height: 300,
    marginTop: 10,
    borderRadius: 5,
  },
});
