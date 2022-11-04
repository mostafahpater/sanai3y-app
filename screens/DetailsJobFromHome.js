import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { get } from 'lodash'

export default function DetailsJobFromHome() {
    const {params} = useRoute()
    const data = get(params, 'test')
    console.log(data)
  return (
    <View>
      <Text>DetailsJobFromHome</Text>
    </View>
  )
}