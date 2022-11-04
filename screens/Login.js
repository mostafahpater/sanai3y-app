// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, {useState, createRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer,useNavigation  } from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup'
import { Formik } from 'formik'
import { StatusBar } from 'expo-status-bar';
// import Loader from './Components/Loader';
 
const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  const baseUrl = "http://localhost:7000/client/signin";
  const loginSchema = yup.object().shape({
        email: yup.string().email("البريد الإلكتروني غير صحيح").required("هذا الحقل مطلوب"),
        password: yup.string().required("هذا الحقل مطلوب"),
     })
   const onSubmit= async (values) => {
    setLoading(true);
    let body = {email: '', password: ''};
     axios.post("http://192.168.1.11:7000/client/signin",values).then((res)=>{
       // console.log(res);
       if (res.status == 200) {
        console.log("true");
          //  console.log(body);
          const stor = async () => {
           await AsyncStorage.setItem("token", res.headers.authorization);
          await  AsyncStorage.setItem("snai3yRole", res.data.data.rule);
          await  AsyncStorage.setItem("Name", res.data.data.firstName +" "+ res.data.data.lastName);
          await  AsyncStorage.setItem("image", res.data.data.image);
        }
        
       
        //  console.log(res.data);
       } else {
        console.log("erorr");
         console.log('Please check your email id or password');
       }
     }).catch((err)=>{
      console.log("erorr");
      console.log(err);
     })
      };

  return (
    <Formik
    initialValues={{email:'',password:''}}
    // onSubmit={login}
    validationSchema={loginSchema}
    onSubmit={onSubmit}
    >
      {({handleSubmit,handleChange,errors,touched,values,setFieldTouched  })=>(
 <View style={styles.mainBody}>
 {/* <Loader loading={loading} /> */}
 <ScrollView
   keyboardShouldPersistTaps="handled"
   contentContainerStyle={{
     flex: 1,
     justifyContent: 'center',
     alignContent: 'center',
   }}>
   <View>
       <View style={{alignItems: 'center'}}>
         <Image
           source={require('../assets/logo.png')}
           style={{
             width: '50%',
             height: 100,
             resizeMode: 'contain',
             margin: 30,
           }}
         />
       
       </View>
     <KeyboardAvoidingView enabled>
       <Text style={{
           color:"#000",
           fontSize:25,
           fontWeight:"700",
          
           textAlign: 'center'
         }}
         
         >تسجيل الدخول</Text>
       <View style={styles.SectionStyle}>
         <Icon name='user' style={styles.styleUser} />
        
         <TextInput
           style={styles.inputStyle}
           onChangeText={handleChange('email')}
           value={values.email}
           placeholder="ادخل الايميل" //dummy@abc.com
           placeholderTextColor="#8b9cb5"
           autoCapitalize="none"
           keyboardType="email-address"
           returnKeyType="next"           
           blurOnSubmit={false}
           onBlur={()=>setFieldTouched('email')}
         />
       </View>
       {touched.email && errors.email  && (
         <Text style={styles.errorTextStyle}>
           {errors.email}
         </Text>
       )}
       <View style={styles.SectionStyle}>
       <Icon name='lock' style={styles.styleUser}/>
         <TextInput
           style={styles.inputStyle}
           placeholder="ادخل كلمة السر" //12345
           placeholderTextColor="#8b9cb5"
           keyboardType="default"
           value={values.password}
           onChangeText={handleChange('password')}
           onSubmitEditing={Keyboard.dismiss}
           blurOnSubmit={false}
           secureTextEntry={true}
           returnKeyType="next"
           onBlur={()=>setFieldTouched('password')}
         />
       </View>
       {touched.password && errors.password &&  (
         <Text style={styles.errorTextStyle}>
           {errors.password}
         </Text>
       ) }
       <TouchableOpacity
         style={styles.buttonStyle}
         activeOpacity={0.5}
         onPress={handleSubmit}>
         <Text style={styles.buttonTextStyle}>تسجيل الدخول</Text>
       </TouchableOpacity>
       <Text
         style={styles.registerTextStyle}
         onPress={() => navigation.navigate('RegisterScreen')}>
           <Text
           style={{color:"#000"}}
           > ليس لديك حساب؟  </Text>
          التسجيل
       </Text>
     </KeyboardAvoidingView>
   </View>

</ScrollView>
</View>
      )}
   
    </Formik>

  );
};
export default LoginScreen;
 
const styles = StyleSheet.create({
 
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#ffb200',
    borderWidth: 0,
    color: '#FFFFFF',
    // borderColor: '#000',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    elevation: 5,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    paddingLeft: 27,
    paddingRight: 15,
    borderWidth: 1,
    backgroundColor:"#fff",
    borderRadius: 5,
    borderColor: '#8b9cb5',
    textAlign: 'right',
    elevation: 2,
    
  },
  registerTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  styleUser:{
    position:"absolute",
    fontSize:24,
  zIndex:99,
    color:"#ffb200",
  
    padding:5,
    paddingTop:9
  },
});
