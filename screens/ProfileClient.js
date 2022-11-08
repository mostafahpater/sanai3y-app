import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pathUrl } from "../Config/env";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getDataClient } from '../Redux/Slices/ClientReducer';
import Loader from "../components/Loder";
export default function ProfileClient() {
  const [loader, setLoader] = useState(true)
  // Start Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // End Modal

  // Start Image in Modal
  const [image, setImage] = useState("");
  const [jopData, setJopData] = useState([]);

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
  // End Image in Modal

  // Start Fetch Data Client

  let jobs = useSelector(state => state.ClientReducer.jops)
  useEffect(() => {

    setJopData(jobs)

    // console.log(jopData.map(i => console.log(i.title)))
  }, []);
  // let [data, setData] = useState({})
  // let [jobs , setJops] = useState([])
  let [id, setId] = useState("");
  const dispatch = useDispatch()
  // Get Jobs The Client
  let data = useSelector(state => state.ClientReducer.clintdata)
  let getAllJobs = useSelector(state => state.ClientReducer.jops)
  // const [getAllJobs, setGetAllJob] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1100);
    AsyncStorage.getItem('id').then(result => dispatch(getDataClient(result)))
    return () => {
      setLoader(true)
    }
  }, [])

  // Dellet Job With Client
  function sendIdJob(id) {
    AsyncStorage.getItem("token").then((res) => {


      axios
        .put(
          `${pathUrl}/jobs/delete/${id}`,
          {},
          { headers: { Authorization: res } }
        )
        .then((res) => {
          // Logic  
          if (res.status == 200) {
            // var arr = getAllJobs.filter((item) => item._id != id);
            // setGetAllJob([...arr]);
            AsyncStorage.getItem('id').then(result => dispatch(getDataClient(result)))
          }

        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  // Add image Client 

  function addimage() {
    const formdata = new FormData()
    formdata.append("clientImage", {
      name: image,
      type: "image/*",
      uri: image
    })
    AsyncStorage.getItem("token").then((tok) => {

      const sendImg = async () => {

        try {
          let res = await axios.post(`${pathUrl}/client/addimage`, formdata, {
            headers: {
              "Authorization": tok,
              Accept: 'application/json',
              "Content-Type": "multipart/form-data",
            }

          })
          console.log("first")
          if (res.status == 200) {
            toggleModal()
            AsyncStorage.getItem('id').then(result => dispatch(getDataClient(result)))
          }
        } catch (error) {
          console.log(error)
        }


      }

      sendImg()



    })

  }

  return (
    <>
      {!loader && <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.parent}>
          <View style={styles.image}>
            <View style={styles.imgProfile}>
              <View>
                <Image
                  source={{ uri: data?.img }}
                  style={{
                    width: 200,
                    height: 200,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    resizeMode: "cover",
                  }}
                />
              </View>
              {/* Start Modal */}
              <View>
                <TouchableOpacity title="Show modal" onPress={toggleModal}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#eee",
                      padding: 5,
                      borderBottomStartRadius: 5,
                      borderBottomEndRadius: 5,
                    }}
                  >
                    <AntDesign name="camera" style={{ fontSize: 25 }} />
                  </View>
                </TouchableOpacity>

                <Modal isVisible={isModalVisible}>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={{
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <AntDesign
                      name="closecircleo"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 50,
                        fontSize: 24,
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{ backgroundColor: "#eee", borderRadius: 5 }}>
                    <View
                      style={{ alignItems: "center", flexDirection: "column" }}
                    >
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
                            borderColor: "#999",
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
                              style={{
                                padding: 10,
                                fontSize: 14,
                                fontWeight: "bold",
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: "90%", alignItems: "center" }}>
                        {image && (
                          <Image
                            source={{ uri: image }}
                            style={{
                              width: "100%",
                              height: 200,
                              resizeMode: "cover",
                            }}
                          />
                        )}
                      </View>

                      <TouchableOpacity
                        style={[styles.button, { marginVertical: 20 }]}
                      >
                        <Text style={styles.buttonText} onPress={addimage}>إضافة</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
              {/* End Modal */}
            </View>

            <View style={styles.userName}>
              <Text
                style={{ textAlign: "center", fontSize: 25 }}
              >{`${data.firstName} ${data.lastName}`}</Text>
            </View>
          </View>

          {/* Details user */}
          <View style={styles.parentList}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>{data.phoneNumber}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name="phone" style={styles.iconCol} />
              </View>
            </View>

            {/* Email */}
            <View style={styles.row}>
              <View
                style={[styles.col, { width: "60%", alignItems: "flex-start" }]}
              >
                <Text style={styles.textcol}>{data.email}</Text>
              </View>
              <View style={[styles.col, { width: "40%" }]}>
                <Entypo name="email" style={styles.iconCol} />
              </View>
            </View>

            {/* Age */}
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.textcol}>{`العمر : ${data.age}`}</Text>
              </View>
              <View style={styles.col}>
                <Entypo name="pencil" style={styles.iconCol} />
              </View>
            </View>
          </View>

          {/* Talbat */}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{
                fontSize: 25,
                borderBottomColor: "#eee",
                borderBottomWidth: 2,
              }}
            >
              المنشورات
            </Text>
          </View>

          {/* Card Style And Get All Jobs  */}
          {getAllJobs.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.cardHeader}>
                <View style={{ width: "10%" }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate.navigate("editeJobs", { idJob: item._id })
                    }
                  >
                    <Entypo name="edit" style={styles.childIcon} />
                  </TouchableOpacity>
                </View>

                <View style={{ width: "10%" }}>
                  <TouchableOpacity onPress={() => sendIdJob(item._id)}>
                    <FontAwesome name="remove" style={styles.childIcon} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardBody}>
                {/* jop des */}
                <View style={{ flex: 1, alignItems: "flex-start", padding: 10 }}>

                  <View style={{ borderLeftWidth: 1, borderLeftColor: '#ffb200' }}>
                    <Text style={[styles.text, { fontSize: 14 }]}>{item.title}</Text>
                  </View>

                  <View>
                    <Text style={[styles.text, { marginTop: 2, fontSize: 15, color: '#888' }]}> {item.city}
                    </Text>
                  </View>

                  <View style={{ paddingHorizontal: 5, borderBottomWidth: 1, borderBottomColor: '#FFF', borderTopWidth: 1, marginTop: 10, borderTopColor: '#FFF' }}>
                    <Text style={[styles.text, { marginTop: 10, color: '#555', paddingBottom: 20 }]}> {item?.description}
                    </Text>
                  </View>


                </View>
              </View>

              <View style={styles.parentButton}>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() =>
                      navigate.navigate("talpatSending", {
                        proposal: item.proposals,
                      })
                    }
                  >
                    الطلبات المقدمة
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          ))}
        </View>
      </ScrollView>}


      {loader && <Loader />}
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  // Start Secthion on style
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    marginTop: 20,
  },
  row: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
  },
  col: {
    width: "50%",
    borderBottomWidth: 2,
    borderBottomColor: "#EEE",
    paddingBottom: 10,
  },
  textcol: {
    fontSize: 15,
    textAlign: "left"
  },
  iconCol: {
    fontSize: 20,
    color: "#fbb200",
  },
  // End Details Style

  // Start Card Style
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "90%",
    backgroundColor: "#eee",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 5,
  },
  cardHeader: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    elevation: 1
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
    fontSize: 16,
    marginStart: 5,
  },

  childIcon: {
    color: "#fbb200",
    textAlign: "center",
    fontSize: 25,
  },
  cardBody: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    // marginBottom: 20,
  },
  parentButton: {
    flex: 1,
    marginBottom: 20,
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: "flex-end",
    marginRight: 15
  },
  // Button Style
  button: {
    // flex:1,
    // width: "50%",
    // alignItems: "center",
    // flexDirection: "c",
    justifyContent: "flex-start",
    backgroundColor: "#fbb200",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});
