import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer  } from "@react-navigation/native"
import MainTabs from './navigation';

export default function App() {
  return (
  //   <View style={styles.container}>
  //  <Login></Login>
  //   </View>
    <NavigationContainer>
        <MainTabs />
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
