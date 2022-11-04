import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();

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
      <View style={[styles.box, styles.shadowProp]}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <View>
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
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png",
            }}
          />
        </View>
        <AntDesign name="closecircle" style={styles.test} />

        <Text style={{ padding: 10 }}>
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
        >
          <Button
          
            title="ارسال طلب"
            color="#ffb200"
            style={{ borderRadius: 50 }}
            onPress={() => navigation.navigate("SendTalp", {test:{id:1}})}
          />
          <Text
            style={{
              backgroundColor: "#EEE",
              width: 80,
              height: 25,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            كهربائي
          </Text>
        </View>
      </View>
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
    shadowColor: "#EEE",
    borderRadius: 10,
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
    left: 20,
  },
});

// Test Code

//   borderWidth:2,
//   borderStyle:'solid',
//   borderColor:'#000'
