import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { pathUrl } from '../Config/env';
// import Conversations from '../components/Conversations'

const Chat = (props) => {

    // The current user or sender>>> (sanai3y or client)
    const [currentSender, setCurrentSender] = useState(null);
    // The current
    // The conversations of the current sender
    const [conversations, setConversations] = useState([]);
    // The token of the current sender
    const [token, setToken] = useState("");

    // Getting the conversations of the current sender
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`${pathUrl}/conversations/${currentSender._id}`);
                // console.log(res.data.data);
                setConversations([...res.data.data]);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, []);
    
    // Getting the data of the current sender
    useEffect(() => {
        // Getting token of the current sender from the AsyncStorage
        const getToken = async () => {
            let token = await AsyncStorage.getItem("token");
            setToken(token);
        }
        getToken();
        // fetching
        const getCurrentSender = async () => {
            const res = await axios.get(`${pathUrl}/client/user`, {headers: {Authorization: token}});
            // console.log(res.data.data);
            setCurrentSender({...res.data.data});
        }
        getCurrentSender();


        // const token = async () => {
        //     await AsyncStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjYzNWZlNDEzYmVkM2QxN2E2OGU3M2ZiZiIsImVtYWlsIjoibUBnbWFpbC5jb20iLCJpYXQiOjE2NjcyMjg2OTF9.XgGTAnZyEEl3wFUeoraAN1h4gpUGTO04zI7Zca9MwrY")
        // }
        // token();
    }, []);

    
    console.log(conversations);

    return (
        <View style={styles.con}>
            <Text>Chat</Text>
            <TouchableOpacity style={styles.conv} onPress={()=> {props.navigation.navigate("messages")}}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    con: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
        color: "#000",
    },
    conv: {
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 10

    },
    recieverName: {
        fontSize: 20,
        backgroundColor: "green",
    }

})