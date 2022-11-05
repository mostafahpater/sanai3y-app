import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-paper";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import { launchImageLibrary,  } from "react-native-image-picker";

const AddJop = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Data for Address
  let dataAddress = [
    { value: "أسوان" },
    { value: "أسوان الجديدة" },
    { value: "دراو" },
    { value: "كوم امبو" },
    { value: "نصر النوبة" },
    { value: "كلابشة" },
    { value: "أدفو" },
  ];

  let dataSkills = [
    { value: "نجار" },
    { value: "سباك" },
    { value: "مبيض محارة" },
    { value: "كهربائي" },
    { value: "فني تكييف" },
    { value: "دهانات" },
    { value: "بناء" },
    { value: "الوميتال" },
    { value: "فني ارضيات" },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }}>
      {/* One */}
      <View style={[styles.SectionStyle, { marginTop: 100 }]}>
        <View style={{ flex: 1, height: 50 }}>
          <TextInput
            style={[styles.inputStyle]}
            underlineColorAndroid="#f000"
            placeholder=" عنوان الوظيفة - مثال ( مشكلة بالتكيف )"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            blurOnSubmit={false}
            keyboardType="text"
            // value={values.nationelId}
            // onChangeText={handleChange('nationelId')}
            // onBlur={handleBlur('nationelId')}
          />
          {/* <Text style={styles.errorTextStyle}>{touched.nationelId && errors.nationelId}</Text> */}
        </View>
      </View>

      {/* Input Address Jobs And Type Jobs */}
      <View style={[styles.SectionStyle, { marginTop: 30 }]}>
        <View style={{ flex: 1, height: 50, width: "100%" }}>
          <SelectDropdown
            data={dataAddress}
            defaultButtonText="أختر المركز"
            buttonStyle={styles.selectInputStyle}
            buttonTextAfterSelection={(selecteditem, index) => {
              return selecteditem.value;
            }}
            rowTextForSelection={(item) => {
              return item.value;
            }}
            renderDropdownIcon={() => {
              return <AntDesign name="caretdown" />;
            }}
            // onSelect={}
            onSelect={(item) => (values.address = item.value)}
            // onBlur={handleBlur('address')}
          />
          {/* <Text style={styles.errorTextStyle}>{errors.address}</Text> */}
        </View>
      </View>

      <View style={[styles.SectionStyle, { marginTop: 30 }]}>
        <View style={{ flex: 1, height: 50 }}>
          <SelectDropdown
            data={dataSkills}
            defaultButtonText="أختر الحرفة"
            buttonStyle={styles.selectInputStyle}
            buttonTextAfterSelection={(selecteditem, index) => {
              return selecteditem.value;
            }}
            rowTextForSelection={(item) => {
              return item.value;
            }}
            renderDropdownIcon={() => {
              return <AntDesign name="caretdown" />;
            }}
            // onSelect={}
            onSelect={(item) => (values.skills = item.value)}
            // onBlur={handleBlur('address')}
          />
          {/* <Text style={styles.errorTextStyle}>{errors.skills}</Text> */}
        </View>
      </View>

      {/* Three */}
      <View style={{ alignItems: "center" }}>
        <TextInput
          multiline={true}
          numberOfLines={2}
          placeholderTextColor="#8b9cb5"
          placeholder={
            "اشرح المشكله اللتي تواجهك - مثال ( عدم خروج هواء بارد )"
          }
          style={{
            padding: 10,
            height: 100,
            width: "85%",
            textAlignVertical: "top",
            backgroundColor: "#FFF",
            elevation: 2,
            borderRadius: 2,
            marginTop: 30,
            borderWidth: 1,
            borderColor: "#eee",
          }}
        />
      </View>

      <View style={[styles.SectionStyle, { marginTop: 15, marginBottom: 20 }]}>
        <View style={{ flex: 1, height: 50 }}>
          <TextInput
            style={[styles.inputStyle]}
            underlineColorAndroid="#f000"
            placeholder=" اكتب عنوانك بالتفصيل - مثال ( بجوار مسجد التوحيد )"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            blurOnSubmit={false}
            keyboardType="text"
            // value={values.nationelId}
            // onChangeText={handleChange('nationelId')}
            // onBlur={handleBlur('nationelId')}
          />
          {/* <Text style={styles.errorTextStyle}>{touched.nationelId && errors.nationelId}</Text> */}
        </View>
      </View>

      {/* Test Images */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems:'center',
          borderBottomWidth:1,
          paddingBottom:10,
          borderBottomColor:'#EEE'
      

      
        }}
      >
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: "center",
            // alignContent:'space-between',
            width: "50%",
          }}
        >
          <TouchableOpacity
            style={{
           
              paddingVertical: 5,
              marginTop: 10,
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 40,
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: "center",
              borderWidth:1,
              borderColor:'#999'
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "#000",
                  fontSize: 15,
                  padding: 6,
                }}
                onPress={pickImage}
              >
                اضافة صورة
              </Text>
            </View>
            <View>
              <AntDesign
                name="download"
                style={{ padding: 10, fontSize: 14, fontWeight: "bold" }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: "50%" }}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 170, height: 100 }}
            />
          )}
        </View>
      </View>

      <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: "center",
           
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal:15,
              marginTop: 10,
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 40,
              flexDirection: "row",
              backgroundColor: "#ffb200",
              justifyContent:'center'
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "#000",
                  fontSize: 15,
                  padding: 6,
                }}
                onPress={pickImage}
              >
              مشاركة المشكلة
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default AddJop;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    // margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#ffb200",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width: 90,
    justifyContent: "center",
    elevation: 5,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 18,
  },

  selectInputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#dadae8",
    backgroundColor: "#fff",
    width: "100%",
    elevation: 2,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#dadae8",
    backgroundColor: "#fff",
    elevation: 2,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
