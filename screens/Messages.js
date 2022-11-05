import {
    StyleSheet,
    Text,
    View,
    TextInput,
    // Button,
    Image,
    ScrollView,
    FlatList
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'react-native-paper'
import axios from 'axios';
import { pathUrl } from '../Config/env';
// import TimeAgo from 'react-native-timeago';
import  {io}  from "socket.io-client";

const Messages = (props) => {

    // Getting The params
    const params = props.route.params;
    // The scrollRef
    const scrollViewRef = useRef();
    // The Socket
    const socket = useRef();

    // The user 
    const user = params.currentSender;
    console.log(user)


    // The Messages
    const [messages, setMessages] = useState([]);
    // The newMessage
    const [newMessage, setNewMessage] = useState("")
    // The online users
    const [onlineUsers, setOnlineUsers] = useState([])


    // Setting socket current
    useEffect(() => {
        socket.current = (io(pathUrl));
    }, [socket])


    // // Listening from srever
    // useEffect(() => {
    //     socket.current.emit("addUser", user?._id);
    //     socket.current.on("getUsers", (users) => {
    //         setOnlineUsers([...users])
    //         // console.log(users)


    //     })

    //     // Recieving the message
    //     socket.current.on("recieveMessage", ({ senderId, text }) => {
    //         // console.log("uuuuuuuuuuu")
    //         setRecievedMessage({
    //             conversationId: currentChat?._id,
    //             sender: senderId,
    //             text: text,
    //             createdAt: Date.now()
    //         });
    //     })

    // }, [currentChat, recievedMessage, user])
    // // console.log(onlineUsers)
    // useEffect(() => {
    //     if (recievedMessage && currentChat?.members.includes(recievedMessage.sender)) {

    //         setMessages((prev) => [...prev, recievedMessage]);
    //     }
    //     // recievedMessage &&
    //     // currentChat?.members.includes(recievedMessage.sender) &&
    //     // setMessages((prev) => [...prev, recievedMessage]);

    //     // console.log("hgtfc")
    // }, [currentChat, recievedMessage])


    // Fetching the messages of the current conversation
    useEffect(() => {
        const conversationId = params.conversation._id;
        const getMessages = async () => {
            const res = await axios.get(`${pathUrl}/messages/${conversationId}`);
            // console.log(res.data.data)
            setMessages([...res.data.data])
        }
        getMessages();
    }, []);


    // Sending New Message
    const sendNewMessage = async () => {
        const newMessageBody = {
            conversationId: params.conversation._id,
            sender: params.currentSender?._id,
            text: newMessage
        }

        // Emitting event using socket
        // socket.current.emit("sendMessage", {
        //     senderId: user?._id,
        //     recieverId: currentChat?.members.find((id) => id !== user?._id),
        //     // recieverId: currentReciever?._id,
        //     text: newMessage
        // })

        try {
            const res = await axios.post(`${pathUrl}/messages`, newMessageBody);
            console.log(res.data.data)
            setMessages([...messages, res.data.data])
        } catch (err) {
            console.log(err)
        }
    }

    // // On scrolling 
    // useEffect(() => {
    // scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    //     scrollViewRef.current?.scrollToEnd({ animated: false })
    // }, [messages])


    // console.log(messages);
    // console.log(newMessage);
    // const own = true;
    // const notOwn = false;
    return (
        <View style={styles.con}>

            <View style={styles.messages}>
                {/* <ScrollView ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
                // onContentSizeChange={() => {
                //     let offset = 0
                //     setInterval(() => {
                //         offset += 500
                //         scrollViewRef.current?.scrollTo({ x: 0, y: offset, animated: false })
                //     }, 5)
                // }}
                > */}
                    <FlatList
                        ref={scrollViewRef}
                        data={messages}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) =>

                            <View style={(item.sender === params.currentSender?._id) ? styles.sent_message : styles.recieved_message}>
                                <Image style={styles.image} source={{uri: params.currentReciever?.img}} />
                                <Text style={(item.sender === params.currentSender?._id) ? styles.sent_text : styles.recieved_text}>{item.text}</Text>
                                {/* <Text style={styles.time}><TimeAgo time={item.createdAt} interval={10000} /></Text> */}
                                <Text style={styles.time}>1 hour ago</Text>
                            </View>}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false, behavior: "smooth" })}
                    />
                {/* </ScrollView> */}
            </View>
            <View style={styles.send}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(input) => { setNewMessage(input) }}
                    value={newMessage}
                />
                <Button onPress={sendNewMessage} style={styles.button}>sumit</Button>
            </View>
        </View >
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
    sent_text: {
        fontSize: 20,
        // width: "70%",
        maxWidth: "70%",
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "red",
        margin: 5,
        backgroundColor: "#3838f0",
        color: "white"

    },
    recieved_text: {
        fontSize: 20,
        // width: "70%",
        maxWidth: "70%",
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "red",
        margin: 5,
        backgroundColor: "#9b9090",
        color: "white"


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
        flexDirection: "row",
        alignItems: "center",

        // position: "absolute",

    },
    recieved_message: {
        flexDirection: "row-reverse",
        alignItems: "center",

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