import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { get } from 'lodash'

export default function SendTalpFromClient() {
  const {params} = useRoute()
  const id = get(params, 'test')
  console.log(id)



  return (
    <View>
      <View style={{ borderWidth: 1, flexDirection:'column', alignContent:'center'}} >
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder={"ازاي تقدر تحل المشكلة"}
          style={{
            padding:10,
            height: 200,
            width: "80%" ,
            textAlignVertical: "top",
            backgroundColor: "red",
          }}
        />
      </View>
    </View>
  );
}