import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { get } from "lodash";
import { pathUrl } from "../Config/env";
import axios from "axios";

export default function TalpatSendingWithSanai3y() {
  
  const { params } = useRoute();
  const props = get(params, "proposal");
  const [ prop , setProp] = useState()
    useEffect(() => {
      setProp(props)
    
      
    }, [])
    
  function huntJob(i) {

    axios.put(`${pathUrl}/sanai3y/huntjob/${i}`).then((res) => {
  
        // console.log(res)
  
        // if(res.status == 200) {
        //   setFlagNoMore(true)
        // }
  
    })
  }
  console.log(prop );
  return (
    <FlatList
      data={prop}
      renderItem={({ item }) => (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              width: "90%",
              marginTop: 10,
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: "#EEE",
              elevation: 2,
            }}
          >
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#ffb200",
                paddingRight: 10,
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              {item.sanai3yId?.firstName + " " + item.sanai3yId?.lastName}
            </Text>

            <Text>{item.sanai3yProposal}</Text>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#99999963",
                  width: "20%",
                  textAlign: "center",
                  alignSelf: "flex-end",
                  borderRadius: 50,
                }}
              >
                {item.sanai3yId?.skills}
              </Text>

              <Text
                style={{
                  backgroundColor: "#ffb200",
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 8,
                  elevation: 5,
                  fontSize: 18,
                }}
                onPress={()=> huntJob(item._id)}
              >
                تاكيد
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}
