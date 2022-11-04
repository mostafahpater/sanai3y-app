import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'

export default function ProfileSnai3y() {
  return (

    <ScrollView style={{ backgroundColor: "#fff" }}>

      <View style={styles.parent}>
        <View style={styles.image}>
          <View style={styles.imgProfile}>
            <Image source={{uri:('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80')}}
              style={{ width: 200, height: 200, borderRadius: 5 ,resizeMode:"cover"}}
            />
          </View>

          <View style={styles.userName}>
            <Text style={{ textAlign: "center", fontSize: 25 }}>اسم الصنايعي</Text>

          </View>
        </View>

        {/* Details user */}
        <View style={styles.parentList}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textcol}>رقم الصنايعي</Text>
            </View>
            <View style={styles.col}>
              <Entypo name='phone' style={styles.iconCol} />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textcol}>البريد الالكتروني</Text>
            </View>
            <View style={styles.col}>
              <Entypo name='email' style={styles.iconCol} />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textcol}>العمر</Text>
            </View>
            <View style={styles.col}>
              <Entypo name='pencil' style={styles.iconCol} />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textcol}>الحرفة</Text>
            </View>
            <View style={styles.col}>
              <Entypo name='tools' style={styles.iconCol} />
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>معرض الأعمال</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Talbat */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 25, borderBottomColor: "#eee", borderBottomWidth: 2 }}>الطلبات المؤكدة</Text>
        </View>

        {/* Card Style */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ width: "50%" }}>
              <View style={styles.userDetails}>
                <Image source={{ uri: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" }}
                  style={[styles.imageCard , {resizeMode:"contain"}]}
                />
                <View>
                  <Text style={[styles.text, { borderEndWidth: 10, borderStyle: "solid", borderEndColor: "red" }]}>
                    الاسم
                  </Text>
                  <Text style={[styles.text, { fontSize: 12 }]}>
                    العنوان
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.iconCard}>
              <Entypo name='edit' style={styles.childIcon} />
              <FontAwesome name='remove' style={styles.childIcon} />

            </View>
          </View>
          <View style={styles.cardBody}>
            {/* jop des */}
            <View style={{ width: "50%", alignItems: "flex-start", padding: 10 }}>
              <View>
                <Text style={styles.text}>عنوان الوظيفة :</Text>
              </View>
              <View>
                <Text style={[styles.text, { marginTop: 10 }]}>الوصف :</Text>
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
            <View>
              <Text style={styles.textTalp}>
                sadma[pfa;c,a[ps,ca[spckas[pmcclxzcm;lxzmc;lxzmc;lzxncjlkxznc lkxzhcklzxbc zxjkchgkzxcbj zxkjlcgzxklcb xzjcbxzkcbzx kjcbxzkjcgbxzkjsdfmsdf;ldsnflksdfnsdlkfbsd lkugbD:fljdf;lnsdlksdnsdkljvbsdvkjsd vbslkdugvbsdkjvbsd lkvgusbdlkjvbs dlkvuhsgdbkvjdsbvkusdgvbksdjvb]]]]
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 20
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
  },
  iconCol: {
    fontSize: 20,
    color: "#fbb200"
  },
  // End Details Style

  // Button Style
  button:{
    backgroundColor:"#fbb200",
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:5,
  },
  buttonText:{
    fontSize:25,
    color:"#fff"
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
    borderRadius:5,
    elevation:5
  },
  cardHeader: {
    backgroundColor: "#eee", //test
  borderRadius:5,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    marginStart: 10
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
    flexDirection:"column",
    justifyContent:"center"
  }, 
  headerTalp: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    paddingBottom: 5,
    justifyContent:"center",
    alignItems:"center"
  },
  textHeaderTalp:{
    backgroundColor:"#fff",
    fontSize: 25,
    textAlign:"center",
    paddingVertical:5,
    paddingHorizontal:15
  },
  textTalp:{
    fontSize:17,
    padding:10
  }

})
