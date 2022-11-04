import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Conversations = () => {
    return (
        // <>
            <View style={styles.con}>

                <View style={styles.covn}>
                    <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                    <Text style={styles.recieverName}>محمد</Text>
                </View>
            </View>
        // </>
    )
}

export default Conversations

const styles = StyleSheet.create({
    con: {
        flex: 1,
        padding: 40
    },
    conv: {
        // flex: 1,
        
        flexDirection: "row",
        // justifyContent: "flex-end"

    },
    image: {
        padding: 40,
        width: 29,
        height: 40,
        // borderRadius: 40,
        // flex: 2,
        backgroundColor: "red",
        margin: 20

    },
    recieverName: {
        fontSize: 20,
        // flex: 3,
        backgroundColor: "green",
        // width: "60%",

    }
})