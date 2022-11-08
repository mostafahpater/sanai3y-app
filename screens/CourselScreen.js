import { View, StyleSheet, FlatList, Text, Animated } from "react-native";
import DumyDatat from "./DumyDatat";
import { useState, useRef } from "react";
import Coursel from "./CourselScreen";

import Index from "./index";

export default function CuorselItem() {
  const [courentIndex, setCuorentIndex] = useState(0);
  const scrolX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={DumyDatat}
          renderItem={({ item }) => <Coursel item={item} />}
          horizontal
          showsVerticalScrollIndicator
          bounces={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
