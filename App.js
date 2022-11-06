import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Index from "./screens/index";

export default function App() {

  return (
    <>
      <Provider store={store}>

        <Index />
      </Provider>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
