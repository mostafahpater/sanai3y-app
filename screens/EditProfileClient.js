import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { RadioButton } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import { values } from 'lodash'
import axios from 'axios'
import { pathUrl } from '../Config/env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { EditUSer, schemaUser } from './Register/RegisterSchema'
import ToastManager, { Toast } from 'toastify-react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const EditProfileClient = () => {
  let data = [
    { value: 'أسوان' },
    { value: 'أسوان الجديدة' },
    { value: 'دراو' },
    { value: 'كوم امبو' },
    { value: 'نصر النوبة' },
    { value: 'كلابشة' },
    { value: 'أدفو' },];
  const showToasts = () => {
    Toast.success('تم التعديل بنجاح')
  }
  // showToasts()
  let dataClient = useSelector(state => state.ClientReducer.clintdata)
  const navigation = useNavigation()
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#fff" }}
        contentContainerStyle={{
          justifyContent: 'center',
          // flex: 1,
          alignItems: "center",
          marginTop: 150,

        }}
      >

        <Formik
          initialValues={{
            firstName: dataClient.firstName,
            lastName: dataClient.lastName,
            email: dataClient.email,
            phoneNumber: dataClient.phoneNumber,
            address: dataClient.address,
          }}
          validationSchema={EditUSer}
          onSubmit={(value) => {
            let data = {
              firstName: value.firstName,
              lastName : value.lastName,
              email: value.email,
              phoneNumber: value.phoneNumber,
              address: value.address,
            }
            console.log(value)
            AsyncStorage.getItem('token').then((token) => {
              axios.put(`${pathUrl}/client/updateprofile`, data, { headers: { "Authorization": token, } })
                .then((res) => {
                  console.log(res)
                  if (res.status == 200) {
                    showToasts()
                    setTimeout(() => {
                      
                      navigation.navigate("profileClient")
                    }, 3000);
                  }
                })

            })
          }}
        >
          {({ handleSubmit, handleBlur, handleChange, touched, errors, values }) => (
            <KeyboardAvoidingView enabled
              style={{ alignItems: "center" }}
            >
                  <ToastManager />
              <View style={styles.SectionStyle}>
                <View style={{ flex: 1, height: 50 }}>
                    <TextInput
                      style={[styles.inputStyle, { paddingHorizontal: 20, marginEnd: 5 }]}
                      underlineColorAndroid="#f000"
                      placeholder="اسمك الاول"
                      placeholderTextColor="#8b9cb5"
                      autoCapitalize="sentences"
                      returnKeyType="next"
                      blurOnSubmit={false}
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}

                    />
                    <Text style={{ fontSize: 12, color: "red", textAlign: "center" }}>{touched.firstName && errors.firstName}</Text>
                </View>

                <View style={{ flex: 1, height: 50 }}>

                  <TextInput
                    style={[styles.inputStyle, { marginStart: 5, flexDirection: "column", height: 40 }]}
                    placeholder="اسمك الأخير"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                  />
                  <Text style={styles.errorTextStyle}>{touched.lastName && errors.lastName}</Text>
                </View>
              </View>
              <View style={[styles.SectionStyle, { marginTop: 15 }]}>
                <View style={{ flex: 1, height: 50 }}>

                  <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid="#f000"
                    placeholder="البريد الألكتروني"
                    placeholderTextColor="#8b9cb5"
                    keyboardType="email-address"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Text style={styles.errorTextStyle}>{touched.email && errors.email}</Text>
                </View>
              </View>
              <View style={[styles.SectionStyle, { marginTop: 15 }]}>
                <View style={{ flex: 1, height: 50 }}>
                  <TextInput
                    style={[styles.inputStyle]}
                    underlineColorAndroid="#f000"
                    placeholder="رقم الهاتف"
                    placeholderTextColor="#8b9cb5"
                    // autoCapitalize="sentences"
                    returnKeyType="next"
                    // blurOnSubmit={false}
                    keyboardType="numeric"
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  <Text style={styles.errorTextStyle}>{touched.phoneNumber && errors.phoneNumber}</Text>
                </View>
              </View>
             

              {/* Input Age */}


              <View style={[
                {
                  flex: 1, marginTop: 20, alignItems: "center", height: 40, flexDirection: "row", justifyContent: "space-between",
                  marginLeft: 35,
                  marginRight: 35,
                }]}>

              

                <View style={{ width: "50%" }}>

                  <SelectDropdown data={data}
                    defaultButtonText="أختر المركز"
                    buttonStyle={styles.selectStyle}
                    buttonTextAfterSelection={(selecteditem, index) => {
                      return selecteditem.value
                    }}
                    rowTextForSelection={(item) => {
                      return item.value
                    }}
                    // onSelect={}
                    onSelect={(item) => values.address = item.value}
                  // onBlur={handleBlur('address')}
                  />
                  <Text style={styles.errorTextStyle}>{touched.address && errors.address}</Text>
                </View>
              </View>



              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmit}
              // disabled={!isValid}
              >
                <Text style={styles.buttonTextStyle}>تعديل</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default EditProfileClient

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonStyle: {
    backgroundColor: '#ffb200',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width: 90,
    justifyContent: "center",
    elevation: 5
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // paddingVertical: 15,
    borderWidth: 1,
    // height:40,
    borderRadius: 5,
    borderColor: '#dadae8',
    backgroundColor: "#fff",
    elevation: 2,
    // marginBottom:20
  },
  selectStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
    backgroundColor: "#fff",
    elevation: 2,
    height: 40,
    width: "100%"
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});