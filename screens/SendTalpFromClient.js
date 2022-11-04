import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
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
    <View style={styles.container}>

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

      <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder={"ازاي تقدر تحل المشكلة"}
        style={{
          padding: 20,
          height: 150,
          width: "90%",
          textAlignVertical: "top",
          backgroundColor: "#EEE",
          elevation: 1,
          borderRadius: 10,
        }}
      />
      <TouchableOpacity
        style={{
          width: "90%",
          marginTop: 10,
          backgroundColor: "#ffb200",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#ffb200",
            color: "#000",
            width: "100%",
            height: 40,
            lineHeight: 40,
            fontSize: 18,
            borderRadius: 10,
          }}
        >
          ارسال الطلب
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
