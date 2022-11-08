import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { pathUrl } from '../Config/env';
import NotFind from '../components/NotFind';
import { result } from 'lodash';
import { getDataSnai3y } from '../Redux/Slices/Snai3yReducer';
import Loader from '../components/Loder';
export default function ProfileSnai3y() {
  const [ loader , setLoader ] = useState(true)
  // Start Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // End Modal

  // Start Image in Modal
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState({});
 
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
  // console.log(image)
  // End Image in Modal

  // Data Sani3y

  const [snai3yJobs, setSnai3yJobs] = useState([])
  const dispatch = useDispatch()
  const datas = useSelector(state => state.Snai3yReducer.dataSani3y)
  // console.log(datas);
  useEffect(() => {
    // setDatas(data)
    setPhoto(datas.img)
    AsyncStorage.getItem('token').then((res) => {
      
      axios.get(`${pathUrl}/sanai3y/jobs`, { headers: { "Authorization": res } }).then((result) => {
        // console.log("ggg")
        if(result.status == 200){
          setSnai3yJobs(result.data.Data)
          setTimeout(() => {
            setLoader(false)
            
          }, 1100);
        }
      })
    })
    AsyncStorage.getItem('id').then(result => dispatch(getDataSnai3y(result)))

    return () =>{
      setLoader(true)
    }
  }, [])
  function sendImg() {
    AsyncStorage.getItem('token').then((token) => {
      console.log("first")
      const send =  async ()=> {
        try {
          const formdata = new FormData()
          formdata.append("sanai3yImage", {
            name: image,
            type: "image/*",
            uri:image
          })
          console.log(image)
          const res = await axios.post(`${pathUrl}/sanai3y/addimage`,formdata, { 
            headers: { 
              "Authorization": token,
              Accept:'application/json',
              "Content-Type":"multipart/form-data",
            } 
          })
          if ( res.status == 200){
            toggleModal()
            AsyncStorage.getItem('id').then(result => dispatch(getDataSnai3y(result)))
          }
        } catch (error) {
          console.log(error)
        }
      }
      send()
      
    })
  }
  return (
    <>
      {!loader &&<ScrollView style={{ backgroundColor: "#fff" }}>

        <View style={styles.parent}>
          <View style={styles.image}>
            <View style={styles.imgProfile}>
              <View>
                <Image source={{ uri: datas.img }}
                  style={{ width: 200, height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5, resizeMode: "cover" }}
                />
              </View>
              {/* Start Modal */}
              <View>
                <TouchableOpacity title="Show modal" onPress={toggleModal} >
                  <View style={{
                    justifyContent: "center", alignItems: "center", backgroundColor: "#eee",
                    padding: 5, borderBottomStartRadius: 5, borderBottomEndRadius: 5
                  }}>

                    <AntDesign name='camera' style={{ fontSize: 25 }} />
                  </View>
                </TouchableOpacity>

                <Modal isVisible={isModalVisible}>
                  <TouchableOpacity onPress={toggleModal} style={{ padding: 5, justifyContent: "center", alignItems: "flex-start" }}>
                    <AntDesign name='closecircleo' style={{ backgroundColor: "#fff", borderRadius: 50, fontSize: 24 }} />
                  </TouchableOpacity>
                  <View style={{ backgroundColor: "#eee", borderRadius: 5 }}>
                    <View style={{ alignItems: "center", flexDirection: "column" }}>
                      <View
                        style={{
                          alignItems: "center",
                          width: "50%",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            paddingVertical: 2,
                            marginTop: 10,
                            alignItems: "center",
                            borderRadius: 10,
                            marginBottom: 40,
                            flexDirection: "row",
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: '#999'
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
                      <View style={{ width: "90%", alignItems: "center" }}>
                        {image && (
                          <Image
                            source={{ uri: image }}
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                          />
                        )}
                      </View>

                      <TouchableOpacity style={[styles.button, { marginVertical: 20 }]}
                        onPress={sendImg}
                      >
                        <Text style={styles.buttonText}>إرسال</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                </Modal>
              </View>
              {/* End Modal */}


            </View>
            <View style={styles.userName}>

              <Text style={{ textAlign: "center", fontSize: 25 }}>{`${datas.firstName} ${datas.lastName}`}</Text>
            </View>
          </View>

          {/* Details user */}
          <View style={styles.parentList}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>{datas.phoneNumber}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name='phone' style={styles.iconCol} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>{datas.email}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name='email' style={styles.iconCol} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>العمر :  {datas.age}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name='pencil' style={styles.iconCol} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>{datas.skills}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name='tools' style={styles.iconCol} />
              </View>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShowWorks')}>
                <Text style={styles.buttonText}>معرض الأعمال</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Talbat */}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 25, borderBottomColor: "#eee", borderBottomWidth: 2 }}>الطلبات المؤكدة</Text>
          </View>

          {/* Card Style */}
          {snai3yJobs.map((item) =>
            <View style={{ flex: 1, justifyContent: "center" }}>
              {snai3yJobs.length > 0 && <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={{ width: "100%" }}>
                    <View style={styles.userDetails}>
                      <Image source={{ uri: item.cliclientData?.img }}
                        style={[styles.imageCard, { resizeMode: "contain" }]}
                      />
                      <View>
                        <Text style={[styles.text, { borderEndWidth: 10, borderStyle: "solid", borderEndColor: "red" }]}>
                          {`${item.clientData?.firstName} ${item.clientData?.lastName}`}
                        </Text>
                        <Text style={[styles.text, { fontSize: 12 }]}>
                          {item.clientData?.address}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardBody}>
                  {/* jop des */}
                  <View style={{ width: "50%", alignItems: "flex-start", padding: 10 }}>
                    <View>
                      <Text style={styles.text}>{item?.title}</Text>
                    </View>
                    <View>
                      <Text style={[styles.text, { marginTop: 10 }]}>{item?.description}</Text>
                    </View>
                  </View>
                  {/* img Jop */}
                  <View style={{ width: "50%" }}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" }}
                      style={{ height: 200, resizeMode: "contain" }} />
                  </View>
                </View>
                <View style={styles.cardTalp}>
                  <View style={styles.headerTalp}>
                    <Text style={styles.textHeaderTalp}>طلبك المقدم</Text>
                  </View>
                  {item.proposals.map((p) =>

                    <View>
                      <Text style={styles.textTalp}>
                        {p?.sanai3yProposal}
                      </Text>
                    </View>
                  )}
                </View>

              </View>}

            </View>
          )}
          {snai3yJobs.length == 0 && <NotFind data={"لاتوجد طلبات مؤكدة"} />}

        </View>
      </ScrollView>}
      

      {loader &&<Loader/>}
    </>

  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  // Start Secthion on style
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginTop: 20,

  },
  imgProfile: {
    marginBottom: 10,
  },
  userName: {
    justifyContent: "center",
    alignItems: "center",
  },
  // End Section one

  // Start Details Style
  parentList: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    marginTop: 20
  },
  row: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "80%",
    marginVertical: 10
  },
  col: {
    width: "50%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  textcol: {
    fontSize: 20,
    textAlign: "left"
  },
  iconCol: {
    fontSize: 20,
    color: "#fbb200"
  },
  // End Details Style

  // Button Style
  button: {
    backgroundColor: "#fbb200",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color: "#fff"
  },
  // Start Card Style
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#eee",
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    elevation: 5
  },
  cardHeader: {
    backgroundColor: "#eee", //test
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  userDetails: {
    alignItems: "center",
    flexDirection: "row",
  },
  imageCard: {
    width: 50,
    height: 50,
    marginStart: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    marginStart: 5
  },
  iconCard: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  childIcon: {
    color: "#fbb200",
    marginEnd: 20,
    fontSize: 20,
    alignItems: "baseline"
  },
  cardBody: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20
  },
  cardTalp: {
    flexDirection: "column",
    justifyContent: "center"
  },
  headerTalp: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textHeaderTalp: {
    backgroundColor: "#fff",
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  textTalp: {
    fontSize: 17,
    padding: 10
  }

})
