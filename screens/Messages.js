import { 
    StyleSheet,
    Text, 
    View, 
    TextInput,
    Image
} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Messages = () => {

    const own = true;
    const notOwn = false;
    return (
        <View style={styles.con}>
            <View style={styles.messages}>
                <View style={own? styles.sent_message: styles.recieved_message}>
                    <Image style={styles.image} source={require("../assets/noAvatar.png")}/>
                    <Text style={styles.text}>السلام عليكم ورحمة الله وبركاته</Text>
                    <Text style={styles.time}>1 minute ago</Text>
                </View>
                <View style={notOwn? styles.sent_message: styles.recieved_message}>
                    <Image style={styles.image} source={require("../assets/noAvatar.png")}/>
                    <Text style={styles.text}>السلام عليكم ورحمة الله وبركاته</Text>
                    <Text style={styles.time}>1 minute ago</Text>
                </View>
            </View>
            <View style= {styles.send}>
                <Button style={styles.button}>sumit</Button>
                <TextInput 
                style={styles.input} 
                multiline = {true}
                numberOfLines = {4}
                />
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    con: {
        flex: 1,
        height: "100%",
        backgroundColor: "green"
    },
    messages: {
        height: "90%",
        backgroundColor: "yellow",
        // position: "relative"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        margin: 10
    },
    text: {
        fontSize: 20,
        // width: "70%",
        maxWidth: "70%",
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "red",
        margin: 5

    },
    time: {
        fontSize: 10,
        color: "grey",
        margin: 10
        
        
        // lineHeight: 50
    },
    send: {
        padding: 10,
        height: "10%",
        backgroundColor: "#97f197",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    // message: {
    //     // width: "70%",
    //     borderWidth: 3

    // },
    sent_message: {
        flexDirection: "row-reverse",
        alignItems: "center"
        // position: "absolute",

    },
    recieved_message: {
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 10,
        width: "90%",
        height: "90%",
        fontSize: 20,
        padding: 10
    },
    button: {
        width: "7%",
        height: "90%",
        backgroundColor: "orange",
        borderRadius: 0,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 5
    }

})